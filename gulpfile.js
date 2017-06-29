// Getting all the required packages from gulp and its required plugins
// All these plugins are required to run and convert scss, images , html files
let gulp = require('gulp');
let plugins = require('gulp-load-plugins')();
// let sass = require('gulp-sass');
// let autoprefixer = require('gulp-autoprefixer');
// let cssMin = require('gulp-cssmin');
// let sourcemaps = require('gulp-sourcemaps');



// Adding the default task to check if gulp command is working or Notification.
gulp.task('default', function () {
  console.log("Gulp is running");
});

// Adding the css task to compile the scss files to css files
// This is done using the additional plugin 'gulp-sass'
gulp.task('css', function () {
  return gulp.src(['./src/sass/main.scss'])
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(plugins.cssmin())
    .pipe(plugins.autoprefixer())
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest('./dist/css'))
});


// Adding the JS file

gulp.task('js', function () {
  return gulp.src([
    './node_modules/jquery/dist/jquery.min.js',
    './src/js/main.js',
    './src/js/part.js'
    ])
    .pipe(plugins.babel({
      presets: ['es2015']
    }))
    .pipe(plugins.concat('all.js'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest('./dist/js'))
});

// Adding the watch task

gulp.task('watch', function(){
  gulp.watch(['./src/sass/main.scss'], ['css']);
  gulp.watch(['./src/js/*.js'], ['js']);
});
