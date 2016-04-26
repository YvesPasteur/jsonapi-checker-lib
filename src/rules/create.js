'use strict';

var create = {
  allowed: {
    description: 'A server MAY allow resources of a given type to be created.',
    requirementLevel: 'MAY',
    checked: false
  },
  singleObject: {
    description: 'A resource can be created by sending a POST request to a URL that represents a collection of resources.' +
      'The request MUST include a single resource object as primary data.',
    requirementLevel: 'MUST',
    checked: false
  },
  mandatoryTypeMember: {
    description: 'The resource object MUST contain at least a type member.',
    requirementLevel: 'MUST',
    checked: false
  },
  relationship: {
    description: 'If a relationship is provided in the relationships member of the resource object, ' +
      'its value MUST be a relationship object with a data member. The value of this key represents the linkage the new resource is to have.',
    requirementLevel: 'MUST',
    checked: false
  },
  clientGeneratedId: {
    description: 'A server MAY accept a client-generated ID along with a request to create a resource.',
    requirementLevel: 'MAY',
    checked: false
  },
  identifierKey: {
    description: 'An ID MUST be specified with an id key.',
    requirementLevel: 'MUST',
    checked: false
  },
  identifierValue: {
    description: 'the value of which MUST be a universally unique identifier.',
    requirementLevel: 'MUST',
    checked: false
  },
  uuidFormat: {
    description: 'The client SHOULD use a properly generated and formatted UUID as described in RFC 4122',
    requirementLevel: 'SHOULD',
    checked: false
  },
  unsupportedRequest: {
    description: 'A server MUST return 403 Forbidden in response to an unsupported request to create a resource with a client-generated ID.',
    requirementLevel: 'MUST',
    checked: false
  },
  created: {
    description: 'If a POST request did not include a Client-Generated ID and the requested resource has been created successfully, ' +
      'the server MUST return a 201 Created status code.',
    requirementLevel: 'MUST',
    checked: false
  },
  locationHeader: {
    description: 'The response SHOULD include a Location header identifying the location of the newly created resource.',
    requirementLevel: 'SHOULD',
    checked: false
  },
  responseBody: {
    description: 'The response MUST also include a document that contains the primary resource created.',
    requirementLevel: 'MUST',
    checked: false
  },
  selfAndLocation: {
    description: 'If the resource object returned by the response contains a self key in its links member and a Location header is provided, ' +
      'the value of the self member MUST match the value of the Location header.',
    requirementLevel: 'MUST',
    checked: false
  },
  accepted: {
    description: 'If a request to create a resource has been accepted for processing, but the processing has not been completed by the time ' +
      'the server responds, the server MUST return a 202 Accepted status code.',
    requirementLevel: 'MUST',
    checked: false
  },
  noContent: {
    description: 'If a POST request did include a Client-Generated ID and the requested resource has been created successfully, ' +
      'the server MUST return either a 201 Created status code and response document (as described above) or a 204 No Content status code ' +
      'with no response document.',
    requirementLevel: 'MUST',
    checked: false
  },
  forbidden: {
    description: 'A server MAY return 403 Forbidden in response to an unsupported request to create a resource.',
    requirementLevel: 'MAY',
    checked: false
  },
  conflict: {
    description: 'A server MUST return 409 Conflict when processing a POST request to create a resource ' +
      'with a client-generated ID that already exists.',
    requirementLevel: 'MUST',
    checked: false
  },
  badType: {
    description: 'A server MUST return 409 Conflict when processing a POST request in which the resource object\'s type is not among the type(s) ' +
      'that constitute the collection represented by the endpoint.',
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

module.exports = create;
