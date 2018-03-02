/*
* @Author: Tong Ji
* @Date:   2017-11-19 20:55:07
* @Last Modified by:   Tong Ji
* @Last Modified time: 2017-12-07 22:38:00
*/
require('./gulp/tasks/styles');
require('./gulp/tasks/watch');
// var gulp = require('gulp');
// var watch = require('gulp-watch');
// var postcss = require('gulp-postcss');
// var autoprefixer = require('autoprefixer');
// var cssvars = require('postcss-simple-vars');
// var nested = require('postcss-nested');
// var cssImport = require('postcss-import');
//var browserSync = require('browser-sync').create();



// gulp.task('styles', function(){
//     return gulp.src('./app/assets/styles/styles.css')
//     .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
//     .pipe(gulp.dest('./app/temp/styles'));
// });

// gulp.task('watch', function(){
//     browserSync.init({
//         server: {
//             baseDir: "app"
//         }
//     });

//     watch('./app/index.html', function(){
//         browserSync.reload();
//     });

//     watch('./app/assets/styles/**/*.css', function(){
//         gulp.start('cssInject');
//     });
// });

// gulp.task('cssInject', ['styles'], function(){
//     return gulp.src('./app/temp/styles/styles.css')
//     .pipe(browserSync.stream());
// });