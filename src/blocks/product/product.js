
const $products = document.querySelectorAll('.product');

if ($products.length > 0) {
    document.addEventListener('DOMContentLoaded', () => {
        $products.classFavorit = '--favorit';

        $products.setCurrentPrice = function ($product, $priceItem) {
            if ($priceItem == $product.$pricesCurrent)
                return false;

            $product.$pricesCurrent.classList.remove(window._CLASS.current);
            $product.$pricesCurrent = $priceItem;
            $product.$pricesCurrent.classList.add(window._CLASS.current);
        };

        $products.forEach($product => {
            if ($product.classList.contains(window._CLASS.disabled))
                return false;

            $product.isFavorit = $product.dataset.favorit && $product.dataset.favorit == 'true' ? true : false;
            $product.$btnFavorit = $product.querySelectorAll('.product__btn-favorit');
            $product.$incdec = $product.querySelector('.incdec');
            $product.$prices = $product.querySelectorAll('.product .price__item');
            $product.$pricesCurrent = $product.$prices[0];
            $product.$select = $product.querySelector('.select');

            if ($product.isFavorit) {
                $product.classList.add($products.classFavorit);
            }

            $product.$btnFavorit.forEach(($btn) => {
                $btn.addEventListener('click', () => {
                    $product.isFavorit = !$product.isFavorit;

                    if ($product.isFavorit) {
                        $product.classList.add($products.classFavorit);
                    } else {
                        $product.classList.remove($products.classFavorit);
                    }
                });
            });

            $product.$prices.forEach(($price) => {
                $price._value = Number($price.getAttribute('data-price'));
                $price.$areaValue = $price.querySelector('.price__value var');

                $price.addEventListener('click', () => {
                    $product._price = $price._value;
                    $products.setCurrentPrice($product, $price);
                });


                if ($product.$incdec) {
                    setTimeout(() => {
                        // $price.$areaValue.innerText = ($price._value * $product.$incdec._value).toLocaleString('ru');
                        $price.$areaValue.innerText = ($price._value).toLocaleString('ru');
                    }, 100);
                } else {
                    $price.$areaValue.innerText = ($price._value).toLocaleString('ru');
                }
            });

            $product.$pricesCurrent.classList.add(window._CLASS.current);

            if ($product.$incdec) {
                // $product.$incdec.addEventListener('change', () => {
                //     $product.$prices.forEach(($price) => {
                //         if ($product.$incdec._value >= 40) {
                //             $price.classList.add('--sm');
                //         } else {
                //             $price.classList.remove('--sm');
                //         }

                //         $price.$areaValue.innerText = ($price._value * $product.$incdec._value).toLocaleString('ru');
                //     });
                // });
            }

            if ($product.$select) {
                $product.addEventListener('mouseover', () => {
                    $product.$select.classList.add('--b-black');
                });

                $product.addEventListener('mouseout', () => {
                    $product.$select.classList.remove('--b-black');
                    // $product.$select.classList.remove(window._CLASS.open);
                });
            }
        });
    });
}