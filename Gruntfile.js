module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  grunt.initConfig({
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'index.html': 'index.html'
        }
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed',

          loadPath: require('node-bourbon').includePaths

        },

        files: {
          'css/style.css': 'scss/style.scss'
        }
      }
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/dev/jquery.min.js', 'js/dev/hotjar-tracking.js', 'js/dev/google-analytics.js', 'js/dev/main.js'],
        dest: 'js/main.min.js'
      }
    },

    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'js/main.min.js': ['js/main.min.js']
        }
      }
    },

    processhtml: {
      dist: {
        files: {
          'index.html': ['development.html']
        }
      }
    },

    watch: {
      css: {
        files: ['scss/*.scss'],
        tasks: ['default'],
        options: {
          spawn: false
        }
      },

      html: {
        files: ['development.html'],
        tasks: ['default']
      },

      javascript: {
        files: ['js/dev/*.js'],
        tasks: ['default']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin'); // Minify HTML
  grunt.loadNpmTasks('grunt-contrib-concat'); // Concatenate JS
  grunt.loadNpmTasks('grunt-contrib-uglify'); // Minify JS
  grunt.loadNpmTasks('grunt-contrib-sass'); // Process Sass files
  grunt.loadNpmTasks('grunt-contrib-watch'); // On file update, do task
  grunt.loadNpmTasks('grunt-processhtml'); // Inline JS & CSS
  grunt.loadNpmTasks('grunt-serve'); // Local server

  grunt.registerTask('default', ['concat', 'uglify', 'sass', 'processhtml', 'htmlmin']);
};
