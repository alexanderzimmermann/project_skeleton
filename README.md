# Introduction
This skeleton sample shows:
- How to minify css
- How to pack the css files.
- How to minify js
- How to pack the js files.
- How to change html and php files that uses those css and js.

This example uses a contact form.

# Requirements
- git
- git-flow
- npm
- composer

# Setup 
All commands to set up this skeleton.
- Example to minify the CSS and copy it to public path.
- Example to minify / uglify the JS and copy it to public path.

# PHP
- Running Tests

## Composer
```sh
composer require --dev phpunit/phpunit ^9
```

## Unit Tests
```sh
phpunit Tests
```

# JS
- Download and install a jQuery lib.

# npm, NodeJS
```sh
npm i --save-dev gulp
npm i --save-dev gulp-if
npm i --save-dev del
```
## CSS stuff
```sh
npm install --save-dev gulp-clean-css
```

### CSS in HTML 
When using **gulp-useref** for CSS, this needs to be inserted in the *.html and *.php files.
```html
<!-- build:<type> <path> -->
... HTML Markup, list of script / link tags.
<!-- endbuild -->
```

## JS stuff
Comparing to minifying, uglifying does both, removing unnecessary white-space and redundant like comments and semicolons 
and is transforming the code into an "unreadable" form by changing variable names, function names, etc, to hide the 
original content. Once it is used there's no way to reverse it back.

```sh
npm install --save-dev gulp-uglify
```

## Stuff for CSS and JS
This module is used for both, CSS and JS.
```sh
npm install --save-dev gulp-useref
```

Alternativen
npm install --save-dev gulp-cssnano

# Gulp
see https://gulpjs.com/docs/en/getting-started/quick-start

# Deployment

```sh
gulp build
```
