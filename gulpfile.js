var gulp = require('gulp');
var sass = require('gulp-sass');
var browsersync = require('browser-sync');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var webpack = require('webpack-stream');
var uglify = require('gulp-uglifyjs');

// BrowserSync Options
var bsOptions = {
    server: { baseDir: "./" }
};


// Defining the sass task to process, compile and prefix the css
gulp.task('sass', function(){

    gulp.src('src/scss/main.scss')
    .pipe(sass({
        includePaths: ['src/scss']
        //,outputStyle: 'compressed'
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('styles'))

});

/*
    This task sets up Webpack for compiling Javascript assets
*/

gulp.task('webpack', function(){
    return gulp.src("src/js/main.js")
        .pipe(webpack({ output: {filename: 'main.js'} }))
        .pipe(gulp.dest('scripts/'));

});

/*
    This task sets up Browsersync for live reloading when the
    scss files are updated
*/

gulp.task('browser-sync', function(){
    browsersync.init(
        ["styles/*.css", "index.html"],
        bsOptions //we defined this above, remember?
    );
});


/*
    This task will run when you run "gulp" from the command line and
    will watch your SCSS files for changes
*/

gulp.task('default', ['sass', 'webpack', 'browser-sync'], function(){
    gulp.watch("src/**/*.scss", ['sass']);
    gulp.watch("src/js/*.js", ["webpack"]);
});




gulp.task('build', function(){
    gulp.src('src/scss/main.scss')
    .pipe(sass({
        includePaths: ['src/scss'],
        outputStyle: 'compressed'
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('styles'));

    gulp.src("src/js/main.js")
    .pipe(webpack({ output: {filename: 'main.js'} }))
    .pipe(uglify())
    .pipe(gulp.dest('scripts/'));    

});