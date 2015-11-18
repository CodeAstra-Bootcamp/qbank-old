var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');

gulp.task('sass', function(){
  return gulp.src('assets/css/src/*.scss')
  .pipe(sass('app.css'))
  .pipe(gulp.dest('assets/css/'))
  .pipe(browserSync.reload({
    stream: true
  }))
});

gulp.task('concat', function(){
  return gulp.src('assets/js/src/**/*.js')
  .pipe(concat('app.js'))
  .pipe(gulp.dest('assets/js/'))
  .pipe(browserSync.reload({
    stream: true
  }))
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: './assets/'
    },
  })
});

gulp.task('watch', ['browserSync', 'sass'], function() {
  gulp.watch('./assets/css/src/*.scss', ['sass']);
  gulp.watch('./assets/*.html', browserSync.reload);
  gulp.watch('./assets/js/src/**/*.js', ['concat', browserSync.reload]);

});

gulp.task('default', ['sass', 'concat', 'watch']);