export default function initModal() {
  const modal = document.querySelector('[data-modal="container"]');
  const login = document.querySelector('[data-modal="abrir"]');
  const btnClose = document.querySelector('[data-modal="fechar"]');

  function toggleModal(e) {
    e.preventDefault();
    modal.classList.toggle('modal_ativo');
  }

  function clickOutside(e) {
    if (e.target === this) {
      toggleModal();
    }
  }
  if (modal && login && btnClose) {
    login.addEventListener('click', toggleModal);
    btnClose.addEventListener('click', toggleModal);
    modal.addEventListener('click', clickOutside);
  }
}
