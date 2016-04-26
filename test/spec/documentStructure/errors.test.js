'use strict';

describe('The errors', function () {
  it('must be an array ', function (done) {
    const body = {
      errors: 'foo'
    };

    expect(() => validator(body).be.ValidDocument({})).to.throwError(
      function (err) {
        expect(err).be.TestError(
          'Error objects MUST be returned as an array keyed by errors in the top level of a JSON API document.',
          'errors',
          ['errors.isArray']
        );
        return true;
      }
    );

    done();
  });

  it('must contain only allowed members', function (done) {
    const body = {
      errors: [
        {foo: 'bar'}
      ]
    };

    expect(() => validator(body).be.ValidDocument({})).to.throwError(
      function (err) {
        expect(err).be.TestError(
          'An error object MAY have the following members:\n' +
          'id: a unique identifier for this particular occurrence of the problem.\n' +
          'links: a links object containing the following members:\n' +
          'about: a link that leads to further details about this particular occurrence of the problem.\n' +
          'status: the HTTP status code applicable to this problem, expressed as a string value.\n' +
          'code: an application-specific error code, expressed as a string value.\n' +
          'title: a short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence ' +
          'of the problem, except for purposes of localization.\n' +
          'detail: a human-readable explanation specific to this occurrence of the problem. Like title, this field\'s value can be localized.\n' +
          'source: an object containing references to the source of the error, optionally including any of the following members:\n' +
          'pointer: a JSON Pointer [RFC6901] to the associated entity in the request document [e.g. "/data" for a primary data object, ' +
          'or "/data/attributes/title" for a specific attribute].\n' +
          'parameter: a string indicating which URI query parameter caused the error.\n' +
          'meta: a meta object containing non-standard meta-information about the error.',
          'errors[0].foo',
          ['errors.allowedMembers']
        );
        return true;
      }
    );

    done();
  });

  it('can have an id if it is a string ', function (done) {
    const body = {
      errors: [
        {id: 123}
      ]
    };

    expect(() => validator(body).be.ValidDocument({})).to.throwError(
      function (err) {
        expect(err).be.TestError(
          'An error object MAY have the following members:\n' +
          'id: a unique identifier for this particular occurrence of the problem.\n' +
          'links: a links object containing the following members:\n' +
          'about: a link that leads to further details about this particular occurrence of the problem.\n' +
          'status: the HTTP status code applicable to this problem, expressed as a string value.\n' +
          'code: an application-specific error code, expressed as a string value.\n' +
          'title: a short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the problem, ' +
          'except for purposes of localization.\n' +
          'detail: a human-readable explanation specific to this occurrence of the problem. Like title, this field\'s value can be localized.\n' +
          'source: an object containing references to the source of the error, optionally including any of the following members:\n' +
          'pointer: a JSON Pointer [RFC6901] to the associated entity in the request document [e.g. "/data" for a primary data object, ' +
          'or "/data/attributes/title" for a specific attribute].\n' +
          'parameter: a string indicating which URI query parameter caused the error.\n' +
          'meta: a meta object containing non-standard meta-information about the error.',
          'errors[0].id',
          ['errors.allowedMembers']
        );
        return true;
      }
    );

    done();
  });

  it('can have a links member only if it is an object with an \'about\' member ', function (done) {
    const body = {
      errors: [
        {links: {foo: 'bar'}}
      ]
    };

    expect(() => validator(body).be.ValidDocument({})).to.throwError(
      function (err) {
        expect(err).be.TestError(
          'An error object MAY have the following members:\n' +
          'id: a unique identifier for this particular occurrence of the problem.\n' +
          'links: a links object containing the following members:\n' +
          'about: a link that leads to further details about this particular occurrence of the problem.\n' +
          'status: the HTTP status code applicable to this problem, expressed as a string value.\n' +
          'code: an application-specific error code, expressed as a string value.\n' +
          'title: a short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the problem, ' +
          'except for purposes of localization.\n' +
          'detail: a human-readable explanation specific to this occurrence of the problem. Like title, this field\'s value can be localized.\n' +
          'source: an object containing references to the source of the error, optionally including any of the following members:\n' +
          'pointer: a JSON Pointer [RFC6901] to the associated entity in the request document [e.g. "/data" for a primary data object, ' +
          'or "/data/attributes/title" for a specific attribute].\n' +
          'parameter: a string indicating which URI query parameter caused the error.\n' +
          'meta: a meta object containing non-standard meta-information about the error.',
          'errors[0].links',
          ['errors.allowedMembers']
        );
        return true;
      }
    );

    done();
  });

  it('can have a status member only if it is a string which contains a HTTP status code ', function (done) {
    const body = {
      errors: [
        {status: '700'}
      ]
    };

    expect(() => validator(body).be.ValidDocument({})).to.throwError(
      function (err) {
        expect(err).be.TestError(
          'An error object MAY have the following members:\n' +
          'id: a unique identifier for this particular occurrence of the problem.\n' +
          'links: a links object containing the following members:\n' +
          'about: a link that leads to further details about this particular occurrence of the problem.\n' +
          'status: the HTTP status code applicable to this problem, expressed as a string value.\n' +
          'code: an application-specific error code, expressed as a string value.\n' +
          'title: a short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the problem, ' +
          'except for purposes of localization.\n' +
          'detail: a human-readable explanation specific to this occurrence of the problem. Like title, this field\'s value can be localized.\n' +
          'source: an object containing references to the source of the error, optionally including any of the following members:\n' +
          'pointer: a JSON Pointer [RFC6901] to the associated entity in the request document [e.g. "/data" for a primary data object, ' +
          'or "/data/attributes/title" for a specific attribute].\n' +
          'parameter: a string indicating which URI query parameter caused the error.\n' +
          'meta: a meta object containing non-standard meta-information about the error.',
          'errors[0].status',
          ['errors.allowedMembers']
        );
        return true;
      }
    );

    done();
  });

  it('can have a code member only if it is a string ', function (done) {
    const body = {
      errors: [
        {code: 123}
      ]
    };

    expect(() => validator(body).be.ValidDocument({})).to.throwError(
      function (err) {
        expect(err).be.TestError(
          'An error object MAY have the following members:\n' +
          'id: a unique identifier for this particular occurrence of the problem.\n' +
          'links: a links object containing the following members:\n' +
          'about: a link that leads to further details about this particular occurrence of the problem.\n' +
          'status: the HTTP status code applicable to this problem, expressed as a string value.\n' +
          'code: an application-specific error code, expressed as a string value.\n' +
          'title: a short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the problem, ' +
          'except for purposes of localization.\n' +
          'detail: a human-readable explanation specific to this occurrence of the problem. Like title, this field\'s value can be localized.\n' +
          'source: an object containing references to the source of the error, optionally including any of the following members:\n' +
          'pointer: a JSON Pointer [RFC6901] to the associated entity in the request document [e.g. "/data" for a primary data object, ' +
          'or "/data/attributes/title" for a specific attribute].\n' +
          'parameter: a string indicating which URI query parameter caused the error.\n' +
          'meta: a meta object containing non-standard meta-information about the error.',
          'errors[0].code',
          ['errors.allowedMembers']
        );
        return true;
      }
    );

    done();
  });

  it('can have a title member only if it is a string ', function (done) {
    const body = {
      errors: [
        {title: 123}
      ]
    };

    expect(() => validator(body).be.ValidDocument({})).to.throwError(
      function (err) {
        expect(err).be.TestError(
          'An error object MAY have the following members:\n' +
          'id: a unique identifier for this particular occurrence of the problem.\n' +
          'links: a links object containing the following members:\n' +
          'about: a link that leads to further details about this particular occurrence of the problem.\n' +
          'status: the HTTP status code applicable to this problem, expressed as a string value.\n' +
          'code: an application-specific error code, expressed as a string value.\n' +
          'title: a short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the problem, ' +
          'except for purposes of localization.\n' +
          'detail: a human-readable explanation specific to this occurrence of the problem. Like title, this field\'s value can be localized.\n' +
          'source: an object containing references to the source of the error, optionally including any of the following members:\n' +
          'pointer: a JSON Pointer [RFC6901] to the associated entity in the request document [e.g. "/data" for a primary data object, ' +
          'or "/data/attributes/title" for a specific attribute].\n' +
          'parameter: a string indicating which URI query parameter caused the error.\n' +
          'meta: a meta object containing non-standard meta-information about the error.',
          'errors[0].title',
          ['errors.allowedMembers']
        );
        return true;
      }
    );
    done();
  });

  it('can have a detail member only if it is a string ', function (done) {
    const body = {
      errors: [
        {title: 123}
      ]
    };

    expect(() => validator(body).be.ValidDocument({})).to.throwError(
      function (err) {
        expect(err).be.TestError(
          'An error object MAY have the following members:\n' +
          'id: a unique identifier for this particular occurrence of the problem.\n' +
          'links: a links object containing the following members:\n' +
          'about: a link that leads to further details about this particular occurrence of the problem.\n' +
          'status: the HTTP status code applicable to this problem, expressed as a string value.\n' +
          'code: an application-specific error code, expressed as a string value.\n' +
          'title: a short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the problem, ' +
          'except for purposes of localization.\n' +
          'detail: a human-readable explanation specific to this occurrence of the problem. Like title, this field\'s value can be localized.\n' +
          'source: an object containing references to the source of the error, optionally including any of the following members:\n' +
          'pointer: a JSON Pointer [RFC6901] to the associated entity in the request document [e.g. "/data" for a primary data object, ' +
          'or "/data/attributes/title" for a specific attribute].\n' +
          'parameter: a string indicating which URI query parameter caused the error.\n' +
          'meta: a meta object containing non-standard meta-information about the error.',
          'errors[0].title',
          ['errors.allowedMembers']
        );
        return true;
      }
    );
    done();
  });

  it('can have a source member only if it is an object with pointer and/or parameter members ', function (done) {
    const body = {
      errors: [
        {source: {foo: 'bar'}}
      ]
    };

    expect(() => validator(body).be.ValidDocument({})).to.throwError(
      function (err) {
        expect(err).be.TestError(
          'An error object MAY have the following members:\n' +
          'id: a unique identifier for this particular occurrence of the problem.\n' +
          'links: a links object containing the following members:\n' +
          'about: a link that leads to further details about this particular occurrence of the problem.\n' +
          'status: the HTTP status code applicable to this problem, expressed as a string value.\n' +
          'code: an application-specific error code, expressed as a string value.\n' +
          'title: a short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the problem, ' +
          'except for purposes of localization.\n' +
          'detail: a human-readable explanation specific to this occurrence of the problem. Like title, this field\'s value can be localized.\n' +
          'source: an object containing references to the source of the error, optionally including any of the following members:\n' +
          'pointer: a JSON Pointer [RFC6901] to the associated entity in the request document [e.g. "/data" for a primary data object, ' +
          'or "/data/attributes/title" for a specific attribute].\n' +
          'parameter: a string indicating which URI query parameter caused the error.\n' +
          'meta: a meta object containing non-standard meta-information about the error.',
          'errors[0].source',
          ['errors.allowedMembers']
        );
        return true;
      }
    );
    done();
  });

  it('can have a meta member only if it is an object ', function (done) {
    const body = {
      errors: [
        {meta: 'foo'}
      ]
    };

    expect(() => validator(body).be.ValidDocument({})).to.throwError(
      function (err) {
        expect(err).be.TestError(
          'An error object MAY have the following members:\n' +
          'id: a unique identifier for this particular occurrence of the problem.\n' +
          'links: a links object containing the following members:\n' +
          'about: a link that leads to further details about this particular occurrence of the problem.\n' +
          'status: the HTTP status code applicable to this problem, expressed as a string value.\n' +
          'code: an application-specific error code, expressed as a string value.\n' +
          'title: a short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the problem, ' +
          'except for purposes of localization.\n' +
          'detail: a human-readable explanation specific to this occurrence of the problem. Like title, this field\'s value can be localized.\n' +
          'source: an object containing references to the source of the error, optionally including any of the following members:\n' +
          'pointer: a JSON Pointer [RFC6901] to the associated entity in the request document [e.g. "/data" for a primary data object, ' +
          'or "/data/attributes/title" for a specific attribute].\n' +
          'parameter: a string indicating which URI query parameter caused the error.\n' +
          'meta: a meta object containing non-standard meta-information about the error.',
          'errors[0].meta',
          ['errors.allowedMembers']
        );
        return true;
      }
    );
    done();
  });

  it('can be correctly formatted ', function (done) {
    const body = {
      errors: [
        {
          id: 'foo',
          links: {about: 'http://www.example.org/'},
          status: '400',
          code: 'foo-error',
          title: 'This is a foo error',
          detail: 'This foo error is great',
          source: {pointer: '.', parameter: 'sort'},
          meta: {'meta-foo': 'bar'}
        }
      ]
    };

    validator(body).be.ValidDocument({});
    done();
  });
});
