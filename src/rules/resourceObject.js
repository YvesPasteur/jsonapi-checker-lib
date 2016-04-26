'use strict';

var resourceObject = {
  hasIdAndType: {
    description: 'A resource object MUST contain at least the following top-level members:\n' +
      'id\n' +
      'type\n' +
      'Exception: The id member is not required when the resource object originates at the client ' +
      'and represents a new resource to be created on the server.',
    requirementLevel: 'MUST',
    checked: true
  },
  hasIdAndTypeBis: {
    description: 'Every resource object MUST contain an id member and a type member',
    requirementLevel: 'MUST',
    checked: true
  },
  idAndTypeTypes: {
    description: 'The values of the id and type members MUST be strings.',
    requirementLevel: 'MUST',
    checked: true
  },
  uniqueByTypeAndIdPair: {
    description: 'Within a given API, each resource object\'s type and id pair MUST identify a single, unique resource. ' +
      '(The set of URIs controlled by a server, or multiple servers acting as one, constitute an API.)',
    requirementLevel: 'MUST',
    checked: false
  },
  allowedMembers: {
    description: 'a resource object MAY contain any of these top-level members:\n' +
      'attributes: an attributes object representing some of the resource\'s data.\n' +
      'relationships: a relationships object describing relationships between the resource and other JSON API resources.\n' +
      'links: a links object containing links related to the resource.\n' +
      'meta: a meta object containing non-standard meta-information about a resource that can not be represented as an attribute or relationship.',
    requirementLevel: 'MAY',
    checked: true
  },
  collectionIsArray: {
    description: 'A logical collection of resources MUST be represented as an array, even if it only contains one item or is empty.',
    requirementLevel: 'MUST',
    checked: true
  },
  adhereMemberNameContraints: {
    description: 'The values of type members MUST adhere to the same constraints as member names.',
    requirementLevel: 'MUST',
    checked: true
  }
};

module.exports = resourceObject;
