var buster = require('buster');
var assert = buster.assert;
var refute = buster.refute;
var fail = buster.assertions.fail;

var hydrateFromText = require('../../lib/hydrateFromText');

buster.testCase('hydrateFromText', {

	'test set one': {
		'should do something': function () {
			assert(false);
		}
	}

});
