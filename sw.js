const CACHE_NAME = 'ims-op-dept-v1';

// Assets to cache immediately
const PRE_CACHE_ASSETS = [
    './index.html',
    './manifest.json',
    // External Libraries (CDNs)
    'https://unpkg.com/react@18/umd/react.production.min.js',
    'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js',
    'https://unpkg.com/@babel/standalone/babel.min.js',
    'https://cdn.tailwindcss.com',
    'https://unpkg.com/lucide@latest',
    'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js',
    // Icons
    'https://cdn-icons-png.flaticon.com/512/2897/2897785.png'
];

// Install Event: Cache core assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(PRE_CACHE_ASSETS);
            })
            .catch(err => console.error('Error caching assets:', err))
    );
    self.skipWaiting();
});

// Activate Event: Clean up old caches
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Fetch Event: Network First, falling back to Cache
// This strategy ensures fresh data for the app logic but works offline
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request)
            .then((response) => {
                // Check if we received a valid response
                if (!response || response.status !== 200 || response.type !== 'basic') {
                    // For cross-origin requests (CDNs), response.type might be 'cors' or 'opaque'
                    // We still want to cache valid CDN responses
                    if (response.type === 'opaque') return response; 
                }

                // Clone the response
                const responseToCache = response.clone();

                caches.open(CACHE_NAME)
                    .then((cache) => {
                        // Only cache http/https requests
                        if (event.request.url.startsWith('http')) {
                            cache.put(event.request, responseToCache);
                        }
                    });

                return response;
            })
            .catch(() => {
                // If network fails, try to serve from cache
                return caches.match(event.request);
            })
    );
});