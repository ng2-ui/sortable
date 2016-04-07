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
    angular2: 'node_modules/angular2',
    rxjs: 'node_modules/rxjs'
  },
  paths: {
    '*': '*.ts'
  },
  meta: {
    'angular2/*': { build: false },
    'rxjs/*': { build: false }
  }
};

builder.config(config);

builder.bundle(
  name, 
  'bundles/' + name + '.js', {
    //minify: true, sourceMaps: true
  }
)
.then(function(output) {
  console.log('Build complete');
})
.catch(function(err) {
  console.log('Build error');
  console.log(err);
});
