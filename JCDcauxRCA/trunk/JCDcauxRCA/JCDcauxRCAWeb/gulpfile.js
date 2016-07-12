/**
 * Created by Amit.Mahida on 12-04-2016.
 */

const gulp = require('gulp');

//to update the new distribution
const del = require('del');

//for injecting paths in index.html
const inject = require('gulp-inject');

//for js
const uglify = require('gulp-uglify');

// for concatenation
const concat = require('gulp-concat');

//for css
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

//for image minification
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');

//for sonar runner
const sonar = require('gulp-sonar');

//to zip the distribution folder
const zip = require('gulp-zip');

const typescript = require('gulp-typescript');

const tscConfig = require('./tsconfig.json');
const tslint = require('gulp-tslint');

const appSource = ['app/*.ts','app/**/*.ts'];
const jsSource = [
    "node_modules/es6-shim/es6-shim.min.js",
    "node_modules/systemjs/dist/system-polyfills.js",
    "node_modules/angular2/bundles/angular2-polyfills.js",
    "node_modules/systemjs/dist/system.src.js",
    "node_modules/rxjs/bundles/Rx.js",
    "node_modules/angular2/bundles/http.dev.js",
    "node_modules/angular2/bundles/angular2.dev.js",
    "node_modules/angular2/bundles/router.dev.js",
    "node_modules/ng2-pagination/dist/ng2-pagination-bundle.js",
    "scripts/system-config.js",
    "scripts/jquery-1.11.3.min.js",
    "scripts/jquery.toaster.js",
    "scripts/arrive.min.js",
    "scripts/material.js",
    "scripts/ripples.min.js"
];
const cssSource = [
    "css/bootstrap.min.css",
    "css/bootstrap-material-design.css",
    "css/ripples.min.css",
    "css/font-awesome.min.css",
    "css/animate.css",
    "css/main.css"
];

// clean the contents of the distribution directory
gulp.task('clean', function () {
    return del('dist/**/*');
});

// to generate paths in main index.html
gulp.task('index-main', function () {
    var target = gulp.src('index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var jsLibraries = gulp.src(jsSource);
    var cssLibraries = gulp.src(cssSource);

    var optionsCss = {
        addRootSlash: false,
        transform: function (filepath) {
            if (filepath.slice(-4) === '.css') {
                return '<script> renderCSS("' + filepath + '"); </script>';
            }
            // Use the default transform as fallback:
            return inject.transform.apply(inject.transform);
        }
    };
    var optionsJs = {
        addRootSlash: false, name: 'head',
        transform: function (filepath) {
            if (filepath.slice(-3) === '.js') {
                return '<script> renderJS("' + filepath + '"); </script>';
            }
            // Use the default transform as fallback:
            return inject.transform.apply(inject.transform);
        }
    };

    return target
        .pipe(inject(cssLibraries, optionsCss))
        .pipe(inject(jsLibraries, optionsJs))
        .pipe(gulp.dest('./'));
});


// to generate paths in index.html in distribution
gulp.task('index-dist', function () {
    var target = gulp.src('index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var jsLibraries = gulp.src([
        "scripts/rca.bundle.js"
    ]);
    var cssLibraries = gulp.src([
        "css/rca.bundle.css"
    ]);

    var optionsCss = {
        addRootSlash: false, ignorePath: ["content/*.css"],
        transform: function (filepath) {
            if (filepath.slice(-4) === '.css') {
                return '<script> renderCSS("' + filepath + '"); </script>';
            }
            // Use the default transform as fallback:
            return inject.transform.apply(inject.transform);
        }
    };
    var optionsJs = {
        addRootSlash: false, ignorePath: ["scripts/*.js"], name: 'head',
        transform: function (filepath) {
            if (filepath.slice(-3) === '.js') {
                return '<script> renderJS("' + filepath + '"); </script>';
            }
            // Use the default transform as fallback:
            return inject.transform.apply(inject.transform);
        }
    };

    return target
        .pipe(inject(cssLibraries, optionsCss))
        .pipe(inject(jsLibraries, optionsJs))
        .pipe(gulp.dest('dist'));
});

// TypeScript compile
gulp.task('compile', ['clean'], function () {
    return gulp
        .src(appSource)
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(uglify())
        .pipe(gulp.dest('dist/app'));
});

// copy & minify all css
gulp.task('copy:libs-css', ['clean'], function () {
    return gulp.src(cssSource)
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(concat('rca.bundle.css'))
        .pipe(gulp.dest('dist/css'))
});

// copy & minify all js libraries
gulp.task('copy:libs-scripts', ['clean'], function () {
    return gulp.src(jsSource)
        .pipe(concat('rca.bundle.js'))
        .pipe(gulp.dest('dist/scripts'))
});

// copy static assets - i.e. non TypeScript compiled source
gulp.task('copy:assets', ['clean'], function() {
    return gulp.src(['app/**/*.html', '!app/**/*.ts'], { base : './' })
        .pipe(gulp.dest('dist'))
});

// copy static assets - i.e. non TypeScript compiled source
gulp.task('copy:fonts', ['clean'], function() {
    return gulp.src(['css/font-awesome-4.5.0/font-awesome-4.5.0/fonts/*'])
        .pipe(gulp.dest('dist/fonts'))
});

//Minify image for distribution
gulp.task('image:minify', ['clean'], function () {
    return gulp.src('img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('tslint', function() {
    return gulp.src(['app/**/*.ts', 'app/*.ts'])
        .pipe(tslint())
        .pipe(tslint.report('verbose'));
});

gulp.task('build', ['compile','copy:libs-css','copy:fonts','copy:libs-scripts','copy:libs-css','copy:assets','image:minify','index-dist']);
gulp.task('default', ['index-main','build']);
