var gulp = require('gulp'),
rename = require('gulp-rename'),
uglify = require('gulp-uglify'),
concat = require('gulp-concat'),
sass = require('gulp-sass');

gulp.task("default", function(){
	gulp.src('./sass/layouts/*.scss')
	.pipe(sass())
	.pipe(uglify())
	.pipe(concat('all.css'))
	.pipe(gulp.dest('./build/css'))
});

