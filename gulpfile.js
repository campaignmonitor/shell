var gulp = require('gulp');
var postcss = require('gulp-postcss');
var reporter = require('postcss-reporter');
var stylelint = require('stylelint');
var syntaxScss = require('postcss-scss');

var lintCSSFiles = [
    'src/**/*.scss',
    'docs/src/**/*.scss',
    'test/src/**/*.scss',
    '!node_modules/**',
];

gulp.task('lint', function () {
    var processors = [
        stylelint(),
        reporter({
            clearMessages: true,
            throwError: false
        })
    ];
    return gulp.src(lintCSSFiles).pipe(postcss(processors, {syntax: syntaxScss}));
});
