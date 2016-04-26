'use strict';

var resourceLinkage = {
  representation: {
    description: 'Resource linkage MUST be represented as one of the following:\n' +
      'null for empty to-one relationships.\n' +
      'an empty array ([]) for empty to-many relationships.\n' +
      'a single resource identifier object for non-empty to-one relationships.\n' +
      'an array of resource identifier objects for non-empty to-many relationships.',
    requirementLevel: 'MUST',
    checked: true
  }
};

module.exports = resourceLinkage;
