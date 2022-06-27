//DECLARO LAS CONSTANTES QUE VOY A NECESITAR

const PRECIO = document.getElementById("precio");
const RETIRADO = document.getElementById('retirado');
const CANTUNIASDECORADAS = document.getElementById('cantUniasDecoradas');
const FORMULARIO = document.getElementById('infoTurno');
const PRIMERSEMI = document.getElementById('primeraVez');
const PRECIOBASESEMI = 700;
var mostrarInfo = false;

//link a informacion
const INFOSEMI = document.createElement('a');
INFOSEMI.href="Semipermanente.html";
INFOSEMI.innerHTML ="Informacion sobre esmaltado semipermanente:";

//Para cambiar el precio 
PRECIO.textContent=PRECIOBASESEMI;

FORMULARIO.addEventListener('change',()=>{
    //Calcula el precio del servicio
    precio = PRECIOBASESEMI;
    if(CANTUNIASDECORADAS.value>2){
        precio=PRECIOBASESEMI + (CANTUNIASDECORADAS.value-2)*50;
    } 
    if(RETIRADO.checked){
        precio = precio+200;
    }
    PRECIO.textContent = precio;
    //Mostrar link a informacion si es la primera vez
    let div = document.getElementById('primerVez');
    if(PRIMERSEMI.checked){
        div.appendChild(INFOSEMI)
    } else {
        if(div.contains(INFOSEMI)){
            div.removeChild(INFOSEMI)
        }
    }
})

//Para resetear el precio al borrar el form
function resetForm(){
    limpiarPrecio();
    document.getElementById('form').reset();
}

function limpiarPrecio(){
    precio = PRECIOBASESEMI;
    PRECIO.textContent = precio;
    let div = document.getElementById('primerVez');
    if(div.contains(INFOSEMI)){
        div.removeChild(INFOSEMI)
    }
}

document.getElementById('borrar').addEventListener('click', ()=>{
    event.preventDefault();
    limpiarPrecio();
})



//PARA MODAL

const BOTONCONTINUARERROR = document.getElementById('botonContinuarError');
const BOTONCONTINUARENVIADO = document.getElementById('botonContinuarEnviado');
const BOTONENVIAR = document.getElementById('enviar');
const NOMBRE = document.getElementById('nombre');
const APELLIDO = document.getElementById('apellido');
const TELEFONO = document.getElementById('nroTelefono');
const EDAD = document.getElementById('edad');
const MODALCAMPOSINCORRECTOS = document.getElementById('modalCamposIncorrectos');
const MODALFORMULARIOENVIADO = document.getElementById('modalFormularioEnviado');

function verificarCamposObligatorios(){
    nombre = NOMBRE.value;
    apellido = APELLIDO.value;
    telefono = TELEFONO.value;
    edad = EDAD.value;
    if(nombre != '' && apellido !='' && telefono!='' && edad!=''){
        MODALFORMULARIOENVIADO.style.display='block';
        resetForm();
    } else {
        MODALCAMPOSINCORRECTOS.style.display= 'block';
        
    }
}

BOTONENVIAR.addEventListener('click', ()=>{
    event.preventDefault();
    verificarCamposObligatorios();
})

BOTONCONTINUARERROR.addEventListener('click', ()=>{
    MODALCAMPOSINCORRECTOS.style.display="none";
})
BOTONCONTINUARENVIADO.addEventListener('click', ()=>{
    MODALFORMULARIOENVIADO.style.display="none";
})