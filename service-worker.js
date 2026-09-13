// Service worker de Make Retro Recipes (Inventario de Crafteo Dofus Retro)
// Estrategia: network-first para los recursos propios (para tener siempre la
// version mas reciente cuando hay conexion), con fallback a cache cuando no
// hay conexion. Las peticiones a otros origenes (Supabase, jsdelivr/Tesseract,
// etc.) se dejan pasar tal cual, sin interceptarlas, para no romperlas nunca.

const CACHE_NAME = 'make-retro-recipes-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Solo GET
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // No interceptar nada que no sea del propio origen (Supabase, CDNs,
  // Tesseract, fuentes de Google, etc. siguen su camino normal).
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(req)
      .then((res) => {
        const resClone = res.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(req, resClone).catch(() => {});
        });
        return res;
      })
      .catch(() =>
        caches.match(req).then((cached) => {
          if (cached) return cached;
          // Si piden una pagina y no hay nada en cache, intenta servir
          // el propio index como ultimo recurso offline.
          if (req.mode === 'navigate') {
            return caches.match('./index.html');
          }
          return Response.error();
        })
      )
  );
});
