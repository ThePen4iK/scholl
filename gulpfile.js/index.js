global.$ = {
  gulp: require('gulp'),
  browserSync: require('browser-sync').create(),

  // Конфигурация
  path: require('./config/path'),
  app: require('./config/app')
}

// Задачи
const clear = require('./tasks/clear.js')
const server = require('./tasks/server.js')
const html = require('./tasks/html.js')
const scss = require('./tasks/scss.js')
const js = require('./tasks/js.js')
const img = require('./tasks/img.js')
const font = require('./tasks/font.js')
const sprite = require('./tasks/sprite.js')

// Наблюдение
const watcher = () => {
  $.gulp.watch($.path.html.watch, html)
  $.gulp.watch($.path.scss.watch, scss)
  $.gulp.watch($.path.js.watch, js)
  $.gulp.watch($.path.img.watch, img)
  $.gulp.watch($.path.font.watch, font)
  $.gulp.watch($.path.sprite.watch, sprite)
}

const build = $.gulp.series(clear, $.gulp.parallel(html, scss, js, img, font, sprite))
const dev = $.gulp.series(build, $.gulp.parallel(watcher, server))

// Задачи
exports.html = html
exports.scss = scss
exports.js = js
exports.img = img
exports.font = font
exports.sprite = sprite


// Сборка
exports.default = $.app.isProd ? build : dev
