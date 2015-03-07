var buster = require('buster');
var assert = buster.assert;
var refute = buster.refute;
var fail = buster.assertions.fail;

var extractFlat = require('../../lib/extractFlat');

var flat = {
	'foo/bar': '1',
	'foo/baz': '2',
	'carlisle': '3'
};

buster.testCase('extractFlat', {

	'should find slash-separated strings by path': function () {
		assert.same(flat['foo/bar'], extractFlat(flat, 'foo/bar'), '1');
		assert.same(flat['foo/baz'], extractFlat(flat, 'foo/baz'), '2');
		assert.same(flat['carlisle'], extractFlat(flat, 'carlisle'), '3');
	},

	'should fail if path not found': function () {
		assert.exception(function () {
			extractFlat(flat, 'cassat');
		});
		assert.exception(function () {
			extractFlat(flat, 'foo/foo');
		});
	},

	'should compensate for leading slashes' : function () {
		assert.same(flat['foo/bar'], extractFlat(flat, '/foo/bar'), '1');
		assert.same(flat['carlisle'], extractFlat(flat, '/carlisle'), '3');
	}

});
