
/*  BACK TO TOP  */

var rootElement = document.documentElement;

const scrollButton = document.querySelector('.scrollToTopBtn');

/*  FUNCTIONS  */

function handleScroll() {
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if ((rootElement.scrollTop / scrollTotal ) > 0.80) {
        scrollButton.classList.add('showBtn');
    } else {
        scrollButton.classList.remove('showBtn');
    }
}

function scrollToTop() { rootElement.scrollTo( { top:0, behavior:'smooth' } ); }

/*  PROCESS  */

document.addEventListener('scroll', handleScroll);

scrollButton.addEventListener('click', scrollToTop);
