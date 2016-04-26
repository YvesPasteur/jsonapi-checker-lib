'use strict';

var _ = require('lodash');

var rules = {
  attributes: require('./attributes'),
  errors: require('./errors'),
  fields: require('./fields'),
  includedResources: require('./includedResources'),
  links: require('./links'),
  relationships: require('./relationships'),
  resourceLinkage: require('./resourceLinkage'),
  resourceIdentifier: require('./resourceIdentifier'),
  resourceObject: require('./resourceObject'),
  topLevel: require('./topLevel'),
  primaryData: require('./primaryData'),
  clientHeaders: require('./clientHeaders'),
  serverHeaders: require('./serverHeaders'),
  documentStructure: require('./documentStructure'),
  meta: require('./meta'),
  jsonapi: require('./jsonapi'),
  fetchingResource: require('./fetchingResource'),
  fetchingRelationships: require('./fetchingRelationships'),
  inclusionOfRelatedResource: require('./inclusionOfRelatedResource'),
  sparseFieldset: require('./sparseFieldset'),
  sorting: require('./sorting'),
  pagination: require('./pagination'),
  filtering: require('./filtering'),
  create: require('./create'),
  update: require('./update'),
  deletion: require('./deletion'),
  queryParameter: require('./queryParameter')
};

module.exports = {
  list: rules,
  flat: function () {
    var list = [];
    _.each(rules, function (value, concept) {
      _.each(value, function (rule, identifier) {
        rule.id = concept + '-' + identifier;
        list.push(rule);
      });
    });

    return list;
  }
};
