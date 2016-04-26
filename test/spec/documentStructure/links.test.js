'use strict';

describe('The links member', function () {
  it('must be an object', function (done) {
    const body = {
      data: {
        type: '123',
        id: '123',
        links: 'bar'
      }
    };

    expect(() => validator(body).be.ValidDocument({})).to.throwError(
      function (err) {
        expect(err).be.TestError(
          'Primary data MUST be either:\n' +
          'a single resource object, a single resource identifier object, or null, for requests that target single resources\n' +
          'an array of resource objects, an array of resource identifier objects, or an empty array ([]), ' +
          'for requests that target resource collections\n' +
          'The value of each links member MUST be an object (a "links object").',
          'data.links',
          ['primaryData.isObjectOrArray', 'links.linksIsObject']
        );
        return true;
      }
    );

    done();
  });

  it('must contain links which can be string or object with href member', function (done) {
    const body = {
      data: {
        type: '123',
        id: '123',
        links: {
          self: 'http://www.example.com/',
          other: {href: 'http://www.example.com/other'}
        }
      }
    };

    validator(body).be.ValidDocument({});
    done();
  });

  it('can not contain links which are neither string neither object', function (done) {
    const body = {
      data: {
        type: '123',
        id: '123',
        links: {
          self: 'http://www.example.com/',
          other: ['foo', 'bar']
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
          'A link MUST be represented as either:\n' +
          'a string containing the link\'s URL.\n' +
          'an object ("link object") which can contain the following members:\n' +
          'href: a string containing the link\'s URL.\n' +
          'meta: a meta object containing non-standard meta-information about the link.',
          'data.links.other',
          ['primaryData.isObjectOrArray', 'links.linkIsStringOrObject']
        );
        return true;
      }
    );

    done();
  });
});
