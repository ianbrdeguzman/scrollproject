// assign top position of banner element relative to the viewport
const bannerTopPosition = document.querySelector('.banner').getBoundingClientRect().top;

// target all links class
const links = document.querySelectorAll('.links');

// loop over all links class
links.forEach( (link) => {

    // add event listener to each link
    link.addEventListener('click', (e) => {

        // prevent default function
        e.preventDefault();
    
    // remove active class
    document.querySelector('.navbar-links-container')
      .classList.remove('navbar-links-container-active');

    // assign event target element id
    const el = e.target.getAttribute('href').slice(1);

    // assign the difference between distance of event target element and banner element
    const position = document.getElementById(el).offsetTop - bannerTopPosition;
    
    // smooth scroll to position of event target element
    window.scrollTo({
      top: position,
      left: 0,
      behavior: 'smooth'
    });
  })
})

// add event listener to learn more button 
document.querySelector('#learn-more')
    .addEventListener('click', (e) => {

        // assign top position of footer element relative to the viewport
        const footerTopPosition = document.querySelector('footer').getBoundingClientRect().top;
        
        // prevent default function
        e.preventDefault();

        // scroll to footer position
        window.scrollTo({
            top: footerTopPosition,
            left: 0,
            behavior: 'smooth',
        });
})

// listen for scroll event
window.addEventListener('scroll', () => {

    // assign the pixel distance scrolled along the vertical Y axis
    const scrollHeight = window.pageYOffset;

    // if scroll distance is greater than the position of banner element
    if(scrollHeight > bannerTopPosition) {

        // add header active container class
        document.querySelector('.header-container')
            .classList.add('header-container-active');
        
        // else remove the active container class
    } else {
        document.querySelector('.header-container')
            .classList.remove('header-container-active');
    }
});

// add event listener to menu and toggle active class
document.getElementById('menu-toggle')
    .addEventListener('click', () => {
        document.querySelector('.navbar-links-container')
        .classList.toggle('navbar-links-container-active');
});

// add event listener to window resize and remove navbar active class
window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
        document.querySelector('.navbar-links-container')
        .classList.remove('navbar-links-container-active');
    }
});