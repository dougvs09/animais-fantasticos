import clickOutside from './outsideclick';

export default function initMenuMobile() {}

const btnMenu = document.querySelector('[data-menu="button"]');
const menuItems = document.querySelector('[data-menu="list"]');

function openMenuMobile(event) {
  event.preventDefault();
  this.classList.add('active_menu_mobile');
  menuItems.classList.add('active_menu_mobile');
  btnMenu.disabled = true;
  clickOutside(menuItems, ['click', 'touchstart'], () => {
    this.classList.remove('active_menu_mobile');
    btnMenu.disabled = true;
    menuItems.classList.remove('active_menu_mobile');
  });
}

['touchstart', 'click'].forEach((userEvent) => {
  btnMenu.addEventListener(userEvent, openMenuMobile);
});
