var gulp = require("gulp");
var sass = require("gulp-sass");
var watch = require("gulp-watch");
var csso = require("gulp-csso");
var concat = require("gulp-concat");
var browserSync = require("browser-sync").create();
var selectors = require("gulp-selectors");

/* Static Server + watching scss/html files */
gulp.task("serve", ["css:build"], function() {

  browserSync.init({
    server: "./"
  });

  gulp.watch("*.html").on("change", browserSync.reload);
  gulp.watch("blocks/*.scss", ["css:build"]);
});

/* Compile Sass into CSS & auto-inject into browsers */
gulp.task("sass", function() {
  return gulp.src("blocks/page.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("css"));
});

/* Concatenate and minify CSS */
gulp.task("css:build", ["sass"], function() {
  gulp.watch("css/page.css").on("change", function() {
    return gulp.src("css/page.css")
      .pipe(concat("style.css"))
      .pipe(csso({
        comments: false
      }))
    .pipe(gulp.dest("."))
    .pipe(browserSync.stream());
  });
});

gulp.task("default", ["sass", "css:build", "serve"]);