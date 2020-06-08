const pasteMap = () => {
    const mapContainer = document.querySelector('.google-map');
    const mapCode = `
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2747.2697522925146!2d30.68210271579217!3d46.48297077290707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c631fe2c1a1945%3A0xf4a153fd808540d8!2z0YPQuy4g0JzQuNGF0LDQuNC70LAg0JPRgNGD0YjQtdCy0YHQutC-0LPQviwgNDEsINCe0LTQtdGB0YHQsCwg0J7QtNC10YHRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNjUwMDA!5e0!3m2!1sru!2sua!4v1587134537989!5m2!1sru!2sua" width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    `;

    setTimeout(()=>{
        mapContainer.insertAdjacentHTML('beforeEnd', mapCode)
    },2000)
};

export default pasteMap;