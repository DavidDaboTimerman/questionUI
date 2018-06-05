var gulp = require('gulp')
var concat = require('gulp-concat')
var sourcemaps = require('gulp-sourcemaps')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')

gulp.task('js', function () {
  gulp.src(['./app/*.js'])
    .pipe(sourcemaps.init())
      .pipe(concat('main.js'))
      .pipe(ngAnnotate())
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./output/'))
});

gulp.task('watch', ['js'], function () {
  gulp.watch('./*.js', ['js'])
});