function modal(){
    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelector('[data-close]');
    modalTrigger.forEach((item) => {
        item.addEventListener('click', () => {
            openModal()
        })
    })
    modal.addEventListener('click', (e) => {
        if(e.target === modal || e.target === modalCloseBtn){
            closeModal(modal)
        }
    })
    document.addEventListener('keydown', (e) => {
        if(e.code === 'Escape' && !modal.classList.contains('hide')){
            closeModal(modal)
        }
    })   

    function closeModal(modal) {
        modal.classList.toggle('hide')
        document.body.style.overflow = ''
    }
    function openModal(){
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
      
    }
    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');
    
        prevModalDialog.classList.add('hide');
        openModal()
    
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
            closeModal(modal);
        }, 4000);
    }
}
module.exports = modal;