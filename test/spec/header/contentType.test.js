'use strict';

describe('The JSON API specification for the content negotiation', function () {
  it('constraints the server to send the vnd.api+json content type - failure', function (done) {
    const header = {
      contentType: 'application/json'
    };

    expect(() => validator(header).to.be.a.ValidHeaders({})).to.throwError(
      function (err) {

        expect(err).be.TestError(
          'Servers MUST send all JSON API data in response documents ' +
          'with the header Content-Type: application/vnd.api+json without any media type parameters.'
        );
        return true;
      }
    );

    done();
  });

  it('constraints the server to send the vnd.api+json content type', function (done) {
    const header = {
      contentType: 'application/vnd.api+json'
    };

    validator(header).to.be.a.ValidHeaders({});

    done();
  });
});
