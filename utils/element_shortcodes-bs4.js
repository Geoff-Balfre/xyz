const fs = require('fs')
const path = require('path')

module.exports = {

  element_spacing: function () {
    return `
      <style>
        .spacing-image {
          display: block;
          margin-left: auto;
          margin-bottom: 0.5rem;
          margin-right: auto;
        }
      </style>
      <div>
        <img class="spacing-image img-fluid" src="/img/spacing-optimized.png" alt="">
      </div>
    `
  },

  element_art: function () {
    return `
See source code
<!-- GrB

      _____     _____ 
     |   __|___| __  |
     |  |  |  _| __ -|
     |_____|_| |_____|

     Copyright 1995-2020

     Website GrB
     https://balfre.com/

/Grb -->
    `
  },

  element_brand: function () {
    return `
      <style>
        .element-brand {
          margin: 0 auto;
          text-align: center;
        }
        img.element-brand-image {
          border: 1px dashed #cccccc;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
        .xcaptions {
          margin-left: auto;
          margin-right: auto;
        }
      </style>
      <p class="captions">
        <img class="element-brand-image img-fluid" width="180px" height="45px" src="/img/brand-logo-placeholder.png" alt="SEO: Promotional Keyword Rich ALT text"><br>
        <span class="captions">Brand Logo</span><br>
        <img class="element-brand-image" width="45px" height="45px" src="/img/brand-logo-placeholder-mobile.png" alt="SEO: Promotional Keyword Rich ALT text"><br>
        <span class="captions">Brand Logo mobile</span><br>
        <img class="element-brand-image" width="32px" height="32px" src="/img/favicons/favicon-32x32.png" alt="SEO: Promotional Keyword Rich ALT text"><br>
        <span class="captions">Icon</span><br>
        <img class="element-brand-image img-fluid" width="360px" height="90px" src="/img/brand-logo-placeholder.png" alt="SEO: Promotional Keyword Rich ALT text">
        <span class="captions">Social Image</span><br>
      </p>
    `
  },

  element_palette: function (props) {
    let output = '';
    Object.keys(props.data).forEach(function(key) {
      let fill = '#000000';
      if (key == 'dark' || key == 'text') {
        fill = '#ffffff';
      }
      output += `
        <svg width="92" height="92">
          <g>
            <rect width="92" height="92" style="fill: ${ props.data[key] }; stroke-width: 1; stroke: rgb(0,0,0);" /></rect>
            <text x="50%" y="80%" font-size="16" fill="${ fill }" text-anchor="middle">${ key }</text>
          </g>
        </svg>
      `;
    });

    return `
      <style>
        svg {
          margin-bottom: 0.25rem;
        }
      </style>
      <p>${ output }</p>
    `;
  },

  element_native: function () {
    return `
      <p>
        <strong>system-ui</strong> replacement for "-apple-system" and "BlinkMacSystemFont"<br>
        <strong>-apple-system</strong> Safari for macOS and iOS (San Francisco)<br>
        <strong>BlinkMacSystemFont</strong> Chrome &lt; 56 for macOS (San Francisco)<br>
        <strong>Segoe UI</strong> Windows<br>
        <strong>Roboto</strong> Android<br>
        <strong>Helvetica Neue, Arial</strong> Basic web fallback<br>
        <strong>Noto Sans</strong> Linux<br>
        <strong>sans-serif</strong> sans-serif fallback<br>
        <strong>Ubuntu, Cantarell, Fira Sans</strong> Ubuntu, Gnome, Firefox OS<br>
        <strong>Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji</strong> Emoji fonts<br>
      </p>
      <p>Using the "native font stack" for performance, delivering optimum text rendering on every device and OS...</p>
    `;
  },

  element_mono: function () {
    return `
      <p>
        <strong>SFMono-Regular</strong><br>
        <strong>Menlo</strong><br>
        <strong>Monaco</strong><br>
        <strong>Consolas</strong><br>
        <strong>Liberation Mono</strong><br>
        <strong>Courier New</strong><br>
        <strong>monospace</strong><br>
      </p>
    `;
  },

  element_svgicon: function (props) {
    const file = path.join(__dirname, '..', 'icons', props.icon + '.svg');
    const svg = fs.readFileSync(file, 'utf8'); 
    return `
        <span style="${ props.style }">${ svg }</span>
    `;
  },



      element_progress: function (props) {
        return `
            <img class="${ props.style }" src="../img/${ props.image }" width="${ props.alttext }" height="${ props.alttext }" alt="${ props.alttext }">
        `;
      },



  element_characterset: function () {
    return `
      <p>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
      <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
      <p>¬ &#96; ! " £ $ € % ^ &amp; * ( ) _ + - =</p>
      <p>{ } [ ] : @ ~ ; &#39; # | &#92; &lt; &gt; ? , . /</p>
      <p>0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20</p>
    `;
  },

  element_headings: function () {
    return `
      <h1>First heading style</h1>
      <h2>Second heading style</h2>
      <h3>Third heading style</h3>
      <h4>Forth heading style</h4>
      <h5>Fifth heading style</h5>
      <h6>Sixth heading style</h6>
    `;
  },

  element_paragraphs: function () {
    return `
      <p class="paragraph-lead">Lead paragraph style, Value proposition, engagement text goes here</p>
      <p>Standard paragraph style, Today weather conditions will be mainly dry, very warm and often sunny. Isolated showers may break out during the afternoon in the east. Winds will be light and mainly offshore, but where onshore breezes develop it will feel cooler. Maximum temperature 26&#8451;. Tonight begins with some pleasant early evening sunshine is expected, then dry through the night with light variable winds. Feeling cooler near coasts. Minimum temperature 10&#8451;. Through Saturday morning there will be some sunny spells, but also the risk of a few showers. It will then cloud over with spells of rain pushing up from the south.</p>
      <p><small>Small text paragraph, this line of text is meant to be treated as fine print.</small></p>
    `;
  },

  element_blockquote: function () {
    return `
      <blockquote>
        <p>Once you eliminate the impossible, whatever remains, no matter how improbable, must be the truth.</p>
        <p class="blockquote__footer"><em>Sherlock Holmes (Sir Arthur Conan Doyle, 1859-1930)</em></p>
      </blockquote>
    `;
  },

  element_in_paragraph_style: function () {
    return `
      <p><strong>This line is rendered as bold text.</strong></p>
      <p><em>This line of text is emphasis and shown as italics.</em></p>

      <style>
          .flex-parent {
            display: flex;
            align-items: center;
            x-padding: 10px;
            x-margin: 30px 0;
          }
          .flex-child {
          }
          .long-and-truncated {
              flex: 1;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
          }

      </style>

      <p class="flex-parent">
        <p class="flex-child long-and-truncated">
          This long line is trucated with "ellipses" when there is insufficient space to show the full contents.
        </p>
      </p>
      <p class=""><em>The above line is trucated with "ellipses" when there is insufficient space to show the full contents.</em></p>
    `;
  },

  element_monotext: function () {
    return `
      <pre><strong>&lt;pre&gt;</strong>&nbsp;&nbsp;&nbsp;The result of 22 divided by 7 is 3.142857</pre>
      <code><strong>&lt;code&gt;</strong>&nbsp;&nbsp;The result of 22 divided by 7 is 3.142857</code>
      <p class="text-mono"><strong>css:</strong>&nbsp;&nbsp;&nbsp;&nbsp;The result of 22 divided by 7 is 3.142857</p>
    `;
  },

  element_links: function () {
    return `
      <!-- add bs icon also -->
      <style>
        a.text[rel*="external"]::after {
          font-size: 85%;
          content: " (external)" 
        }
        a.img[rel*="external"]::after {
          content: " " url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAVklEQVR4Xn3PgQkAMQhDUXfqTu7kTtkpd5RA8AInfArtQ2iRXFWT2QedAfttj2FsPIOE1eCOlEuoWWjgzYaB/IkeGOrxXhqB+uA9Bfcm0lAZuh+YIeAD+cAqSz4kCMUAAAAASUVORK5CYII=);
        }      
      </style>

      <h4 style="color:orange;">DRAFT (add css svg)</h4>

      <p>You can place a <a href="#">link anywhere</a> in your text (see below for further link examples).</p>

      <p><a href="#" tile="Internal action">Internal link</a></p>

      <p><a class="text" href="#" rel="external nofollow" target="_blank" tile="External link action">External link and Text</a><p>
      
      <p><a class="img"  href="#" rel="external nofollow" target="_blank" tile="External link action">External link and Icon</a></p>

      <p><a class="" href="#" rel="external nofollow" target="_blank" tile="External link action">External link with BS Icon <svg class="bi bi-box-arrow-up-right" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1.5 13A1.5 1.5 0 0 0 3 14.5h8a1.5 1.5 0 0 0 1.5-1.5V9a.5.5 0 0 0-1 0v4a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 0 0-1H3A1.5 1.5 0 0 0 1.5 5v8zm7-11a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.5H9a.5.5 0 0 1-.5-.5z"/> <path fill-rule="evenodd" d="M14.354 1.646a.5.5 0 0 1 0 .708l-8 8a.5.5 0 0 1-.708-.708l8-8a.5.5 0 0 1 .708 0z"/></svg></a></p>

      `;
  },
  
  element_unstyled_list: function () {
    return `
      <style>
        ul.element-unstyled-list {
          list-style-type: none;
        }
      </style>

      <ul class="element-unstyled-list">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
      </ul>
    `;
  },

  element_unordered_list: function () {
    return `
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
      </ul>
    `;
  },
  
  element_ordered_list: function () {
    return `
      <ol>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
      </ol>
    `;
  },

  element_inline_list: function () {
    return `
      <style>
        ul.element-inline-list li {
          display:inline;
          padding-right: 1rem;
        }
      </style>

      <ul class="element-inline-list">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
      </ul>
    `;
  },

  element_definition_list: function () {
    return `
      <dl>
        <dt><strong>Description lists</strong></dt>
          <dd>A description list is perfect for defining terms</dd>
        <dt><strong>Euismod</strong></dt>
          <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit</dd>
          <dd>Donec id elit non mi porta gravida at eget metus</dd>
        <dt><strong>Malesuada porta</strong></dt>
          <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
      </dl>
    `;
  },

  element_basic_table: function () {
    return `
      <table>
        <thead>
          <tr>
            <th scope="col">#</th><th scope="col">Head 1</th><th scope="col">Head 2</th><th scope="col">Head 3</th>
          </tr>
        </thead>
        <tbody>
          <tr><th scope="row">1</th><td>Tom </td><td>Thumb </td><td>@tom</td></tr>
          <tr><th scope="row">2</th><td>Daffy </td><td>Duck </td><td>@dd </td></tr>
          <tr><th scope="row">3</th><td>Minnie</td><td>Mouse</td><td>@mm</td></tr>
        </tbody>
      </table>
    `;
  },

  element_styled_table: function () {
    return `
      <style>
        .element-table tr:nth-child(even) {
          background-color: #f2f2f2;
        }
      </style>

      <table class="element-table">
        <thead>
          <tr>
            <th>Browser</th><th>Version</th><th>Use</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Chrome</td><td>81</td><td>64%</td></tr>
          <tr><td>MS Edge</td><td>18</td><td>2%</td></tr>
          <tr><td>Firefox</td><td>75</td><td>4%</td></tr>
          <tr><td>MS IE</td><td>?</td><td>1%</td></tr>
          <tr><td>Opera</td><td>67</td><td>2%</td></tr>
          <tr><td>Safari</td><td>13</td><td>15%</td></tr>
        </tbody>
      </table>
    `;
  },

  element_menu_list: function () {
    return `
      <h4 style="color:orange;">DRAFT</h4>
      <style>
        ul.element-unstyled-menu-list {
          list-style-type: none;
        }
      </style>
      <ul class="element-unstyled-menu-list">
        <li><a href="#" title="Home page link">Home</a></li>
        <li><a href="#" title="About Us link">About</a></li>
        <li><a href="#" title="Products link">Products</a></li>
        <li><a href="#" title="Contact Us link">Contact</a></li>
      </ul>
    `;
  },

  element_inline_menu_list: function () {
    return `
      <h4 style="color:orange;">DRAFT</h4>
      <style>
        ul.element-inline-menu-list {
          list-style-type: none;
        }
        ul.element-inline-menu-list li {
          display:inline;
          padding-right: 1rem;
        }
      </style>
      <ul class="element-inline-menu-list">
        <li><a href="#" title="Home page link">Home</a></li>
        <li><a href="#" title="About Us link">About</a></li>
        <li><a href="#" title="Products link">Products</a></li>
        <li><a href="#" title="Contact Us link">Contact</a></li>
      </ul>
    `;
  },


  element_breadcrumbs: function () {
    return `
      <h4 style="color:orange;">DRAFT</h4>
      <style>
        ul.element-breadcrumbs {
          list-style-type: none;
          padding-left: 0;
        }
        ul.element-breadcrumbs li {
          display:inline;
        }
        </style>
        <nav aria-label="breadcrumb">
          <ul class="breadcrumb">
            <li class="breadcrumb-item"><a href="#" title="">Level 1</a> &nbsp;&gt;&nbsp; </li>
            <li class="breadcrumb-item"><a href="#" title="">Level 2</a> &nbsp;&gt;&nbsp; </li>
            <li class="breadcrumb-item active" aria-current="page">This Level</li>
          </ul>
        </nav>
    `;
  },

  element_pagination: function () {
      return `
        <h4 style="color:orange;">DRAFT</h4>
        <style>
          ul.element-pagination {
            list-style-type: none;
            padding-left: 0;
          }
          ul.element-pagination li {
            display:inline;
            padding-right: 0.75rem;
          }
        </style>

        <ul class="element-pagination">
          <li><a href="#" title="">&lt;&lt;</a></li>
          <li><a href="#" title="">&lt;</a></li>
          <li>PAGES</li>
          <li><a href="#" title="">&gt;</a></li>
          <li><a href="#" title="">&gt;&gt;</a></li>
        </ul>

        <ul class="element-pagination">
          <li><a href="#" title="">First</a></li>
          <li><a href="#" title="">Previous</a></li>
          <li>PAGES</li>
          <li><a href="#" title="">Next</a></li>
          <li><a href="#" title="">Last</a></li>
        </ul>
      `;
  },

  element_button: function (props) {
      let state = props.state ? ` ${ props.state }` : '';
      return `
                <button type="button" class="btn btn-${ props.style }${ state }">${ props.text }</button>
      `;
  },

  element_hero: function (props) { // TO DO //
    const id    = "img-heroId";
    const style = "img-fluid";
    const size  = "1960x256";
    const alt   = "SEO: The promotional and keyword rich ALT text";
    return `
                <h4 style="color:orange;">DRAFT</h4>
                <img id="${ id }" class="${ style }" data-src="holder.js/${ size }?auto=yes&textmode=exact" alt="${ alt }">
      `;
  },

  element_card: function (props) { // TO DO //
    const id    = "img-cardId";
    const style = "img-fluid";
    const size  = "300x300";
    const alt   = "SEO: The promotional and keyword rich ALT text";
    return `
                <h4 style="color:orange;">DRAFT</h4>
                <img id="${ id }" class="${ style }" data-src="holder.js/${ size }?auto=yes&textmode=exact" alt="${ alt }">
      `;
  },

  element_temp: function (props) {
    return `temp output`
  }


}
