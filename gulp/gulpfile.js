var gulp = require('gulp'), 
    rename =      require('gulp-rename'),
    uglify = require('gulp-uglify'), 
    concat = require('gulp-concat'), 
    imagemin = require('gulp-imagemin'), 
    csso = require('gulp-csso'), 
    sass = require('gulp-sass'); 
 

gulp.task('sass', function () { 
  gulp.src('src/scss/style.scss') 
    .pipe(sass().on('error', sass.logError)) 
    .pipe(csso()) 
    .pipe(rename("style.main.min.css"))
    .pipe(gulp.dest('dist/css/')); 
});


gulp.task('js', function() {
    gulp.src([
                'src/script/isotope.pkgd.min.js',
                'src/script/jquery.jcarousel.js',
                'src/script/main.js'
        ]) 
        .pipe(concat('script.main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/script/')) 
});
 

gulp.task('images', function() {
    gulp.src('src/img/**/*') 
        .pipe(imagemin()) 
        .pipe(gulp.dest('dist/img')) 
 
});
gulp.task('default', ['sass','js','images']);
