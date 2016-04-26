'use strict';

describe('The attributes field of a resource object', function () {
  it('must be an object', function (done) {
    const body = {
      data: {
        type: '123',
        id: '123',
        attributes: 'foo'
      }
    };

    expect(() => validator(body).to.be.a.ValidDocument({})).to.throwError(
      function (err) {

        expect(err).be.TestError(
          'Primary data MUST be either:\n' +
          'a single resource object, a single resource identifier object, or null, for requests that target single resources\n' +
          'an array of resource objects, an array of resource identifier objects, or an empty array ([]), ' +
          'for requests that target resource collections\n' +
          'The value of the attributes key MUST be an object (an "attributes object").',
          'data.attributes',
          ['attributes.isObject', 'primaryData.isObjectOrArray']
        );
        return true;
      }
    );

    done();
  });

  it('can contain complex data structures as attribute value', function (done) {
    const body = {
      data: {
        type: '123',
        id: '123',
        attributes: {
          foo: [{bar: 1}, {bar: 2}]
        }
      }
    };

    validator(body).be.ValidDocument({});

    done();
  });

  it('can not contain attribute value with a relationships member', function (done) {
    const body = {
      data: {
        type: '123',
        id: '123',
        attributes: {
          foo: {
            relationships: 1
          }
        }
      }
    };

    expect(() => validator(body).be.ValidDocument({})).to.throwError(
      function (err) {

        expect(err).be.TestError(
          'Primary data MUST be either:\n' +
          'a single resource object, a single resource identifier object, or null, for requests that target single resources\n' +
          'an array of resource objects, an array of resource identifier objects, or an empty array ([]), ' +
          'for requests that target resource collections\nany object that constitutes or is contained in an attribute ' +
          'MUST NOT contain a relationships or links member, as those members are reserved by this specification for future use.',

          // we would like to have the complete path, a little bit more work needed
          'data.attributes',
          ['primaryData.isObjectOrArray', 'attributes.restrictMemberName']
        );
        return true;
      }
    );

    done();
  });

  it('can not contain attribute value with a links member', function (done) {
    const body = {
      data: {
        type: '123',
        id: '123',
        attributes: {
          foo: {
            links: 1
          }
        }
      }
    };

    expect(() => validator(body).be.ValidDocument({})).to.throwError(
      function (err) {

        expect(err).be.TestError(
          'Primary data MUST be either:\n' +
          'a single resource object, a single resource identifier object, or null, for requests that target single resources\n' +
          'an array of resource objects, an array of resource identifier objects, or an empty array ([]), ' +
          'for requests that target resource collections\nany object that constitutes or is contained in an attribute MUST NOT contain ' +
          'a relationships or links member, as those members are reserved by this specification for future use.',

          // we would like to have the complete path, a little bit more work needed
          'data.attributes',
          ['primaryData.isObjectOrArray', 'attributes.restrictMemberName']
        );
        return true;
      }
    );

    done();
  });
});
