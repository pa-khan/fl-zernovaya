const $filter = document.querySelector('.filter');

if ($filter) {
    $filter.$btnToggle = $filter.querySelector('.filter__btn-toggle');

    $filter.$btnToggle.addEventListener('click', () => {
        $filter.classList.toggle(window._CLASS.open);
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.filter')) {
            $filter.classList.remove(window._CLASS.open);
        }
    });
}