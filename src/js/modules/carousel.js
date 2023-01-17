function carousel(){
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
        if(arrow == 'right'){
            startX -= width
            startX = startX % (width * slides.length)
            slidesWrap.style.transform = `translateX(${startX}px)`
            activeNum = (activeNum+1) % (slides.length)
            updateActiveNum(activeNum)
        }
        if(arrow == 'left'){
            startX += width
            startX = (startX % (width * slides.length)) - width * slides.length
            slidesWrap.style.transform = `translateX(${startX % (width * slides.length)}px)`
            activeNum = (activeNum+3) % (slides.length)
            updateActiveNum(activeNum)
        }
    }
    setInterval(() => {
        updateActiveSlide('right')
    }, 2500)
}
module.exports = carousel;