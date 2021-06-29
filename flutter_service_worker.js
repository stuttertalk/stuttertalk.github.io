'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f3e0ba6db30fe2f7b4cdb977e22d1377",
"index.html": "cb28151db38828f7ce61bd9846b41bed",
"/": "cb28151db38828f7ce61bd9846b41bed",
"main.dart.js": "e226440374748ede709938de98ce6cf3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f8482bcc4c7a95c9fcb5ded32698c67a",
"assets/AssetManifest.json": "72c3cf2e907e5ba6111ad7c25699139c",
"assets/NOTICES": "c379485d7699a0603b630395029db567",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/bed/5.webp": "0d7e66bfbcd5093a0c13d14855e4b79b",
"assets/images/bed/9.webp": "a44a0636fbcc3dcd767f75c75b1bf322",
"assets/images/bed/8.webp": "ca6030a72b5ad3b76db2c36ab79cbfe3",
"assets/images/bed/4.webp": "75e27c47e83bc4ed50a44577ca567e81",
"assets/images/bed/3.webp": "a1e317a00f17adddeca593568d45e880",
"assets/images/bed/2.webp": "91c5acc7caaf446f8598b8027c074df1",
"assets/images/bed/1.webp": "aa27bbdbf57fc9bb3740da1241f50fbf",
"assets/images/bed/10.webp": "75e27c47e83bc4ed50a44577ca567e81",
"assets/images/bed/7.webp": "8dda0f03079202873521bbf43e2b2c3f",
"assets/images/bed/6.webp": "88ee1f2f0080feddd07491ca2b368bfc",
"assets/images/chair/5.webp": "0b8a983d83d72ce30fe23ccd0ca0e86e",
"assets/images/chair/9.webp": "45e9fdf2bf6f5ebc9862f44893a57f17",
"assets/images/chair/8.webp": "f9e9a78fef4b61b28e497261f1ef3e2a",
"assets/images/chair/4.webp": "124ee4512cb1bd8a068b026b1ba43c2b",
"assets/images/chair/3.webp": "bf485bee907f93b1db6187553037c5e7",
"assets/images/chair/2.webp": "a79c527009a89cb5fd1d2487f12e1ec1",
"assets/images/chair/1.webp": "910f9bcd4dddc82dd978f7da9740426b",
"assets/images/chair/10.webp": "595be595cd388b78afc6c3933c06fe28",
"assets/images/chair/7.webp": "63f137ed13d22e8cd33ebb3bb45ffdc4",
"assets/images/chair/6.webp": "d95af8664126659167c024a4e436b87c",
"assets/images/bed.png": "c6f9fba5204da05847d7cd8e4e1a9ea9",
"assets/images/closet.png": "01b5cd492d72a0061e159136020aa65b",
"assets/images/sofa.png": "fc7adbf1b34eee1a38c41b2f433dbb8f",
"assets/images/sofa/5.webp": "2e81623904503efa59429b33c153c876",
"assets/images/sofa/9.webp": "fe2c11bbbea460f21a717c9f81149241",
"assets/images/sofa/8.webp": "de5a5769450a9f6407fd3b2a1adea655",
"assets/images/sofa/4.webp": "0e6376e0eeb4259bf4c1c12b1de2d73b",
"assets/images/sofa/3.webp": "65dac942a51538491562f4ca6965cb1b",
"assets/images/sofa/2.webp": "66d27668307c40fba4f20d76e9577ec4",
"assets/images/sofa/1.webp": "732d9b0a72fffc2a4159550039aca3f2",
"assets/images/sofa/10.webp": "3df705bc34b401f175b6970b1e4e09ba",
"assets/images/sofa/7.webp": "7bd8bdcfa6b412876f13d8eb98e2851c",
"assets/images/sofa/6.webp": "992ca0165e50f365f9a433f78f28ae9d",
"assets/images/chair.png": "98c39ef872ae94ba6beaf9f19f9fdec7",
"assets/images/closet/5.webp": "cd03a1644cee51d7c474f94407df9f58",
"assets/images/closet/9.webp": "25335a39c36a412b8ea9ae2dc3c4ec7d",
"assets/images/closet/8.webp": "45d71955084c424889a50e5b6c2e7bbd",
"assets/images/closet/4.webp": "20b3cd342711d7c038696348488e0f1a",
"assets/images/closet/3.webp": "d6b96eeac9f402ec91e592b11c896c09",
"assets/images/closet/2.webp": "853dd2f5cffdad91e57fb8c3cb69a0cc",
"assets/images/closet/1.webp": "cef6390895b108cdd3d41a4ac695bfb8",
"assets/images/closet/10.webp": "bd29b7f408092a9c061a7bcf221c0639",
"assets/images/closet/7.webp": "536db992fb4e01f6e45f2ba23a5dd5bc",
"assets/images/closet/6.webp": "a314198f58088b94ad304e3f44e57b91",
"assets/obfs/chair.obf": "c683233144e0c6a8f16be032728dc055",
"assets/obfs/entry.obf": "2d986760563686e0f628763229135e44",
"assets/obfs/sofa.obf": "dd1b720525e6cd6668924751c5c3e411",
"assets/obfs/bed.obf": "6d9e7cabd3e823182df32deed161d82d",
"assets/obfs/closet.obf": "d71913135beb0c84a44bebb12b54ccb0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
