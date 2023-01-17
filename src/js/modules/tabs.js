function tabs(){
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
}
module.exports = tabs;