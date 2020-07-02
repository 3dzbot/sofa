const magnifiGallery = () => {
    $('.gallery-magnific-1').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
        }
    });

    $('.gallery-magnific-2').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
        }
    });
};

export default magnifiGallery;