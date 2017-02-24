var gulp = require('gulp');

gulp.task('sass', function() {
  // place code for your default task here
  return gulp.src('./sass/**/*.scss')
  	.pipe(sass().on('error', sass.logError))
  	.pipe(gulp.dest('.css/'))
})

gulp.task('js', function() {
  // place code for your default task here
  console.log('run js compiletion')
})

gulp.task('default', function() {
  // place code for your default task here
browserSync.init({
	server:{
		baseDir: "./app"
	}
	});
})

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});