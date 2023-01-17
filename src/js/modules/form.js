import {showThanksModal} from "./modal";
import {postData} from "../services/services";
function form(){
    const forms = document.querySelectorAll('form');
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    }
    
    function bindPostData(form){
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 15px auto 0;
            `
            statusMessage.textContent = message.loading;
            form.insertAdjacentElement('afterend', statusMessage)
            const formData = new FormData(form)
            const object = {}
            formData.forEach((value, key) => {
                object[key] = value;
            })
            
            postData('http://localhost:3000/requests', JSON.stringify(object))
            .then(data => {
                    console.log(data);
                    showThanksModal(message.success, '.modal');
                        setTimeout(() => {
                            statusMessage.remove();
                        }, 5000)
                }   
            )
            .catch(() => 
                showThanksModal(message.failure, '.modal')
            )
            .finally(() => {
                form.reset();
            })
        })
    }
    forms.forEach(item => bindPostData(item))
}
export default form;