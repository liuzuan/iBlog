var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*']
});
var minifyCss = require('gulp-minify-css');

gulp.task('lessdev', function() {
    gulp
        .src(['app/dev/less/*.less','!app/dev/less/common.less', '!app/dev/less/mixin.less'])
        .pipe($.less())
        .pipe(minifyCss())
        .pipe(gulp.dest('public/css/'));
});

gulp.task('jsdev', function() {
    gulp
        .src('app/dev/js/*.js')
        .pipe(
            $.babel({
                presets: ['env']
            })
        )
        .pipe($.uglify())
        .pipe(gulp.dest('public/js/'));
});

gulp.task('watch', function() {
    gulp.watch('app/dev/less/*.less', ['lessdev']);
    gulp.watch('app/dev/js/*.js', ['jsdev']);
});
