


let btn_reg= document.getElementById("btn_create").addEventListener("click", registration);
let btn_login = document.getElementById("btn_login");

let users = [];


class user{
    constructor(x,y,z){
        this.name = x;
        this.password = y;
        this.email = z;
    }
}

function registration(){

    let name_r = document.getElementById("name_r").value;
    let password_r = document.getElementById("password_r").value;
    let email_r = document.getElementById("email_r").value;

    console.log(name_r);
    console.log(password_r);
    console.log(email_r);

    let new_user = new user(name_r, password_r, email_r);
    users.push(new_user);
    console.log(users);

    let save = (key,value) => {localStorage.setItem(key,value)};

    
    save("users_list", JSON.stringify(users));


    class user_json{
        constructor(obj){
            this.name = obj.name;
            this.password = obj.password;
            this.email = obj.email;
        }
    }

    let saved = JSON.parse(localStorage.getItem("users_list"));

    let users_json = [];

    for(const user of saved){
        users_json.push(new user_json(user));
    }
    console.log(saved);
    }




