'use strict';

module.exports = function(grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // Watch
        watch: {

            // Compile Shell
            compileShell: {
                files: [
                    '../src/**/*.scss'
                ],
                tasks: [
                    'sass:compileShell',
                    'postcss:compileShell',
                    'cssnano:minifyShell'
                ]
            },

            // Dev
            dev: {
                files: [
                    'src/assets/scss/**/*.scss',
                    'src/**/*'
                ],
                tasks: [
                    'sass:dev',
                    'postcss:dev',
                    'assemble'
                ]
            }
        },

        // Assemble
        assemble: {
            options: {
                flatten: true,
                assets: 'src/assets/',
                layout: 'master.hbs',
                layoutdir: 'src/layouts/',
                partials: 'src/partials/**/*',
                data: ['src/data/**/*', 'package.json'],
                helpers: ['helpers/helpers.js']
            },
            pages: {
                files: [{
                    expand: true,
                    cwd: 'src/views/',
                    src: '**/*.hbs',
                    dest: 'dist/'
                }]
            }
        },

        // Sass compilation
        sass: {
            options: {
                sourceMap: true,
                outputStyle: 'expanded',
                precision: 3
            },
            compileShell: {
                files: [{
                    expand: true,
                    cwd: '../src',
                    src: '**/*.scss',
                    dest: '../dist',
                    ext: '.css'
                }]
            },
            dev: {
                files: [{
                    expand: true,
                    cwd: 'src/assets/scss',
                    src: '**/*.scss',
                    dest: 'dist/css',
                    ext: '.css'
                }]
            }
        },

        // CSS minification
        cssnano: {
            options: {
                sourcemap: false
            },
            minifyShell: {
                files: {
                    '../dist/shell.min.css': '../dist/shell.css'
                }
            }
        },

        // PostCSS
        postcss: {
            options: {
                map: false,
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 1 version', 'ie 10', 'ie 11']
                    })
                ]
            },
            compileShell: {
                expand: true,
                cwd: '../dist',
                src: '*.css',
                dest: '../dist'
            },
            dev: {
                expand: true,
                cwd: 'dist/css',
                src: '*.css',
                dest: 'dist/css'
            }
        },

        // Connect
        connect: {
            dev: {
                options: {
                    port: 9000,
                    base: 'dist/'
                }
            }
        },

        // Clean
        clean: {
            compileShell: {
                options: {
                    force: true
                },
                files: [{
                    dot: true,
                    src: ['../dist/*']
                }]
            },
            dev: {
                files: [{
                    dot: true,
                    src: ['dist/*']
                }]
            }
        }
    });

    // Register tasks and define them

    // Register tasks
    grunt.loadNpmTasks('grunt-assemble');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-cssnano');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-sass');

    // Serve
    grunt.registerTask('serve', [
        'clean:dev',
        'assemble',
        'sass:dev',
        'postcss:dev',
        'connect',
        'watch:dev'
    ]);

    // Compile Shell
    grunt.registerTask('compileShell', [
        'clean:compileShell',
        'sass:compileShell',
        'postcss:compileShell',
        'cssnano:minifyShell'
    ]);

    // Compile Shell & watch
    grunt.registerTask('compileShellWatch', [
        'compileShell',
        'watch:compileShell'
    ]);

    // Default
    grunt.registerTask('default', [
        'serve'
    ]);
};
