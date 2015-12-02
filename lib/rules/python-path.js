'use strict';
var binVersionCheck = require('bin-version-check');
var message = require('../message');

exports.EXACT_PYTHON_VERSION = '2.7.10';

exports.description = 'Python version';

var errors = exports.errors = {
  wrongPythonVersion: function () {
    return message.get('python-version', {
      isWin: process.platform === 'win32'
    });
  }
};

exports.verify = function (cb) {
  binVersionCheck('python', '=' + exports.EXACT_PYTHON_VERSION, function (err) {
    cb(err ? errors.wrongPythonVersion() : null);
  });
};
