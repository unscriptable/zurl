({
	"files": {
		"app": {
			// app is declared to be node
			"main.js": function (require, exports, module, global) {
				var when = require('when');
			}
		},
		"node_modules": {
			// cujojs/when declares itself as AMD
			"when": {
				"when.js": function (define) {
					// when.js's UMD boilerplate makes this look redundant
					(function (define) { define(function (require) { "use strict";
						// body of when.js goes here
						return {};
					});
					}(typeof define != 'undefined' && define.amd
						? define
						: function (factory) { module.exports = factory(require); }
					));
				}
				// other cujojs/when modules go here
			},
			// cujojs/most is implicitly a node module
			"most": {
				"most.js": function (require, exports, module, global) {
					// body of most.js goes here
				}
				// other cujojs/most modules go here
			},
			"an-es6-package": {
				"main.js": function (transform) {
					return transform(
						"// es6 source code goes here as a string"
					);
				}
			}
		},
	},
	"meta": {
		// do we need to include some metadata about the zurl file?
		"version": "0.2.0"
	}
})
