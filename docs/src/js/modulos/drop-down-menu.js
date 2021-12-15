import clickOutside from './outsideclick.js';

export default function initDropDownMenu() {
  const menu = document.querySelectorAll('[data-dropdown]');
  function activeMenu(e) {
    e.preventDefault();
    this.classList.add('active_menu');
    clickOutside(this, ['touchstart', 'click'], () => {
      this.classList.remove('active_menu');
    });
  }
  menu.forEach((item) => {
    ['touchstart', 'click'].forEach((userEvent) => {
      item.addEventListener(userEvent, activeMenu);
    });
  });
}
