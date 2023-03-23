'use strict';

const btnText = document.querySelector(".popup");

const closeText = function() {
    console.log("link clicked");
    popup.classList.remove("hidden");
}

for(let i = 0; i < btnText; i++)
    btnText[i].addEventListener("click", openText)
