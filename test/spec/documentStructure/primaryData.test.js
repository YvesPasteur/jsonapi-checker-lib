'use strict';

describe('The primary data', function () {
  it('can be a single resource object', function (done) {
    const body = {
      data: {
        type: '123',
        id: '123'
      }
    };

    validator(body).be.ValidDocument({});
    done();
  });

  it('can be a new single resource object from the client', function (done) {
    const body = {
      data: {
        type: '123'
      }
    };

    validator(body).be.ValidDocument({fromClient: true, method: 'POST'});
    done();
  });

  it('can be null', function (done) {
    const body = {
      data: null
    };

    validator(body).be.ValidDocument({});
    done();
  });

  it('can be an array of resource (identifiers) objects', function (done) {
    const body = {
      data: [
        {type: 'foo', id: 'bar'}
      ]
    };

    validator(body).be.ValidDocument({});
    done();
  });

  it('can be an empty array', function (done) {
    const body = {
      data: []
    };

    validator(body).be.ValidDocument({});
    done();
  });

  it('must be a single resource object if is an object', function (done) {
    const body = {
      data: {
        foo: 'bar'
      }
    };

    expect(() => validator(body).be.ValidDocument({})).to.throwError(
      function (err) {
        expect(err).be.TestError(
          'Primary data MUST be either:\n' +
          'a single resource object, a single resource identifier object, or null, for requests that target single resources\n' +
          'an array of resource objects, an array of resource identifier objects, or an empty array ([]), ' +
          'for requests that target resource collections\n' +
          'A resource object MUST contain at least the following top-level members:\n' +
          'id\n' +
          'type\n' +
          'Exception: The id member is not required when the resource object originates at the client ' +
          'and represents a new resource to be created on the server.',
          'data',
          ['primaryData.isObjectOrArray', 'resourceObject.hasIdAndType']
        );
        return true;
      }
    );

    done();
  });

  it('must be a collection of resource objects if is a collection', function (done) {
    const body = {
      data: [
        {foo: 'bar'}
      ]
    };

    expect(() => validator(body).be.ValidDocument({})).to.throwError(
      function (err) {
        expect(err).be.TestError(
          'Primary data MUST be either:\n' +
          'a single resource object, a single resource identifier object, or null, for requests that target single resources\n' +
          'an array of resource objects, an array of resource identifier objects, or an empty array ([]), ' +
          'for requests that target resource collections\n' +
          'A resource object MUST contain at least the following top-level members:\n' +
          'id\n' +
          'type\n' +
          'Exception: The id member is not required when the resource object originates at the client ' +
          'and represents a new resource to be created on the server.',
          'data[0]',
          ['primaryData.isObjectOrArray', 'resourceObject.hasIdAndType']
        );
        return true;
      }
    );

    done();
  });
});
