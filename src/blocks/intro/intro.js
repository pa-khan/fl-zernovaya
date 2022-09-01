import Swiper, { Navigation, Pagination } from 'swiper';

const $intro = document.querySelector('.intro');

if ($intro) {
    $intro.$slider = $intro.querySelector('.intro__slider');
    $intro.$items = $intro.querySelectorAll('.intro__item');
    $intro.$controlPrev = $intro.querySelector('.intro__control.--prev');
    $intro.$controlNext = $intro.querySelector('.intro__control.--next');
    $intro.$dots = $intro.querySelector('.intro__dots');
    $intro.$valueCurrent = $intro.querySelector('.intro__value.--current');
    $intro.$valueTotal = $intro.querySelector('.intro__value.--total');
    $intro.attrIndex = 'data-index';
    $intro.setValue = function (element, index) {
        if (!element) {
            return false;
        }

        element.innerText = index < 10 ? '0' + index : index;
    };

    $intro.setValue($intro.$valueCurrent, 1);
    $intro.setValue($intro.$valueTotal, $intro.$items.length);

    document.addEventListener('DOMContentLoaded', () => {
        new Swiper($intro.$slider, {
            navigation: {
                prevEl: $intro.$controlPrev,
                nextEl: $intro.$controlNext
            },
            pagination: {
                el: $intro.$dots,
                clickable: true,
            },
            modules: [Navigation, Pagination]
        });

        $intro.$slider.swiper.on('activeIndexChange', () => {
            const currentIndex = $intro.$slider.swiper.activeIndex + 1;
            $intro.setValue($intro.$valueCurrent, currentIndex);
        });
    });

}