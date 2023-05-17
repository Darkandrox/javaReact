const nombre = document.getElementById("nombre")
const contraseña = document.getElementById("contraseña")
const Repetir_Contraseña = document.getElementById("Repetir_Contraseña")
const form = document.getElementById("form")
const correo = document.getElementById("correo")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let Ingresar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length < 6){
        warnings += "Nombre muy corto minimo 6 caracteres"
        Ingresar = true
    }
    if(contraseña.value.length < 8){
        warnings += "La contraseña no es valida"
        Ingresar = true
    }
    if(Repetir_Contraseña.value.length < 8){
        warnings += "La confirmacion de contraseña no es valida"
        Ingresar = true
    }
    if(contraseña != Repetir_Contraseña){
        warnings += "Las contraseñas no coinciden"
        Ingresar = true
    }
    if(!regexEmail.test(correo.value)){
        warnings += "el email es invalido"
        Ingresar = true
    }
    if(Ingresar){
        parrafo.innerHTML = warnings
    }
})
