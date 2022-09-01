import Swiper, { Navigation, Pagination } from 'swiper';

const $reviewsBlocks = document.querySelectorAll('.reviews');
if ($reviewsBlocks) {
    $reviewsBlocks.forEach(($reviews) => {
        $reviews.$slider = $reviews.querySelector('.reviews__slider');
        $reviews.$controlPrev = $reviews.querySelector('.reviews__control.--prev');
        $reviews.$controlNext = $reviews.querySelector('.reviews__control.--next');
        $reviews.$dots = $reviews.querySelector('.reviews__dots');

        document.addEventListener('DOMContentLoaded', () => {
            new Swiper($reviews.$slider, {
                slidesPerView: 2,
                spaceBetween: 20,
                navigation: {
                    prevEl: $reviews.$controlPrev,
                    nextEl: $reviews.$controlNext
                },
                pagination: {
                    el: $reviews.$dots,
                    clickable: true,
                },
                modules: [Navigation, Pagination]
            });
        });
    });
}