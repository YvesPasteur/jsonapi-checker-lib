'use strict';

var rulesValidator = require('../../src/rules/validator')(require('lodash'));

describe('The rules validator ', function () {
  it('should not throw error if the validation function does not either', function (done) {
    const ruleKey = 'customkey';
    const validationFunction = function() {};

    rulesValidator(ruleKey, validationFunction);

    done();
  });

  it('should throw an error if the validation function fails', function(done) {
    const ruleKey = 'customkey';
    const validationFunction = function() {
      throw new Error('foo');
    };

    expect(() => rulesValidator(ruleKey, validationFunction)).to.throwError(
      function(err) {
        expect(err.message).to.be.empty;
        expect(err.path).to.be.empty;
        expect(err.rules).to.be.an('array').and.be.empty;
        return true;
      }
    );

    done();
  });

  it('should throw an error with the rules description if the validation function fails', function(done) {
    const ruleKey = 'attributes.isObject';
    const validationFunction = function() {
      throw new Error('foo');
    };

    expect(() => rulesValidator(ruleKey, validationFunction)).to.throwError(
      function(err) {
        expect(err.message).to.be.equal('The value of the attributes key MUST be an object (an "attributes object").');
        expect(err.path).to.be.empty;
        expect(err.rules).to.be.an('array').and.to.have.length(1);
        expect(err.rules[0].id).to.be.equal('attributes.isObject');

        return true;
      }
    );

    done();
  });

  it('should throw an error with the rules description concatenated with the previous error message ' +
    'if the validation function fails with a custom error', function(done) {
    const ruleKey = 'attributes.isObject';
    const validationFunction = function() {
      var error = new Error('foo');
      error.path = '';

      throw error;
    };

    expect(() => rulesValidator(ruleKey, validationFunction)).to.throwError(
      function(err) {
        expect(err.message).to.be.equal('The value of the attributes key MUST be an object (an "attributes object").\nfoo');
        expect(err.path).to.be.empty;
        expect(err.rules).to.be.an('array').and.to.have.length(1);
        expect(err.rules[0].id).to.be.equal('attributes.isObject');

        return true;
      }
    );

    done();
  });

  it('should throw an error with the parent error path if the validation function fails with a custom error', function(done) {
    const ruleKey = 'customkey';
    const validationFunction = function() {
      var error = new Error('foo');
      error.path = 'bar';

      throw error;
    };

    expect(() => rulesValidator(ruleKey, validationFunction)).to.throwError(
      function(err) {
        expect(err.message).to.be.equal('foo');
        expect(err.path).to.be.equal('bar');
        expect(err.rules).to.be.an('array').and.to.be.empty;

        return true;
      }
    );

    done();
  });

  it('should throw an error with a path if the validation function fails (integer path)', function(done) {
    const ruleKey = 'customkey';
    const validationFunction = function() {
      var error = new Error('foo');
      error.path = 'bar';

      throw error;
    };
    const addToPath = 1;

    expect(() => rulesValidator(ruleKey, validationFunction, addToPath)).to.throwError(
      function(err) {
        expect(err.message).to.be.equal('foo');
        expect(err.path).to.be.equal('[1].bar');
        expect(err.rules).to.be.an('array').and.to.be.empty;

        return true;
      }
    );

    done();
  });

  it('should throw an error with a path if the validation function fails (string path)', function(done) {
    const ruleKey = 'customkey';
    const validationFunction = function() {
      var error = new Error('foo');
      error.path = 'bar';

      throw error;
    };
    const addToPath = 'part';

    expect(() => rulesValidator(ruleKey, validationFunction, addToPath)).to.throwError(
      function(err) {
        expect(err.message).to.be.equal('foo');
        expect(err.path).to.be.equal('part.bar');
        expect(err.rules).to.be.an('array').and.to.be.empty;

        return true;
      }
    );

    done();
  });

  it('should throw an error with all the failed rules if the validation function fails', function(done) {
    const ruleKey = 'attributes.isObject';
    const validationFunction = function() {
      var error = new Error('foo');
      error.path = 'bar';
      error.rules = [{id: 'fake.error'}];

      throw error;
    };
    const addToPath = 'part';

    expect(() => rulesValidator(ruleKey, validationFunction, addToPath)).to.throwError(
      function(err) {
        expect(err.message).to.be.equal('The value of the attributes key MUST be an object (an "attributes object").\nfoo');
        expect(err.path).to.be.equal('part.bar');
        expect(err.rules).to.be.an('array').and.to.have.length(2);
        expect(err.rules[0].id).to.be.equal('attributes.isObject');
        expect(err.rules[1].id).to.be.equal('fake.error');
        return true;
      }
    );

    done();
  });
});
