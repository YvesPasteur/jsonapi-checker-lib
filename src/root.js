'use strict';

module.exports = function (_) {
  const ruleValidator = require('./rules/validator')(_);

  return function(chai) {
    const expect = chai.expect;
    var Assertion = chai.Assertion;

    Assertion.addMethod('Root', function () {
      const obj = this._obj;

      ruleValidator(
        'topLevel.isObject',
        () => expect(obj).be.an('object')
      );

      ruleValidator(
        'topLevel.hasAtLeastOneOf',
        () => expect(obj).to.have.any.keys(['data', 'errors', 'meta'])
      );

      ruleValidator(
        'topLevel.dataAndErrorsDoesNotCoexist',
        () => expect(obj).to.not.have.keys(['data', 'errors'])
      );

      ruleValidator(
        'topLevel.allowedMembers',
        () => {
          const allowedRootProperties = ['data', 'errors', 'meta', 'jsonapi', 'links', 'included'];
          const bodyKeys = _.keys(obj);
          const unallowedKeys = _.difference(bodyKeys, allowedRootProperties);

          expect(unallowedKeys).to. be.empty;// eslint-disable-line no-unused-expressions
        }
      );
    });

    Assertion.addMethod('Data', function (options) {
      var data = this._obj.data;

      if (_.isUndefined(data) || data === null) {
        return;
      }

      if (!Array.isArray(data)) {
        ruleValidator(
          'primaryData.isObjectOrArray',
          () =>
            expect(data).to.be.ResourceObject(
              {
                fromClient: (options.fromClient || false),
                method: (options.method || null)
              }
            ),
          'data'
        );
      } else {
        ruleValidator(
          'primaryData.isObjectOrArray',
          () => expect(data).to.be.ResourceCollection(),
          'data'
        );
      }
    });

    Assertion.addMethod('IncludedRoot', function () {
      const obj = this._obj;
      const included = obj.included;
      if (_.isUndefined(included)) {
        return;
      }

      if (!_.isUndefined(included)) {
        ruleValidator(
          'topLevel.noIncludedWithoutPrimaryData',
          () => expect(obj).to.have.property('data'),
          'included'
        );
        ruleValidator(
          null,
          () => expect(included).to.be.Included(),
          'included'
        );
      }

      ruleValidator(
        null,
        () => expect(included).to.have.FullLinkage(obj),
        'included'
      );

      ruleValidator(
        null,
        () => expect(included).to.have.UniqueResourceObject(obj),
        'included'
      );
    });

    Assertion.addMethod('ErrorsRoot', function () {
      var errors = this._obj.errors;
      if (_.isUndefined(errors)) {
        return;
      }

      if (!_.isUndefined(errors)) {
        ruleValidator(
          null,
          () => expect(errors).to.be.Errors(),
          'errors'
        );
      }
    });
  };
};
