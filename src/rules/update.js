'use strict';

var update = {
  allowed: {
    description: 'It MAY also allow existing resources to be modified.',
    requirementLevel: 'MAY',
    checked: false
  },
  transaction: {
    description: 'A request MUST completely succeed or fail (in a single "transaction"). No partial updates are allowed.',
    requirementLevel: 'MUST',
    checked: false
  },
  singleObject: {
    description: 'The PATCH request MUST include a single resource object as primary data.',
    requirementLevel: 'MUST',
    checked: false
  },
  typeAndId: {
    description: 'The resource object MUST contain type and id members.',
    requirementLevel: 'MUST',
    checked: false
  },
  includedAttributes: {
    description: 'Any or all of a resource\'s attributes MAY be included in the resource object included in a PATCH request.',
    requirementLevel: 'MAY',
    checked: false
  },
  missingAttributes: {
    description: 'If a request does not include all of the attributes for a resource, ' +
      'the server MUST interpret the missing attributes as if they were included with their current values.',
    requirementLevel: 'MUST',
    checked: false
  },
  missingAttributesBis: {
    description: 'The server MUST NOT interpret missing attributes as null values.',
    requirementLevel: 'MUST NOT',
    checked: false
  },
  relationshipResource: {
    description: 'Any or all of a resource\'s relationships MAY be included in the resource object included in a PATCH request.',
    requirementLevel: 'MAY',
    checked: false
  },
  missingRelationship: {
    description: 'If a request does not include all of the relationships for a resource, ' +
      'the server MUST interpret the missing relationships as if they were included with their current values.',
    requirementLevel: 'MUST',
    checked: false
  },
  missingRelationshipBis: {
    description: 'It MUST NOT interpret them as null or empty values.',
    requirementLevel: 'MUST NOT',
    checked: false
  },
  replaceRelationship: {
    description: 'If a relationship is provided in the relationships member of a resource object in a PATCH request, ' +
      'its value MUST be a relationship object with a data member. The relationship\'s value ' +
      'will be replaced with the value specified in this member.',
    requirementLevel: 'MUST',
    checked: false
  },
  fullReplacementToManyRelationship: {
    description: 'A server MAY reject an attempt to do a full replacement of a to-many relationship.',
    requirementLevel: 'MAY',
    checked: false
  },
  fullReplacementToManyRelationshipForbidden: {
    description: 'In such a case, the server MUST reject the entire update, and return a 403 Forbidden response.',
    requirementLevel: 'MUST',
    checked: false
  },
  accept: {
    description: 'If an update request has been accepted for processing, but the processing has not ' +
    'been completed by the time the server responds, the server MUST return a 202 Accepted status code.',
    requirementLevel: 'MUST',
    checked: false
  },
  okResponseStatus: {
    description: 'If a server accepts an update but also changes the resource(s) in ways other than those specified by the request ' +
      '(for example, updating the updated-at attribute or a computed sha), it MUST return a 200 OK response.',
    requirementLevel: 'MUST',
    checked: false
  },
  okResponseBody: {
    description: 'The response document MUST include a representation of the updated resource(s) as if a GET request was made to the request URL.',
    requirementLevel: 'MUST',
    checked: false
  },
  upToDateOkResponseStatus: {
    description: 'A server MUST return a 200 OK status code if an update is successful, the client\'s current attributes remain up to date, ' +
      'and the server responds only with top-level meta data.',
    requirementLevel: 'MUST',
    checked: false
  },
  upToDateOkResponseBody: {
    description: 'if an update is successful, the client\'s current attributes remain up to date, and the server responds ' +
      'only with top-level meta data, in this case the server MUST NOT include a representation of the updated resource(s).',
    requirementLevel: 'MUST NOT',
    checked: false
  },
  noContentResponse: {
    description: 'If an update is successful and the server doesn\'t update any attributes besides those provided, the server MUST return either ' +
      'a 200 OK status code and response document (as described above) or a 204 No Content status code with no response document.',
    requirementLevel: 'MUST',
    checked: false
  },
  forbidden: {
    description: 'A server MUST return 403 Forbidden in response to an unsupported request to update a resource or relationship.',
    requirementLevel: 'MUST',
    checked: false
  },
  notFound: {
    description: 'A server MUST return 404 Not Found when processing a request to modify a resource that does not exist.',
    requirementLevel: 'MUST',
    checked: false
  },
  relatedResourceNotFound: {
    description: 'A server MUST return 404 Not Found when processing a request that references a related resource that does not exist.',
    requirementLevel: 'MUST',
    checked: false
  },
  conflict: {
    description: 'A server MAY return 409 Conflict when processing a PATCH request to update a resource ' +
      'if that update would violate other server-enforced constraints (such as a uniqueness constraint on a property other than id).',
    requirementLevel: 'MAY',
    checked: false
  },
  endpointConflict: {
    description: 'A server MUST return 409 Conflict when processing a PATCH request ' +
      'in which the resource object\'s type and id do not match the server\'s endpoint.',
    requirementLevel: 'MUST',
    checked: false
  },
  conflictDetails: {
    description: 'A server SHOULD include error details and provide enough information to recognize the source of the conflict.',
    requirementLevel: 'SHOULD',
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

module.exports = update;
