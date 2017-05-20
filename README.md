# Personal website
Code for my personal site www.harrymt.com.

### Set-up & Run

- Install [NodeJS](https://nodejs.org)
- Then type in `npm install` to install [GruntJS](https://github.com/gruntjs/grunt) and all dependencies
- Simply type `grunt` to build the site
  - Run `node_modules/grunt-cli/bin/grunt` to run grunt, or
  - Install grunt globally, with `sudo npm install -g grunt-cli`
- Then type `jekyll serve` and view the site at [http://localhost:4000](http://localhost:4000)

### Build

- `bundle install` to install ruby gems
- Type `grunt watch` to watch for changes
- Then `jekyll s` to view locally

### Uses

- [Bourbon](http://bourbon.io/)
- [SASS](http://sass-lang.com/)
- [Font Awesome](https://fortawesome.github.io/Font-Awesome/)
- [GruntJS](http://gruntjs.com/)
- [HTTPS enabled, via CloudFlare](https://blog.cloudflare.com/secure-and-fast-github-pages-with-cloudflare/)

## Grunt Tasks

The following Grunt tasks are used they can be found [here](Gruntfile.js).

**gruntfile.js**
```javascript

  grunt.loadNpmTasks('grunt-contrib-concat'); // Concatenate JS
  grunt.loadNpmTasks('grunt-contrib-uglify'); // Minify JS
  grunt.loadNpmTasks('grunt-contrib-sass'); // Process Sass files
  grunt.loadNpmTasks('grunt-contrib-watch'); // On file update, do task
  grunt.loadNpmTasks('grunt-processhtml'); // In-line JS & CSS
  grunt.loadNpmTasks('grunt-serve'); // Local server

```
