import "./slider"
import modals from './modules/modals' // подключаем modals.js
import tabs from './modules/tabs'

window.addEventListener('DOMContentLoaded', () => {// назначаем обработчик на весь документ
    modals(); // вызываем переменную
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
});