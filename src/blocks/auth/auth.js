export default class Auth {
    static currentTab = null;
    static init() {
        const $ovs = document.querySelectorAll('.ov');

        window.Auth = document.querySelector('.auth');
        const $btnsToggle = document.querySelectorAll('.auth-toggle');
        const $btnsSet = document.querySelectorAll('.auth-set');
        const classOverflowDisalbed = 'overflow-disabled';
        window.Auth.$tabs = window.Auth.querySelectorAll('.auth__tab');

        Auth.set('#auth-type-login');

        if ($btnsToggle.length > 0) {
            $btnsToggle.forEach(($btn) => {
                $btn.addEventListener('click', () => {
                    window.Auth.classList.toggle(window._CLASS.open);

                    $ovs.forEach(($ov) => {
                        $ov.classList.toggle(classOverflowDisalbed);
                    });
                });
            });
        }

        if ($btnsSet.length > 0) {
            $btnsSet.forEach(($btn) => {
                $btn.addEventListener('click', () => {
                    Auth.set($btn.dataset.src);
                });
            });
        }
    }
    static set(tab) {
        const element = document.querySelector(tab);

        if (Auth.currentTab) {
            Auth.currentTab.classList.remove(window._CLASS.current);
        }

        Auth.currentTab = element;
        Auth.currentTab.classList.add(window._CLASS.current);
    }
}