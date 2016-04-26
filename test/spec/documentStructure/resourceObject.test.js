'use strict';

describe('A resource object', function () {
  it('can not contain unspecified attribute', function (done) {
    const body = {
      data: {
        type: '123',
        id: '123',
        foo: {}
      }
    };

    expect(() => validator(body).be.ValidDocument({})).to.throwError(
      function (err) {
        expect(err).be.TestError(
          'Primary data MUST be either:\n' +
          'a single resource object, a single resource identifier object, or null, for requests that target single resources\n' +
          'an array of resource objects, an array of resource identifier objects, or an empty array ([]), ' +
          'for requests that target resource collections\n' +
          'a resource object MAY contain any of these top-level members:\n' +
          'attributes: an attributes object representing some of the resource\'s data.\n' +
          'relationships: a relationships object describing relationships between the resource and other JSON API resources.\n' +
          'links: a links object containing links related to the resource.\n' +
          'meta: a meta object containing non-standard meta-information about a resource ' +
          'that can not be represented as an attribute or relationship.',
          'data.foo',
          ['primaryData.isObjectOrArray', 'resourceObject.allowedMembers']
        );
        return true;
      }
    );

    done();
  });

  it('can contain attributes', function (done) {
    const body = {
      data: {
        type: '123',
        id: '123',
        attributes: {}
      }
    };

    validator(body).be.ValidDocument({});
    done();
  });

  it('can contain relationships', function (done) {
    const body = {
      data: {
        type: '123',
        id: '123',
        relationships: {
          foo: {
            data: null
          }
        }
      }
    };

    validator(body).be.ValidDocument({});
    done();
  });

  it('can contain links', function (done) {
    const body = {
      data: {
        type: '123',
        id: '123',
        links: {}
      }
    };

    validator(body).be.ValidDocument({});
    done();
  });

  it('can contain meta', function (done) {
    const body = {
      data: {
        type: '123',
        id: '123',
        meta: {}
      }
    };

    validator(body).be.ValidDocument({});
    done();
  });

  it('can not contain a non-string id', function (done) {
    const body = {
      data: {
        type: '123',
        id: 123
      }
    };
    expect(() => validator(body).be.ValidDocument({})).to.throwError(
      function (err) {
        expect(err).be.TestError(
          'Primary data MUST be either:\n' +
          'a single resource object, a single resource identifier object, or null, for requests that target single resources\n' +
          'an array of resource objects, an array of resource identifier objects, or an empty array ([]), ' +
          'for requests that target resource collections\n' +
          'The values of the id and type members MUST be strings.',
          'data.id',
          ['primaryData.isObjectOrArray', 'resourceObject.idAndTypeTypes']
        );
        return true;
      }
    );
    done();
  });

  it('can not contain a non-string type', function (done) {
    const body = {
      data: {
        type: 123,
        id: '123'
      }
    };

    expect(() => validator(body).be.ValidDocument({})).to.throwError(
      function (err) {
        expect(err).be.TestError(
          'Primary data MUST be either:\n' +
          'a single resource object, a single resource identifier object, or null, for requests that target single resources\n' +
          'an array of resource objects, an array of resource identifier objects, or an empty array ([]), ' +
          'for requests that target resource collections\n' +
          'The values of type members MUST adhere to the same constraints as member names.\n' +
          'All member names used in a JSON API document MUST meet all ' +
          'of the conditions listed here : http://jsonapi.org/format/#document-member-names',
          'data.type',
          ['primaryData.isObjectOrArray', 'resourceObject.adhereMemberNameContraints', 'fields.restrictMemberName']
        );
        return true;
      }
    );

    done();
  });

  // How to test "each resource object's type and id pair MUST identify a single, unique resource" ???

  it('can not contain an empty string type', function (done) {
    const body = {
      data: {
        type: '',
        id: '123'
      }
    };

    expect(() => validator(body).be.ValidDocument({})).to.throwError(
      function (err) {
        expect(err).be.TestError(
          'Primary data MUST be either:\n' +
          'a single resource object, a single resource identifier object, or null, for requests that target single resources\n' +
          'an array of resource objects, an array of resource identifier objects, or an empty array ([]), ' +
          'for requests that target resource collections\n' +
          'The values of type members MUST adhere to the same constraints as member names.\n' +
          'All member names used in a JSON API document MUST meet all ' +
          'of the conditions listed here : http://jsonapi.org/format/#document-member-names',
          'data.type',
          ['primaryData.isObjectOrArray', 'resourceObject.adhereMemberNameContraints', 'fields.restrictMemberName']
        );
        return true;
      }
    );

    done();
  });

  it('\'s type can not contain unallowed characters', function (done) {
    const body = {
      data: {
        type: 'foo!',
        id: '123'
      }
    };

    expect(() => validator(body).be.ValidDocument({})).to.throwError(
      function (err) {
        expect(err).be.TestError(
          'Primary data MUST be either:\n' +
          'a single resource object, a single resource identifier object, or null, for requests that target single resources\n' +
          'an array of resource objects, an array of resource identifier objects, or an empty array ([]), ' +
          'for requests that target resource collections\n' +
          'The values of type members MUST adhere to the same constraints as member names.\n' +
          'All member names used in a JSON API document MUST meet all ' +
          'of the conditions listed here : http://jsonapi.org/format/#document-member-names',
          'data.type',
          ['primaryData.isObjectOrArray', 'resourceObject.adhereMemberNameContraints', 'fields.restrictMemberName']
        );
        return true;
      }
    );

    done();
  });

  it('\'s type can contain the following characters : \'-\', \'_\', \' \'', function (done) {
    const body = {
      data: {
        type: 'f-o_o bar',
        id: '123'
      }
    };

    validator(body).be.ValidDocument({});
    done();
  });

  it('\'s type can not start with the following characters : \'-\', \'_\', \' \'', function (done) {
    const body = {
      data: {
        type: '-foo',
        id: '123'
      }
    };

    expect(() => validator(body).be.ValidDocument({})).to.throwError(
      function (err) {
        expect(err).be.TestError(
          'Primary data MUST be either:\n' +
          'a single resource object, a single resource identifier object, or null, for requests that target single resources\n' +
          'an array of resource objects, an array of resource identifier objects, or an empty array ([]), ' +
          'for requests that target resource collections\n' +
          'The values of type members MUST adhere to the same constraints as member names.\n' +
          'All member names used in a JSON API document MUST meet all ' +
          'of the conditions listed here : http://jsonapi.org/format/#document-member-names',
          'data.type',
          ['primaryData.isObjectOrArray', 'resourceObject.adhereMemberNameContraints', 'fields.restrictMemberName']
        );
        return true;
      }
    );

    done();
  });

  it('\'s type can not end with the following characters : \'-\', \'_\', \' \'', function (done) {
    const body = {
      data: {
        type: 'foo_',
        id: '123'
      }
    };

    expect(() => validator(body).be.ValidDocument({})).to.throwError(
      function (err) {
        expect(err).be.TestError(
          'Primary data MUST be either:\n' +
          'a single resource object, a single resource identifier object, or null, for requests that target single resources\n' +
          'an array of resource objects, an array of resource identifier objects, or an empty array ([]), ' +
          'for requests that target resource collections\n' +
          'The values of type members MUST adhere to the same constraints as member names.\n' +
          'All member names used in a JSON API document MUST meet all ' +
          'of the conditions listed here : http://jsonapi.org/format/#document-member-names',
          'data.type',
          ['primaryData.isObjectOrArray', 'resourceObject.adhereMemberNameContraints', 'fields.restrictMemberName']
        );
        return true;
      }
    );

    done();
  });

  it('can not have an attribute named type', function (done) {
    const body = {
      data: {
        type: 'foo',
        id: 'bar',
        attributes: {
          type: 'something'
        }
      }
    };

    expect(() => validator(body).be.ValidDocument({})).to.throwError(
      function (err) {
        expect(err).be.TestError(
          'Primary data MUST be either:\n' +
          'a single resource object, a single resource identifier object, or null, for requests that target single resources\n' +
          'an array of resource objects, an array of resource identifier objects, or an empty array ([]), ' +
          'for requests that target resource collections\n' +
          'Fields for a resource object MUST share a common namespace with each other and with type and id. ' +
          'In other words, a resource can not have an attribute and relationship with the same name, ' +
          'nor can it have an attribute or relationship named type or id.',
          'data.attributes.type',
          ['primaryData.isObjectOrArray', 'fields.commonNamespace']
        );
        return true;
      }
    );

    done();
  });

  it('can not have an attribute named id', function (done) {
    const body = {
      data: {
        type: 'foo',
        id: 'bar',
        attributes: {
          id: 'something'
        }
      }
    };

    expect(() => validator(body).be.ValidDocument({})).to.throwError(
      function (err) {
        expect(err).be.TestError(
          'Primary data MUST be either:\n' +
          'a single resource object, a single resource identifier object, or null, for requests that target single resources\n' +
          'an array of resource objects, an array of resource identifier objects, or an empty array ([]), ' +
          'for requests that target resource collections\n' +
          'Fields for a resource object MUST share a common namespace with each other and with type and id. ' +
          'In other words, a resource can not have an attribute and relationship with the same name, ' +
          'nor can it have an attribute or relationship named type or id.',
          'data.attributes.id',
          ['primaryData.isObjectOrArray', 'fields.commonNamespace']
        );
        return true;
      }
    );

    done();
  });

  it('can not have an attribute named like a relationship', function (done) {
    const body = {
      data: {
        type: 'foo',
        id: 'bar',
        attributes: {
          foo: 'something'
        },
        relationships: {
          foo: 'bar'
        }
      }
    };

    expect(() => validator(body).be.ValidDocument({})).to.throwError(
      function (err) {
        expect(err).be.TestError(
          'Primary data MUST be either:\n' +
          'a single resource object, a single resource identifier object, or null, for requests that target single resources\n' +
          'an array of resource objects, an array of resource identifier objects, or an empty array ([]), ' +
          'for requests that target resource collections\n' +
          'Fields for a resource object MUST share a common namespace with each other and with type and id. ' +
          'In other words, a resource can not have an attribute and relationship with the same name, ' +
          'nor can it have an attribute or relationship named type or id.',
          'data.attributes.foo',
          ['primaryData.isObjectOrArray', 'fields.commonNamespace']
        );
        return true;
      }
    );

    done();
  });
});
