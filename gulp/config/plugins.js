import replace from "gulp-replace"; // пошук і заміна
import plumber from "gulp-plumber"; // обробка помилок
import notify from "gulp-notify"; // повідомленняб підказки
import browserSync from "browser-sync"; // для лайв режиму браузера
import newer from "gulp-newer"; // Для перевірки оновлень

export const plugins = {
  replace,
  plumber,
  notify,
  browserSync,
  newer,
};
