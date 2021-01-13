// Main
const gulp = require('gulp');
const { series, parallel } = require('gulp');
const gulpIf = require('gulp-if');

// CSS stuff
const cleanCSS = require('gulp-clean-css');

// JS stuff

// All stuff
const useref = require('gulp-useref');

/**
 * Default task.
 * @param cb
 */
function defaultTask(cb) {
    // place code for your default task here
    cb();
}

function clean(cb) {
    // body omitted
    cb();
}

function cssTranspile(cb) {
    // body omitted
    cb();
}

/**
 * Clean the CSS (Whitespace, comments, etc.)
 * Concat CSS to style.min.css
 * Deploy the file to dist/css
 * @returns {*}
 */
function cssMinify() {
    return gulp.src('public/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.css', cleanCSS({compatibility: 'ie8'})))
        .pipe(gulp.dest('dist'));
}

function jsTranspile(cb) {
    // body omitted
    cb();
}

function jsBundle(cb) {
    // body omitted
    cb();
}

function jsMinify(cb) {
    // body omitted
    cb();
}

function publish(cb) {
    // body omitted
    cb();
}

/**
 * Build all.
 */
exports.build = series(
    clean,
    parallel(
        cssTranspile,
        series(jsTranspile, jsBundle)
    ),
    parallel(cssMinify, jsMinify),
    publish
);

// Run and build CSS stuff only.
exports.css = series(cssTranspile, cssMinify);

// Default test task.
exports.default = defaultTask;
