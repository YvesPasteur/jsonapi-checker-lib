'use strict';

var resourceIdentifier = {
  hasIdAndType: {
    description: 'A "resource identifier object" MUST contain type and id members.',
    requirementLevel: 'MUST',
    checked: true
  },
  allowMeta: {
    description: 'A "resource identifier object" MAY also include a meta member, ' +
      'whose value is a meta object that contains non-standard meta-information.',
    requirementLevel: 'MAY',
    checked: true
  }
};

module.exports = resourceIdentifier;
