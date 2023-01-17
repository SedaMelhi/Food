function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass){
    const tabContents = document.querySelectorAll(tabsContentSelector),
          tabHeader = document.querySelector(tabsParentSelector),
          tabheaderItem = document.querySelectorAll(tabsSelector);

    const showTabContent = (i = 0, tabs = tabheaderItem) => {
          tabContents[i].classList.remove('hide')
          tabContents[i].classList.add('show', 'fade')
          tabs[i].classList.add(activeClass)
    }
    const hideTabContent = (tabs = tabheaderItem) => {
        tabs.forEach(item => {
            if (item.classList.contains(activeClass)) {
                item.classList.remove(activeClass)
            }
        })
        tabContents.forEach(item => {
            item.classList.add('hide')
            item.classList.remove('show', 'fade')
        })
    }
    tabHeader.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains(tabsSelector.slice(1))) {
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
export default tabs;