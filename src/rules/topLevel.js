'use strict';

var topLevel = {
  isObject: {
    description: 'A JSON object MUST be at the root of every JSON API request and response containing data. ' +
      'This object defines a document\'s "top level".',
    requirementLevel: 'MUST',
    checked: true
  },
  hasAtLeastOneOf: {
    description: 'A document MUST contain at least one of the following top-level members:\n' +
      'data: the document\'s "primary data" \n' +
      'errors: an array of error objects\n' +
      'meta: a meta object that contains non-standard meta-information.',
    requirementLevel: 'MUST',
    checked: true
  },
  dataAndErrorsDoesNotCoexist: {
    description: 'The members data and errors MUST NOT coexist in the same document.',
    requirementLevel: 'MUST',
    checked: true
  },
  allowedMembers: {
    description: 'A document MAY contain any of these top-level members:\n' +
      'jsonapi: an object describing the server\'s implementation\n' +
      'links: a links object related to the primary data.\n' +
      'included: an array of resource objects that are related to the primary data and/or each other ("included resources").',
    requirementLevel: 'MAY',
    checked: true
  },
  noIncludedWithoutPrimaryData: {
    description: 'If a document does not contain a top-level data key, the included member MUST NOT be present either.',
    requirementLevel: 'MUST NOT',
    checked: true
  },
  topLevelLinks: {
    description: 'The top-level links object MAY contain the following members:\n' +
      'self: the link that generated the current response document.\n' +
      'related: a related resource link when the primary data represents a resource relationship.\n' +
      'pagination links for the primary data.',
    requirementLevel: 'MAY',
    checked: false
  }
};

module.exports = topLevel;
