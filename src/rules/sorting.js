'use strict';

var sorting = {
  supportSorting: {
    description: 'A server MAY choose to support requests to sort resource collections according to one or more criteria ("sort fields").',
    requirementLevel: 'MAY',
    checked: false
  },
  queryParameter: {
    description: 'An endpoint MAY support requests to sort the primary data with a sort query parameter.',
    requirementLevel: 'MAY',
    checked: true
  },
  queryParameterValue: {
    description: 'The value for sort MUST represent sort fields.',
    requirementLevel: 'MUST',
    checked: false
  },
  multipleSortFields: {
    description: 'An endpoint MAY support multiple sort fields by allowing comma-separated (U+002C COMMA, ",") sort fields.',
    requirementLevel: 'MAY',
    checked: false
  },
  applianceOrder: {
    description: 'Sort fields SHOULD be applied in the order specified.',
    requirementLevel: 'SHOULD',
    checked: false
  },
  ascendingSortDirection: {
    description: 'The sort order for each sort field MUST be ascending unless it is prefixed with a minus (U+002D HYPHEN-MINUS, "-")',
    requirementLevel: 'MUST',
    checked: false
  },
  descendingSortDirection: {
    description: 'The sort order if it is prefixed with a minus (U+002D HYPHEN-MINUS, "-") MUST be descending.',
    requirementLevel: 'MUST',
    checked: false
  },
  unsupportedSort: {
    description: 'If the server does not support sorting as specified in the query parameter sort, it MUST return 400 Bad Request.',
    requirementLevel: 'MUST',
    checked: false
  },
  orderedResponse: {
    description: 'If sorting is supported by the server and requested by the client via query parameter sort, ' +
      'the server MUST return elements of the top-level data array of the response ordered according to the criteria specified.',
    requirementLevel: 'MUST',
    checked: false
  },
  defaultSorting: {
    description: 'The server MAY apply default sorting rules to top-level data if request parameter sort is not specified.',
    requirementLevel: 'MAY',
    checked: false
  }
};

module.exports = sorting;
