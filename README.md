# Zurl

> Is this a shim for [Zip Archives](http://wiki.whatwg.org/wiki/Zip)
(aka "Zip Urls")?

No. Not exactly.  That would probably be infeasible.

It is, however, an alternative to Zip Archives since it achieves a similar
result.  It effectively brings the file system to the browser.

If the Zip Archive proposal seems to be gaining acceptance, this project
will likely transform into a shim and/or library for migrating zurl files
into Zip Archives.

## What is a zurl file?

A zurl file is a very simple file system abstraction.  Each zurl file contains
one or more files (as text) that can be retrieved by file path.

## Components

zurl.js - Creates a function that will find the zurl file for a zip url.

fetchHook.js - Creates an ES6 Loader *fetch hook* for zurl.

locateHook.js - Creates an ES6 Loader *locate hook* for zurl.

## TBD

- rave extension to allow a dev to map module names to zurl files.

- gulp plugins to build zurl files.
