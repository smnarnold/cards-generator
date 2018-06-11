/*
  gulpfile.js
  ===========
  Rather than manage one giant configuration file responsible
  for creating multiple tasks, each task has been broken out into
  its own file in gulpfile.js/tasks. Any files in that directory get
  automatically required below.

  To add a new task, simply add a new task file that directory.
  gulpfile.js/tasks/default.js specifies the default set of tasks to run
  when you run `gulp`.
*/

const requireDir = require('require-dir');

global.paths = {
  assets: {
    src: './src',
    dest: '../assets',
  },
  views: '..',
};
global.bundler = 'Webpack'; // 'Browserify' or 'Webpack';

// Require all tasks in gulpfile.js/tasks, including subfolders
requireDir('./gulp/tasks', {recurse: true});
