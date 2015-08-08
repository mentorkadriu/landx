var gulp            = require('gulp'),
    $           = require('gulp-load-plugins')(),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload;


gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./dist"
    }
  });
});


// Gulp default task if Libass selected
gulp.task('scss-libsass', function() {
    return gulp.src('src/scss/**/*.scss')
        .pipe($.plumber({
          errorHandler: function (error) {
            console.log(error.message);
            this.emit('end');
        }}))
        .pipe($.sass({
          outputStyle: 'nested',   // Type: String Default: nested Values: nested, compressed
          precision: 3 // Type: Integer Default: 5
        }))
        .pipe($.autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css'));
});



// Gulp default task for fonts

gulp.task('fonts', function(){
  return gulp.src('src/fonts/**/*')
    .pipe( gulp.dest('dist/fonts/'));
});


// Gulp default task for javascript

gulp.task('js', function() {
  return gulp.src('src/js/*.js')
    .pipe( gulp.dest('dist/js/'));
});


// Gulp default task for images

gulp.task('images', function() {
  return gulp.src('src/images/**/*')
    .pipe(gulp.dest('dist/images/'));
})



gulp.task('jade-templates', function() {
  return gulp.src('src/*.jade')
    .pipe($.plumber())
    .pipe($.jade({
      pretty: true
    }))
    .pipe( gulp.dest('dist/') );
});




// Gulp default task

gulp.task('default',[
  'browser-sync',
   'scss-libsass', 
  
  'fonts',
  'js',
  
  'jade-templates',
  
  'images'
  ], function () {
  
  gulp.watch('src/scss/**/*.scss',['scss-libsass', reload]);
  
  
  gulp.watch('src/fonts/**/*',['fonts', reload]);

  gulp.watch('src/js/*.js',['js', reload]);

  gulp.watch('src/images/**/*',['images', reload]);

  
  gulp.watch('src/*.jade',['jade-templates', reload]);
  
  
});
