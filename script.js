const hamButton = document.querySelector('.hamburger');
const hamMenu = document.querySelector('.ham-links');

hamButton.addEventListener('click', () => {
    if(hamMenu.style.display === 'block') {
        hamMenu.style.display = 'none';
    } else {
        hamMenu.style.display = 'block';
    }
});

// BIG thank you, once again, to W3 Schools!
// // https://www.w3schools.com/howto/howto_js_mobile_navbar.asp