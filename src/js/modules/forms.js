const forms = () => {
    const form = document.querySelectorAll('form'), // получаем все формы с сайта
          inputs = document.querySelectorAll('input'); // плдучаем все инпуты сайта
          phoneInputs = document.querySelectorAll('input[name="user_phone"]');

    phoneInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });
    // сообщения после отправки формы
    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    }

    // отправка запросов

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading; // сообщение пользователю
        let res = await fetch(url, { // настройка запроса на сервер
            method: "POST",
            body: data
        });
        return await res.text(); // возращаем результат обработки запроса
    }

    // очиска инпутов
    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    // обработчик событий форм
    form.forEach(item => (e) => { // перебираем элементы
        item.addEventListener('submit', (e) => { // вешаем обработчик
            e.preventDefault(); // отменяем стандартное поведение браузера

            let statusMessage = document.createElement('div'); // создаем форму с собщением
            statusMessage.classList.add('status'); // добаляем блоку класс
            item.appendChild(statusMessage); // помещаем блок в конец формы

            // сбор данных из формы 
            const formData = new FormData(item)
            postData('assets/server.php', formData) // отправка запроса серверу с данными
                .then(res => { // обработка полученного ответа
                    console.log(res);
                    statusMessage.textContent = message.success; // сообщение пользователю о результате
                })
                .catch(() => statusMessage.textContent = message.failure) // сообщение об ошибке
                .finally(() => { // финальная обработка 
                    clearInputs(); // очищаем инпуты
                    setTimeout(() => {
                        statusMessage.remove(); // удаление сообщения
                    }, 5000);
                });

        });
    });

};

export default forms;