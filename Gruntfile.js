module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/style.css': 'css/style.scss'
        }
      }
    },


    watch: {
      css: {
        files: ['css/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass'); // Process Sass files

  grunt.loadNpmTasks('grunt-contrib-watch'); // On file update, do task

  grunt.loadNpmTasks('grunt-serve'); // Local server

  grunt.registerTask('default', []);

};
