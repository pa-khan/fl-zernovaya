const $search = document.querySelector('.search')
if ($search) {
    $search.$toggleBtns = $search.querySelectorAll('.search__btn-toggle');
    $search._classShow = '--show';
    if ($search.$toggleBtns.length > 0) {
        $search.$toggleBtns.forEach((btn) => {
            btn.addEventListener('click', (event) => {
                event.preventDefault();

                $search.classList.toggle($search._classShow);
            });
        });
    }

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.search')) {
            $search.classList.remove($search._classShow);
        }
    });
}