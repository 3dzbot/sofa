import vegasConst from "./modules/vegas";
import accordeon from "./modules/accordeon";
import isotopeConst from "./modules/isotope";
import scrollPage from "./modules/scrollPage";
import fullPhoto from "./modules/fullPhoto";
import modalPopup from "./modules/modalPopup";
import pasteMap from "./modules/googleMap";
import swiperPage from "./modules/swiperPage";
import phoneMask from "./modules/phoneMask";
import magnifiGallery from "./modules/magnificGallery";
import tabs from "./modules/tabs";
import videoPopup from "./modules/videoPopup";
import imgPopup from "./modules/imgPopup";
import svgPath from "./modules/_svgPath";

window.addEventListener('DOMContentLoaded', ()=> {
    "use strict";

    swiperPage();
    phoneMask();
    magnifiGallery();
    tabs();
    videoPopup();
    imgPopup();
    svgPath();
    modalPopup();
    scrollPage();
    // fullPhoto();
    // modalPopup();
    // pasteMap();
    }
);