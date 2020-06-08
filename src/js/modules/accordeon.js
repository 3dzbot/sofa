const accordeon = () =>{

//accordion
    let acc = document.getElementsByClassName("accordion");
    let accNextContent = acc[0].nextElementSibling;

    accNextContent.style.maxHeight = accNextContent.scrollHeight + "px";

    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active-acc");
            let panel = this.nextElementSibling;
            if (panel.style.maxHeight){
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
};

export default accordeon;