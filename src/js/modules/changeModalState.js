import checkNumInputs from './checkNumInputs';

// Получение данных с формы
const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'), // получаем форму окна
          windowWidth = document.querySelectorAll('#width'), // ширина окна
          windowHeight = document.querySelectorAll('#height'), // высота окна
          windowType = document.querySelectorAll('#view_type'), // рама окна
          windowProfile = document.querySelectorAll('.checkbox');
    checkNumInputs('#width');
    checkNumInputs('#height');

    function bindActionToElems (event, elem, prop) {
        // перебираем все элементы окна
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch(item.nodeName) {
                    case 'SPAN' :
                        state[prop] = i;
                        break;
                    case 'INPUT' :
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = "Холодное" : state[prop] = "Теплое";
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT' :
                        state[prop] = item.value;
                        break;
                }
                console.log(state);
            });
        });
    }
    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'profile');
};
// ДЗ сделать проверку валидации форм, что форма дальше не пускала пока не выбраны значения
export default changeModalState;