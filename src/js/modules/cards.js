import {getData} from './../services/services';
function cards(){
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
}
export default cards;