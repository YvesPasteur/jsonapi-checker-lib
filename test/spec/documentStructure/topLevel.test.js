'use strict';

describe('The Top Level', function () {
  it('must have a JSON object at the root', function (done) {
    const body = 'plain text';

    expect(() => validator(body).be.ValidDocument({})).to.throwError(
      function (err) {
        expect(err).be.TestError(
          'A JSON object MUST be at the root of every JSON API request and response containing data. This object defines a document\'s "top level".',
          '',
          ['topLevel.isObject']
        );
        return true;
      }
    );

    done();
  });

  it('must have data, errors or meta at the root', function (done) {
    const body = {};

    expect(() => validator(body).be.ValidDocument({})).to.throwError(
      function (err) {
        expect(err).be.TestError(
          'A document MUST contain at least one of the following top-level members:\n' +
          'data: the document\'s "primary data" \n' +
          'errors: an array of error objects\n' +
          'meta: a meta object that contains non-standard meta-information.',
          '',
          ['topLevel.hasAtLeastOneOf']
        );
        return true;
      }
    );

    done();
  });

  it('must not have data and errors at the root', function (done) {
    const body = {
      data: {},
      errors: []
    };

    expect(() => validator(body).be.ValidDocument({})).to.throwError(
      function (err) {
        expect(err).be.TestError(
          'The members data and errors MUST NOT coexist in the same document.',
          '',
          ['topLevel.dataAndErrorsDoesNotCoexist']
        );
        return true;
      }
    );

    done();
  });

  it('can contain the property : jsonapi', function (done) {
    const body = {
      data: {
        type: '123',
        id: '123'
      },
      jsonapi: {}
    };

    validator(body).be.ValidDocument({});
    done();
  });

  it('can contain the property : included', function (done) {
    const body = {
      data: {
        type: '123',
        id: '123'
      },
      included: []
    };

    validator(body).be.ValidDocument({});
    done();
  });

  it('can contain the property : links', function (done) {
    const body = {
      data: {
        type: '123',
        id: '123'
      },
      links: {}
    };

    validator(body).be.ValidDocument({});
    done();
  });

  it('can\'t contain any property', function (done) {
    const body = {
      data: {},
      foo: {}
    };

    expect(() => validator(body).be.ValidDocument({})).to.throwError(
      function (err) {
        expect(err).be.TestError(
          'A document MAY contain any of these top-level members:\n' +
          'jsonapi: an object describing the server\'s implementation\n' +
          'links: a links object related to the primary data.\n' +
          'included: an array of resource objects that are related to the primary data and/or each other ("included resources").',
          '',
          ['topLevel.allowedMembers']
        );
        return true;
      }
    );

    done();
  });

  it('can\'t contain included property if no data property at root level', function (done) {
    const body = {
      meta: {},
      included: {}
    };

    expect(() => validator(body).be.ValidDocument({})).to.throwError(
      function (err) {
        expect(err).be.TestError(
          'If a document does not contain a top-level data key, the included member MUST NOT be present either.',
          'included',
          ['topLevel.noIncludedWithoutPrimaryData']
        );
        return true;
      }
    );

    done();
  });
});
