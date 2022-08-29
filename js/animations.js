

let btn_register = document.getElementById("create").addEventListener("click", register_show);
let bt_login = document.getElementById("login").addEventListener("click", login_show);


let container_form = document.querySelector(".form")
let login_form = document.querySelector(".login-form");
let register_form = document.querySelector(".register-form"); 
let title = document.getElementById("title");

function register_show(){
    register_form.style.display = "block";
    login_form.style.display = "none";
    title.innerHTML = "Registrate";
    title.className = "animate__animated  animate__fadeInUp"
    

}

function login_show(){
    register_form.style.display = "none";
    login_form.style.display = "block";
    title.innerHTML = "Accede";
    title.className = "animate__animated  animate__fadeInUp"
    

}