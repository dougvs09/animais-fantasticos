export default function scrollAnimado() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  const windowPercent = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach((section) => {
      const distanceTop = section.getBoundingClientRect().top;
      const sectionVisible = distanceTop - windowPercent;
      if (sectionVisible < 0) {
        section.classList.add('scroll_animado');
      } else if (section.classList.contains('scroll_animado')) {
        section.classList.remove('scroll_animado');
      }
    });
  }
  if (sections.length) {
    window.addEventListener('scroll', animaScroll);
  }
}
