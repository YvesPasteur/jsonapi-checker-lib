'use strict';

const _ = require('lodash');
const chai = require('chai');

chai.use(require('./root')(_));
chai.use(require('./error')(_));
chai.use(require('./links')(_));
chai.use(require('./attributes')(_));
chai.use(require('./relationships')(_));

chai.use(require('./resources')(_));
chai.use(require('./included')(_));
chai.use(require('./fields')(_));

chai.use(
  function (chai) {
    const expect = chai.expect;
    var Assertion = chai.Assertion;

    Assertion.addMethod('ValidDocument', function (options) {
      const obj = this._obj;
      expect(obj).to.be.Root();
      expect(obj).to.be.Data(options);
      expect(obj).to.be.IncludedRoot();
      expect(obj).to.be.ErrorsRoot();
    });

    Assertion.addMethod('ValidHeaders', function() {
      const ruleValidator = require('./rules/validator')(_);
      const givenHeaders = this._obj;
      const expectedContentType = 'application/vnd.api+json';

      ruleValidator(
        'serverHeaders.contentType',
        () => expect(givenHeaders.contentType).to.be.equals(expectedContentType)
      );
    });
  }
);

module.exports = chai.expect;
