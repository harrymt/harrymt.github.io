# harrymt.com
Code for my personal site www.harrymt.com.


Uses

- [Bourbon](http://bourbon.io/)
- [SASS](http://sass-lang.com/)
- [Font Awesome](https://fortawesome.github.io/Font-Awesome/)
- [GruntJS](http://gruntjs.com/)

## Gruntfile.js

The following Grunt tasks are used they can be found [here](Gruntfile.js).

```javascript

  grunt.loadNpmTasks('grunt-contrib-htmlmin'); // Minify HTML
  grunt.loadNpmTasks('grunt-contrib-concat'); // Concatenate JS
  grunt.loadNpmTasks('grunt-contrib-uglify'); // Minify JS
  grunt.loadNpmTasks('grunt-contrib-sass'); // Process Sass files
  grunt.loadNpmTasks('grunt-contrib-watch'); // On file update, do task
  grunt.loadNpmTasks('grunt-processhtml'); // Inline JS & CSS
  grunt.loadNpmTasks('grunt-serve'); // Local server

```
