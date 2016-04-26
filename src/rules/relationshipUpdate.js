'use strict';

var relationshipUpdate = {
  toOneAllowed: {
    description: 'A server MUST respond to PATCH requests to a URL from a to-one relationship link as described below.',
    requirementLevel: 'MUST',
    checked: false
  },
  toOneTopLevel: {
    description: 'The PATCH request MUST include a top-level member named data containing one of:' +
      'a resource identifier object corresponding to the new related resource.' +
      'null, to remove the relationship.',
    requirementLevel: 'MUST',
    checked: false
  },
  toOneSuccessfulResponse: {
    description: 'If the relationship is updated successfully then the server MUST return a successful response.',
    requirementLevel: 'MUST',
    checked: false
  },
  toManyAllowed: {
    description: 'A server MUST respond to PATCH, POST, and DELETE requests to a URL from a to-many relationship link as described below.',
    requirementLevel: 'MUST',
    checked: false
  },
  toManyBody: {
    description: 'For all request types, the body MUST contain a data member whose value is an empty array ' +
      'or an array of resource identifier objects.',
    requirementLevel: 'MUST',
    checked: false
  },
  toManyAllowedResponses: {
    description: 'If a client makes a PATCH request to a URL from a to-many relationship link, the server MUST either completely ' +
      'replace every member of the relationship, return an appropriate error response if some resources can not be found or accessed, ' +
      'or return a 403 Forbidden response if complete replacement is not allowed by the server.',
    requirementLevel: 'MUST',
    checked: false
  },
  toManyAddMembers: {
    description: 'If a client makes a POST request to a URL from a relationship link, the server MUST add the specified members' +
      'to the relationship unless they are already present.',
    requirementLevel: 'MUST',
    checked: false
  },
  toManyExistingIdAndType: {
    description: ' If a given type and id is already in the relationship, the server MUST NOT add it again.',
    requirementLevel: 'MUST NOT',
    checked: false
  },
  toManySuccessfulResponse: {
    description: 'If all of the specified resources can be added to, or are already present in, the relationship ' +
      'then the server MUST return a successful response.',
    requirementLevel: 'MUST',
    checked: false
  },
  toManyDelete: {
    description: 'If the client makes a DELETE request to a URL from a relationship link the server MUST delete the specified members ' +
      'from the relationship or return a 403 Forbidden response.',
    requirementLevel: 'MUST',
    checked: false
  },
  toManyDeleteSuccessfulResponse: {
    description: 'If all of the specified resources are able to be removed from, or are already missing from, the relationship ' +
      'then the server MUST return a successful response.',
    requirementLevel: 'MUST',
    checked: false
  },
  accept: {
    description: 'If a relationship update request has been accepted for processing, but the processing has not been completed by the time ' +
      'the server responds, the server MUST return a 202 Accepted status code.',
    requirementLevel: 'MUST',
    checked: false
  },
  noContentResponse: {
    description: 'A server MUST return a 204 No Content status code if an update is successful and the representation of the resource ' +
      'in the request matches the result.',
    requirementLevel: 'MUST',
    checked: false
  },
  changedAcceptedResponse: {
    description: 'If a server accepts an update but also changes the targeted relationship(s) in other ways than those specified by the request, ' +
      'it MUST return a 200 OK response.',
    requirementLevel: 'MUST',
    checked: false
  },
  changedAcceptedResponseBody: {
    description: 'The response document MUST include a representation of the updated relationship(s).',
    requirementLevel: 'MUST',
    checked: false
  },
  upToDateOkResponseStatus: {
    description: 'A server MUST return a 200 OK status code if an update is successful, the client\'s current data remain up to date, ' +
      'and the server responds only with top-level meta data.',
    requirementLevel: 'MUST',
    checked: false
  },
  upToDateOkResponseBody: {
    description: 'if an update is successful, the client\'s current data remain up to date, and the server responds only with top-level meta data, ' +
      'the server MUST NOT include a representation of the updated relationship(s).',
    requirementLevel: 'MUST NOT',
    checked: false
  },
  forbidden: {
    description: 'A server MUST return 403 Forbidden in response to an unsupported request to update a relationship.',
    requirementLevel: 'MUST',
    checked: false
  },
  otherHttpStatusCode: {
    description: 'A server MAY respond with other HTTP status codes.',
    requirementLevel: 'MAY',
    checked: false
  },
  errorDetails: {
    description: 'A server MAY include error details with error responses.',
    requirementLevel: 'MAY',
    checked: false
  },
  serverHttpSemantics: {
    description: 'A server MUST prepare responses',
    requirementLevel: 'MUST',
    checked: false
  },
  clientHttpSemantics: {
    description: 'A client MUST interpret responses in accordance with HTTP semantics.',
    requirementLevel: 'MUST',
    checked: false
  }
};

module.exports = relationshipUpdate;
