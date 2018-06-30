var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*']
});
var minifyCss = require('gulp-minify-css');

gulp.task('lessdev', function() {
    gulp
        .src(['public/less/*.less','!public/less/common.less', '!public/less/mixin.less'])
        .pipe($.less())
        .pipe(minifyCss())
        .pipe(gulp.dest('public/stylesheets/'));
});

gulp.task('jsdev', function() {
    gulp
        .src('public/**/*.js')
        .pipe(
            $.babel({
                presets: ['env']
            })
        )
        .pipe($.uglify())
        .pipe(gulp.dest('public/javascripts/'));
});

gulp.task('watch', function() {
    gulp.watch('public/less/*.less', ['lessdev']);
    gulp.watch('public/**/*.js', ['jsdev']);
});
