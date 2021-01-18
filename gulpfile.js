// Main gulp stuff
const gulp = require('gulp');
const { series, parallel } = require('gulp');
const gulpIf = require('gulp-if');

// CSS stuff
const cleanCSS = require('gulp-clean-css');

// JS stuff
const uglify = require('gulp-uglify');

// All stuff
const del = require('del');
const useref = require('gulp-useref');

/**
 * Default task.
 * @param cb
 */
function defaultTask(cb) {
    // place code for your default task here
    cb();
}

/**
 * Clean whole dist directory.
 * @return {Promise<string[]> | any}
 */
function clean() {
    return del([
        'dist/*/'
    ]);
}

/**
 * Only clean the css directory.
 * @returns {Promise<string[]> | *}
 */
function cssClean() {
    return del([
        'dist/css/*.css'
    ]);
}

/**
 * Clean the CSS (Whitespace, comments, etc.)
 * Concat CSS to style.min.css
 * Deploy the file to dist/css
 * @returns {*}
 */
function cssMinify() {
    return gulp.src('public/*.{html,php}')
        .pipe(useref())
        .pipe(gulpIf('*.css', cleanCSS({compatibility: 'ie8'})))
        .pipe(gulp.dest('dist'));
}

/**
 * Only clean the js directory.
 * @returns {Promise<string[]> | *}
 */
function jsClean() {
    return del([
        'dist/js/*.js'
    ]);
}

/**
 * Minify JS code.
 * @returns {*}
 */
function jsMinify() {
    return gulp.src('public/*.{html,php}')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest('dist'));
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
    cssMinify,
    jsMinify,
    publish
);

// Run and build CSS stuff only.
exports.css = series(cssClean, cssMinify);

// Run and build JS stuff only.
exports.js = series(jsClean, jsMinify);

// Default test task.
exports.default = defaultTask;
