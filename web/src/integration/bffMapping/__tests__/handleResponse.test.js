import handleResponse from '../handleResponse';

const fail = () => {
  throw Error('Unexpected call');
};

describe('handleResponse', () => {

  describe('when a good response is received', () => {
    it('should fulfill', (done) => {
      const goodResponsePromise = Promise.resolve({
        json: () => {},
        status: 200,
      });

      handleResponse(goodResponsePromise, done, fail);
    });
  });

  describe('when response HTTP status code is >= 400', () => {
    it('should handle 400', (done) => {
      const httpErrorCodePromise = Promise.resolve({
        status: 400,
      });

      handleResponse(httpErrorCodePromise, fail, done);
    });
  });


});
