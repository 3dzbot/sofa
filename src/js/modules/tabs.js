const tabs = () => {

    let tabsButton = document.querySelector('.tabs__header');
    tabsButton.addEventListener('click', fTabs);

    function fTabs(event) {
        console.log(event.target);
        let dataTitle = document.querySelectorAll('.tab-h');
        let tabBody = document.querySelectorAll('.tab-b');
        let target = event.target;
        if(target.closest('.tab-h')){
            let dataTab = target.closest('.tab-h').getAttribute('data-tab');
            for( let i =0; i<tabBody.length; i++){
                if (dataTab == i){
                    tabBody[i].classList.add('tab-flex');
                    dataTitle[i].classList.add('tab-h-active');
                } else {
                    tabBody[i].classList.remove('tab-flex');
                    dataTitle[i].classList.remove('tab-h-active');
                }
            }
        }
    }
};

export default tabs;