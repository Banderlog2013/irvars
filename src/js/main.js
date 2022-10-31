import "./slider"
import modals from './modules/modals' // подключаем modals.js
import tabs from './modules/tabs'
import forms from './modules/forms'

window.addEventListener('DOMContentLoaded', () => {// назначаем обработчик на весь документ
    "use strict";
    modals(); // вызываем переменную
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    forms();
});