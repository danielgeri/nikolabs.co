var gulp = require('gulp');
var pug = require('pug');
var fs = require('fs')

gulp.task('default', convertPugToHtml);
gulp.watch('./src/**/*', gulp.series('default'));

function convertPugToHtml(done) {
  const htmlContent = pug.renderFile('./src/index.pug');
  fs.writeFile('index.html', htmlContent, () => {});
  done();
}

