'use strict';

module.exports = function(grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // Store 'src' and 'dist' locations
        app: {
            src: 'src',
            dist: 'dist',
            shellCompiled: 'shell-compile'
        },

        // Watch
        watch: {

            // Test Shell
            testShell: {
                files: [
                    '../<%= app.src %>/**/*.scss'
                ],
                tasks: [
                    'sass:testShell',
                    'postcss:testShell',
                    'cssnano:minifyShell'
                ]
            },

            // Dev
            dev: {
                files: [
                    '<%= app.src %>/_assets/scss/**/*.scss',
                    '<%= app.src %>/**/*'
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
                _assets: '<%= app.src %>/_assets/**/*',
                layout: 'master.hbs',
                layoutdir: '<%= app.src %>/layouts/',
                partials: '<%= app.src %>/partials/**/*',
                data: ['<%= app.src %>/data/**/*', 'package.json'],
                helpers: ['helpers/helpers.js']
            },
            pages: {
                files: [{
                    expand: true,
                    cwd: '<%= app.src %>/views/',
                    src: '**/*.hbs',
                    dest: '<%= app.dist %>/'
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
            testShell: {
                files: [{
                    expand: true,
                    cwd: '../src',
                    src: '**/*.scss',
                    dest: '<%= app.shellCompiled %>',
                    ext: '.css'
                }]
            },
            dev: {
                files: [{
                    expand: true,
                    cwd: '<%= app.src %>/_assets/scss',
                    src: '**/*.scss',
                    dest: '<%= app.dist %>/css',
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
                    '<%= app.shellCompiled %>/shell.min.css': '<%= app.shellCompiled %>/shell.css'
                }
            },
            prod: {
                files: {
                    '<%= app.dist %>/css/style.css': '<%= app.dist %>/css/style.css'
                }
            }
        },

        // PostCSS
        postcss: {
            options: {
                map: false,
                processors: [
                    // This reads from 'browserslist' file in project root
                    require('autoprefixer')()
                    //require('stylelint')()
                ]
            },
            testShell: {
                src: '<%= app.shellCompiled %>/*.css'
            },
            dev: {
                src: '<%= app.dist %>/css/*.css'
            }
        },

        // Connect
        connect: {
            dev: {
                options: {
                    port: 9000,
                    base: '<%= app.dist %>/'
                }
            }
        },

        // Clean
        clean: {
            testShell: {
                files: [{
                    dot: true,
                    src: ['<%= app.shellCompiled %>/*']
                }]
            },
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '<%= app.dist %>/*',
                        '<%= app.shellCompiled %>'
                    ]
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
        'clean:dist',
        'assemble',
        'sass:dev',
        'postcss:dev',
        'connect',
        'watch:dev'
    ]);

    // Production
    grunt.registerTask('prod', [
        'clean:dist',
        'assemble',
        'sass:dev',
        'postcss:dev',
        'cssnano:prod'
    ]);

    // Test Shell
    grunt.registerTask('testShell', [
        'clean:testShell',
        'sass:testShell',
        'postcss:testShell',
        'cssnano:minifyShell'
    ]);

    // Test Shell & watch
    grunt.registerTask('testShellWatch', [
        'clean:testShell',
        'sass:testShell',
        'postcss:testShell',
        'watch:testShell'
    ]);

    // Default
    grunt.registerTask('default', [
        'serve'
    ]);
};
