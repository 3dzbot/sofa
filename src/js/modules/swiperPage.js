const swiperPage = () => {

    let mySwiper = new Swiper ('.preview .swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        pagination: {
            el: '.swiper-pagination',
            bulletElement: 'div',
            clickable: true,
        },
        autoplay: {
            delay: 5000,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.preview-button-next',
            prevEl: '.preview-button-prev',
        }
    });

    let swiperGallery = new Swiper ('.gallery .swiper-container', {
        // Optional parameters
        // direction: 'horizontal',
        pagination: {
            el: '.swiper-pagination',
            bulletElement: 'div',
            clickable: true,
        },
        slidesPerView: 4,
        slidesPerColumn: 2,
        spaceBetween: 30,
        // Navigation arrows
        navigation: {
            nextEl: '.gallery-button-next',
            prevEl: '.gallery-button-prev',
        }
    });

    let swiperServices = new Swiper ('.services .swiper-container', {
        // Optional parameters
        // direction: 'horizontal',
        pagination: {
            el: '.swiper-pagination',
            bulletElement: 'div',
            clickable: true,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.services-button-next',
            prevEl: '.services-button-prev',
        }
    });

    let reviewServices = new Swiper ('.review .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            bulletElement: 'div',
            clickable: true,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.review-button-next',
            prevEl: '.review-button-prev',
        }
    });

    let teamServices = new Swiper ('.team .swiper-container', {
        slidesPerView: 4,
        slidesPerColumn: 2,
        spaceBetween: 15,
        pagination: {
            el: '.swiper-pagination',
            bulletElement: 'div',
            clickable: true,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.team-button-next',
            prevEl: '.team-button-prev',
        }
    });

    function addTextToPaginationBullet(){
        let paginBullet = document.querySelectorAll('.preview .swiper-pagination-bullet');
        let paginBulletServices = document.querySelectorAll('.services .swiper-pagination-bullet');
        const textToBullet = [
            'Плавательные бассейны\n' +
            'для частного и коммерческого\n' +
            'использования\n',
            'Гидромассажные бассейны\n' +
            'для wellness-зон и частного\n' +
            'использования',
            'Спортивные бассейны\n' +
            'для профессионального\n' +
            'назначения'
        ];
        const textPaginBullet = {
            top: ['Проектирование', 'Изготовление чаши', 'Отделочные работы', 'Монтаж оборудования', 'Сдача в эксплуатацию'],
            time: ['5-10 дней', '14-21 день', 'от 10 дней', 'от 5 дней', 'от 3 дней']
        };
        paginBullet.forEach((item, i) =>{
            item.textContent = textToBullet[i];
            item.style.width = 'auto';
        });
        paginBulletServices.forEach((item, i) => {
            item.insertAdjacentHTML('afterBegin', `
                <div>                
                    ${textPaginBullet.top[i]}<br>
                    <span>${textPaginBullet.time[i]}</span>
                </div>
            `);
        });

    }
    addTextToPaginationBullet();

};

export default swiperPage;