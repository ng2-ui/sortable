#!/usr/bin/env bash
set -e

rm -rf dist
ng2inline "src/**/*.ts"
tsc --rootDir dist
