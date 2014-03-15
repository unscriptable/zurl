/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */

module.exports = function (root, path) {
	var keys, parent, node, key;
	keys = path.split(/\//);
	parent = root;
	while (key = keys.shift()) {
		node = parent[key];
		if (!node) {
			throw new Error(path + ': no such file or directory');
		}
		parent = node;
	}
	return node;
};
