var gulp        = require('gulp');

var sass        = require('gulp-sass');
var concat       = require('gulp-concat');
var uglify       = require('gulp-uglify');

// Compile sass into CSS & auto-inject into browsers

gulp.task('sass', async function() {
    gulp.src('assets/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe (concat('style2.css'))
        
        .pipe(gulp.dest('assets/css/'))
});



//Watch task
gulp.task('default', async function() {
    gulp.watch('assets/scss/*.scss', gulp.parallel('sass'));
});

gulp.task('watch', async function(){
    return gulp.watch('src/scss/*.scss', gulp.series('sass'));
    
    });