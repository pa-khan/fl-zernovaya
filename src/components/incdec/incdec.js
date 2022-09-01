export default class Incdec {
    constructor(element) {
        this.element = element;

        this.$input = this.element.querySelector('.incdec__input');
        this.$btnMinus = this.element.querySelector('.incdec__btn.--minus');
        this.$btnPlus = this.element.querySelector('.incdec__btn.--plus');

        this.element._value = this.$input && this.$input.value ? Number(this.$input.value) : 1;
        this.element._max = this.$input && this.$input.dataset.max ? Number(this.$input.dataset.max) : 99;
        this.$input.value = this.element._value;

        this.checkForLimits();

        this.$input.addEventListener('input', () => {
            let value = this.$input.value.replace('', '');
            this.element._value = value ? Number(value) : 1;

            if (this.element._value < 1) {
                this.element._value = 1;
            } else if (this.element._value > this.element._max) {
                this.element._value = this.element._max;
            }

            this.$input.value = this.element._value;
            this.element.dispatchEvent(new Event('change'));
        });


        this.$btnMinus.addEventListener('click', () => {
            if (this.element._value > 1) {
                this.$input.value = --this.element._value;

                this.element.dispatchEvent(new Event('change'));
            }
        });

        this.$btnPlus.addEventListener('click', () => {
            if (this.element._value <= this.element._max) {
                this.$input.value = ++this.element._value;

                this.element.dispatchEvent(new Event('change'));
            }
        });

        this.element.addEventListener('change', () => {
            this.checkForLimits();
        });
    }

    checkForLimits() {
        if (this.element._value == 1) {
            this.$btnMinus.classList.add(window._CLASS.disabled);
        } else {
            this.$btnMinus.classList.remove(window._CLASS.disabled);
        }

        if (this.element._value == this.element._max) {
            this.$btnPlus.classList.add(window._CLASS.disabled);
        } else {
            this.$btnPlus.classList.remove(window._CLASS.disabled);
        }
    }

    static init() {
        const $incdecs = document.querySelectorAll('.incdec');

        if ($incdecs.length > 0) {
            $incdecs.forEach(($incedec) => {
                new Incdec($incedec);
            });
        }
    }
}