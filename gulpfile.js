var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*']
});
var minifyCss = require('gulp-minify-css');
var browserSync = require('browser-sync').create();

function swallowError(error) {
    console.error(error.toString());
    this.emit('end');
}

gulp.task('lessdev', function() {
    gulp.src(['app/dev/less/*.less', '!app/dev/less/common.less', '!app/dev/less/mixin.less'])
        .pipe($.less())
        .pipe(
            $.autoprefixer({
                browsers: ['last 3 Safari versions', 'last 2 Explorer versions', 'iOS 7', 'Firefox >= 20'],
                cascade: false
            })
        )
        .on('error', swallowError)
        .pipe(minifyCss())
        .pipe(gulp.dest('public/css/'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('jsdev', function() {
    gulp.src('app/dev/js/*.js')
        .pipe(
            $.babel({
                presets: ['env']
            })
        )
        .on('error', swallowError)
        .pipe($.uglify())
        .pipe(gulp.dest('public/js/'))
        .pipe(browserSync.reload({stream: true}));

});

gulp.task('server', function() {
    browserSync.init({
        proxy: 'http://localhost:3000',
        files: ['app/views/**/*.pug', 'public/js/*.js', 'public/css/*.css']
    });
    gulp.watch('app/dev/less/*.less', ['lessdev']);
    gulp.watch('app/dev/js/*.js', ['jsdev']);
    gulp.watch('app/views/**/*.pug').on('change', browserSync.reload);
});

gulp.task('default', ['server']);
