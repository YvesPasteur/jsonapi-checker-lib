'use strict';

var serverHeaders = {
  contentType: {
    description: 'Servers MUST send all JSON API data in response documents ' +
      'with the header Content-Type: application/vnd.api+json without any media type parameters.',
    requirementLevel: 'MUST',
    checked: false
  },
  accept: {
    description: 'Clients that include the JSON API media type in their Accept header ' +
      'MUST specify the media type there at least once without any media type parameters.',
    requirementLevel: 'MUST',
    checked: false
  },
  receivedContentType: {
    description: 'Clients MUST ignore any parameters ' +
      'for the application/vnd.api+json media type received in the Content-Type header of response documents.',
    requirementLevel: 'MUST',
    checked: false
  }
};

module.exports = serverHeaders;
