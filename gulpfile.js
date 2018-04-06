const gulp = require('gulp'),
    babel = require('gulp-babel');

gulp.task('default', () => {
    return gulp.src('src/mqe.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('dist'));
});
