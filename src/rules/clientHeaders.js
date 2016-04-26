'use strict';

var clientHeaders = {
  contentType: {
    description: 'Clients MUST send all JSON API data in request documents with the header Content-Type: application/vnd.api+json ' +
      'without any media type parameters.',
    requirementLevel: 'MUST',
    checked: false
  },
  unsupportedMedia: {
    description: 'Servers MUST respond with a 415 Unsupported Media Type status code if a request specifies the header Content-Type: ' +
      'application/vnd.api+json with any media type parameters.',
    requirementLevel: 'MUST',
    checked: false
  },
  notAcceptable: {
    description: 'Servers MUST respond with a 406 Not Acceptable status code if a request\'s Accept header contains the JSON API media type ' +
      'and all instances of that media type are modified with media type parameters.',
    requirementLevel: 'MUST',
    checked: false
  }
};

module.exports = clientHeaders;
