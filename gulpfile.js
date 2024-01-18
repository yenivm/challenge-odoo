const{src, dest, watch, parallel} = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const plumber = require('gulp-plumber');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss')
const sourcemaps = require('gulp-sourcemaps')
const terser = require('gulp-terser-js')

function css(done){
    src('src/scss/**/*.scss') //Identifica el archivo a compilar
    .pipe(sourcemaps.init())
    .pipe( plumber() ) //evita que se detenga la ejecución si hay algún error en el código al compilarse
    .pipe( sass() ) //compila el archivo
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe( dest("build/css") ) // guarda el archivo compilado en la capeta destino
    done(); //callback que avisa a gulp que ya finalizó la tarea
}

function javascript(done){
    src('src/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(dest("build/js"));

    done();
}

function dev(done){
    watch("src/scss/**/*.scss", css);
    watch("src/scss/**/*.js", javascript);
    done();
}

exports.css = css;
exports.js = javascript;
exports.dev = parallel(css, javascript, dev);