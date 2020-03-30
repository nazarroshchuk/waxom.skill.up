// Menu fixed scroll
const menuFixed = document.querySelector('.header-up-active');
document.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop > 50) {
        menuFixed.classList.add('active');
    } else {
        menuFixed.classList.remove('active');
    }
});
//Get the button
const myButton = document.getElementById("myBtnUp");

// When the user scrolls down 20px from the top of the document, show the button
window.addEventListener('scroll', function () { scrollFunction() });
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
myButton.addEventListener('click', function () {
    topFunction();
})
//Popup
const closeBtnPopup = document.querySelector('.close');
const popup = document.querySelector('.popup-in-slider');
const openPopupBtn = document.getElementById('openPopup');

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


