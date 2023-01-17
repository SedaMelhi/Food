function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.toggle('hide');
    document.body.style.overflow = ''
}
function openModal(modalSelector){
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    
}
function showThanksModal(message, modalSelector) {
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.classList.add('hide');
    openModal(modalSelector)

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
        <div class="modal__content">
            <div class="modal__close" data-close>×</div>
            <div class="modal__title">${message}</div>
        </div>
    `;
    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
        thanksModal.remove();
        prevModalDialog.classList.add('show');
        prevModalDialog.classList.remove('hide');
        closeModal(modalSelector);
    }, 4000);
}
function modal(triggerSelector, modalSelector){
    const modalTrigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          modalCloseBtn = document.querySelector('[data-close]');
    modalTrigger.forEach((item) => {
        item.addEventListener('click', () => {
            openModal(modalSelector)
        })
    })
    modal.addEventListener('click', (e) => {
        if(e.target === modal || e.target === modalCloseBtn){
            closeModal(modalSelector)
        }
    })
    document.addEventListener('keydown', (e) => {
        if(e.code === 'Escape' && !modal.classList.contains('hide')){
            closeModal(modalSelector)
        }
    })      
}
export {showThanksModal};
export default modal;