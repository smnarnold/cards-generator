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
fractal.web.set('static.mount', 'assets');

/* Set the static HTML build destination */
fractal.web.set('builder.dest', path.join(__dirname, 'fractal/build'));

// Theme

// create a new instance with custom config options
const sidleeTheme = mandelbrot({
  nav: ['docs', 'components'],
  skin: 'black',
  styles: ['default'],
});

fractal.web.theme(sidleeTheme); // tell Fractal to use the configured theme by default

// Templates

const hbs = require('@frctl/handlebars')({
  helpers: {
    cacheBreaker: function() {
      return `?v=${(new Date()).toISOString().replace(/\.[0-9]+Z$/, 'Z').replace(/[^0-9TZ]/g, '')}`;
    }
  }
});

fractal.components.engine(hbs); /* set as the default template engine for components */
fractal.docs.engine(hbs); /* you can also use the same instance for documentation, if you like! */

const instance = fractal.components.engine();

// Using handlebars-helpers (https://github.com/assemble/handlebars-helpers)
const helpers = require('handlebars-helpers');
helpers({
  handlebars: instance.handlebars
});

// Using handlebars-layouts (https://www.npmjs.com/package/handlebars-layouts)
const layouts = require('handlebars-layouts');
layouts.register(instance.handlebars);
