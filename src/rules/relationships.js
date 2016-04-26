'use strict';

var relationships = {
  relationshipIsObject: {
    description: 'A "relationship object" MUST contain at least one of the following:\n' +
      'links: a links object containing at least one of the following:\n' +
      '     self: a link for the relationship itself (a "relationship link"). This link allows the client to directly manipulate the relationship. ' +
      'For example, removing an author through an article\'s relationship URL would disconnect the person from the article without deleting ' +
      'the people resource itself. When fetched successfully, this link returns the linkage for the related resources as its primary data. ' +
      '(See Fetching Relationships.)\n' +
      '     related: a related resource link\n' +
      'data: resource linkage\n' +
      'meta: a meta object that contains non-standard meta-information about the relationship.\n',
    requirementLevel: 'MUST',
    checked: true
  },
  cardinality: {
    description: 'Relationships MAY be to-one or to-many.',
    requirementLevel: 'MAY',
    checked: false
  },
  isObject: {
    description: 'The value of the relationships key MUST be an object (a "relationships object").',
    requirementLevel: 'MUST',
    checked: true
  },
  pagination: {
    description: 'A relationship object that represents a to-many relationship MAY also contain pagination links under the links member, ' +
      'as described below.',
    requirementLevel: 'MAY',
    checked: false
  },
  relatedResourceLink: {
    description: 'If present, a related resource link MUST reference a valid URL, even if the relationship isn\'t currently associated ' +
      'with any target resources.',
    requirementLevel: 'MUST',
    checked: false
  },
  immutableResourceLink: {
    description: 'Additionally, a related resource link MUST NOT change because its relationship\'s content changes.',
    requirementLevel: 'MUST NOT',
    checked: false
  }
};

module.exports = relationships;
