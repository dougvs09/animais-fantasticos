export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');

    numeros.forEach((item) => {
      const total = +item.innerText;
      let start = 0;
      const incremento = Math.floor(total / 100);
      const timer = setInterval(() => {
        start += incremento;
        item.innerText = start;
        if (start > total) {
          item.innerText = total;
          clearInterval(timer);
        }
      }, 20 * Math.random());
    });
  }

  const numerosSection = document.querySelector('.numbers');
  let observer;
  function handleMutation() {
    observer.disconnect();
    animaNumeros();
  }
  observer = new MutationObserver(handleMutation);
  observer.observe(numerosSection, { attributes: true });
}
