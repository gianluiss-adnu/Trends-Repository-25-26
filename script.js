/*===== TOGGLE THEME ======*/
const body = document.querySelector('body');
const themeBtn = document.querySelector(".toggle-theme");

themeBtn.addEventListener('click', e => {
    //console.log(body.classList);
    if(body.classList.contains("dark")) {
        body.classList.remove("dark");
    }
    else {
        body.classList.add("dark");
    }
});