'use strict';

module.exports = function (_) {
  const ruleValidator = require('./rules/validator')(_);

  return function(chai) {
    const expect = chai.expect;
    var Assertion = chai.Assertion;

    Assertion.addMethod('ResourceLinkage', function () {
      const obj = this._obj;

      if (obj === null || obj === []) {
        return;
      }

      if (Array.isArray(obj)) {
        ruleValidator.forEach(
          obj,
          (value) => expect(value).to.be.ResourceIdentifier()
        );
      } else {
        expect(obj).to.be.ResourceIdentifier();
      }
    });

    Assertion.addMethod('Relationship', function () {
      const obj = this._obj;

      ruleValidator(
        'relationships.relationshipIsObject',
        () => {
          const mandatoryAttributes = ['links', 'data', 'meta'];
          expect(obj).to.be.an('object');
          expect(obj).to.have.any.keys(mandatoryAttributes);
        }
      );

      if (!_.isUndefined(obj.links)) {
        ruleValidator(
          'relationships.relationshipIsObject',
          () => {
            const mandatoryProperties = ['self', 'related'];
            expect(obj.links).to.have.any.keys(mandatoryProperties);
          },
          'links'
        );

        ruleValidator(
          null,
          () => expect(obj.links).to.be.Links(),
          'links'
        );
      }

      if (!_.isUndefined(obj.data)) {
        ruleValidator(
          'resourceLinkage.representation',
          () => expect(obj.data).to.be.ResourceLinkage(),
          'data'
        );
      }
    });

    Assertion.addMethod('Relationships', function () {
      const obj = this._obj;

      ruleValidator(
        'relationships.isObject',
        () => expect(obj).to.be.an('object')
      );

      ruleValidator.forEach(
        obj,
        (value) => expect(value).to.be.Relationship()
      );
    });
  };
};
