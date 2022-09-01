import Swiper, { Navigation, Pagination } from 'swiper';

const $card = document.querySelector('.card');

if ($card) {
    $card.$slider = $card.querySelector('.card__slider');
    $card.$items = $card.querySelectorAll('.card__item');
    $card.$controlPrev = $card.querySelector('.card__control.--prev');
    $card.$controlNext = $card.querySelector('.card__control.--next');
    $card.$dots = $card.querySelector('.card__dots');

    document.addEventListener('DOMContentLoaded', () => {
        new Swiper($card.$slider, {
            navigation: {
                prevEl: $card.$controlPrev,
                nextEl: $card.$controlNext
            },
            pagination: {
                el: $card.$dots,
                clickable: true,
            },
            modules: [Navigation, Pagination]
        });
    });
}