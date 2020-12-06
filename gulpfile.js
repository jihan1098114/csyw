var gulp = require('gulp');
var ejs = require("gulp-ejs")
var rename = require('gulp-rename')
var imagemin = require('gulp-imagemin')


gulp.task('image', function() {
  return gulp.src('images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('images'))
});

gulp.task('default', function() {
  gulp.src('template/**.ejs')
  .pipe(ejs({}))
  .pipe(rename({ extname: '.html' }))
  .pipe(gulp.dest('./'))
});
