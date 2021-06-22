const gulp = require("gulp");
const gap = require("gulp-append-prepend");

gulp.task("licenses", async function () {
  gulp
    .src("build/static/js/*chunk.js", { base: "./" })
    .pipe(
      gap.prependText(`/*!

=========================================================
* Uberazzi - v1.1.1
=========================================================
* Coded by LifeInt
=========================================================

*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  gulp
    .src("build/index.html", { base: "./" })
    .pipe(
      gap.prependText(`<!--

=========================================================
* Uberazzi - v1.1.1
=========================================================
* Coded by LifeInt
=========================================================
      

-->`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  gulp
    .src("build/static/css/*chunk.css", { base: "./" })
    .pipe(
      gap.prependText(`/*!

=========================================================
* Uberazzi - v1.1.1
=========================================================
* Coded by LifeInt
=========================================================

*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));
  return;
});
