export default function initFecthBitcoin() {
  const bitcoin = document.querySelector('.bitcoin');
  const url = 'https://www.blockchain.com/ticker';
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const brl = 100 / data.BRL.buy;
      bitcoin.innerText = brl.toFixed(4).replace('.', ',');
    })
    .catch((error) => console.error(error));
}
