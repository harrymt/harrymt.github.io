module.exports = function (grunt) {
  'use strict';

  // Show running time of tasks
  require('time-grunt')(grunt);

  // Load grunt tasks just in time for speed
  require('jit-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'index.html': 'index.html',
          'about.html': 'about.html'
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
          'index.html': ['dev-index.html'],
          'about.html': ['dev-about.html']
        }
      }
    },

    watch: {
      css: {
        files: ['scss/*.scss', 'scss/*/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false
        }
      },

      html: {
        files: ['dev-index.html', 'dev-about.html'],
        tasks: ['default']
      },

      javascript: {
        files: ['js/dev/*.js'],
        tasks: ['default']
      }
    },

    imagemin: {
      files: [
        {
          expand: true,  // Enable dynamic expansion.
          cwd: 'img/work/',      // Src matches are relative to this path.
          src: ['*.png'], // Actual pattern(s) to match.
          dest: 'img/work/',   // Destination path prefix.
          ext: '.png'   // Dest filepaths will have this extension.
        }
      ]
    }
  });

  grunt.loadNpmTasks('grunt-serve'); // Local server
  grunt.registerTask('default', ['concat', 'uglify', 'sass', 'processhtml', 'htmlmin', 'imagemin']);
};
