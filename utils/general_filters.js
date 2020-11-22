
// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string

const { DateTime } = require('luxon')
const CleanCss     = require('clean-css');

module.exports = {

    readableDate: function (date) {
        return DateTime.fromJSDate(date, {zone: 'utc'}).toFormat("dd LLL yyyy");
    },

    dateToFormat: function (date, format) {
        return DateTime.fromJSDate(date, { zone: 'utc' }).toFormat(String(format));
    },

    dateToISO: function (date) {
        return DateTime.fromJSDate(date, { zone: 'utc' }).toISO({ includeOffset: false, suppressMilliseconds: true })
    },

    obfuscate: function (str) {
        const chars = []
        for (var i = str.length - 1; i >= 0; i--) {
            chars.unshift(['&#', str[i].charCodeAt(), ';'].join(''))
        }
        return chars.join('')
    },

    cssmin: function (code) {
        return new CleanCss({}).minify(code).styles;
    }

}