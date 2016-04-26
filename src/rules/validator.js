'use strict';

var rules = require('./index').list;

module.exports = function(_) {
  const validator = function (ruleKey, validationFunction, addToPath) {
    var error;
    var messages;
    const rule = _.get(rules, ruleKey);

    const getMessages = function (currentError) {
      messages = rule ? [rule.description] : [];

      // condition to check if the error is one thrown by us
      if (!_.isUndefined(currentError.path)) {
        messages.push(currentError.message);
      }

      return messages;
    };
    const getPath = function (currentError) {
      var path = '';
      if (currentError.path) {
        path = currentError.path;
      }
      if (addToPath !== null && !_.isUndefined(addToPath)) {
        if (_.isInteger(addToPath)) {
          path = '[' + addToPath + ']' + (path ? '.' : '') + path;
        } else {
          const addPointPrefix = path && path.substr(0, 1) !== '[';
          path = addToPath + (addPointPrefix ? '.' : '') + path;
        }
      }

      return path;
    };
    const getRules = function (currentError) {
      var rulesList = [];
      if (currentError.rules) {
        rulesList = currentError.rules;
      }
      if (rule) {
        rule.id = ruleKey;
        rulesList.unshift(rule);
      }

      return rulesList;
    };

    try {
      validationFunction();
    } catch (e) {
      messages = getMessages(e);

      error = new Error(messages.join('\n'));
      error.path = getPath(e);
      error.rules = getRules(e);

      throw error;
    }
  };

  validator.forEach = function(iteree, validationFunction) {
    _.forEach(iteree, function (value, key) {
      validator(
        null,
        () => validationFunction(value, key),
        key
      );
    });
  };

  return validator;
};
