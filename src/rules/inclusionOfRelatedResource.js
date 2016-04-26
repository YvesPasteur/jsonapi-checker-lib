'use strict';

var inclusionOfRelatedResource = {
  resourcesRelatedToPrimaryData: {
    description: 'An endpoint MAY return resources related to the primary data by default',
    requirementLevel: 'MAY',
    checked: false
  },
  includeParameter: {
    description: 'An endpoint MAY also support an include request parameter to allow the client to customize ' +
      'which related resources should be returned.',
    requirementLevel: 'MAY',
    checked: false
  },
  includeNotSupported: {
    description: 'If an endpoint does not support the include parameter, it MUST respond with 400 Bad Request to any requests that include it.',
    requirementLevel: 'MUST',
    checked: false
  },
  unrequestedResourceObject: {
    description: 'If an endpoint supports the include parameter and a client supplies it, the server MUST NOT include unrequested resource objects ' +
      'in the included section of the compound document.',
    requirementLevel: 'MUST NOT',
    checked: false
  },
  listFormat: {
    description: 'The value of the include parameter MUST be a comma-separated (U+002C COMMA, ",") list of relationship paths. ' +
      'A relationship path is a dot-separated (U+002E FULL-STOP, ".") list of relationship names.',
    requirementLevel: 'MUST',
    checked: false
  },
  badResponse: {
    description: 'If a server is unable to identify a relationship path or does not support inclusion of resources from a path, ' +
      'it MUST respond with 400 Bad Request.',
    requirementLevel: 'MUST',
    checked: false
  }
};

module.exports = inclusionOfRelatedResource;
