export default function tabAnimals() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  function activeTab(index) {
    tabContent.forEach((content) => {
      content.classList.remove('active_description');
    });
    const direction = tabContent[index].dataset.anime;
    tabContent[index].classList.add('active_description', direction);
  }

  if (tabContent.length && tabMenu.length) {
    tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
