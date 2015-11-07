var gulp = require("gulp"),
	uglify = require("gulp-uglify"),
	rename = require("gulp-rename");
    minifyCSS = require('gulp-minify-css');

gulp.task("scripts", function(){
	gulp.src("views/js/main.js")
	.pipe(uglify())
	.pipe(rename("main.min.js"))
	.pipe(gulp.dest("views/js/"));
});

gulp.task("styles", function(){
	gulp.src("views/css/bootstrap-grid.css")
	.pipe(minifyCSS())
	.pipe(rename("bootstrap-grid.min.css"))
	.pipe(gulp.dest("views/css/"));

	gulp.src("views/css/style.css")
	.pipe(minifyCSS())
	.pipe(rename("style.min.css"))
	.pipe(gulp.dest("views/css/"));
});
gulp.task("default", ["scripts","styles"]);
