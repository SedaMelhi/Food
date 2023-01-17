function calc(){
    const result = document.querySelector('.calculating__result span'),
    genderBtns = document.querySelector('#gender'),
    ratioBtns = document.querySelector('#ratio'),
    calcInput = document.querySelectorAll('.calculating__choose_medium input'),
    calcData = JSON.parse(localStorage.getItem('dataCalc'));
    let gender = calcData ? calcData.gender: 'woman', 
    height = calcData ? calcData.height: '', 
    weight = calcData ? calcData.weight: '',  
    age = calcData ? calcData.age: '', 
    ratio = calcData ? calcData.ratio: 1.375;
    function calcTotal(){
    weight = +document.getElementById('weight').value.trim();
    height = +document.getElementById('height').value.trim();
    age = +document.getElementById('age').value.trim();
    localStorage.setItem('dataCalc', JSON.stringify({weight, height, age, gender, ratio}));
    if(!gender || !height || !weight || !age || !ratio){
        result.innerText = '_____'
        return false
    }
    if(gender == 'woman'){
        result.innerText = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
    }else{
        result.innerText = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio)
    }
    
    }
    function getStaticInformation(parentSelector, activeClass){
    const btns = document.querySelectorAll(`${parentSelector} div`),
            activeBtn = document.querySelector(`${parentSelector} ${activeClass}`);
    btns.forEach(item => {
        item.classList.remove('calculating__choose-item_active');
    });
    activeBtn.classList.add('calculating__choose-item_active');
    if(activeBtn.dataset.ratio){
        ratio = +activeBtn.dataset.ratio
    }else{
        gender = activeBtn.id
    }
    calcTotal();
    }
    genderBtns.addEventListener('click', (e) => {
    if(e.target.classList.contains('calculating__choose-item')){
        getStaticInformation('#gender', `#${e.target.id}`);
    }
    });
    ratioBtns.addEventListener('click', (e) => {
    if(e.target.classList.contains('calculating__choose-item')){
        getStaticInformation('#ratio', `#${e.target.id}`);
    }
    });
    calcInput.forEach(item => {
    item.value = calcData ? (calcData[item.id] == 0 ? '' :  calcData[item.id])  : ''
    item.addEventListener('input', (e) => {
        const el = e.target
        if(el.value.match(/\D/g)){
            el.style.border = '1px solid red';
        }else{
            el.style.border = 'none';
        }
        calcTotal();
    })
    });
    if(calcData){
    getStaticInformation('#gender', `#${calcData.gender}`)
    getStaticInformation('#ratio', `#${document.querySelector(`[data-ratio='${calcData.ratio}']`).id}`)
    }

    calcTotal();
}
module.exports = calc;