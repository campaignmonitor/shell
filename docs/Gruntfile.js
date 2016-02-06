'use strict';

module.exports = function(grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // Store 'src' and 'dist' locations
        app: {
            src: 'src',
            dist: 'dist'
        },

        // Watch
        watch: {

            // Sass
            sass: {
                files: '<%= app.src %>/_assets/scss/**/*.scss',
                tasks: [
                    'sass',
                    'postcss'
                ]
            },

            // Assemble
            assemble: {
                files: ['<%= app.src %>/**/*'],
                tasks: ['assemble']
            },

            // Uglify
            uglify: {
                files: ['<%= app.src %>/_assets/js/**/*.js'],
                tasks: ['uglify:dev'],
                options: {
                    spawn: false
                }
            }
        },

        // Assemble
        assemble: {
            options: {
                assets: '<%= app.src %>/_assets/',
                layout: 'page.hbs',
                layoutdir: '<%= app.src %>/layouts/',
                partials: '<%= app.src %>/partials/**/*',
                data: '<%= app.src %>/data/**/*'
            },
            pages: {
                cwd: '<%= app.src %>/views/',
                dest: '<%= app.dist %>/',
                expand: true,
                src: '**/*.hbs'
            }
        },

        // Sass compilation
        sass: {
            options: {
                sourceMap: true,
                outputStyle: 'expanded',
                precision: 3
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= app.src %>/_assets/scss',
                    src: '**/*.scss',
                    dest: '<%= app.dist %>/css',
                    ext: '.css'
                }]
            }
        },

        // PostCSS
        postcss: {
            options: {
                map: false,
                processors: [
                    // This reads from 'browserslist' file in project root
                    require('autoprefixer')(),
                    require('stylelint')()
                ]
            },
            dist: {
                src: '<%= app.dist %>/css/*.css'
            }
        },

        // Uglify
        uglify: {
            dev: {
                options: {
                    mangle: false,
                    beautify: {
                        width: 80,
                        beautify: true
                    },
                    screwIE8: true
                },
                files: {
                    '<%= app.dist %>/js/script.js':
                    [
                        '<%= app.src %>/_assets/js/helpers.js',
                        '<%= app.src %>/_assets/js/append-anchors.js',
                        '<%= app.src %>/_assets/js/script.js'
                    ]
                }
            },
            dist: {
                options: {
                    compress: true,
                    preserveComments: false,
                    report: 'gzip'
                },
                files: {
                    '<%= app.dist %>/js/script.js':
                    [
                        '<%= app.src %>/_assets/js/helpers.js',
                        '<%= app.src %>/_assets/js/append-anchors.js',
                        '<%= app.src %>/_assets/js/script.js'
                    ]
                }
            }
        },

        // SVG-min
        svgmin: {
            options: {
                plugins: [{
                    cleanupIDs: true,
                    removeUselessStrokeAndFill: true,
                    removeTitle: true,
                    removeAttrs: true
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= app.src %>/_assets/img/',
                    src: ['*.svg'],
                    dest: '<%= app.dist %>/img/'
                }]
            }
        },

        // CSS minification
        cssnano: {
            options: {
                sourcemap: false
            },
            dist: {
                files: {
                    '<%= app.dist %>/css/style.css': '<%= app.dist %>/css/style.css'
                }
            }
        },

        // Connect
        connect: {
            dev: {
                options: {
                    port: 8000,
                    base: '<%= app.dist %>/'
                }
            }
        },

        // Clean
        clean: {
            dev: ['<%= app.dist %>'],
            dist: {
                files: [{
                    dot: true,
                    src: ['<%= app.dist %>/*']
                }]
            }
        }
    });

    // Register tasks and define them

    // Register tasks
    grunt.loadNpmTasks('grunt-assemble');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-cssnano');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-svgmin');

    // Serve
    grunt.registerTask('serve', [
        'clean:dev',
        'assemble',
        'sass',
        'postcss',
        'svgmin',
        'uglify:dev',
        'connect',
        'watch'
    ]);

    // Production
    grunt.registerTask('prod', [
        'clean:dist',
        'sass',
        'postcss',
        'svgmin',
        'uglify:dist',
        'assemble',
        'cssnano:dist'
    ]);

    // Default
    grunt.registerTask('default', [
        'serve'
    ]);
};
