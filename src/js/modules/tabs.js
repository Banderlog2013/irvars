const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
    // Получаем элементы со страницы
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);

    // Ф-я скрытия контента
    function hideTabContent () {
        content.forEach(item => { // перебираем элементы
            item.style.display = 'none'; // скрываем элементы
        });

        // убираем класс активности у табов
        tab.forEach(item => {
            item.classList.remove(activeClass)
        });
    }

    // Ф-я показа контента
    function showTabContent(i = 0) {
        content[i].style.display = display;
        tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    // Отслеживание в какой таб кликнул пользователь
    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target && 
            (target.classList.contains(tabSelector.replace(/\./, "")) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
};

export default tabs;