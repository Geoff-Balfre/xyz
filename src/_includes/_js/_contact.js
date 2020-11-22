
/*  CONSTANTS  */

const form = document.querySelector('#formId');
const firstname = document.querySelector('#firstnameId');
const surname = document.querySelector('#surnameId');
const email = document.querySelector('#emailId');
const reason = document.querySelector('#selectId');
const message = document.querySelector('#messageId');
const button = document.querySelector('#buttonId');

/*  FUNCTIONS  */

function formSubmission(e) {
  e.preventDefault();
  alert('Processing Form')
  button.disabled = 'true';

  // show spinner
  button.innerHtml = '## sending form ##';
  // validateForm();
}

function validateForm() {

}


/*  PROCESS  */

form.addEventListener('submit', formSubmission);   
