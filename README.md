# An example of how to pakcage a Angular2 project into a bundle


## Files

  * .gitignore: files that won't be git-managed
  * .npmignore: files that won't be published
  * README.md: this file
  * dist: systemjs bundle files, .js and .min.js files
  * ng-package-seed.ts: package main file
  * package.json: package definition including npm script definitions
  * scripts: script files used by `npm`
  * src: typescript, source codes; .ts files
  * tsconfig.json: typescript compiler, tsc, configuration
  * typings.json: type definnitions

  * node_modules: created by `npm install`
  * typings: created by `typings install`
  * build: creatred by `npm run prepubish`

## How To Use

1. Install node modules and typings

        npm install

2. Modify the following directory and files to build your own package
 
   * `src` directory
   * new package main file copied from `ng2-package-seed.ts`

3. Build your package

  * `node make.js`


