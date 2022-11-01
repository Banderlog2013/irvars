const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) { // н-ция отвечающая за привязку окна к определенному триггеру
        const trigger = document.querySelectorAll(triggerSelector), // получаем все элементы с тригеером
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]'),
              scroll = calcScroll();


        trigger.forEach(item => { // перебираем полученные элементы
            item.addEventListener('click', (e) => { // навешиваем обработчик событий
                if (e.target) { // проверка условия на стандартное поведение браузера.
                    e.preventDefault(); // отмена стандартного поведения браузера
                }

                windows.forEach(item => { // закрываем все модальные окна
                    item.style.display = 'none';
                });
    
                modal.style.display = "block"; // присвваимевам свойство мод. окну.
                document.body.style.overflow = "hidden"; // отменяем прокуртку
                // document.body.classList.add('modal-open');
                document.body.style.marginRight = `${scroll}px`;
            });
        });

        close.addEventListener('click', () => { // обработчик для закрытия мод. окна
            windows.forEach(item => { // закрываем все модальные окна
                item.style.display = 'none';
            });
            
            modal.style.display = "none"; // меняем свойство мод. окна.
            document.body.style.overflow = ""; // отменяем отмену прокуртк
            // document.body.classList.remove('modal-open');
            document.body.style.marginRight = `0px`;
        });

        modal.addEventListener('click', (e) => { // обработчик для закрытия окна, если клик вне окна
            if (e.target === modal && closeClickOverlay) { // проверяем условие если клик за пределами мод. окна закрываем окно
                windows.forEach(item => { // закрываем все модальные окна
                    item.style.display = 'none';
                });
                
                modal.style.display = "none"; // меняем свойство мод. окна.
                document.body.style.overflow = ""; // отменяем отмену прокуртки
                // document.body.classList.remove('modal-open');
                document.body.style.marginRight = `0px`;
            }
        });
    }

    // Автовсплытие модального окна

    function showModalByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = "hidden";

        }, time)
    }

    // Скролл
    function calcScroll() {
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }


    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close'); // передаем селекторы
    bindModal('.phone_link', '.popup', '.popup .popup_close'); // вызываем функцию с аргументами для ссылок
    // showModalByTime('.popup', 60000);
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
}

export default modals; // экспортируем модальные окна