import Field from 'Components/field/field';
import Select from 'Components/select/select';
import Incdec from 'Components/incdec/incdec';


const body = document.body;
// set mode classes
initDefaultClasses();

document.addEventListener('DOMContentLoaded', () => {
    // set css variables
    setSizes();
    window.addEventListener('resize', setSizes);

    Field.init();
    Select.init();
    Incdec.init();

    // Typograpy
    const $texts = document.querySelectorAll('.t1, .t2, .t3');
    $texts.forEach(($text) => {
        setTypograpyClasses($text);
    });
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