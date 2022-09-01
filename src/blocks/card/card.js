import Swiper, { Navigation, Pagination, EffectFade } from 'swiper';

const $card = document.querySelector('.card');

if ($card) {
    $card.$slider = $card.querySelector('.card__slider');
    $card.$controlPrev = $card.querySelector('.card__control.--prev');
    $card.$controlNext = $card.querySelector('.card__control.--next');
    $card.$dots = $card.querySelector('.card__dots');
    $card.classFavorit = '--favorit';
    $card.isFavorit = $card.dataset.favorit && $card.dataset.favorit == 'true' ? true : false;
    $card.$btnFavorit = $card.querySelectorAll('.card__btn-favorit');
    $card.$incdec = $card.querySelector('.incdec');
    $card.$prices = $card.querySelectorAll('.price__item');
    $card.$pricesCurrent = $card.$prices[0];


    document.addEventListener('DOMContentLoaded', () => {
        $card.$pricesCurrent.classList.add(window._CLASS.current);

        $card.setCurrentPrice = function ($priceItem) {
            // if ($priceItem == $card.$pricesCurrent)
            //     return false;

            console.log($card.$pricesCurrent);

            $card.$pricesCurrent.classList.remove(window._CLASS.current);
            $card.$pricesCurrent = $priceItem;
            $card.$pricesCurrent.classList.add(window._CLASS.current);
        };

        if ($card.isFavorit) {
            $card.classList.add($card.classFavorit);
        }

        $card.$btnFavorit.forEach(($btn) => {
            $btn.addEventListener('click', () => {
                $card.isFavorit = !$card.isFavorit;

                if ($card.isFavorit) {
                    $card.classList.add($card.classFavorit);
                } else {
                    $card.classList.remove($card.classFavorit);
                }
            });
        });

        $card.$prices.forEach(($price) => {
            $price._value = Number($price.getAttribute('data-price'));
            $price.$areaValue = $price.querySelector('.price__value var');

            $price.addEventListener('click', () => {
                $card._price = $price._value;
                $card.setCurrentPrice($price);
            });


            if ($card.$incdec) {
                setTimeout(() => {
                    // $price.$areaValue.innerText = ($price._value * $card.$incdec._value).toLocaleString('ru');
                    $price.$areaValue.innerText = ($price._value).toLocaleString('ru');
                }, 100);
            } else {
                $price.$areaValue.innerText = ($price._value).toLocaleString('ru');
            }
        });

        new Swiper($card.$slider, {
            slidesPerView: 1,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            navigation: {
                prevEl: $card.$controlPrev,
                nextEl: $card.$controlNext
            },
            pagination: {
                el: $card.$dots,
                clickable: true,
            },
            modules: [Navigation, Pagination, EffectFade]
        });
    });
}