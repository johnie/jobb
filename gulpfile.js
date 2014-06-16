var gulp        = require('gulp'),
    concat      = require('gulp-concat'),
    changed     = require('gulp-changed'),
    uglify      = require('gulp-uglify'),
    coffee      = require('gulp-coffee'),
    stylus      = require('gulp-stylus'),
    plumber     = require('gulp-plumber'),
    gutil       = require('gulp-util'),
    livereload  = require('gulp-livereload');

var paths = {
  scripts: "js/**/*.{js,coffee}",
  style: "style/**/*.styl",
  html: "./*.{html,php}"
};

gulp.task('scripts', function(){
  return gulp.src(paths.scripts)
    .pipe(plumber())
    .pipe(uglify())
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest('js/'))
    .pipe(livereload());
});

gulp.task('coffee', function() {
  gulp.src('./js/coffee/*.coffee')
    .pipe(plumber())
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./js/'))
    .pipe(livereload());
});

gulp.task('stylus', function() {
  gulp.src('style/style.styl')
    .pipe(plumber())
    .pipe(stylus({
      set:['compress']
    }))
    .pipe(gulp.dest('./'))
    .pipe(livereload());
});

gulp.task('html', function() {
  gulp.src(paths.html)
    .pipe(livereload());
});

gulp.task('watch', function() {
  gulp.watch(paths.style, ['stylus',]);
  gulp.watch(paths.html, ['html']);
  gulp.watch(paths.scripts, ['coffee']);
});

gulp.task('default', ['stylus', 'html', 'coffee', 'watch']);
