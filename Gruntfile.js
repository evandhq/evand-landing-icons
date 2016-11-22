module.exports = function (grunt) {
    grunt.initConfig({
        webfont: {
            icons: {
                src: 'src/*.svg',
                dest: 'build',
                options: {
                    hashes: false,
                    types: ['eot', 'woff2', 'woff', 'ttf'],
                    fontFilename: 'EvandIcons',
                    font: 'EvandIcons',
                    templateOptions: {
                        baseClass: 'evic',
                        classPrefix: 'evic-'
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-webfont');

    grunt.registerTask('default', ['webfont']);
};
