/**
 * JavaScript Vendors Related Task
 * ===============================
 */

module.exports = function (gulp, $, options) {

    var concat = require('gulp-concat');
    var srcPath = options.assetsPath('src.js'),
        destPath = options.assetsPath('dist.js');

    if (options.production) {
        destPath = destPath.replace(options.paths.dist.root, options.paths.tmp);
    }

    gulp.task('vendors', function () {

        var vendorsJs = [];

        for (key in options.vendors) {
            vendorsJs.push( srcPath + '/../vendors' + options.vendors[key] );
        }

        return gulp.src(vendorsJs)
            .pipe(concat('vendors.js'))
            .pipe($.plumber({
                errorHandler: $.notify.onError('Error: <%= error.message %>')
            }))
            .pipe(gulp.dest(destPath) )
            .pipe($.if(options.isWatching, $.notify({ message: 'Vendors Scripts Compiled', onLast: true })))
            .pipe($.size({title: 'vendors scripts'}));
    });

};


