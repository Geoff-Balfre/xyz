
// PACKAGES

const { minify } = require("terser");

// UTILITIES - FILTERS, SHORTCODES and TRANSFORMS

const general_filters      = require('./utils/general_filters.js');
const general_transforms   = require('./utils/general_transforms.js');
const element_shortcodes   = require('./utils/element_shortcodes-bs4.js');
const form_shortcodes      = require('./utils/form_shortcodes-bs4.js');
const component_shortcodes = require('./utils/component_shortcodes.js');

module.exports = function(eleventyConfig) {

    Object.keys(general_filters).forEach((filterName) => {
        eleventyConfig.addFilter(filterName, general_filters[filterName])
    });

    Object.keys(general_transforms).forEach((transformName) => {
        eleventyConfig.addTransform(transformName, general_transforms[transformName])
    });

    Object.keys(element_shortcodes).forEach((shortcodeName) => {
        eleventyConfig.addShortcode(shortcodeName, element_shortcodes[shortcodeName])
    });
    Object.keys(form_shortcodes).forEach((shortcodeName) => {
        eleventyConfig.addShortcode(shortcodeName, form_shortcodes[shortcodeName])
    });
    Object.keys(component_shortcodes).forEach((shortcodeName) => {
        eleventyConfig.addShortcode(shortcodeName, component_shortcodes[shortcodeName])
    });

    //  EXTEND MARKDOWN FEATURES

    let markdownIt = require("markdown-it");
    let markdownItAttrs = require('markdown-it-attrs');
    let options = {
        html: true
    };
    let markdownLib = markdownIt(options).use(markdownItAttrs);
    eleventyConfig.setLibrary("md", markdownLib);

    //  JS FILTER

    eleventyConfig.addNunjucksAsyncFilter("jsmin", async function ( code, callback ) {
      try {
        const minified = await minify(code);
        callback(null, minified.code);
      } catch (err) {
        console.error("Terser error: ", err);
        // Fail gracefully.
        callback(null, code);
      }
    });

//    eleventyConfig.addWatchTarget('./src/scss/');
//    eleventyConfig.setTemplateFormats('html, njk, md');

    eleventyConfig.addPassthroughCopy('src/img');
    eleventyConfig.addPassthroughCopy('src/favicon.ico');
    eleventyConfig.addPassthroughCopy('src/admin/config.yml');

    return {
      passthroughFileCopy: true,
      dir: {
        input:     'src',
        output:    'dist',
        data:      '_data',
        includes:  '_includes',
        layouts:   '_layouts'
      }
    }

}
