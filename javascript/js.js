let contador = 0;
let contplay = 0;
let contluna = 0;
let header = document.querySelector('header');
let texto = document.querySelector('h1');
let imagen = document.getElementById('imagen');
let Izquierda = document.querySelector('.miBotonIz'); 
let Derecha = document.querySelector('.miBotonDe'); 
let Play = document.querySelector('.miBoton');
let pause = document.getElementById('play');
let sol = document.getElementById('luna');
let body = document.querySelector('body');

// Array de URLs de imágenes
let imagenes = [
    "https://i.ytimg.com/vi/R2dPqUtyLRI/maxresdefault.jpg",
    "https://e1.pxfuel.com/desktop-wallpaper/20/158/desktop-wallpaper-pinterest-cosmere.jpg",
    "https://i.redd.it/x2c4vkrqa2361.jpg",
    "https://cosmere.es/wp-content/uploads/2023/11/DRAGONSTEEL23-BROTHERWISE-GAMES-The-Stormlight-Archive-TTRPG_Kaladin-en-las-Llanuras-Quebradas.png",
    "https://i.pinimg.com/736x/75/d2/fa/75d2fa512458a1c7529cd411232a5ec7.jpg",
    "https://i.ytimg.com/vi/NuaD9uC9VAY/maxresdefault.jpg",
    "https://wallpapercave.com/wp/wp7574435.jpg"
];

function cambioImagen() {
    contador = (contador + 1) % imagenes.length;
    imagen.src = imagenes[contador];
}

function Inverso() {
    contador = (contador - 1 + imagenes.length) % imagenes.length;
    imagen.src = imagenes[contador];
}

Derecha.addEventListener("click", cambioImagen); 
Izquierda.addEventListener("click", Inverso); 
let intervalo;
Play.addEventListener("click",play);

function play() {
  if (contplay == 0) {
    intervalo = setInterval(cambioImagen, 5000);
    pause.src = "https://cdn-icons-png.flaticon.com/128/6326/6326330.png";
    contplay++;
  } else {
    clearInterval(intervalo);
    pause.src = "https://cdn-icons-png.flaticon.com/128/4980/4980096.png";
    contplay++;
  }
  if (contplay == 2) {
    contplay = 0;
  }
}

sol.addEventListener("click",luna);

function luna() {
    if (contluna == 0) {
        body.style.background = "#121728";
        header.style.background = "#252850";
        texto.style.color = "#c6b1c9";
        sol.src = "https://cdn-icons-png.flaticon.com/128/2917/2917242.png";
        lunaActiva = !lunaActiva;
        localStorage.setItem('lunaActiva', lunaActiva);
        contluna++;
    } else {
        body.style.background = "";
        header.style.background = "";
        texto.style.color = "";
        sol.src = "https://cdn-icons-png.flaticon.com/128/3594/3594375.png";
        lunaActiva = !lunaActiva;
        localStorage.setItem('lunaActiva', lunaActiva);
        contluna++;
    }
    if (contluna == 2) {
        contluna = 0;
    }
}

let lunaActiva = false;
window.onload = () => {
    let saveMode = localStorage.getItem('lunaActiva');
    if (saveMode === 'true') {
        luna();
    }
};

// Función AJAX para obtener nuevas imágenes
function cargarImagenes() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.ejemplo.com/obtener-imagenes', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            const nuevasImagenes = JSON.parse(xhr.responseText);
            imagenes = nuevasImagenes;
            contador = 0;
            imagen.src = imagenes[contador];
        }
    };
    xhr.send();
}

// Event listener para cargar nuevas imágenes con AJAX
document.getElementById('cargarNuevasImagenes').addEventListener('click', cargarImagenes);
