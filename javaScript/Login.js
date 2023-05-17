const nombre = document.getElementById("nombre")
const contraseña = document.getElementById("contraseña")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let Ingresar = false
    parrafo.innerHTML = ""
    if(nombre.value.length < 6){
        warnings += "Nombre muy corto minimo 6 caracteres<br>"
        Ingresar = true
    }
    if(contraseña.value.length < 8){
        warnings += "La contraseña no es valida"
        Ingresar = true
    }

    if(Ingresar){
        parrafo.innerHTML = warnings
    }
})
