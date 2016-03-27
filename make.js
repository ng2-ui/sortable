var path    = require('path');
var Builder = require('systemjs-builder');

var builder = new Builder();
builder.config({
  baseURL: '.',
  map: {
    angular2: path.resolve('node_modules/angular2'),
    rxjs: path.resolve('node_modules/rxjs')
  },
  paths: {
    '*': '*.js'
  },
  meta: {
    'node_modules/angular2/*': { build: false },
    'node_modules/rxjs/*': { build: false }
  },
});

builder.bundle('ng2-package-seed', 'bundles/ng2-package-seed.js');
