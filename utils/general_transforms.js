
  // HTML TRANSFORM ( ## add conditional, production only ## )
  // REF: C:\Users\Home\Desktop\DESKTOP-WIP\NEW-PROJECTS\# THE NETLIFY ELEVENTY MASTER\eleventastic\utils

const htmlmin = require('html-minifier')

module.exports = {

    htmlmin: function(content, outputPath) {
        if( outputPath.endsWith(".zhtmlz") ) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
                minifyCSS: true
            });
            return minified;
        }
      return content;
    }

}
