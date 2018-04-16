var gulp = require('gulp');
var babelify = require('babelify');
var zip = require('gulp-zip');
var babel = require('gulp-babel');
var eslint = require('gulp-eslint');

var files = [
  'server/**/*.js',
  'src/**/*.js'
];

gulp.task('eslint', function () {
  return gulp.src(files)
    .pipe(eslint())
    .pipe(eslint.format());
});