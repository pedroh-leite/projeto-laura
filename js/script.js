'use strict';

//Modal textinho
const switchModal = () => {
    const modal = document.querySelector(".modal");
    const actualStyle = modal.style.display
    if(actualStyle == "block") {
        modal.style.display = "none"
    }else {
        modal.style.display = "block"
    }
}
 

const btn = document.querySelector(".modalBtn")
btn.addEventListener("click", switchModal)

/*window.onclick = function(event) {
    const modal = document.querySelector(".modal")
    if(event.target == modal){
        switchModal()
    }
}*/


//Modal do entenda o site
const switchPopup = () => {
    const popup = document.querySelector(".popup");
    const estiloAtual = popup.style.display
    if(estiloAtual == "block") {
        popup.style.display = "none"
    } else {
        popup.style.display = "block"
    }
} 

const btnPopup = document.querySelector(".popupBtn")
btnPopup.addEventListener("click", switchPopup)

window.onclick = function(event) {
    const popup = document.querySelector(".popup")
    if(event.target == popup){
        switchPopup()
    }
}

const closeModalOrPopUp = () => {
    window.onclick = function (event) {
        
        const popup = document.querySelector(".popup")
        const modal = document.querySelector(".modal")
        
        if (event.target == popup) return switchPopup()
        if (event.target == modal) return switchModal()      
    }
}

closeModalOrPopUp()