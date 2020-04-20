let templatesBuilderButtons = document.getElementsByClassName('btn__templates-builder');
let templatesBuilder = document.getElementById('popup_templates-builder');

let closeButton = document.getElementsByClassName('popup__close');
let overlay = document.getElementsByClassName('overlay');

function openModal(overlay, openButton, modal) {
    for( i = 0; i < openButton.length; i++){
        openButton[i].onclick = function () {
            var scrollBarWidth = window.innerWidth - document.body.offsetWidth;
            document.body.style.margin = '0px ' + scrollBarWidth + 'px 0px 0px';
            document.body.style.overflow = 'hidden';
            modal.classList.add('show-popup');
            overlay[0].classList.add('show-popup')
        }
    }
};

function closeModal(overlay, modal, closeButton) {
    document.body.style.margin = '';
    document.body.style.overflow = '';
    overlay[0].onclick = function() {
        document.body.style.margin = '';
        document.body.style.overflow = '';
        modal.classList.remove('show-popup');
        overlay[0].classList.remove('show-popup');
    };
    closeButton[0].onclick = function() {
        document.body.style.margin = '';
        document.body.style.overflow = '';
        modal.classList.remove('show-popup');
        overlay[0].classList.remove('show-popup');
    }
};

openModal(overlay, templatesBuilderButtons, templatesBuilder);
closeModal(overlay, templatesBuilder, closeButton);