const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// creacion para plantillas
mix.styles([
    'resources/css/main.min.css',

], 'public/css/app/app.css');

mix.scripts([
    'resources/js/main.min.js',
    'resources/js/locales-all.min.js',
    'resources/js/schedule.js',

], 'public/js/app/app.js');



mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .sourceMaps();
