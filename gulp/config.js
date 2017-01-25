/*jslint node: true */

module.exports = function() {
    var client = './src/client/';

    var config = {
        css: './.tmp/**/*.css',
        url: "metalpark.whatup",

        js: [
            client + '**/*.js',
            './gulp/*.js',
            './*.js'
        ],
        html: client + '**/*.html',
        partials: './partials/**/*',
        source: 'src/',
        temp: './.tmp/',
        build: './dist/',
        fonts: './bower_components/font-awesome/fonts/**/*.*',
        images: client + '/images/**/*.*',
        htmlTemplates: client + 'app/**/*.html',

        paths: {
            src: client,
            nodeServer: './src/server/app.js',
            client: client,
            test: './test',
            index: client + '/**/*.html',
            injectableJs: [
                client + '**/*.js',
                '!src/**/*.spec.js'
            ],
            //css: client + 'styles/*.scss'
            css: client + 'styles/**/*.scss'
        },
        defaultPort: 7203,
        /* delay for browser sync */
        browserReloadDelay: 1000,

        /* templatecache */
        templateCache: {
            file: 'templates.js',
            options: {
                module: 'app.core',
                standAlone: false,
                root: 'app/'
            }
        }
    };

    return config;
};
