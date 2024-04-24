function button() {
const name = document.getElementById('name')
const senha = document.getElementById('senha')

    if (name.value == "admin@admin.com" & senha.value == 1234) {
        alert("Login Successfull")
    } else { 
        alert("Login Failed")
    }
}