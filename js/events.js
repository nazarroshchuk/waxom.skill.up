// Menu fixed scroll
var menuFixed = document.querySelector('.header-up-active');
document.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop > 50) {
        menuFixed.classList.add('active');
    } else {
        menuFixed.classList.remove('active');
    }
});
//Get the button
var myButton = document.getElementById("myBtnUp");

// When the user scrolls down 20px from the top of the document, show the button
window.addEventListener('scroll', function () { scrollFunction() });
window.addEventListener('click', function () { topFunction() });

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


