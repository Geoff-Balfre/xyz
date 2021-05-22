
const eleventyPackage = require('@11ty/eleventy/package.json');

module.exports = {

    environment: process.env.ELEVENTY_ENV,

    env0:   process.env.ELEVENTY_ENV,
    env1:            process.env.URL || 'http://localhost:8080',
    env2: process.env.REPOSITORY_URL || 'https://github.com/Geoff-Balfre/',
    env3: 'https://kind-kowalevski-ec8e42.netlify.app/',
    env4: 'https://resiliencethroughagility.com',

    netlify: process.env.NETLIFY || 'https://some_netlify_url/',
    url: process.env.URL         || 'https://some_url_url/',
    github:  process.env.GITHUB  || 'https://github.com/Geoff-Balfre/xyz',
      
    generator: `${eleventyPackage.name} v${eleventyPackage.version}`,
    year: new Date().getFullYear(),

    github: 'Geoff-Balfre/xyz',
    domain: 'domain TBA',
    url: 'https://www.balfre.com',
    canonical: 'Site canonical',
    sitemap: 'https://balfre.com/sitemap.xml',

    googleverify: 'Verification  file/code',
    analytics: 'UA-99999999-9',
    recaptchajs: '',
    recaptchasitekey: 'reCAPTCHA_site_key',
    recaptchasecretkey: '',

    author: {
        name: 'Geoff Balfre Ltd',
        email: 'geoff@balfre.com'
    },

    brand: {
        name: 'DLS Brand',
        strapline: 'DLS strapline',
        company: 'DLS Ltd',
        contact: 'A N Other',
        email: 'another@domain.com'
    },
    copyright: {
        start: '2001',
        holder: 'TBC',
        license: 'TBC',
        url: 'TBC'
    },
    page: {
        title: 'Site title',
        desccription: 'Site desccription',
        engagement: 'Value proposition, engagement text goes here...',
        alttext: 'SEO: The image promotional and keyword rich ALT text'
    },
    palette: {
        primary:    '#007bff',
        secondary:  '#6c757d',
        success:    '#28a745',
        info:       '#17a2b8',
        warning:    '#ffc107',
        danger:     '#dc3545',
        light:      '#f8f9fa',
        dark:       '#343a40',
        text:       '#212529',
        background: '#fff'
    },
}
