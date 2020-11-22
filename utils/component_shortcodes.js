module.exports = {

  component_test: function (props) {
      return `
          <style>
          </style>

          <h4 style="color:orange;">DRAFT</h4>
          <div>
          </div>
      `
  },

  component_breadcrumb: function (props) {
      let breadcrumb = '';
      let newbreadcrumb = '';
      let back = '';
      let i = 0;
      let lastbutone = props.data.length - 1;
      let lastone = props.data.length;
      for (const item in props.data) {
           const thing = props.data[item].split("|");
          i++;
          if ( i == lastbutone ) {
            back = `  <li class="breadcrumb-item"><a href="${ thing[1] }">&lt; Back</a></li>`;
          }
          if ( i == lastone ) {
            breadcrumb += `  <li class="breadcrumb-item active" aria-current="page">${ thing[0] }</li>\n`;
          } else {
            breadcrumb += `  <li class="breadcrumb-item"><a href="${ thing[1] }">${ thing[0] }</a></li>\n`;
          }
      }
      breadcrumb = breadcrumb.substring(0, breadcrumb.length-1);
      return `

<nav aria-label="breadcrumb" role="navigation">
<ol class="breadcrumb display-large">
${ breadcrumb }
</ol>
<ol class="breadcrumb display-medium">
${ back }
</ol>
<ol class="breadcrumb display-small">
${ back }
</ol>
</nav>

      `
    },

  component_wip: function (props) {
    return `wip output`
  }

}