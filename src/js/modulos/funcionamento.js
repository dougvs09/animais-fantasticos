export default function initFuncionamento() {
  const agora = new Date();
  const hora = agora.getUTCHours() - 3;
  const diaDaSemana = agora.getDay();
  const funcionamento = document.querySelector('[data-funcionamento]');
  if (hora >= 8 && hora < 18 && diaDaSemana !== 0 && diaDaSemana !== 6) {
    funcionamento.classList.add('aberto');
  }
}
