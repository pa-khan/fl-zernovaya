// HEADER
let header = document.querySelector('.header');
let headerWrap = document.querySelector('.header__wrap');
let headerHam = document.querySelector('.ham');

if (headerHam) {
  for (let i = 0; i < 3; i++) {
    let div = document.createElement('div');
    headerHam.append(div);
  }

  headerHam.addEventListener('click', () => {
    header.classList.toggle('--toggle');
    headerHam.classList.toggle('--toggle');
    headerWrap.classList.toggle('--toggle');

    // html.classList.toggle('overflow-disable');
    // body.classList.toggle('overflow-disable');
    // inner.classList.toggle('overflow-disable');
  });
}
