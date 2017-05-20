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

- na per load [Content served - Browser Calories](https://chrome.google.com/webstore/detail/browser-calories/pdkibgfjegigkoaleelbkdpkgceljfco)
- /100 [Mobile SEO](https://varvy.com/)
- /100 [Yellow Lab Tools](http://yellowlab.tools/result/eq1dqstpdd)
- /100 desktop, 74/100 mobile [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fharrymt.com%2F)
- /100 [Lets Validate](https://pro.letsvalidate.com/harry,t.com)
- /100 [Web Bloat score](http://www.webbloatscore.com?url=https://harrymt.com/)
- /100 [Coach Panel](https://chrome.google.com/webstore/detail/coach-panel/olecfjmnejnkjipoicfpneceppjeaemo)
- /100 [PageLocity](http://pagelocity.com/analyzer?url=https%3A%2F%2Fharrymt.com)
- /100 [Progressive Web App LightHouse](https://developers.google.com/web/tools/lighthouse/)
- /100 [SSL Security Check](https://www.ssllabs.com/ssltest/analyze.html?d=harrymt.com)
- /100 [Mobile Speed](https://varvy.com/mobile/)
- /100 [CryptCheck](https://tls.imirhil.fr/https/harrymt.com)
- /100 [Mozilla Observatory](https://observatory.mozilla.org/analyze.html?host=harrymt.com)
- /100 [Security Headers](https://securityheaders.io/?q=https%3A%2F%2Fwebtechnologies.herokuapp.com%2F&followRedirects=on)

## Validators
- [Nu HTML Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fharrymt.com)
- [GZip Enabled](https://checkgzipcompression.com/?url=https%3A%2F%2Fharrymt.com)
- [Rich Preview](https://richpreview.com/?url=https://harrymt.com)
- [SEO Rich Preview](https://richpreview.com/?url=https://harrymt.com/)
- [Page Speed Optimization](https://varvy.com/pagespeed/)

