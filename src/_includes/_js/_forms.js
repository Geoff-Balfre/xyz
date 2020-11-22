
//  THE FORM  -  WHAT HAPPENS WITH MULTIPLES SEE "CLICK" and "INPUT" BELOW

if (document.querySelector('#formId')) {

}

//  RANGE INPUT  -  WHAT HAPPENS WITH MULTIPLES SEE "CLICK" and "INPUT" BELOW

if (document.querySelector('#rangeId')) {
    const input = document.querySelector('#rangeId');
    const hint = document.querySelector('#showrangeId');
    const theval = input.value;
    //const themax = input.max;
    //const themin = input.min;
    //const thestep = input.step;
    //hint.innerHTML = `<span style="color:blue;"">Range: ${ themin } to ${ themax } step ${ thestep }</span> Value: ${ theval }`;
    hint.innerHTML = `${ theval }`;
    input.addEventListener('input', (e) => {
      e.preventDefault();
      let squib = input.value;
      hint.innerHTML = input.value;
    });
}

//  PASSWORD TOGGLE  ?? replace Hide/Show with eye icon ??

if (document.querySelector('#showpasswordId')) {
  const input = document.querySelector('#passwordId');
  const button = document.querySelector('#showpasswordId');
  button.addEventListener('click', (e) => {
    e.preventDefault();
    var type = input.getAttribute('type');
    if (type == 'password') {
        input.setAttribute('type', 'text');   
        button.innerHTML = 'Hide<span class="mobile-nodisplay"> password';
    } else {
        input.setAttribute('type', 'password');   
        button.innerHTML = 'Show<span class="mobile-nodisplay"> password';
    }
  })
}

//  AUTOCOMPLETE  -  WHAT HAPPENS WITH MULTIPLES SEE "CLICK" and "INPUT" BELOW

if (document.querySelector('#autocompleteId')) {

}

//  CLICK TESTING

document.addEventListener('clickx', (e) => {
  e.preventDefault();
  let target = e.target;
  let id = (target.id) ? target.id : 'undefined' ;
  let cl = (target.class) ? target.class : 'undefined' ;
  console.log('TAG: ' + target.tagName.toLowerCase() + ' ID: ' + id + ' CLASS: ' + cl + '');
});

//  INPUT TESTING

document.addEventListener('inputx', (e) => {
  e.preventDefault();
  let target = e.target;
  let id = (target.id) ? target.id : 'undefined' ;
  let cl = (target.class) ? target.class : 'undefined' ;
  console.log('TAG: ' + target.tagName.toLowerCase() + ' ID: ' + id + ' CLASS: ' + cl + '');
});
