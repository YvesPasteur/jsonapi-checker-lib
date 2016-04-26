'use strict';

const chai = require('chai');
const _ = require('lodash');
const expectCheck = require('./util/expect-check')(_);

chai.use(expectCheck);
global.validator = require('../').validator;
global.expect = chai.expect;
