document.addEventListener('DOMContentLoaded', () => {
    /** -------------------------Tabs------------------------------ */
    const tabContents = document.querySelectorAll('.tabcontent'),
          tabHeader = document.querySelector('.tabheader__items'),
          tabheaderItem = document.querySelectorAll('.tabheader__item');

    const showTabContent = (i = 0, tabs = tabheaderItem) => {
          tabContents[i].classList.remove('hide')
          tabContents[i].classList.add('show', 'fade')
          tabs[i].classList.add('tabheader__item_active')
    }
    const hideTabContent = (tabs = tabheaderItem) => {
        tabs.forEach(item => {
            if (item.classList.contains('tabheader__item_active')) {
                item.classList.remove('tabheader__item_active')
            }
        })
        tabContents.forEach(item => {
            item.classList.add('hide')
            item.classList.remove('show', 'fade')
        })
    }
    tabHeader.addEventListener('click', (event) => {
        const tabheaderItem = document.querySelectorAll('.tabheader__item'),
            target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabheaderItem.forEach((item, i) => {
                if (item === target) {
                    hideTabContent(tabheaderItem)
                    showTabContent(i, tabheaderItem)
                }
            })
        }
    })
    hideTabContent()
    showTabContent()
    /** -------------------------Timer------------------------------ */
    setClock('.timer')
    function getTimeRemaining(deadline, now) {
        const total = deadline - now,
              days = Math.floor(total / (1000 * 60 * 60 * 24)),
              hours = Math.floor(total / (1000 * 60 * 60) % 24),
              minutes = Math.floor(total / (1000 * 60) % 60),
              seconds = Math.floor(total / 1000 % 60);
        return {
            total,
            days,
            hours,
            minutes,
            seconds
        }
    }
    function setClock(selector) {
        const timer = document.querySelector(selector),
            timeInterval = setInterval(() => updateClock('.timer'), 1000)
        updateClock()
    
        function updateClock() {
            const deadline = new Date(2023, 4, 20), //'20.05.2023'
                  now = new Date(),
                  t = getTimeRemaining(deadline, now);
            if (t.total <= 500) {
                clearInterval(timeInterval)
            } else {
                timer.querySelector('#days').innerText = t.days > 9 ? t.days : '0' + t.days;
                timer.querySelector('#hours').innerText = t.hours > 9 ? t.hours : '0' + t.hours;
                timer.querySelector('#minutes').innerText = t.minutes > 9 ? t.minutes : '0' + t.minutes;
                timer.querySelector('#seconds').innerText = t.seconds > 9 ? t.seconds : '0' + t.seconds;
            }
        }
    }
    /** -------------------------Modal------------------------------ */
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
    /** -------------------------Элементы меню------------------------------ */
    class MenuItem{
        constructor(name, description, price, imgUrl, altImg, parentSelector){
            this.name = name
            this.description = description
            this.price = price
            this.url = imgUrl
            this.alt = altImg
            this.parent = document.querySelector(parentSelector)
        }
        render(){
            const element = document.createElement('div')
            element.innerHTML = `
                <div class="menu__item">
                    <img src="${this.url}" alt="${this.alt}">
                    <h3 class="menu__item-subtitle">Меню "${this.name}"</h3>
                    <div class="menu__item-descr">${this.description}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                </div>
            `
            this.parent.append(element)
        }
    }
    new MenuItem(
        'Фитнес', 
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 
        229, 
        'img/tabs/vegy.jpg', 
        'vegy',
        '.menu__field .container'
    ).render()
    new MenuItem(
        'Премиум', 
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 
        550, 
        'img/tabs/elite.jpg', 
        'elite',
        '.menu__field .container'
    ).render()
    new MenuItem(
        'Постное', 
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.', 
        430, 
        'img/tabs/post.jpg', 
        'post',
        '.menu__field .container'
    ).render()
    
    
   /** ------------------------Форма------------------------------ */
    const forms = document.querySelectorAll('form');
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    }
    function postData(form){
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
            fetch('server.php', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(object),
            })
            .then(data => {
                return data.text()
            })
            .then(data => {
                    console.log(data);
                    showThanksModal(message.success);
                        setTimeout(() => {
                            statusMessage.remove();
                        }, 5000)
                }   
            )
            .catch(() => 
                showThanksModal(message.failure)
            )
            .finally(() => {
                form.reset();
            })
            // const request = new XMLHttpRequest()
            // request.open('POST', 'server.php');
            // const formData = new FormData(form)
            // request.setRequestHeader('Content-type', 'application/json')
            // const object = {}
            // formData.forEach((value, key) => {
            //     object[key] = value;
            // })
            // const json = JSON.stringify(object)
            // request.send(json)
            // request.addEventListener('load', () => {
            //     if(request.status === 200){
            //         console.log(request.response)
                    
            //         showThanksModal(message.success);
            //         setTimeout(() => {
            //             form.reset()
            //             statusMessage.remove();
            //         }, 5000)
            //     }else{
            //         showThanksModal(message.failure);
            //     }
            // })
        })
    }
    forms.forEach(item => postData(item))
})

