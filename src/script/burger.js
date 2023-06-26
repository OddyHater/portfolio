const burgerButton = document.querySelector('.sidenav__burger');
const mobileMenu = document.querySelector('.sidenav__menu');
const mobileWrapper = document.querySelector('.sidenav__wrapper');

function openMenu() {
  mobileMenu.classList.add('sidenav__menu_active');
  mobileWrapper.classList.add('sidenav__wrapper_active');
}

function closeMenu() {
  mobileMenu.classList.remove('sidenav__menu_active');
  mobileWrapper.classList.remove('sidenav__wrapper_active');
}

function handleMenuClick() {

  burgerButton.addEventListener('click', () => {
    openMenu();
  })

  mobileWrapper.addEventListener('click', () => {
    closeMenu();
  })

  mobileMenu.addEventListener('click', (evt) => {

    if(evt.target.classList.contains('sidenav__menu-link')) {
      closeMenu();
    }
  })
}

export { handleMenuClick };
