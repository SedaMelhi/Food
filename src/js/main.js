const { data } = require("browserslist");

document.addEventListener('DOMContentLoaded', () => {
    const tabs = require('./modules/tabs'),
          timer = require('./modules/timer'),
          calc = require('./modules/calc'),
          cards = require('./modules/cards'),
          carousel = require('./modules/carousel'),
          form = require('./modules/form'),
          modal = require('./modules/modal');
    tabs();
    timer();
    calc();
    cards();
    carousel();
    form();
    modal();
})


