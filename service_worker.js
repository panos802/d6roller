// Cached core static resources
self.addEventListener("install", (e) => {
	e.waitUntil(
		caches.open("static").then((cache) => {
			return cache.addAll([
				"./",
				"./index.css",
				"./index.js",
				"./favicon.ico",
				"./assets/logo192.png",
				"./assets/logo512.png",
				"./assets/screenshot1.png",
				"./assets/screenshot2.png",
			]);
		}),
	);
});

// Fatch resources
self.addEventListener("fetch", (e) => {
	e.respondWith(
		caches.match(e.request).then((response) => {
			return response || fetch(e.request);
		}),
	);
});
