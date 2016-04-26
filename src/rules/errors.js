'use strict';

var errors = {
  allowedMembers: {
    description: 'An error object MAY have the following members:\n' +
      'id: a unique identifier for this particular occurrence of the problem.\n' +
      'links: a links object containing the following members:\n' +
      'about: a link that leads to further details about this particular occurrence of the problem.\n' +
      'status: the HTTP status code applicable to this problem, expressed as a string value.\n' +
      'code: an application-specific error code, expressed as a string value.\n' +
      'title: a short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the problem, except for ' +
      'purposes of localization.\n' +
      'detail: a human-readable explanation specific to this occurrence of the problem. Like title, this field\'s value can be localized.\n' +
      'source: an object containing references to the source of the error, optionally including any of the following members:\n' +
      'pointer: a JSON Pointer [RFC6901] to the associated entity in the request document [e.g. "/data" for a primary data object, or ' +
      '"/data/attributes/title" for a specific attribute].\n' +
      'parameter: a string indicating which URI query parameter caused the error.\n' +
      'meta: a meta object containing non-standard meta-information about the error.',
    requirementLevel: 'MAY',
    checked: true
  },
  isArray: {
    description: 'Error objects MUST be returned as an array keyed by errors in the top level of a JSON API document.',
    requirementLevel: 'MUST',
    checked: true
  },
  earlyFailure: {
    description: 'A server MAY choose to stop processing as soon as a problem is encountered',
    requirementLevel: 'MAY',
    checked: false
  },
  lateFailure: {
    description: 'A server MAY continue processing and encounter multiple problems.',
    requirementLevel: 'MAY',
    checked: false
  },
  generallyApplicableHttpCode: {
    description: 'When a server encounters multiple problems for a single request, the most generally applicable HTTP error code ' +
      'SHOULD be used in the response.',
    requirementLevel: 'SHOULD',
    checked: false
  }
};

module.exports = errors;
