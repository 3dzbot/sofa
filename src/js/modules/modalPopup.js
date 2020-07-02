const modalPopup = () => {
    const modalMoreBtn = document.querySelectorAll('.btn-more');
    const modalMoreCalc = document.querySelectorAll('.btn-calc');
    const closeModalBtn = document.querySelectorAll('.close');

    modalMoreBtn.forEach(item => {
        item.addEventListener('click', openModalMore);
    });

    modalMoreCalc.forEach(item => {
        item.addEventListener('click', openModalCalc);
    });

    closeModalBtn.forEach(item => {
        item.addEventListener('click', closeModal);
    });


    function openModalMore() {
        let popup = document.querySelector('.popup');
        let popupMore = document.querySelector('.popup-more');
        document.body.style.overflow = 'hidden';
        popup.style.display = 'block';
        popupMore.style.display = 'block';
    }

    function openModalCalc() {
        let popup = document.querySelector('.popup');
        let popupCalc = document.querySelector('.popup-calc');
        document.body.style.overflow = 'hidden';
        popup.style.display = 'block';
        popupCalc.style.display = 'block';
    }

    function closeModal(e) {
        let target = e.target;
        let popup = document.querySelector('.popup');
        let popupChild = target.parentElement;
        document.body.style.overflow = '';
        popup.style.display = '';
        popupChild.style.display = '';
    }
};

export  default modalPopup;