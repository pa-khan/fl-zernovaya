export default class Select {
    constructor(element) {
        this.element = element;
        this.element._isOpen = false;
        this.$select = this.element.querySelector('select');

        if (this.$select) {
            Select.createTemplate(this);

            this.$options = this.$select.querySelectorAll('option');
            this.$items = [];

            this.$options.forEach($option => {
                let $item = Select.createElement(Select.classItem, this.$list);

                $item.$option = $option;
                $option.$item = $item;

                $item.innerText = $option.innerHTML;

                $item.addEventListener('click', () => {
                    if ($option == this.$currentOption)
                        return false;

                    Select.setCurrent(this, $option);
                });
            });

            let currentOption = this.$select.querySelector('[selected = selected]');
            if (currentOption) {
                Select.setCurrent(this, currentOption);
            }
        }


        this.element.addEventListener('click', () => {
            this.element._isOpen = !this.element._isOpen;
            this.element.classList.toggle(window._CLASS.open);
        });

        document.addEventListener('click', (event) => {
            if (!event.target.closest('.select')) {
                this.element._isOpen = false;
                this.element.classList.remove(window._CLASS.open);
            }
        });
    }

    static classWrap = 'select__wrap';
    static classArea = 'select__area';
    static classTitle = 'select__title';
    static classIcon = 'select__icon';
    static classDrop = 'select__drop';
    static classList = 'select__list';
    static classItem = 'select__item';
    static attrSelected = 'selected';


    static createElement(cls, elementToAppend) {
        let element = document.createElement('div');

        element.className = cls;

        if (elementToAppend) {
            elementToAppend.append(element);
        }

        return element;
    }

    static setCurrent(self, option) {
        if (self.$currentOption) {
            self.$currentOption.removeAttribute(Select.attrSelected);
            self.$currentItem.classList.remove(window._CLASS.current);
        }

        self.$currentOption = option;
        self.$currentItem = option.$item;

        self.$currentOption.setAttribute(Select.attrSelected, Select.attrSelected);
        self.$currentItem.classList.add(window._CLASS.current);

        self._value = option.value;

        self.$title.innerText = self._value;

        self.element.dispatchEvent(new Event('change'));
    }

    static createTemplate(self) {
        self.$wrap = Select.createElement(Select.classWrap, self.element);
        self.$area = Select.createElement(Select.classArea, self.$wrap);
        self.$title = Select.createElement(Select.classTitle, self.$area);
        self.$icon = Select.createElement(Select.classIcon, self.$area);
        self.$drop = Select.createElement(Select.classDrop, self.$wrap);
        self.$list = Select.createElement(Select.classList, self.$drop);
    }

    // static closeSelectOnMouseover() {
    //     document.addEventListener('click', (event) => {
    //         if (!event.target.closest('.select')) {

    //         }
    //     });
    // }

    static init() {
        const $selects = document.querySelectorAll('.select');

        if ($selects.length > 0) {
            $selects.forEach(($select) => {
                new Select($select);
            })
        }
    }
}