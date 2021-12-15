export default function accordionFaq() {
  const accordionItem = document.querySelectorAll('[data-anime="accordion"] dt');
  function activeAccordion() {
    this.classList.toggle('active_faq');
    this.nextElementSibling.classList.toggle('active_faq');
  }
  if (accordionItem.length) {
    accordionItem.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
