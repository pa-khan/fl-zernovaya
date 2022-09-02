const $addresses = document.querySelector('.addresses');
if ($addresses) {
    $addresses.$list = $addresses.querySelector('.addresses__list');
    $addresses.$itemFirst = $addresses.querySelector('.addresses__item');
    $addresses.$btnAdd = $addresses.querySelector('.addresses__btn-add');

    $addresses.$btnAdd.addEventListener('click', () => {
        let el = $addresses.$itemFirst.cloneNode(true);

        console.log(el);
        el.$input = el.querySelector('input');
        el.$input.value = '';

        $addresses.$list.append(el);
    });
} 