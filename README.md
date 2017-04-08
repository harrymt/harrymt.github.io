# Personal website
Code for my personal site www.harrymt.com.

### Setup & Run

- Install [NodeJS](https://nodejs.org)
- Then type in `npm install` to install [GruntJS](https://github.com/gruntjs/grunt) and all dependancies
- Simply type `grunt` to build the site
- Then type `grunt serve` and view the site at [http://localhost:9000](http://localhost:9000)

### Build

- Type `grunt build` to build the site

### Uses

- [Bourbon](http://bourbon.io/)
- [SASS](http://sass-lang.com/)
- [Font Awesome](https://fortawesome.github.io/Font-Awesome/)
- [GruntJS](http://gruntjs.com/)

## Grunt Tasks

The following Grunt tasks are used they can be found [here](Gruntfile.js).

**gruntfile.js**
```javascript

  grunt.loadNpmTasks('grunt-contrib-htmlmin'); // Minify HTML
  grunt.loadNpmTasks('grunt-contrib-concat'); // Concatenate JS
  grunt.loadNpmTasks('grunt-contrib-uglify'); // Minify JS
  grunt.loadNpmTasks('grunt-contrib-sass'); // Process Sass files
  grunt.loadNpmTasks('grunt-contrib-watch'); // On file update, do task
  grunt.loadNpmTasks('grunt-processhtml'); // Inline JS & CSS
  grunt.loadNpmTasks('grunt-serve'); // Local server

```
