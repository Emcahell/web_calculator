let displayOperation = document.getElementById("screen");

const wipe = () =>{
    displayOperation.value = "";
}

const show = (n) =>{
    displayOperation.value += n;
}

const calc = () =>{
    displayOperation.value = eval(displayOperation.value);
}

const del = () =>{
    let contenido = displayOperation.value;
    if (contenido.length > 0) {
        contenido = contenido.slice(0, -1);
        displayOperation.value = contenido;
    }
}