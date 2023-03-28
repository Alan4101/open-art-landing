import gulp from "gulp";

import { path, plugins } from "./gulp/config/index.js";
import {
  copy,
  reset,
  html,
  server,
  scss,
  scripts,
  images,
} from "./gulp/tasks/index.js";

global.app = {
  path,
  gulp,
  plugins,
};

function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, scripts);
  gulp.watch(path.watch.images, images);
}

const mainTasks = gulp.parallel(copy, html, scss, scripts, images);

// Сценарій послідовності запуску задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

gulp.task("default", dev);
