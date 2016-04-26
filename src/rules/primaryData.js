'use strict';

var primaryData = {
  isObjectOrArray: {
    description: 'Primary data MUST be either:\n' +
      'a single resource object, a single resource identifier object, or null, for requests that target single resources\n' +
      'an array of resource objects, an array of resource identifier objects, or an empty array ([]), for requests that target resource collections',
    requirementLevel: 'MUST',
    checked: true
  }
};

module.exports = primaryData;
