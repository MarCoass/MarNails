const contenedorImgCompleta = document.getElementById('contenedorImagenCompleta');
const imgCompleta = document.getElementById('imagenCompleta')

function closeImg(){
    contenedorImgCompleta.style.display="none";

}

function openImg(referencia){
    contenedorImgCompleta.style.display='flex';
    imgCompleta.src = referencia;
}