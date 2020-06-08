const fullPhoto = ()=>{

    const gallery = document.querySelector('.gallery  .grid');

    gallery.addEventListener('click', createPhotoCard);

    function createPhotoCard(e) {
        const target = e.target;
        if(target.tagName === 'IMG'){
            const card = document.createElement('div');
            card.classList.add('popup');
            const cardImg = document.createElement('img');
            cardImg.setAttribute('src', target.dataset.fullimage);
            cardImg.setAttribute('alt', 'Изображение работ наших мастеров');
            card.insertAdjacentElement('beforeend', cardImg);
            document.body.style.overflow = 'hidden';
            document.body.insertAdjacentElement('beforeend', card);

            card.addEventListener('click', ()=>{
                card.remove();
                document.body.style.overflow = '';
            });
        }
    }
};

export default fullPhoto;