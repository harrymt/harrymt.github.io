module.exports = function (grunt) {
  'use strict';

  // Show running time of tasks
  require('time-grunt')(grunt);

  // Load grunt tasks just in time for speed
  require('jit-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // shell commands for use in Grunt tasks
    shell: {
        jekyllBuild: {
            command: 'jekyll build'
        },
        jekyllServe: {
            command: 'jekyll serve'
        }
    },

    // run tasks in parallel
    concurrent: {
        serve: [
            'sass',
            'watch',
            'shell:jekyllServe'
        ],
        options: {
            logConcurrentOutput: true
        }
    },


    processhtml: {
      dist: {
        files: {
          '_layouts/base.html': ['_layouts/dev-base.html']
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
        separator: ''
      },
      dist: {
        src: ['js/dev/google-analytics.js', 'js/dev/main.js'],
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

    watch: {
      css: {
        files: ['scss/*.scss', 'scss/*/*.scss'],
        tasks: ['sass', 'processhtml'],
        options: {
          spawn: false
        }
      },
      javascript: {
        files: ['js/dev/*.js'],
        tasks: ['concat', 'uglify']
      }
    }

  });

  // Register the grunt serve task
  grunt.registerTask('serve', [
    'concurrent:serve'
  ]);

  grunt.registerTask('default', ['shell:jekyllBuild', 'concat', 'uglify', 'sass', 'processhtml']);
};
