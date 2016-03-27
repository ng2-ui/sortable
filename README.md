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

## Usage

1. Copy ng2-package-seed into your project

        git remote add seed https://github.com/jsvalley/ng2-package-seed.git 
        git fetch seed
        git checkout seed/master

2. Install node modules and typings

        npm install

