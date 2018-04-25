'use strict';
 
var gulp = require('gulp');
var less = require('gulp-less');
 

var paths = {
  less: ['./less/**/*.less']
};

gulp.task('default', ['less', 'watch']);


gulp.task('less', function(done) {
  gulp.src('./less/style.less')
    .pipe(less({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('./css/'))
    .on('end', done);
});
gulp.task('watch', function() {
  gulp.watch(paths.less, ['less']);
});