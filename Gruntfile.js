module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  grunt.initConfig({
    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files
          'index.html': 'html/development.html'     // 'destination': 'source'
        }
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed'
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
        src: ['js/dev/jquery.min.js', 'js/dev/hotjar-tracking.js', 'js/dev/googleA.js', 'js/dev/player.js'],
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
        files: ['scss/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false
        }
      },

      html: {
        files: ['html/*.html'],
        tasks: ['htmlmin']
      },

      javascript: {
        files: ['js/dev/*.js'],
        tasks: ['concat', 'uglify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin'); // Minify HTML
  grunt.loadNpmTasks('grunt-contrib-concat'); // Concatenate JS
  grunt.loadNpmTasks('grunt-contrib-uglify'); // Minify JS
  grunt.loadNpmTasks('grunt-contrib-sass'); // Process Sass files
  grunt.loadNpmTasks('grunt-contrib-watch'); // On file update, do task
  grunt.loadNpmTasks('grunt-serve'); // Local server

  grunt.registerTask('default', ['htmlmin', 'concat', 'uglify', 'sass']);

};
