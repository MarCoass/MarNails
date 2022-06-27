const ESTILOS = getComputedStyle(document.documentElement);
const BOTON = document.getElementById('boton');


BOTON.addEventListener('click', ()=>{
    document.body.classList.toggle('modoOscuro');
    if(document.body.classList.contains("modoOscuro")){
        localStorage.setItem("Tema", 'oscuro');
    } else {
        localStorage.setItem("Tema", 'claro');
    }
})

if(localStorage.getItem("Tema")==="oscuro"){
    document.body.classList.add('modoOscuro');
} else {
    document.body.classList.remove('modoOscuro');
}

