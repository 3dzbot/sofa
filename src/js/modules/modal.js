const modalPopup = () => {
    const serviceWindow = document.querySelector('.service .infocards__row');

    serviceWindow.addEventListener('click', checkButtonClick);
    
    function checkButtonClick(e) {
        const target = e.target;
        if(target.tagName === 'BUTTON'){
            const card = target.closest('.item-infocards');
            openModalWindow(card);
        }
    }
    
    function openModalWindow(cardInfo) {
        const modalCart = document.createElement('div');
        modalCart.classList.add('popup');
        const title = cardInfo.querySelector('.item-infocards__description h3').textContent;
        let itemCart = `
            <div class="modal-cart">
                <h2>Здравствуйте</h2>
                <p>Для получения подробной информации введите Ваш номер и мы перезвоним</p>
                <form>
                    <label for="phone">Введите Ваш номер</label>
                    <input type="text" placeholder="Телефон" id="phone" name="phone"><br>
                    <input type="hidden" name="form_tag" id="service" value="${title}">
                    <button type="submit" id="phone-send">Отправить</button>
                </form>
            </div>
            `;
        modalCart.innerHTML = itemCart;
        document.body.insertAdjacentElement('beforeend', modalCart);
        document.body.style.overflow = 'hidden';

        const modalForm = modalCart.querySelector('form');

        modalForm.addEventListener('submit', sendModalForm);

        function sendModalForm(e) {
            e.preventDefault();
            let formData = new FormData(modalForm);
            ajaxSend(formData);
            modalForm.reset();
        }

        function ajaxSend(formData){
            fetch('assets/telegram.php', { // файл-обработчик
                method: 'POST',
                body: formData
            })
                .then(response => {
                    closeModalAfterSend(response.ok)
                })
                .catch(error => {
                    closeModalAfterSend(false, error)
                })
        }

        modalCart.addEventListener('click', closeModal);

        function closeModal(e) {
            const target = e.target;
            if (target.classList.contains('popup')){
                target.remove();
                document.body.style.overflow = 'auto';
            }
        }

        function closeModalAfterSend(booleanResponce = true, error) {
            if(booleanResponce){
                modalCart.innerHTML = `
                <div class="modal-cart-2">
                    <h2 style="color: green">Спасибо!</h2>
                </div>`;
            } else {
                modalCart.innerHTML = `
                <div class="modal-cart-2">
                    <h2 style="color: red;">Упс, что-то пошло не так :(</h2>
                </div>`;
                console.log(error);
            }

            setTimeout(()=>{
                modalCart.remove();
                document.body.style.overflow = 'auto';
            }, 1000)
        }
    }
};

export default modalPopup;