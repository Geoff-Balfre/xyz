//
//   1	                     Hidden             DONE
//   2	                     Support Text       DONE
//   3	  Basic Elements:    Text               DONE
//   4	                     Textarea           DONE
//   5	                     Select             DONE
//   6	                     Checkbox           DONE
//   7	                     Radio Button       DONE
//   8	                     Range              CUSTOM (TEXT)
//   9	                     Switch             
//  10	                     Submit Button      DONE
//  10	                     Submit Button++                  ??  extend standard button 
//  11	 Enhanced Elements:  Date               TEXT
//  12	                     Date                             ??  CUSTOM
//  13	                     Date of Birth                    ??  CUSTOM
//  14	                     Number             TEXT
//  15	                     Quantity                         ??  CUSTOM
//  16	                     Passowrd           TEXT
//  17	                     Passowrd++                       ??
//  18	 Personal Elements   email              TEXT
//  19                       salutation         SELECT
//  20	                     name               TEXT
//  21	                     first name         TEXT
//  22	                     surname name       TEXT
//  23	                     phone              TEXT          ??  number
//  24	                     card cvs                         ??  number 
//  25	                     card no                          ??  number
//  26	 Address elements    address line 1     TEXT
//  27	                     address line 2     TEXT
//  28	                     address line 3     TEXT
//  29	                     address town       TEXT
//  30	                     address county     TEXT
//  31	                     address country    TEXT
//  32	                     address postcode                 ??  TEXT
//  33	 Elements States:    input-success                    ??
//  34	                     input-error                      ??
//  35	                     disabled                         ??  text  code logic with required & readonly & displayonly
//  36	                     readonly                         ??  text  code logic with required & displayonly
//  37	                     displayonly                      ??  text  code logic with required & readonly
//  38	 Special Elements:   autocomplete:                    ??  CUSTOM
//  39	                     reCaptcha:                       ??  CUSTOM
//  40	                     remember me        CHECKBOX
//  xx                                                        ##  horizontal  radio  buttons  ##
//  41	                     yes no             RADIO
//  42	                     gender             RADIO
//  43	                     input with button                ??  CUSTOM
//  44	                     input with icon                  ??  CUSTOM
//
//  BS4 FORM CSS STYLES:
//

const inputoptional     = ' <small>(optional)</small>';

const formgroup         = 'form-group row';

const inputlabel        = 'col-sm-4 col-form-label';
const inputgroup        = 'col-sm-6 col-md-5 col-lg-4';
const inputclass        = 'form-control';

const inputoffset       = 'col-sm-4 offset-sm-4';

const ariaclass         = 'form-text text-muted';

const checkgroup        = 'form-check';
const checkstyle        = 'form-check-input';
const checklabel        = 'form-check-label';

const rangeclass        = 'form-control-range';

const inlinecheckgroup  = 'form-check-inline';
const inlinecheckinput  = 'form-check-input';
const inlinechecklabel  = 'form-check-label';

