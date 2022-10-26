/**
 * @param {Promise<Response>} fetchedPromise
 * @param {(payload: any) => any} onFulfilled
 * @param {(error: String) => any} onRejected
 */
const handleResponse = async (fetchedPromise, onFulfilled, onRejected) => {
  /** @type {Response} response */
  let response;
  let payload;

  try {
    response = await fetchedPromise;
  } catch (error) {
    onRejected(error.message);
    return;
  }

  if (response.status >= 400) {
    onRejected(response.statusText);
    return;
  }

  try {
    payload = await response.json();
  } catch (error) {
    onRejected(error.message);
    return;
  }

  onFulfilled(payload);
};

export default handleResponse;
