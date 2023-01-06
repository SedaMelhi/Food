const { data } = require("browserslist");

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
    const getData = async (url) => {
        const res = await fetch(url)
        if(!res.ok){
            throw new Error(`Could not fetch ${url}, status ${res.status}`)
        }
        return await res.json()
    }
    getData('http://localhost:3000/menu')
    .then(data => {
        data.forEach(({img, altimg, title, descr, price}) => {
            new menuItem(img, altimg, title, descr, price, '.menu .container').render()
        })
    })
    class menuItem{
        constructor(img, alt, title, description, price, parent){
            this.img = img
            this.alt = alt
            this.title = title
            this.description = description
            this.price = price 
            this.parent = document.querySelector(parent)
        }
        render(){
            const element = document.createElement('div')
            element.innerHTML = `
                <div class="menu__item">
                    <img src="${this.img}" alt="${this.alt}">
                    <h3 class="menu__item-subtitle">${this.title}</h3>
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

   /** ------------------------Форма------------------------------ */
    const forms = document.querySelectorAll('form');
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    }
    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data,
        })
        return await res.json()
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
        })
    }
    forms.forEach(item => bindPostData(item))

    /** ------------------------Карусель------------------------------ */
    const slides = document.querySelectorAll('.offer__slide'),
          slidesWrap = document.querySelector('.offer__slider-inner')
          sliderPrev = document.querySelector('.offer__slider-prev'),
          sliderNext = document.querySelector('.offer__slider-next');
    document.getElementById('total').innerText = slides.length < 10 ? `0${slides.length}` : slides.length;
    let startX = 0;
    let activeNum = 0
    sliderPrev.addEventListener('click', () => {
        updateActiveSlide('left')
    })
    sliderNext.addEventListener('click', () => {
        updateActiveSlide('right')
    })
    function updateActiveNum(i){
        const activeNumTag = document.getElementById('current')
        activeNumTag.innerText = i+1 < 10 ? `0${i+1}` : i+1;
    }
    const updateActiveSlide = (arrow) => {
        const width = slides[0].scrollWidth
        if(activeNum < slides.length-1 && arrow == 'right'){
            startX += width
            slidesWrap.style.transform = `translateX(-${startX}px)`
            activeNum++
            updateActiveNum(activeNum)
        }
        if(activeNum != 0 && arrow == 'left'){
            startX -= width
            slidesWrap.style.transform = `translateX(-${startX}px)`
            activeNum--
            updateActiveNum(activeNum)
        }
    }
    updateActiveNum(activeNum)
})

