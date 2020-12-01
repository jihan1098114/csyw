var gulp = require('gulp');
var ejs = require("gulp-ejs")
var rename = require('gulp-rename')

gulp.task('default', function() {
  gulp.src('template/**.ejs')
  .pipe(ejs({}))
  .pipe(rename({ extname: '.html' }))
  .pipe(gulp.dest('./'))
});
