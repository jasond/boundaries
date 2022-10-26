const intentMapping = require('./fileIntentMapping/fileIntentMapping');

const FileAbstraction = () => {
  const readMany = ({ intents, onSuccess }) => {
    const results = intents.map(intent => intentMapping[intent]());
    onSuccess(results);
  };

  const write = ({
    intent, params, onSuccess, onFailure,
  }) => {
    try {
      onSuccess(intentMapping[intent](params));
    } catch (error) {
      onFailure(error);
    }
  };

  return { readMany, write };
};

module.exports = FileAbstraction;
