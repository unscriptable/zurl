// A possible format for zurl files that can be loaded x-domain:
zurl({
	// we'll probably want to encode a zurl file as all strings or
	// global script code encoded in a string
	"run.js": "System.import('app/main');",
	"app/main.js": "var when = require('when');\n",
	"lib/when/when.js": "(function (define) { define(function (require) { \"use strict\";\n\treturn {}; // etc.\n});\n}(typeof define != 'undefined' && define.amd\n\t? define\n\t: function (factory) { module.exports = factory(require); }\n));"
});
