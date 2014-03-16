/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */

module.exports = findViaXhr;

/**
 * Creates a promise for a text file and fetches it via XHR.
 * @param {string} url - the location of the text file.
 * @returns {Promise}
 */
function findViaXhr (url) {
	return new Promise(function (onFulfill, onReject) {
		var xhr;
		xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				if (xhr.status < 400) {
					onFulfill(xhr.responseText);
				}
				else {
					onReject(error(xhr, url));
				}
			}
		};
		xhr.send(null);
	});
}

function error (xhr, url) {
	var msg = 'Zurl XHR failed. url: "' + url
		+ '" status: ' + xhr.status + ' - '
		+ xhr.statusText;
	return new Error(msg);
}
