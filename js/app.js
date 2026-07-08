function actualizarHora(){

    const ahora = new Date();

    document.getElementById("hora").innerHTML =
        ahora.toLocaleTimeString();

    document.getElementById("fecha").innerHTML =
        ahora.toLocaleDateString("es-SV",{
            weekday:"long",
            day:"numeric",
            month:"long",
            year:"numeric"
        });

}

setInterval(actualizarHora,1000);

actualizarHora();

const boton=document.getElementById("modoOscuro");

boton.onclick=function(){

    document.body.classList.toggle("dark");

}