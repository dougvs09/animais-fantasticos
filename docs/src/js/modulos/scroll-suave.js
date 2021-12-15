export default function initScollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');
  function scrollToContent(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const section = document.querySelector(href);
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
  }
  if (linksInternos.length) {
    linksInternos.forEach((link) => {
      link.addEventListener('click', scrollToContent);
    });
  }
}
