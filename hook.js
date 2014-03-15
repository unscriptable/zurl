/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */

module.exports = function (zipManager) {
	// create an ES6 Loader fetch hook
	return function (load) {
		// find the zip archive and fetch it if it's not local
		return zipManager.forUrl(load.address, true)
			.then(function (zip) {
				return zip.read(load.address);
			});
	};
};
