'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f3e0ba6db30fe2f7b4cdb977e22d1377",
"index.html": "5eecdb2584a394313ac08faee1557502",
"/": "5eecdb2584a394313ac08faee1557502",
"main.dart.js": "d038452dc09202d0fb481d10c6ff447c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f8482bcc4c7a95c9fcb5ded32698c67a",
"assets/AssetManifest.json": "c9b2e9f922cc9cb2afea87da791dd101",
"assets/NOTICES": "f9d11630fa5165e934a8103adac96f4e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/appliances.png": "101bbe763486547370a1134a5ef926e4",
"assets/images/transport/boat.jpg": "e49b025832115d9ff04a113d28f6fec6",
"assets/images/transport/crh.jpg": "e2343ee1d9e2a50917e7bbdf22557ca7",
"assets/images/transport/train.jpg": "060fe9924caea5d6108b4814b267526d",
"assets/images/transport/taxi.jpg": "d13b315033067d3d201edd127723025f",
"assets/images/transport/suv.jpg": "e644439777f5838a619c0a877efce028",
"assets/images/transport/bike.jpg": "48de83202ef8c04142daee8e657d2cf3",
"assets/images/transport/passenger_boat.jpg": "c1018230c0cdf201a070487a2316f575",
"assets/images/transport/electric.jpg": "1334da0998b22ba570e746a79e8b232e",
"assets/images/transport/moto.jpg": "69ddd74297de7a73e16c8114306c7f0f",
"assets/images/transport/tricycle.jpg": "9e6504466cb615d67661971d1cfe24b4",
"assets/images/transport/airplane.jpg": "a13fdb050cd1306618c3b9ef8909b226",
"assets/images/transport/minibus.jpg": "de687c91d073bef2ce37d40a173be30a",
"assets/images/transport/chsr.jpg": "042ee78dfd6765a84e8ffb0d1f6283ed",
"assets/images/transport/subway.jpg": "92e96b7b9c0251d436184bef90ecee0f",
"assets/images/transport/car.jpg": "0631321e212d8fc0665c4199fe8172bb",
"assets/images/transport/bus.jpg": "67f2b6f9edd3596c77f3575d71d29f48",
"assets/images/transport/truck.jpg": "a95f994efdbde5ed27d832bc75098f52",
"assets/images/transport/mpv.jpg": "4623a4bc27f52e39762ea2e550579edd",
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
"assets/images/daily_necessities/spoon.jpg": "a124c7096550e72d0a0aa6649031daa9",
"assets/images/daily_necessities/pillow.jpg": "40a6a45505d96caeeaf92711d5f8cba5",
"assets/images/daily_necessities/detergent2.jpg": "b09bc874c2da9140ffb56f4c31e6c75f",
"assets/images/daily_necessities/scissor.jpg": "40675b692b9c7bfdbb5029e73b5f37e1",
"assets/images/daily_necessities/clothes_hanger.jpg": "f01313e17b7156d8205869affc3b99be",
"assets/images/daily_necessities/alarm_clock.jpg": "9a30eaf4d02bc4ecc6950ba931673ea9",
"assets/images/daily_necessities/towel.jpg": "7d3443def1a02e2d40827d8e6b4a226f",
"assets/images/daily_necessities/shower.jpg": "3d05326c1372113475f7f68033a611f7",
"assets/images/daily_necessities/toilet_water.jpg": "0a8a7e33edcbcd30b3863c322ef822a7",
"assets/images/daily_necessities/hair_wash.jpg": "5dfabdb54ee32f9885a5ad65b5184b59",
"assets/images/daily_necessities/tooth_paste.jpg": "e3773f9a6ad43c9ecbcb7adeb49fcbed",
"assets/images/daily_necessities/face_wash.jpg": "2d5879e99b121389ac2c950ad89100de",
"assets/images/daily_necessities/umbrella.jpg": "2c14b256d9ecb73d9957a12b456a4498",
"assets/images/daily_necessities/flashlight.jpg": "4b0d053334e7728a9f74df08ca0bf75d",
"assets/images/daily_necessities/mirror.jpg": "a372f3d564e3d8d6522ce461959c2981",
"assets/images/daily_necessities/cup.jpg": "381d9a878e78311794c1f42d03ac3061",
"assets/images/daily_necessities/detergent.jpg": "e7e331197705b497160dc8c5c2a5938d",
"assets/images/daily_necessities/tooth_brush.jpg": "5c61aa4183d9910870603d099faa99b3",
"assets/images/daily_necessities/knife.jpg": "e2904ecce9b0e95c6c9c043c61af39f7",
"assets/images/daily_necessities/soap.jpg": "e17da9cab8490ce9d21ea7b9aad95db8",
"assets/images/daily_necessities.jpg": "8244618ba85200ef9461b201743cfede",
"assets/images/transport.png": "93595365df0f9e94298704dc936be551",
"assets/images/fruits_vege.png": "8069e9d6648f6aa013912c6b04a098e8",
"assets/images/profession/journalist.jpg": "c780553c8d9bbeaca2647e55a1150134",
"assets/images/profession/astronaut.jpg": "0021b1d26f0afe688ecb21a7ec25b58e",
"assets/images/profession/teacher.jpg": "e5ae626037c081d5be55355598a91d16",
"assets/images/profession/designer.jpg": "a6717a3ac0324f5a8128611a327f9c49",
"assets/images/profession/courier.jpg": "b2d74a60122d89de5d4a0403cac2ece4",
"assets/images/profession/writer.jpg": "37bb170a48f24e3279d19eda8d509cda",
"assets/images/profession/photographer.jpg": "7908635e07cbc945c78b15c158ee14b4",
"assets/images/profession/cooker.jpg": "e7edebcb66ed130c773ae07f895ca061",
"assets/images/profession/doctor.jpg": "6488abdf1fa1e6340239bcd0f479219f",
"assets/images/profession/driver.jpg": "5c278d1e64bb4353ca6e6814e30de31e",
"assets/images/profession/hairdresser.jpg": "77146ab42abc5ccaa5b9dd04ef36a77e",
"assets/images/profession/scientist.jpg": "85d7702b59efcaff91b2d4daacdba45e",
"assets/images/profession/actor.jpg": "ac412eac1ec9053cad3e14408389ba7b",
"assets/images/profession/lawyer.jpg": "e8fea39d7b3db6cfc715ed30e11e55de",
"assets/images/profession/nurse.jpg": "e1a77e94994b2b0f5aacbc4e2ea98af7",
"assets/images/profession/judge.jpg": "a16502f4625deaf419553877bd7bb9eb",
"assets/images/profession/farmer.jpg": "425f042f2910343a163c3f819e41a93b",
"assets/images/profession/fisherman.jpg": "71d88923b6cffa7944d2beb4596e54ac",
"assets/images/profession/police.jpg": "e4620293814b9df78f3c06c2be4a135a",
"assets/images/profession.png": "835fe057d5e362deaee5ca5074ed18d1",
"assets/obfs/profession.obf": "6e249a4c0638f046894cd9971e724348",
"assets/obfs/fruits_vege.obf": "0766d6edc66cef0802ed440d2d56a990",
"assets/obfs/transport.obf": "13ce519ddda7aeb3b3a1a5cea1bc7082",
"assets/obfs/entry.obf": "71e551b189606e64c3826bf23cf3e632",
"assets/obfs/daily_necessities.obf": "1a96fd89f8c99272f065ea8928e7e1d9",
"assets/obfs/appliances.obf": "05a6b427b7d29a50f3402e873677b816"
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
