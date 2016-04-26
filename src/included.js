'use strict';

module.exports = function (_) {
  const ruleValidator = require('./rules/validator')(_);

  return function(chai) {
    const expect = chai.expect;
    var Assertion = chai.Assertion;
    const identifiersUtils = require('./utils/identifiers.js')(_);

    Assertion.addMethod('Included', function () {
      const obj = this._obj;

      ruleValidator(
        'includedResources.isArray',
        () => expect(obj).to.be.an('array')
      );

      ruleValidator.forEach(
        obj,
        (value) => expect(value).to.be.ResourceObject()
      );
    });

    Assertion.addMethod('FullLinkage', function (document) {
      const definedResourceIdentifiers = identifiersUtils.getAllDefinedResourceIdentifiers(document, []);
      const primaryDataResourceIdentifiers = identifiersUtils.getAllDefinedResourceIdentifiers(document.data, []);
      const referencesResourceIdentifiers = identifiersUtils.getAllReferencesResourceIdentifiers(document, []);

      const definedAndNotReferencedIdentifiers = _.filter(
        definedResourceIdentifiers,
        (v) => _.isUndefined(_.find(referencesResourceIdentifiers, v)) && _.isUndefined(_.find(primaryDataResourceIdentifiers, v))
      );

      ruleValidator(
        'includedResources.fullLinkage',
        () => expect(definedAndNotReferencedIdentifiers).to.be.empty
      );
    });

    Assertion.addMethod('UniqueResourceObject', function (document) {
      const formatToDic = function (identifiers) {
        const addValue = function (acc, identifier) {
          const key = identifier.type + '-' + identifier.id;
          if (_.isUndefined(acc[key])) {
            acc[key] = 0;
          }
          acc[key]++;

          return acc;
        };

        return _.reduce(identifiers, addValue, []);
      };
      const definedResourceIdentifiers = identifiersUtils.getAllDefinedResourceIdentifiers(document, []);

      const dic = formatToDic(definedResourceIdentifiers);
      const duplicates = [];
      _.forIn(dic, function (value, key) {
        if (value > 1) {
          const tab = key.split('-');
          duplicates.push({type: tab[0], id: tab[1]});
        }
      });

      ruleValidator(
        'includedResources.noDuplication',
        () => expect(duplicates).be.empty
      );
    });
  };
};
