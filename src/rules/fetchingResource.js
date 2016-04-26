'use strict';

var fetchingResource = {
  supportFetchingLinkUrl: {
    description: 'A server MUST support fetching resource data for every URL provided as:\n' +
      'a self link as part of the top-level links object\n' +
      'a self link as part of a resource-level links object\n' +
      'a related link as part of a relationship-level links object',
    requirementLevel: 'MUST',
    checked: false
  },
  successfulResponseStatus: {
    description: 'A server MUST respond to a successful request to fetch an individual resource or resource collection with a 200 OK response.',
    requirementLevel: 'MUST',
    checked: false
  },
  successfulResponseData: {
    description: 'A server MUST respond to a successful request to fetch a resource collection with an array of resource objects or ' +
      'an empty array ([]) as the response document\'s primary data.',
    requirementLevel: 'MUST',
    checked: false
  },
  successfulIndividualResourceResponseData: {
    description: 'A server MUST respond to a successful request to fetch an individual resource with a resource object or null provided ' +
      'as the response document\'s primary data.\n' +
      'null is only an appropriate response when the requested URL is one that might correspond to a single resource, but doesn\'t currently.',
    requirementLevel: 'MUST',
    checked: false
  },
  notExistingResourceResponseStatus: {
    description: 'A server MUST respond with 404 Not Found when processing a request to fetch a single resource that does not exist, ' +
      'except when the request warrants a 200 OK response with null as the primary data (as described above).',
    requirementLevel: 'MUST',
    checked: false
  },
  otherStatus: {
    description: 'A server MAY respond with other HTTP status codes.',
    requirementLevel: 'MAY',
    checked: false
  },
  errorResponse: {
    description: 'A server MAY include error details with error responses.',
    requirementLevel: 'MAY',
    checked: false
  },
  serverResponseAndHttpSemantics: {
    description: 'A server MUST prepare responses in accordance with HTTP semantics.',
    requirementLevel: 'MUST',
    checked: false
  },
  clientResponseAndHttpSemantics: {
    description: 'A client MUST interpret responses, in accordance with HTTP semantics.',
    requirementLevel: 'MUST',
    checked: false
  }
};

module.exports = fetchingResource;
