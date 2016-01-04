'use strict';

module.exports = function(grunt) {
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // Watch
    watch: {

      sass: {
        files: 'src/assets/scss/**/*.scss',
        tasks: ['sass'],
        options: {
          spawn: false
        }
      },

      assemble: {
        files: ['./src/**/*'],
        tasks: ['assemble']
      }
    },

    // Assemble
    assemble: {
      options: {
        assets: "./src/assets/",
        layout: 'page.hbs',
        layoutdir: './src/layouts/',
        partials: './src/partials/**/*',
        data: './src/data/**/*'
      },
      pages: {
        cwd: './src/views/',
        dest: './dist/',
        expand: true,
        src: '**/*.hbs'
      }
    },

    // Sass Compilation
    sass: {
      options: {
        sourceMap: false,
        precision: 3,
        outputStyle: 'compressed'
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'src/assets/scss',
          src: '**/*.{scss,sass}',
          dest: 'dist/css',
          ext: '.css'
        }]
      }
    },

    // SVG Min
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
          cwd: 'src/assets/img/',
          src: ['*.svg'],
          dest: 'dist/img/'
        }]
      }
    },

    // Connect
    connect: {
      dev: {
        options: {
          port: 8000,
          base: './dist/'
        }
      }
    },

    // Clean
    clean: {
      dev: ['dist'],
      dist: {
        files: [{
          dot: true,
          src: ['dist/*']
        }]
      }
    }
  });

  //grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-svgmin');

  // Serve
  grunt.registerTask('serve', [
    'clean:dev',
    'assemble',
    'sass',
    'svgmin',
    'connect',
    'watch'
  ]);

  // Build
  grunt.registerTask('build', [
    'clean:dist',
    'sass',
    'svgmin',
    'assemble',
  ]);

  // Default (serve)
  grunt.registerTask('default', ['serve']);
};
