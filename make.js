var pkg     = require('./package.json');
var path    = require('path');
var Builder = require('systemjs-builder');
var name    = pkg.name;

var builder = new Builder();
var config = {
  baseURL: '.',
  transpiler: 'typescript',
  typescriptOptions: {
    module: 'commonjs'
  },
  map: {
    typescript: './node_modules/typescript/lib/typescript.js',
    angular2: path.resolve('node_modules/angular2'),
    rxjs: path.resolve('node_modules/rxjs')
  },
  paths: {
    '*': '*.ts'
  },
  meta: {
    'node_modules/angular2/*': { build: false },
    'node_modules/rxjs/*': { build: false }
  },
};

builder.config(config);

builder.bundle(
  name, 
  'dist/' + name + '.js', {
    minify: true, sourceMaps: true
  }
);