//
//  BS4 SHORTCODES:
//
module.exports = {

  form_styles: function () {
    return `
        <h4>Form Styles</h4>
        <p>
            <strong> inputoptional: </strong> ${ inputoptional }<br>
            <br>
            <strong> formgroup: </strong>  ${ formgroup }<br>
            <br>
            <strong> inputlabel: </strong> ${ inputlabel }<br>
            <strong> inputgroup: </strong> ${ inputgroup }<br>
            <strong> inputclass: </strong> ${ inputclass }<br>
            <br>
            <strong> inputoffset: </strong> ${ inputoffset }<br>
            <br>
            <strong> ariaclass: </strong> ${ ariaclass }<br>
            <br>
            <strong> checkgroup: </strong> ${ checkgroup }<br>
            <strong> checkstyle: </strong> ${ checkstyle }<br>
            <strong> checklabel: </strong> ${ checklabel }<br>
            <br>
            <strong> rangeclass: </strong> ${ rangeclass }<br>
            <br>
            <strong> inlinecheckgroup: </strong> ${ inlinecheckgroup }<br>
            <strong> inlinecheckinput: </strong> ${ inlinecheckinput }<br>
            <strong> inlinechecklabel: </strong> ${ inlinechecklabel }<br>
        </p>
    `;
  },

  form_support_text: function (props) {
      return `
                    <!-- form support text -->
                    <section class="${ formgroup }">
                      <div class="${ inputoffset}">
                        ${ props.text }
                      </div>
                    </section>
      `;
  },

  form_input_hidden: function (props) {
      const name = props.name ? props.name : 'hiddenId';
      const value = props.value ? props.value : '';
      return `
                    <!-- form input hidden -->
                    <input type="hidden" name="${ name }" value="${ value }">
      `;
  },

  form_input_text: function (props) {
      const type         = props.type           ? props.type : 'text';
      const id           = props.id             ? props.id : 'textId';
      const optional     = !props.required      ? inputoptional : '';
      let ariacontent    = '';
      if ( props.ariaId ) {
          ariacontent    = `
                            <small id="${ props.ariaId }" class="${ ariaclass }">${ props.ariatext }</small>`;
      }
      let input          = '<input';
      input             += ` id="${ id }"`;
      input             += ` class="${ inputclass }"`;
      input             += props.name           ? ` name="${ props.name }"` : ` name="${ id }"`;
      input             += props.type           ? ` type="${ props.type }"` : ` type="text"`;
      input             += props.max            ? ` max="${ props.max }"` : '';
      input             += props.min            ? ` min="${ props.min }"` : '';
      input             += props.maxlength      ? ` maxlength="${ props.maxlength }"` : '';
      input             += props.minlength      ? ` minlength="${ props.minlength }"` : '';
      input             += props.size           ? ` size="${ props.size }"` : '';
      input             += props.step           ? ` step="${ props.step }"` : '';
      input             += props.pattern        ? ` pattern="${ props.pattern }"` : '';
      input             += props.title          ? ` title="${ props.title }"` : '';
      input             += props.placeholder    ? ` placeholder="${ props.placeholder }"` : '';
      input             += props.value          ? ` value="${ props.value }"` : '';
      input             += props.ariaId         ? ` aria-describedby="${ props.ariaId }"` : '';
      input             += props.autocapitalize ? ` autocapitalize="${ props.autocapitalize }"` : '';
      input             += props.autocomplete   ? ` autocomplete="${ props.autocomplete }"` : '';
      input             += props.readonly       ? ' readonly' : '';
      input             += props.required       ? ' required' : '';
      input             += props.autofocus      ? ' autofocus' : '';
      input             += '>';
      input             += ariacontent;
      return `
                    <!-- form input ${ type } -->
                    <section class="${ formgroup }">
                        <label for="${ id }" class="${ inputlabel }"><strong>T</strong> ${ props.label }${ optional }</label>
                        <div class="${ inputgroup }">
                            ${ input }
                        </div>
                    </section>
      `;
  },

  form_input_textarea: function (props) {
      const type         = props.type           ? props.type : 'text';
      const id           = props.id             ? props.id : 'textId';
      const optional     = !props.required      ? `${ inputoptional }` : '';
      let ariacontent    = '';
      if ( props.ariaId ) {
          ariacontent    = `
                            <small id="${ props.ariaId }" class="${ ariaclass }">${ props.ariatext }</small>`;
      }
      let textarea       = '<textarea';
      textarea          += ` id="${ id }"`;
      textarea          += ` class="${ inputclass }"`;
      textarea          += props.name           ? ` name="${ props.name }"` : ` name="${ id }"`;
      textarea          += props.rows           ? ` rows="${ props.rows }"` : '';
      textarea          += props.cols           ? ` rows="${ props.cols }"` : '';
      textarea          += props.maxlength      ? ` maxlength="${ props.maxlength }"` : '';
      textarea          += props.minlength      ? ` minlength="${ props.minlength }"` : '';
      textarea          += props.title          ? ` title="${ props.title }"` : '';
      textarea          += props.placeholder    ? ` placeholder="${ props.placeholder }"` : '';
      textarea          += props.value          ? ` value="${ props.value }"` : '';
      textarea          += props.ariaId         ? ` aria-describedby="${ props.ariaId }"` : '';
      textarea          += ' autocapitalize="off"';
      textarea          += ' autocomplete="off"';
      textarea          += ' spellcheck="false"';
      textarea          += props.readonly       ? ' readonly' : '';
      textarea          += props.required       ? ' required' : '';
      textarea          += props.autofocus      ? ' autofocus' : '';
      textarea          += '>';
      textarea          += '</textarea>';
      textarea          += ariacontent;
      return `
                    <!-- form input textarea -->
                    <section class="${ formgroup }">
                        <label for="${ id }" class="${ inputlabel }">${ props.label }${ optional }</label>
                        <div class="${ inputgroup }">
                            ${ textarea }
                        </div>
                    </section>
      `;
  },

  form_input_select: function (props) {
      const id           = props.id             ? props.id : 'textId';
      const optional     = !props.required      ? `${ inputoptional }` : '';
      let ariacontent    = '';
      if ( props.ariaId ) {
          ariacontent    = `
                            <small id="${ props.ariaId }" class="${ ariaclass }">${ props.ariatext }</small>`;
      }
      const json         = props.data;
      let options        = '\n';    
      for (var i = 0; i < json.length; i++) {
          let item = json[i];
          options       += `                                <option value="${ item.value }">${ item.display }</option>\n`
      }
      options = options.substring(0, options.length-1);
      let select         = '<select';    
      select            += ` id="${ id }"`;
      select            += ` class="${ inputclass }"`;
      select            += props.name           ? ` name="${ props.name }"` : ` name="${ id }"`;
      select            += props.ariaId         ? ` aria-describedby="${ props.ariaId }"` : '';
      select            += props.size           ? ` size="${ props.size }"` : '';
      select            += props.title          ? ` title="${ props.title }"` : '';
      select            += props.required       ? ' required' : '';
      select            += props.autofocus      ? ' autofocus' : '';
      select            += '>';
      select            += options;    
      select            += `
                            </select>`;
      select            += ariacontent;
      return `
                    <!-- form input select -->
                    <section class="${ formgroup }">
                        <label for="${ id }" class="${ inputlabel }">${ props.label }${ optional }</label>
                        <div class="${ inputgroup }">
                            ${ select }
                        </div>
                    </section>
      `;

  },

  form_input_checkbox: function (props) {
      const type         = props.type           ? props.type : 'checkbox';
      const id           = props.id             ? props.id : 'checkboxId';
      const name         = props.name           ? props.name : ( props.id ) ? props.id : id;
      const json         = props.data;
      let checkbox       = ``;
      for (let i = 0; i < json.length; i++) {
        let item = json[i];
        let checked = item.checked ? 'checked' : '';
        checkbox += `
                            <div class="${ checkgroup }">
                                <input id="${ id }${ i + 1 }" class="${ checkstyle }" name="${ name }${ i + 1 }" type="${ type }" value="${ item.value }" ${ checked }>
                                <label for="${ id }${ i +1 }" class="${ checklabel }">${ item.display }</label>
                            </div>
        `;
      }
      checkbox = checkbox.substring(0, checkbox.length-1);
      return `
                    <!-- form input checkbox -->
                    <section class="${ formgroup }">
                        <label for="${ id }" class="${ inputlabel }">${ props.label }</label>
                        <div class="${ inputgroup }">
                            ${ checkbox }
                        </div>
                    </section>
      `;
  },


  form_input_radio: function (props) {
      const type         = props.type           ? props.type : 'radio';
      const id           = props.id             ? props.id : 'radioId';
      const name         = props.name           ? props.name : ( props.id ) ? props.id : id;
      const json         = props.data;
      let radio          = ``;
      for (let i = 0; i < json.length; i++) {
          let item = json[i];
          let checked = item.checked ? 'checked' : '';
          radio += `
                          <div class="${ checkgroup }">
                              <input id="${ id }${ i + 1 }" class="${ checkstyle }" name="${ name }" type="${ type }" value="${ item.value }" ${ checked }>
                              <label for="${ id }${ i +1 }" class="${ checklabel }">${ item.display }</label>
                          </div>
          `;
      }
      radio = radio.substring(0, radio.length-1);
      return `
                    <!-- form input radio -->
                    <section class="${ formgroup }">
                        <label for="${ id }" class="${ inputlabel }">${ props.label }</label>
                        <div class="${ inputgroup }">
                            ${ radio }
                        </div>
                    </section>
      `;
  }, 

  form_input_range: function (props) {
      const type         = props.type           ? props.type : 'range';
      const id           = props.id             ? props.id : 'rangeId';
      const optional     = !props.required      ? inputoptional : '';
      let ariacontent    = '';
      if ( props.ariaId ) {
          ariacontent    = `
                            <small id="${ props.ariaId }" class="${ ariaclass }">${ props.ariatext }</small>`;
      }
      let range          = '<input';
      range             += ` id="${ id }"`;
      range             += ` class="${ rangeclass }"`;
      range             += props.name           ? ` name="${ props.name }"` : ` name="${ id }"`;
      range             += ` type="${ type }"`;
      range             += props.max            ? ` max="${ props.max }"` : '';
      range             += props.min            ? ` min="${ props.min }"` : '';
//    range             += props.maxlength      ? ` maxlength="${ props.maxlength }"` : '';
//    range             += props.minlength      ? ` minlength="${ props.minlength }"` : '';
      range             += props.size           ? ` size="${ props.size }"` : '';
      range             += props.step           ? ` step="${ props.step }"` : '';
//    range             += props.pattern        ? ` pattern="${ props.pattern }"` : '';
//    range             += props.title          ? ` title="${ props.title }"` : '';
//    range             += props.placeholder    ? ` placeholder="${ props.placeholder }"` : '';
      range             += props.value          ? ` value="${ props.value }"` : '';
      range             += props.ariaId         ? ` aria-describedby="${ props.ariaId }"` : '';
      range             += props.autocapitalize ? ` autocapitalize="${ props.autocapitalize }"` : '';
      range             += ' autocomplete="off"';
//    range             += props.readonly       ? ' readonly' : '';
      range             += props.required       ? ' required' : '';
      range             += props.autofocus      ? ' autofocus' : '';
      range             += '>';
      range             += ariacontent;
      return `
                    <!-- form input ${ type } -->
                    <section class="${ formgroup }">
                        <label for="${ id }" class="${ inputlabel }">${ props.label }${ optional }</label>
                        <div class="${ inputgroup }">
                            ${ range }
                        </div>
                    </section>
      `;
  },
  


  
  form_input_switch: function (props) {

      return `
  
        <h6 style="color:orange;">DRAFT Switch</h6>
        <p>
          <strong> Id: </strong> ${ props.id } &nbsp;&nbsp;
          <strong> Type: </strong> ${ props.type } &nbsp;&nbsp;
          <strong> Label: </strong> ${ props.label } &nbsp;&nbsp;
        </p>

      `;
  },



  form_input_submit: function (props) {

    const id           = props.id             ? props.id : 'submitId';

    let button         = `<button`;
    button            += ` id="${ id }"`;
    button            += props.style          ? props.style : 'btn btn-primary';
    button            += props.name           ? ` name="${ props.name }"` : ` name="${ id }"`;
    button            += ` type="submit"`;
    button            += `>`;
    button            += props.text           ? props.text : `Send your form`;
    button            += `</button>`;

    return `

                    <!-- form submit button -->
                    <section class="${ formgroup }">
                      <div class="${ inputoffset }">
                        ${ button }
                      </div>
                    </section>

    `;
  },

  form_temp: function (props) {
    return `temp output`
  }

}