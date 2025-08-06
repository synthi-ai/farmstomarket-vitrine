const CACHE_NAME = "ftm-cache-v1";

const FILES_TO_CACHE = [
  "/",
  "/favicon-16x16.png",
  "/favicon-32x32.png",
  "/apple-touch-icon.png",
  "/site.webmanifest",
  "/offline.html",
  "/og-image.jpg",
  "/twitter-image.jpg",
  "/fonts/inter-var.woff2",
  "/logo.png",
];

self.addEventListener("install", (event) => {
  console.log("[Service Worker] Installing...");

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[Service Worker] Caching app shell...");
      // Use Promise.all to fetch each resource individually and handle failures
      return Promise.all(
        FILES_TO_CACHE.map((url) =>
          fetch(url)
            .then((response) => {
              if (!response.ok) {
                console.error(`[Service Worker] Failed to cache ${url}: ${response.statusText}`);
                return null; // Skip failed resources
              }
              return cache.put(url, response);
            })
            .catch((error) => {
              console.error(`[Service Worker] Error fetching ${url}:`, error);
              return null; // Skip failed resources
            })
        )
      ).then(() => {
        console.log("[Service Worker] Caching completed.");
      });
    })
  );

  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("[Service Worker] Activating...");

  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("[Service Worker] Removing old cache:", key);
            return caches.delete(key);
          }
        })
      );
    })
  );

  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Serve from cache if available
      if (cachedResponse) {
        console.log(`[Service Worker] Serving ${event.request.url} from cache`);
        return cachedResponse;
      }

      // Try fetching from network
      return fetch(event.request).catch((error) => {
        console.error(`[Service Worker] Fetch failed for ${event.request.url}:`, error);
        // Fallback to offline.html for navigation requests
        if (event.request.mode === "navigate") {
          return caches.match("/offline.html").then((offlineResponse) => {
            if (offlineResponse) {
              return offlineResponse;
            }
            // If offline.html is not cached, return a basic fallback response
            return new Response(
              "<h1>Offline</h1><p>Sorry, you're offline and the requested page is not available.</p>",
              {
                headers: { "Content-Type": "text/html" },
              }
            );
          });
        }
      });
    })
  );
});