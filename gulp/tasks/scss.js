import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";

// Стиснення css файлу
import cleanCss from "gulp-clean-css";

// Вивід webp зображень
// import webpcss from 'gulp-webpcss';

// Додавання вендорних префіксів
import autoPrefixer from "gulp-autoprefixer";

// Групування медіа запитів
import groupCssMediaQueries from "gulp-group-css-media-queries";

const sass = gulpSass(dartSass);

export const scss = () =>
  app.gulp
    .src(app.path.src.scss, { sourcemaps: true })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "CSS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(app.plugins.replace(/@img\//g, "../img/"))
    .pipe(
      sass({
        outputStyle: "expanded",
      })
    )
    .pipe(groupCssMediaQueries())
    // .pipe(webpcss({
    //   webpClass: ".wepb",
    //   noWebpClass: ".no-webp"
    // }))
    .pipe(
      autoPrefixer({
        grid: true,
        overrideBrowserlist: ["last 3 versions"],
        cascade: true,
      })
    )
    // .pipe(app.gulp.dest(app.path.build.css)) // Розкоментувати якщо потрібно немініфікований slyle.css
    .pipe(cleanCss())
    .pipe(
      rename({
        extname: ".min.css",
      })
    )
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browserSync.stream());
