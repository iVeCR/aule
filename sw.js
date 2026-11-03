// Service worker minimo: nessuna cache, le richieste passano sempre dalla rete.
// Serve solo perché alcuni browser (Firefox incluso) lo richiedono per proporre "Installa".
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => e.respondWith(fetch(e.request)));
