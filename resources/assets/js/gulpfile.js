var bowerDir = 'bower_components';
var path = require('path');
var gulp = require('gulp');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var cached = require('gulp-cached');
var remember = require('gulp-remember');
var order = require('gulp-order');
var streamqueue = require('streamqueue');
var file = require('gulp-file');
var babelCore = require('babel-core');
function handleError(e) {
    console.log(e.toString());
    this.emit('end');
}
var options = {
    includeHelpers: true,
    files: [
        bowerDir + '/es6-micro-loader/dist/system-polyfill.js',
        bowerDir + '/mithril/mithril.js',
        bowerDir + '/m.attrs.bidi/bidi.js',
        bowerDir + '/jquery/dist/jquery.js',
        bowerDir + '/moment/moment.js',
        bowerDir + '/bootstrap/js/affix.js',
        bowerDir + '/bootstrap/js/dropdown.js',
        bowerDir + '/bootstrap/js/modal.js',
        bowerDir + '/bootstrap/js/tooltip.js',
        bowerDir + '/bootstrap/js/transition.js',
        bowerDir + '/spin.js/spin.js',
        bowerDir + '/spin.js/jquery.spin.js'
    ],
    modules: {
        'notadd': [
            'src/**/*.js',
        ]
    },
    outputFile: '../../../../../public/assets/admin/js/application.js'
};
gulp.task('default', function () {
    "use strict";
    var stream = streamqueue({objectMode: true});
    if (options.includeHelpers) {
        stream.queue(file('helpers.js', babelCore.buildExternalHelpers(null, 'global'), {src: true}));
    }
    stream.queue(gulp.src(options.files));
    for (var prefix in options.modules) {
        var modules = options.modules[prefix];
        stream.queue(
            gulp.src(modules)
                .pipe(order(Array.isArray(modules) ? modules : [modules]))
                .pipe(cached('modules'))
                .pipe(babel({
                    presets: [require('babel-preset-es2015'), require('babel-preset-react')],
                    plugins: [
                        [require('babel-plugin-transform-react-jsx'), {'pragma': 'm'}],
                        require('babel-plugin-transform-es2015-modules-systemjs'),
                        require('babel-plugin-transform-object-assign'),
                        require('babel-plugin-external-helpers')
                    ],
                    moduleIds: true,
                    moduleRoot: prefix
                }))
                .on('error', handleError)
                .pipe(remember('modules'))
        );
    }
    return stream.done()
        .pipe(concat(path.basename(options.outputFile), {newLine: ';\n'}))
        .pipe(gulp.dest(path.dirname(options.outputFile)));
});
gulp.task('watch', ['default'], function () {
    gulp.watch(options.files, ['default']);
    for (var prefix in options.modules) {
        var watcher = gulp.watch(options.modules[prefix], ['default']);
        watcher.on('change', function (event) {
            if (event.type === 'deleted') {
                delete cached.caches['modules' + prefix][event.path];
                remember.forget('modules' + prefix, event.path);
            }
        });
    }
});