self.addEventListener("install", e => {
  self.skipWaiting();
});

self.addEventListener("fetch", e => {
  // لا نكاشي JSON (يبقى مباشر)
});
