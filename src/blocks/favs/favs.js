import Swiper, { Navigation, Pagination } from 'swiper';

const $favsBlocks = document.querySelectorAll('.favs');

if ($favsBlocks) {
    $favsBlocks.forEach(($favs) => {
        $favs.blocks = $favs.querySelectorAll('.favs__block');
        $favs.blocks.forEach(($fav) => {
            $fav.$slider = $fav.querySelector('.favs__slider');
            $fav.$controlPrev = $fav.querySelector('.favs__control.--prev');
            $fav.$controlNext = $fav.querySelector('.favs__control.--next');
            $fav.$dots = $fav.querySelector('.favs__dots');
            $fav.$valueCurrent = $fav.querySelector('.favs__value.--current');
            $fav.$valueTotal = $fav.querySelector('.favs__value.--total');

            document.addEventListener('DOMContentLoaded', () => {
                new Swiper($fav.$slider, {
                    slidesPerView: 3,
                    spaceBetween: 20,
                    navigation: {
                        prevEl: $fav.$controlPrev,
                        nextEl: $fav.$controlNext
                    },
                    pagination: {
                        el: $fav.$dots,
                        clickable: true,
                    },
                    modules: [Navigation, Pagination]
                });
            });
        });
    });
}