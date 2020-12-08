"use strict"; 
const gulp = require('gulp'); 
const sass = require('gulp-sass'); 
const autoprefixer = require('gulp-autoprefixer');
const del = require('del'); 
const folders = { root: './Themes/Lepton/Global/Styles/' };

// Compile scss files and write same folder
gulp.task('scss', () => {
    return gulp.src(folders.root + '/**/*.scss')
        .pipe(sass({
            outputStyle: 'nested',
            precision: 10,
            includePaths: ['.']
        }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest(folders.root)); 
});

// Clean css files
gulp.task('clean', () => del([folders.root + '*.css']));

// Watch any changes in every scss files and re-run scss task. 
gulp.task('watch', () => {
    gulp.watch(folders.root + '/**/*.scss', gulp.series('scss'));
});

// When watching scss files, Clean css file everytime and re-run scss task again. 
// This code works gulp4x and after.For gulp3x should use runSequence or something else.
gulp.task('default', gulp.series('clean', 'scss', 'watch',  function (done) {
    done();
}));