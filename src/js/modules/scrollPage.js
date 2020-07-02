const scrollPage = () => {
    const headerMenu = document.querySelector('.header');

    let winScroll = window.pageYOffset;

    //show header
    window.addEventListener('scroll', ()=>{
        winScroll = window.pageYOffset;
        if ((document.documentElement.clientHeight+300) <= winScroll){
            headerMenu.classList.add('fixed');

        } else if(document.documentElement.clientHeight+300 > winScroll){
            headerMenu.classList.remove('fixed');
        }
    });

    //scroll to elem after click
    function slowScroll() {
        const anchors = document.querySelectorAll('a[href*="#"]');

        for (let anchor of anchors) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const blockID = anchor.getAttribute('href').substr(1);

                document.getElementById(blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            })
        }
    }

    slowScroll();
};

export default scrollPage;