'use strict';

var includedResources = {
  isArray: {
    description: 'In a compound document, all included resources MUST be represented as an array of resource objects in a top-level included member.',
    requirementLevel: 'MUST',
    checked: true
  },
  fullLinkage: {
    description: 'Compound documents require "full linkage", meaning that every included resource MUST be identified by ' +
      'at least one resource identifier object in the same document. These resource identifier objects could either be primary data ' +
      'or represent resource linkage contained within primary or included resources.\n' +
      'The only exception to the full linkage requirement is when relationship fields that would otherwise contain linkage ' +
      'data are excluded via sparse fieldsets.',
    requirementLevel: 'MUST',
    checked: true
  },
  noDuplication: {
    description: 'A compound document MUST NOT include more than one resource object for each type and id pair.',
    requirementLevel: 'MUST NOT',
    checked: true
  },
  allowIncluded: {
    description: 'To reduce the number of HTTP requests, servers MAY allow responses ' +
      'that include related resources along with the requested primary resources.',
    requirementLevel: 'MAY',
    checked: true
  }
};

module.exports = includedResources;
