import tabs from './modules/tabs';
import timer from './modules/timer';
import calc from './modules/calc';
import cards from './modules/cards';
import carousel from './modules/carousel';
import form from './modules/form';
import modal from './modules/modal';
document.addEventListener('DOMContentLoaded', () => {
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer();
    calc();
    cards();
    carousel({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    form();
    modal('[data-modal]', '.modal');
})


