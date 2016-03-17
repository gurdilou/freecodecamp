var gulp = require('gulp');
var exec = require('gulp-exec');


gulp.task('default', ['watch']);


//Watch source
gulp.task('watch', function() { //'default'

  var options = {
      continueOnError: true, // default = false, true means don't emit error event
      pipeStdout: false, // default = false, true means stdout is written to file.contents
    };
  var reportOptions = {
    	err: true, // default = true, false means don't write err
    	stderr: true, // default = true, false means don't write stderr
    	stdout: true // default = true, false means don't write stdout
    };


  gulp.watch(['*.js'])
  .on("change", function(file) {
      gulp
        .src(file.path)
        .pipe(exec('node <%=file.path%>', options))
        .pipe(exec.reporter(reportOptions));
  });
});
