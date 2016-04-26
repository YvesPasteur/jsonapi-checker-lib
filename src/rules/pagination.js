'use strict';

var pagination = {
  supportPagination: {
    description: 'A server MAY choose to limit the number of resources returned in a response to a subset ("page") of the whole set available.',
    requirementLevel: 'MAY',
    checked: false
  },
  provideLinks: {
    description: 'A server MAY provide links to traverse a paginated data set ("pagination links").',
    requirementLevel: 'MAY',
    checked: false
  },
  location: {
    description: 'Pagination links MUST appear in the links object that corresponds to a collection. ' +
      'To paginate the primary data, supply pagination links in the top-level links object. To paginate an included collection returned ' +
      'in a compound document, supply pagination links in the corresponding links object.',
    requirementLevel: 'MUST',
    checked: false
  },
  usedKeys: {
    description: 'The following keys MUST be used for pagination links:\n' +
      'first: the first page of data\n' +
      'last: the last page of data\n' +
      'prev: the previous page of data\n' +
      'next: the next page of data',
    requirementLevel: 'MUST',
    checked: false
  },
  unavailableLink: {
    description: 'Keys MUST either be omitted or have a null value to indicate that a particular link is unavailable.',
    requirementLevel: 'MUST',
    checked: false
  },
  consistentSorting: {
    description: 'Concepts of order, as expressed in the naming of pagination links, MUST remain consistent with JSON API\'s sorting rules.',
    requirementLevel: 'MUST',
    checked: false
  },
  queryParameter: {
    description: 'The page query parameter is reserved for pagination. Servers and clients SHOULD use this key for pagination operations.',
    requirementLevel: 'SHOULD',
    checked: false
  }
};

module.exports = pagination;
