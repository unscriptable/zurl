var buster = require('buster');
var assert = buster.assert;
var refute = buster.refute;
var fail = buster.assertions.fail;

var extractHierarchical = require('../../lib/extractHierarchical');

var hiearchical = {
	'foo': {
		'bar': '1',
		'baz': '2'
	},
	'carlisle': '3'
};

buster.testCase('extractHierarchical', {

	'should find slash-separated strings by path': function () {
		assert.same(hiearchical['foo']['bar'], extractHierarchical(hiearchical, 'foo/bar'), '1');
		assert.same(hiearchical['foo']['baz'], extractHierarchical(hiearchical, 'foo/baz'), '2');
		assert.same(hiearchical['carlisle'], extractHierarchical(hiearchical, 'carlisle'), '3');
	},

	'should fail if path not found': function () {
		assert.exception(function () {
			extractHierarchical(hiearchical, 'cassat');
		});
		assert.exception(function () {
			extractHierarchical(hiearchical, 'foo/foo');
		});
	},

	'should compensate for leading slashes' : function () {
		assert.same(hiearchical['foo']['bar'], extractHierarchical(hiearchical, '/foo/bar'), '1');
		assert.same(hiearchical['carlisle'], extractHierarchical(hiearchical, '/carlisle'), '3');
	}

});
