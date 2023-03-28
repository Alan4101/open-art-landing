import fileinclude from "gulp-file-include";
// import webpHtmlNosvg from  "gulp-webp-html-nosvg" //For include webp files
// import pug from 'gulp-pug' // If we use pug, comment fileInclude and uncomment pipe with pug
import versionNumber from "gulp-version-number";

export const html = () =>
  app.gulp
    .src(app.path.src.html)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "HTML",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(fileinclude())
    // .pipe(pug({
    //     pretty: true,
    //     verbose: true
    // }))
    .pipe(app.plugins.replace(/@img\//g, "img/"))
    // .pipe(webpHtmlNosvg())
    .pipe(
      versionNumber({
        value: "%DT%",
        append: {
          key: "_v",
          cover: 0,
          to: ["css", "js"],
        },
        output: {
          file: "gulp/version.json",
        },
      })
    )
    .pipe(app.gulp.dest(app.path.build.html))
    // Налаштування live development
    .pipe(app.plugins.browserSync.stream());
