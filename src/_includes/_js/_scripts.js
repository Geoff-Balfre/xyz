
// class management functions

const add_class      = (q, c) => { document.querySelector(q).classList.add(c); }
const remove_class   = (q, c) => { document.querySelector(q).classList.remove(c); }
const toggle_class   = (q, c) => { document.querySelector(q).classList.toggle(c); }
const replace_class  = (q, c, n) => { document.querySelector(q).classList.remove(c); document.querySelector(q).classList.add(n); }
const contains_class = (q, c) => document.querySelector(q).classList.contains(c);

// page dark mode toggle process and function

if (document.querySelector('.dark-mode')) {
  const darkmode = document.querySelector('.dark-mode')
    darkmode.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark-mode');
  })
}

// viewport change process and functions

if (document.querySelector('.page-viewport')) {
    const viewport_size = () => {
        document.querySelector('.page-viewport').innerHTML = '' + window.innerWidth + '<small>x</small>' + window.innerHeight + '';
    }
    window.onresize = viewport_size;
    window.dispatchEvent(new Event('resize'));
}

// back to top process and functions

if ( document.querySelector('.scroll-top') ) {
    const page = document.documentElement;
    const button = document.querySelector('.scroll-top');
    button.addEventListener('click', () => {
        console.log('Click Action triggered');
        page.scrollTo( { top: 0, behavior: "smooth" } );
    });
    document.addEventListener('scroll', () => {
        const scrollTotal = page.scrollHeight - page.clientHeight;
        console.log('NEW Scroll Action triggered: ' + page.scrollHeight + ' '+ page.clientHeight + ' ' + (page.scrollTop / scrollTotal));
        if ( (page.scrollTop / scrollTotal) > 0.80 ) {
            button.classList.add("showBtn");
        } else {
            button.classList.remove("showBtn");
        }
    });
}

// show range value process and functions

// show password process and functions

// general functions

const load = () => {console.log("Load event detected..."); init();} 

const init = () => {console.log("Init detected...");} 

window.onload = load; 

// touchstart process

window.addEventListener('touchstart', function onFirstTouch() {
  document.body.classList.add('touched');
  if (document.querySelector('.touched-viewport')) {document.querySelector('.touched-viewport').innerHTML='Touched';}
  window.removeEventListener('touchstart', onFirstTouch, false);
}, false);

// hamburger menu icon selection 

const menuButton  = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');
menuButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('open');
})