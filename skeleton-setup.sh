#!/usr/bin/env bash
# Install required software
# git, git-flow, composer and npm
# Install it depending on your OS and package manager (i.e. MacOS => brew, Ubuntu => apt)

# Setup all needed software for this skeleton.
git init
git-flow init
composer init
npm init

# Composer
composer require --dev phpunit/phpunit ^9

# npm main modules
npm i --global gulp-cli

# gulp modules
npm i --save-dev del
npm i --save-dev gulp
npm i --save-dev gulp-clean-css
npm i --save-dev gulp-if
npm i --save-dev gulp-useref
npm i --save-dev gulp-uglify

# Additional components
# npm install --save @progress/kendo-ui@latest
