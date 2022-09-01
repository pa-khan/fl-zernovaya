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