
const btn_signup = document.getElementById("btn_signup")
const pass_list = document.getElementById("list_pass")
const input_password = document.getElementById("student_password")
const showpass = document.getElementById("showpass")

const totalchar = document.getElementById("char")
const spchar = document.getElementById("spchar")
const uplowchar = document.getElementById("uplowchar")
const numchar = document.getElementById("numchar")

btn_signup.addEventListener("click", check_password)
showpass.addEventListener("click",show_password)

const list_style_x = 'list-style-image: url("red-x.webp");'
const list_style_check = 'list-style-image: url("tick-green-icon.webp");'

const hasNumber = /\d/;
const spcharlist = /[^a-zA-Z0-9\s]/;
const up = /[A-Z]/;
const low = /[a-z]/;

function check_password() {
    pass_list.style = "display: grid;"
    let password = input_password.value
    totalchar.style = password.length > 8 ? list_style_check:list_style_x

    uplowchar.style = up.test([password]) && low.test(password) ? list_style_check: list_style_x
    spchar.style = spcharlist.test(password) ? list_style_check:list_style_x
    numchar.style = hasNumber.test(password) ? list_style_check:list_style_x
}

function show_password() {

    input_password.type = showpass.checked? "text" : "password"

}