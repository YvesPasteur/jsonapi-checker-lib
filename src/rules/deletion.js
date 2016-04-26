'use strict';

var deletion = {
  allowed: {
    description: 'It MAY also allow existing resources to be deleted.',
    requirementLevel: 'MAY',
    checked: false
  },
  accepted: {
    description: 'If a deletion request has been accepted for processing, but the processing has not been completed by the time ' +
      'the server responds, the server MUST return a 202 Accepted status code.',
    requirementLevel: 'MUST',
    checked: false
  },
  noContent: {
    description: 'A server MUST return a 204 No Content status code if a deletion request is successful and no content is returned.',
    requirementLevel: 'MUST',
    checked: false
  },
  okResponse: {
    description: 'A server MUST return a 200 OK status code if a deletion request is successful and the server responds ' +
      'with only top-level meta data.',
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

module.exports = deletion;
