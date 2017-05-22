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

```


## Score

- 99/100 [Mobile Friendly](https://varvy.com/mobile/)
- 99/100 [Yellow Lab Tools](http://yellowlab.tools/result/eq1dqstpdd)
- 97/100 [Coach Panel](https://chrome.google.com/webstore/detail/coach-panel/olecfjmnejnkjipoicfpneceppjeaemo)
- 92/100 [PageLocity](http://pagelocity.com/analyzer?url=https%3A%2F%2Fharrymt.com)
- 91/100 [Progressive Web App LightHouse](https://developers.google.com/web/tools/lighthouse/)
- 90/100 [Desktop - Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fharrymt.com%2F)
- 84/100 [Mobile - Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fharrymt.com%2F)
- 65/100 [Lets Validate](https://pro.letsvalidate.com/harrymt.com)

## Validators
- [HTML Validator, Nu W3](https://validator.w3.org/nu/?doc=https%3A%2F%2Fharrymt.com)
- [GZip Enabled](https://checkgzipcompression.com/?url=https%3A%2F%2Fharrymt.com)
- [SEO Test](https://richpreview.com/?url=https://harrymt.com/)

