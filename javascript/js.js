let contador = 0;
let contplay = 0;
let contluna = 0;
let header = document.querySelector('header')
let texto = document.querySelector('h1');
let imagen = document.getElementById('imagen');
let Izquierda = document.querySelector('.miBotonIz'); 
let Derecha = document.querySelector('.miBotonDe'); 
let Play = document.querySelector('.miBoton');
let pause = document.getElementById('play');
let sol = document.getElementById('luna');
let body = document.querySelector('body');

function cambioImagen() {
    contador++;
    if (contador == 0) {
        imagen.src = "https://i.ytimg.com/vi/R2dPqUtyLRI/maxresdefault.jpg";
    }
    if (contador == 1) {
        imagen.src = "https://e1.pxfuel.com/desktop-wallpaper/20/158/desktop-wallpaper-pinterest-cosmere.jpg";
    }
    if (contador == 2) {
        imagen.src = "https://i.redd.it/x2c4vkrqa2361.jpg";
    }
    if (contador == 3) {
        imagen.src = "https://cosmere.es/wp-content/uploads/2023/11/DRAGONSTEEL23-BROTHERWISE-GAMES-The-Stormlight-Archive-TTRPG_Kaladin-en-las-Llanuras-Quebradas.png";
    }
    if (contador == 4) {
        imagen.src = "https://i.pinimg.com/736x/75/d2/fa/75d2fa512458a1c7529cd411232a5ec7.jpg";
    }
    if (contador == 5) {
        imagen.src = "https://i.ytimg.com/vi/NuaD9uC9VAY/maxresdefault.jpg";
    }
    if (contador > 6) {
        contador = -1; 
    }
    if (contador == 6) {
        imagen.src = "https://wallpapercave.com/wp/wp7574435.jpg";
        contador = contador - 7;
    }
}
function Inverso() {
    contador--;
    if (contador == 0) {
        imagen.src = "https://i.ytimg.com/vi/R2dPqUtyLRI/maxresdefault.jpg";
        contador = contador + 7;
    }
    if (contador == 1) {
        imagen.src = "https://e1.pxfuel.com/desktop-wallpaper/20/158/desktop-wallpaper-pinterest-cosmere.jpg";
    }
    if (contador == 2) {
        imagen.src = "https://i.redd.it/x2c4vkrqa2361.jpg";
    }
    if (contador == 3) {
        imagen.src = "https://cosmere.es/wp-content/uploads/2023/11/DRAGONSTEEL23-BROTHERWISE-GAMES-The-Stormlight-Archive-TTRPG_Kaladin-en-las-Llanuras-Quebradas.png";
    }
    if (contador == 4) {
        imagen.src = "https://i.pinimg.com/736x/75/d2/fa/75d2fa512458a1c7529cd411232a5ec7.jpg";
    }
    if (contador == 5) {
        imagen.src = "https://i.ytimg.com/vi/NuaD9uC9VAY/maxresdefault.jpg";
    }
    
    if (contador < 0) {
        contador = 7; 
    }
    if (contador == 6) {
        imagen.src = "https://wallpapercave.com/wp/wp7574435.jpg";
    }
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
  if (contplay == 2)
  {
    contplay = 0;
  }
}
// Función para establecer una cookie con un tiempo de expiración en días
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Función para obtener el valor de una cookie
function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i].trim();
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

/// Función para manejar la elección de luna
function luna() {
    if (contluna == 0) {
        // Configuración para el modo luna
        body.style.background = "#121728";
        header.style.background = "#252850";
        texto.style.color = "#121728";
        sol.src = "https://cdn-icons-png.flaticon.com/128/2917/2917242.png";
        contluna++;
    } else {
        // Configuración para el modo sol
        body.style.background = "";
        header.style.background = "";
        texto.style.color = "";
        sol.src = "https://cdn-icons-png.flaticon.com/128/3594/3594375.png";
        contluna++;
    }

    // Guarda la elección en una cookie
    setCookie("modoLuna", contluna, 7);

    if (contluna == 2) {
        contluna = 0;
    }
}

// Asocia la función luna al evento click del elemento con ID "sol"
sol.addEventListener("click", luna);