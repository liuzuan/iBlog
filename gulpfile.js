var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*']
});
var minifyCss = require('gulp-minify-css');

gulp.task('lessdev', function() {
    gulp
        .src(['public/dev/less/*.less','!public/dev/less/common.less', '!public/dev/less/mixin.less'])
        .pipe($.less())
        .pipe(minifyCss())
        .pipe(gulp.dest('public/dist/css/'));
});

gulp.task('jsdev', function() {
    gulp
        .src('public/dev/js/*.js')
        .pipe(
            $.babel({
                presets: ['env']
            })
        )
        .pipe($.uglify())
        .pipe(gulp.dest('public/dist/js/'));
});

gulp.task('watch', function() {
    gulp.watch('public/less/*.less', ['lessdev']);
    gulp.watch('public/**/*.js', ['jsdev']);
});
