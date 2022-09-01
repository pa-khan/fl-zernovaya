export default class Check {
    static addError(element, message) {
        element.classList.add(window._CLASS.error);

        if (message) {
            element.querySelector('.check__message').innerText = message;
        }
    }

    constructor(element) {
        this.element = element;
        this.input = this.element.querySelector('input');
        this.type = this.input.type;
        this.checkChecked();

        this.onClick();
    }

    onClick() {
        this.element.addEventListener('click', () => {

            if (this.type == 'checkbox') {
                this.element.classList.toggle(window._CLASS.checked);
                this.checked = this.input.getAttribute('checked');

                if (this.checked) {
                    this.input.removeAttribute('checked');
                } else {
                    this.input.setAttribute('checked', 'checked');
                }

            } else if (this.type == 'radio') {
                if (this.element.closest(window._CLASS.checked)) {
                    return false;
                }

                this.name = this.input.name;
                let parent = this.element.closest('.checks') ? this.element.closest('.checks') : this.element.closest('form') ? this.element.closest('form') : document.body;
                let radios = parent.querySelectorAll('.check input[type="radio"][name="' + this.name + '"]');
                radios.forEach(radio => {
                    radio.removeAttribute('checked');
                    radio.closest('.check').classList.remove(window._CLASS.checked);
                });
                this.element.classList.add(window._CLASS.checked);
                this.input.setAttribute('checked', 'checked');
            }
        });
    }


    checkChecked() {
        if (this.input.getAttribute('checked')) {
            this.element.classList.add(window._CLASS.checked);
        }
    }

    static init() {
        const $checks = document.querySelectorAll('.check');

        if ($checks.length > 0) {
            $checks.forEach(($check) => {
                new Check($check);
            });
        }
    }

}