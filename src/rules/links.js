'use strict';

var links = {
  linkIsStringOrObject: {
    description: 'A link MUST be represented as either:\n' +
      'a string containing the link\'s URL.\n' +
      'an object ("link object") which can contain the following members:\n' +
      'href: a string containing the link\'s URL.\n' +
      'meta: a meta object containing non-standard meta-information about the link.',
    requirementLevel: 'MUST',
    checked: true
  },
  linksIsObject: {
    description: 'The value of each links member MUST be an object (a "links object").',
    requirementLevel: 'MUST',
    checked: true
  },
  selfLinkInResourceObject: {
    description: 'If present, this links object MAY contain a self link that identifies the resource represented by the resource object.',
    requirementLevel: 'MAY',
    checked: false
  },
  selfLinkResponse: {
    description: 'A server MUST respond to a GET request to the specified URL with a response that includes the resource as the primary data.',
    requirementLevel: 'MUST',
    checked: false
  }
};

module.exports = links;
