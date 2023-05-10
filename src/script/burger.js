const burgerButton = document.querySelector('.header__burger');
const mobileMenu = document.querySelector('.header__menu');
const mobileWrapper = document.querySelector('.header__wrapper');

function openMenu() {
  mobileMenu.classList.add('header__menu_active');
  mobileWrapper.classList.add('header__wrapper_active');
}

function closeMenu() {
  mobileMenu.classList.remove('header__menu_active');
  mobileWrapper.classList.remove('header__wrapper_active');
}

function handleMenuClick() {

  burgerButton.addEventListener('click', () => {
    openMenu();
  })

  mobileWrapper.addEventListener('click', () => {
    closeMenu();
  })

  mobileMenu.addEventListener('click', (evt) => {

    if(evt.target.classList.contains('header__menu-link')) {
      closeMenu();
    }
  })
}

export { handleMenuClick };
