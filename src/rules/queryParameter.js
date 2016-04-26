'use strict';

var queryParameter = {
  adhereMemberName: {
    description: 'Implementation specific query parameters MUST adhere to the same constraints as member names',
    requirementLevel: 'MUST',
    checked: false
  },
  atLeastOneNonLowerAlphaCharacter: {
    description: 'they MUST contain at least one non a-z character (U+0061 to U+007A)',
    requirementLevel: 'MUST',
    checked: false
  },
  recommendedCharacters: {
    description: 'It is RECOMMENDED that a U+002D HYPHEN-MINUS, "-", U+005F LOW LINE, "_", or capital letter is used (e.g. camelCasing).',
    requirementLevel: 'RECOMMENDED',
    checked: false
  },
  badRequest: {
    description: 'If a server encounters a query parameter that does not follow the naming conventions above, ' +
      'and the server does not know how to process it as a query parameter from this specification, it MUST return 400 Bad Request.',
    requirementLevel: 'MUST',
    checked: false
  }
};

module.exports = queryParameter;
