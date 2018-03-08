// this document was renamed from fractal.js
// ref: https://github.com/frctl/fractal/issues/118#issuecomment-255254117
'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

/*
 * Require the Mandelbrot theme module (default)
 */
const mandelbrot = require('@frctl/mandelbrot'); // require the Mandelbrot theme module


fractal.set('project.title', 'Sid Lee');
fractal.set('project.version', 'v1.0');
fractal.set('project.author', 'Sid Lee');


/*
 * Create a new instance with custom config options
 */
const sidLeeTheme = mandelbrot({
    skin: "black",
    styles: [
    	"default"
    ]
    // any other theme configuration values here
});

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'demo/components'));

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'demo/docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, '../assets'));

/*
 * Tell the Fractal where to look for dest.
 */
fractal.web.set('builder.dest', path.join(__dirname, 'demo/build'));



fractal.web.theme(sidLeeTheme); // tell Fractal to use the configured theme by default