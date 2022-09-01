export default class Field {
    constructor(element) {
        this.element = element;

        this.element.$area = this.element.querySelector('input');
        if (!this.element.$area) {
            this.element.$area = this.element.querySelector('textarea');
        }

        this.element.$area.addEventListener('focusin', () => {
            this.element.classList.remove(window._CLASS.error);
            this.element.classList.add(window._CLASS.filled);
        });

        this.element.$area.addEventListener('focusout', () => {
            this.element.classList.remove(window._CLASS.focus);

            if (this.element.$area.value == '') {
                this.element.classList.remove(window._CLASS.filled);
            }
        });

        this.element.$area.addEventListener('input', () => {
            this.element._value = this.element.$area;

            if (this.element.$area.value != '') {
                this.element.classList.add(window._CLASS.filled);
            }
        });
    }
    static init() {
        const fields = document.querySelectorAll('.field');

        if (fields.length > 0) {
            fields.forEach((field) => {
                new Field(field);
            });
        }
    }
}