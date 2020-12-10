var gulp = require('gulp');
var ejs = require("gulp-ejs")
var rename = require('gulp-rename')
var imagemin = require('gulp-imagemin')


gulp.task('image', function() {
  return gulp.src('images/xinwen/*')
        .pipe(imagemin([
          imagemin.gifsicle({interlaced: true}),
          imagemin.mozjpeg({quality: 75, progressive: true}),
          imagemin.optipng({optimizationLevel: 5}),
        ]))
        .pipe(gulp.dest('images/xinwen'))
});

gulp.task('default', function() {
  gulp.src('template/**.ejs')
  .pipe(ejs({}))
  .pipe(rename({ extname: '.html' }))
  .pipe(gulp.dest('./'))
});
