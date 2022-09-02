const $orders = document.querySelectorAll('.orders__item');

if ($orders.length > 0) {
    $orders.forEach(($order) => {
        $order.$btnMore = $order.querySelector('.orders__btn-more');
        $order.$products = $order.querySelector('.orders__products');

        $order.$btnMore.addEventListener('click', () => {
            $order.$btnMore.classList.toggle(window._CLASS.open);
            $order.$products.classList.toggle(window._CLASS.open);
        });
    });
}