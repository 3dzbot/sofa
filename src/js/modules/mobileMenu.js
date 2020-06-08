const mobileMenu = (btnElem, mobileMenuElem)=>{

    btnElem.addEventListener('click', ()=>{
        btnElem.classList.toggle('menu-btn-active');
        showMobileMenu(btnElem);
    });

    function showMobileMenu(btn) {
        if(btn.classList.contains('menu-btn-active')){
            mobileMenuElem.style.left = 50 + '%';
            mobileMenuElem.style.opacity = 1;
            document.body.style.overflow = 'hidden';
        } else {
            mobileMenuElem.style.left = '';
            mobileMenuElem.style.opacity = '';
            document.body.style.overflow = '';
        }
    }
};

export default mobileMenu;