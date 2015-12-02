'use strict';
var assert = require('assert');
var rule = require('../lib/rules/python-path');

describe('python path', function () {
  it('pass if it\'s exactly the correct one', function (cb) {
    rule.EXACT_PYTHON_VERSION = 'Python 2.7.10';

    rule.verify(function (err) {
      assert(!err, err);
      cb();
    });
  });

  it('fail if it\'s anything else', function (cb) {
    rule.EXACT_PYTHON_VERSION = 'Something something';

    rule.verify(function (err) {
      assert(err, err);
      cb();
    });
  });
});
