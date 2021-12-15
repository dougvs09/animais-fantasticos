import clickOutside from './outsideclick.js';

export default function initMenuMobile() {}

const btnMenu = document.querySelector('[data-menu="button"]');
const menuItems = document.querySelector('[data-menu="list"]');

function openMenuMobile() {
  this.classList.toggle('active_menu_mobile');
  menuItems.classList.toggle('active_menu_mobile');
  clickOutside(menuItems, ['click', 'touchstart'], () => {
    this.classList.remove('active_menu_mobile');
    menuItems.classList.remove('active_menu_mobile');
  });
}

['touchstart', 'click'].forEach((userEvent) => {
  btnMenu.addEventListener(userEvent, openMenuMobile);
});
