const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) { // н-ция отвечающая за привязку окна к определенному триггеру
        const trigger = document.querySelectorAll(triggerSelector), // получаем все элементы с тригеером
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector)


        trigger.forEach(item => { // перебираем полученные элементы
            item.addEventListener('click', (e) => { // навешиваем обработчик событий
                if (e.target) { // проверка условия на стандартное поведение браузера.
                    e.preventDefault(); // отмена стандартного поведения браузера
                }
    
                modal.style.display = "block"; // присвваимевам свойство мод. окну.
                document.body.style.overflow = "hidden"; // отменяем прокуртку
                // document.body.classList.add('modal-open');
            });
        });

        close.addEventListener('click', () => { // обработчик для закрытия мод. окна
            modal.style.display = "none"; // меняем свойство мод. окна.
            document.body.style.overflow = ""; // отменяем отмену прокуртк
            // document.body.classList.remove('modal-open');
        });

        modal.addEventListener('click', (e) => { // обработчик для закрытия окна, если клик вне окна
            if (e.target === modal) { // проверяем условие если клик за пределами мод. окна закрываем окно
                modal.style.display = "none"; // меняем свойство мод. окна.
                document.body.style.overflow = ""; // отменяем отмену прокуртки
                // document.body.classList.remove('modal-open');
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

    // const callEngineerBtn = document.querySelector('.popup_engineer_btn'), // получаем кнопку вызова инженара сос траницы
    //     modalEngineer = document.querySelector('.popup_engineer'), // получаем модальное окно
    //     modalEngineerClose = document.querySelector('.popup_engineer .popup_close') // получаем крест закрытия окна
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close'); // передаем селекторы
    bindModal('.phone_link', '.popup', '.popup .popup_close'); // вызываем функцию с аргументами для ссылок
    // showModalByTime('.popup', 60000);
}

export default modals; // экспортируем модальные окна