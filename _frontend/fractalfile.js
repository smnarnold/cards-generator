/**
 * fractalfile.js
 * ==============
 * Fractal is a tool to help you build and document web component libraries
 * and then integrate them into your projects
 * Read the Fractal documentation at http://fractal.build/guide.
 *
 * This document was renamed from fractal.js.
 * ref: https://github.com/frctl/fractal/issues/118#issuecomment-255254117
 */

'use strict';

const fractal = module.exports = require('@frctl/fractal').create(); // Create a new Fractal instance and export it for use elsewhere if required
const mandelbrot = require('@frctl/mandelbrot'); // require the Mandelbrot theme module
const path = require('path');

// create a new instance with custom config options
const sidleeTheme = mandelbrot({
  nav: ['docs', 'components'],
  skin: 'black',
  styles: ['default'],
});

fractal.web.theme(sidleeTheme); // tell Fractal to use the configured theme by default

/* Set the title of the project */
fractal.set('project.title', 'Sid Lee');
fractal.set('project.version', 'v1.0');
fractal.set('project.author', 'Sid Lee');

/* Tell Fractal where the components will live */
fractal.components.set('path', path.join(__dirname, 'fractal/components'));

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', path.join(__dirname, 'fractal/docs'));

/* Specify a directory of static assets */
fractal.web.set('static.path', path.join(__dirname, '../assets'));

/* Set the static HTML build destination */
fractal.web.set('builder.dest', path.join(__dirname, 'fractal/build'));
