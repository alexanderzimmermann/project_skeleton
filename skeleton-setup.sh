#!/usr/bin/env bash

# Install
npm install --global gulp-cli

# Setup all needed software for this skeleton.
git init
git-flow init
composer init
npm init

# npm
npm install --global gulp-cli

# modules
npm install --save-dev gulp
npm install --save-dev gulp-if
npm install --save-dev gulp-useref
npm install --save-dev gulp-clean-css
npm install --save-dev gulp-uglify

# Composer
composer require --dev phpunit/phpunit ^9

# Additional components
# npm install --save @progress/kendo-ui@latest
