// MENU position: fixed scroll
var menuFixed = document.querySelector('.header-up-active');
document.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop > 50) {
        menuFixed.classList.add('active-btn-up');
    } else {
        menuFixed.classList.remove('active-btn-up');
    }
});

//BUTTON scroll UP
//Get the button
var myButton = document.getElementById("myBtnUp");

// When the user scrolls down 20px from the top of the document, show the button
window.addEventListener('scroll', function () { scrollFunction() });
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}
//add smooth page scroll
$(document).ready(function () {
    // Add smooth scrolling to myButton
    $('#myBtnUp').on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

//POPUP
var closeBtnPopup = document.querySelector('.close');
var popup = document.querySelector('.popup-in-slider');
var openPopupBtn = document.getElementById('openPopup');

openPopupBtn.addEventListener('click', function (etv) {
    etv.preventDefault;
    popup.style.display = 'block';
});
closeBtnPopup.addEventListener('click', function () {
    popup.style.display = 'none';
});

document.addEventListener('click', function (evt) {
    if (evt.target === popup) {
        popup.style.display = 'none';
    }
});

document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        popup.style.display = 'none';
    }
});


