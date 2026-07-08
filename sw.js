const CACHE = "agenda-v2";

const ARCHIVOS = [
    "./",
    "./index.html",
    "./materias.html",
    "./tareas.html",
    "./horario.html",
    "./examenes.html",
    "./notas.html",
    "./calendario.html",
    "./configuracion.html",

    "./css/style.css",

    "./js/app.js",
    "./js/dashboard.js",
    "./js/materias.js",
    "./js/tareas.js",
    "./js/horario.js",
    "./js/examenes.js",
    "./js/notas.js",
    "./js/calendario.js",
    "./js/configuracion.js",
    "./js/install.js",

    "./manifest.webmanifest",

    "./img/icon-192.png",
    "./img/icon-512.png"
];

self.addEventListener("install", e => {

    e.waitUntil(

        caches.open(CACHE)

            .then(cache => cache.addAll(ARCHIVOS))

    );

});

self.addEventListener("fetch", e => {

    e.respondWith(

        caches.match(e.request)

            .then(resp => resp || fetch(e.request))

    );

});
