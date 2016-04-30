'use strict';

const _ = require('lodash');
const chai = require('chai');
const expect = chai.expect;
const ruleValidator = require('./rules/validator')(_);

const rules = _.assign(
  {},
  require('./root')(_, ruleValidator, expect),
  require('./error')(_, ruleValidator, expect),
  require('./links')(_, ruleValidator, expect),
  require('./attributes')(_, ruleValidator, expect),
  require('./relationships')(_, ruleValidator, expect),
  require('./resources')(_, ruleValidator, expect),
  require('./included')(_, ruleValidator, expect),
  require('./fields')(_, ruleValidator, expect),
  {
    ValidDocument: function (obj, options) {
      expect(obj).to.be.Root();
      expect(obj).to.be.Data(options);
      expect(obj).to.be.IncludedRoot();
      expect(obj).to.be.ErrorsRoot();
    },
    ValidHeaders: function(givenHeaders) {
      const expectedContentType = 'application/vnd.api+json';

      ruleValidator(
        'serverHeaders.contentType',
        () => expect(givenHeaders.contentType).to.be.equals(expectedContentType)
      );
    },
    ValidUrl: function(obj) {
      const urlParser = require('url');
      const urlObject = urlParser.parse(obj, true);

      if (urlObject.query) {
        _.forIn(
          urlObject.query,
          (value, key) => {
            if (_.indexOf(['filter', 'page', 'sort'], key) !== -1) {
              return;
            }
            ruleValidator(
              'queryParameter.adhereMemberName',
              () => expect(key).to.be.MemberName()
            );

            ruleValidator(
              'queryParameter.atLeastOneNonLowerAlphaCharacter',
              () => expect(key).to.match(/[^a-z]/)
            );
          }
        );
      }
    }
  }
);

_.forEach(
  rules,
  (value, key) => chai.Assertion.addMethod(key, function() {
      var args = Array.from(arguments);

      // jscs:disable disallowDanglingUnderscores
      args.unshift(this._obj);// eslint-disable-line no-underscore-dangle
      // jscs:enable disallowDanglingUnderscores
      return _.spread(value)(args);
    })
);

module.exports = chai.expect;
