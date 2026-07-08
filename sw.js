const CACHE_NAME = "agenda-estudiantil-v1";

const FILES = [

    "/",

    "/css/style.css",

    "/js/app.js",
    "/js/dashboard.js",
    "/js/materias.js",
    "/js/tareas.js",
    "/js/horario.js",
    "/js/examenes.js",
    "/js/notas.js",
    "/js/calendario.js",
    "/js/configuracion.js",

    "/img/icon-192.png",
    "/img/icon-512.png"

];

self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE_NAME)

        .then(cache => cache.addAll(FILES))

    );

});

self.addEventListener("activate", event => {

    event.waitUntil(

        caches.keys()

        .then(keys => Promise.all(

            keys.map(key => {

                if(key !== CACHE_NAME){

                    return caches.delete(key);

                }

            })

        ))

    );

});

self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request)

        .then(cacheResponse => {

            return cacheResponse || fetch(event.request).then(networkResponse => {

                if(event.request.method === "GET"){

                    const responseClone = networkResponse.clone();

                    caches.open(CACHE_NAME).then(cache => {

                        cache.put(event.request, responseClone);

                    });

                }

                return networkResponse;

            });

        })

    );

});