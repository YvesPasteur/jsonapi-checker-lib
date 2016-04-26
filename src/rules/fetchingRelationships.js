'use strict';

var fetchingRelationships = {
  supportFetchingLinkUrl: {
    description: 'A server MUST support fetching relationship data for every relationship URL provided as a self link as part ' +
      'of a relationship\'s links object.',
    requirementLevel: 'MUST',
    checked: false
  },
  successfulResponseStatus: {
    description: 'A server MUST respond to a successful request to fetch a relationship with a 200 OK response.',
    requirementLevel: 'MUST',
    checked: false
  },
  successfulResponseData: {
    description: 'The primary data in the response document MUST match the appropriate value for resource linkage, as described ' +
      'above for relationship objects.',
    requirementLevel: 'MUST',
    checked: false
  },
  selfAndRelatedLinks: {
    description: 'The top-level links object MAY contain self and related links, as described above for relationship objects.',
    requirementLevel: 'MAY',
    checked: false
  },
  notExistingRelationshipsStatus: {
    description: 'A server MUST return 404 Not Found when processing a request to fetch a relationship link URL that does not exist.',
    requirementLevel: 'MUST',
    checked: false
  },
  emptyRelationshipsResponse: {
    description: 'If a relationship link URL exists but the relationship is empty, then 200 OK MUST be returned, as described above.',
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
  }
};

module.exports = fetchingRelationships;
