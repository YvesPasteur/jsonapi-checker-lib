'use strict';

var attributes = {
  isObject: {
    description: 'The value of the attributes key MUST be an object (an "attributes object").',
    requirementLevel: 'MUST',
    checked: true
  },
  restrictMemberName: {
    description: 'any object that constitutes or is contained in an attribute MUST NOT contain a relationships or ' +
      'links member, as those members are reserved by this specification for future use.',
    requirementLevel: 'MUST',
    checked: true
  },
  containAnyValidJsonValue: {
    description: 'Attributes MAY contain any valid JSON value',
    requirementLevel: 'MAY',
    checked: true
  },
  noForeignKey: {
    description: 'Although has-one foreign keys (e.g. author_id) are often stored internally alongside other information ' +
      'to be represented in a resource object, these keys SHOULD NOT appear as attributes.',
    requirementLevel: 'SHOULD NOT',
    checked: false
  }
};

module.exports = attributes;
