'use strict';

var jsonapi = {
  isAllowed: {
    description: 'A JSON API document MAY include information about its implementation under a top level jsonapi member',
    requirementLevel: 'MAY',
    checked: false
  },
  isObject: {
    description: 'If present, the value of the jsonapi member MUST be an object (a "jsonapi object").',
    requirementLevel: 'MUST',
    checked: false
  },
  versionMember: {
    description: 'The jsonapi object MAY contain a version member whose value is a string indicating the highest JSON API version supported.',
    requirementLevel: 'MAY',
    checked: false
  },
  metaMember: {
    description: 'This object MAY also contain a meta member, whose value is a meta object that contains non-standard meta-information.',
    requirementLevel: 'MAY',
    checked: false
  },
  defaultVersion: {
    description: 'If the version member is not present, clients SHOULD assume the server implements at least version 1.0 of the specification.',
    requirementLevel: 'SHOULD',
    checked: false
  }
};

module.exports = jsonapi;
