'use strict';

var sparseFieldset = {
  specificFields: {
    description: 'A client MAY request that an endpoint return only specific fields ' +
      'in the response on a per-type basis by including a fields[TYPE] parameter.',
    requirementLevel: 'MAY',
    checked: true
  },
  commaSeparatedList: {
    description: 'The value of the fields parameter MUST be a comma-separated (U+002C COMMA, ",") ' +
      'list that refers to the name(s) of the fields to be returned.',
    requirementLevel: 'MUST',
    checked: false
  },
  noAdditionalField: {
    description: 'If a client requests a restricted set of fields for a given resource type, ' +
      'an endpoint MUST NOT include additional fields in resource objects of that type in its response.',
    requirementLevel: 'MUST NOT',
    checked: false
  }
};

module.exports = sparseFieldset;
