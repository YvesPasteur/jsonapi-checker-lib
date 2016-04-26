Jsonapi Checker Library
=============================================

## Overview

This library let you to validate an API against the JSON API specifications.
And it exposes the rules defined by these specifications.

You can see a UI which uses this library here : https://jsonapi-spec-validator-ui.herokuapp.com/

For more information on JSON API : http://jsonapi.org

This library is used in the following stack (but can be used alone) :
* UI : ReactJS + json-api-store + bootstrap
* Server : hapi (nodejs)
* JSON API validation library : built on Chai (nodejs)

## Use

# Installation

```
npm i --save jsonapi-checker-lib
```

# Validation

Validate a payload :

```
const validator = require('jsonapi-checker-lib').validator;
validator(body).be.ValidDocument(options);

validator(header).be.ValidHeaders();
```

The `options` parameter can contain :
* fromClient : true if the payload is sent by the client to the server
* method : HTTP method of the request (GET, POST, PATCH, DELETE,...)

# Get the rules

```
# rules is a multi-level object
const rules = require('jsonapi-checker-lib').rules.list;
# flatRules is a one level object
const flatRules = require('jsonapi-checker-lib').rules.flat;
```

## Tests

```bash
npm test
```

## Quality

```
check-build
```

More info on the check-build tool : https://github.com/FGRibreau/check-build
