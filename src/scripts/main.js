import { Fancybox } from "@fancyapps/ui";
import IMask from 'imask';



// import "fancyapps/ui/dist/fancybox.css";

import Field from 'Components/field/field';
import Select from 'Components/select/select';
import Check from 'Components/check/check';
import Incdec from 'Components/incdec/incdec';
import Auth from 'Blocks/auth/auth';


const html = document.documentElement;
const body = document.body;
// set mode classes
initDefaultClasses();

document.addEventListener('DOMContentLoaded', () => {
    window.$cartBtn = document.querySelector('.cart-btn');
    window.$upBtn = document.querySelector('.up-btn');
    window.$upBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    // set css variables
    setSizes();
    window.addEventListener('resize', setSizes);

    Field.init();
    Select.init();
    Check.init();
    Incdec.init();
    Auth.init();

    // Typograpy
    const $texts = document.querySelectorAll('.t1, .t2, .t3');
    $texts.forEach(($text) => {
        setTypograpyClasses($text);
    });

    // mask
    const $phonesFields = document.querySelectorAll('.field.--phone');
    if ($phonesFields.length > 0) {
        $phonesFields.forEach(($field) => {
            IMask($field.$area, {
                mask: '+{7} (000) 000-00-00'
            })
        });
    }

    toggleFixedBtns();

    window.addEventListener('scroll', toggleFixedBtns);
});

function initDefaultClasses() {
    if (!window._CLASS) {
        window._CLASS = {};
        window._CLASS.error = '--error';
        window._CLASS.focus = '--focus';
        window._CLASS.filled = '--filled';
        window._CLASS.selected = '--selected';
        window._CLASS.checked = '--checked';
        window._CLASS.disabled = '--disabled';
        window._CLASS.current = '--current';
        window._CLASS.open = '--open';
        window._CLASS.show = '--show';
    }
}

function setSizes() {
    const windowWidth = window.screen.width,
        windowHeight = window.screen.height,
        documentWidth = body.offsetWidth,
        documentHeight = body.offsetHeight;

    body.style.setProperty('--w-w', windowWidth + 'px');
    body.style.setProperty('--w-h', windowHeight + 'px');

    body.style.setProperty('--d-w', documentWidth + 'px');
    body.style.setProperty('--d-h', documentHeight + 'px');
}

function setTypograpyClasses($element) {
    $element.$children = $element.querySelectorAll('h1, h2, h3, h4, h5, h6, p, ul, ol, table');
    $element.$children.forEach(($child) => {
        $child.classList.add($child.tagName.toLowerCase());
    });
}

function toggleFixedBtns() {
    const scrollTop = html.scrollTop;
    if (scrollTop >= 400) {
        window.$cartBtn.classList.add(window._CLASS.show);
        window.$upBtn.classList.add(window._CLASS.show);
    } else {
        window.$cartBtn.classList.remove(window._CLASS.show);
        window.$upBtn.classList.remove(window._CLASS.show);
    }
}