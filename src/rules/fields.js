'use strict';

var fields = {
  commonNamespace: {
    description: 'Fields for a resource object MUST share a common namespace with each other and with type and id. In other words, ' +
      'a resource can not have an attribute and relationship with the same name, nor can it have an attribute or relationship named type or id.',
    requirementLevel: 'MUST',
    checked: true
  },
  restrictMemberName: {
    description: 'All member names used in a JSON API document MUST meet all of the conditions listed here : ' +
      'http://jsonapi.org/format/#document-member-names',
    requirementLevel: 'MUST',
    checked: true
  },
  caseSensitive: {
    description: 'All member names used in a JSON API document MUST be treated as case sensitive by clients and servers',
    requirementLevel: 'MUST',
    checked: false
  }
};

module.exports = fields;
