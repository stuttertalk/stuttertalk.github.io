'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f3e0ba6db30fe2f7b4cdb977e22d1377",
"index.html": "b7977ede1dd7e7a6ea032fd5e0c75f62",
"/": "b7977ede1dd7e7a6ea032fd5e0c75f62",
"main.dart.js": "e970cde3763888063838a1655a3fc18e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f8482bcc4c7a95c9fcb5ded32698c67a",
"assets/AssetManifest.json": "907eadd4f338474d28da27e640cb045c",
"assets/NOTICES": "c379485d7699a0603b630395029db567",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/appliances.png": "101bbe763486547370a1134a5ef926e4",
"assets/images/fruits_vege/papaya.jpg": "da54e0323832f550de6faad0c4e3d3c8",
"assets/images/fruits_vege/cauliflower.jpg": "ae3bf4087674f8a50172bef174d6cede",
"assets/images/fruits_vege/lime.jpg": "856b4b6a46af47bc8d0668deec855b0c",
"assets/images/fruits_vege/star_fruit.jpg": "54019fbe8a75dad4a6c4185e585ad686",
"assets/images/fruits_vege/corn.jpg": "8da36240072d63c5cf926b7ee7787fa3",
"assets/images/fruits_vege/potato.jpg": "cbce47f2191531387d35c00c48e60b3c",
"assets/images/fruits_vege/clementine.jpg": "f8e43857e125ba9f47e20f8945c9522c",
"assets/images/fruits_vege/celery.jpg": "beae79e3a91d1a6a126613ecb49e1b0e",
"assets/images/fruits_vege/pineapple.jpg": "c6cc457983d8df2e435f38ef03804e41",
"assets/images/fruits_vege/mango.jpg": "bddd3817589a64468236c8e2698dd0df",
"assets/images/fruits_vege/tomato.jpg": "da7a5d0a9ebfb7b9bcb8db5c9b3c723a",
"assets/images/fruits_vege/asparagus.jpg": "58d54cbf6bb2be24d9d59b355ca47c33",
"assets/images/fruits_vege/garlic.jpg": "3acd61cebdde75161484780fed4a2ccf",
"assets/images/fruits_vege/avocado.jpg": "71f108817bc2925ee02d359662d6e621",
"assets/images/fruits_vege/carrots.jpg": "94bf9406c6c136d422d57951c7f4a186",
"assets/images/appliances/food_processor.jpg": "167957ab1cf0bd70c728d1297b0a63d4",
"assets/images/appliances/toaster.jpg": "9ec899e005c9d8dc9cb38f35170bf3ae",
"assets/images/appliances/tv.jpg": "6de1630b1c9bf4f4b44183f97e221c4a",
"assets/images/appliances/frige.jpg": "696fbbee3f8aac28a2d1e823f136cf68",
"assets/images/appliances/microwave.jpg": "fac1958510726d525715698d34ac6042",
"assets/images/appliances/slow_cooker.jpg": "fe7fc287f6bc1ad29db020ed3539b6e8",
"assets/images/appliances/mixer.jpg": "6adbe701e59c070f64650cd472d3dcf4",
"assets/images/appliances/hair_drier.jpg": "e75fcb5f4c7fa6b47a0c8ca6f80a46df",
"assets/images/appliances/dishwasher.jpg": "030e6b66fd612e90ef311ebe4d3c11ef",
"assets/images/appliances/vacumm.jpg": "c8267de3b03010c100e2fa90498b1206",
"assets/images/appliances/blender.jpg": "7c1e94dec8b0f171cb27837c8cbffd14",
"assets/images/appliances/rice_cooker.jpg": "e3dafe28bf2c8d617731b2fdf568558e",
"assets/images/appliances/oven.jpg": "170b7d64a9e474c514f11c590ec02830",
"assets/images/appliances/washer_dryer.jpg": "1945eb30f51b00cd4c0f9d4dc02b395b",
"assets/images/fruits_vege.png": "8069e9d6648f6aa013912c6b04a098e8",
"assets/obfs/fruits_vege.obf": "7773b2e943faa0cf600cd9ec4ddd740b",
"assets/obfs/entry.obf": "054f5bf13d0a6821b45365c6060af4af",
"assets/obfs/appliances.obf": "8d88cb7d01caee50d61939240590ee66"
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
