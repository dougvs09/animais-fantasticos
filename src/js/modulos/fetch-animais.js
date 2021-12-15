import initAnimaNumeros from './anima-numeros';

export default function initFetchAnimais() {
  const url = './animaisapi.json';

  function createAnimals(animal) {
    const div = document.createElement('div');
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.quantidade}</span>`;
    return div;
  }

  async function fetchAnimais(api) {
    try {
      const response = await fetch(api);
      const data = await response.json();
      const divNumbers = document.querySelector('.numbers_layout');
      data.forEach((item) => {
        const divAnimals = createAnimals(item);
        divNumbers.appendChild(divAnimals);
      });
      initAnimaNumeros();
    } catch (error) {
      console.error(error);
    }
  }

  fetchAnimais(url);
}
