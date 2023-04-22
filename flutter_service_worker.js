'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "533ac3ee1e7e4baf917b547a461b7d3e",
"index.html": "0cd57151e1001009f1e09bfde76508fd",
"/": "0cd57151e1001009f1e09bfde76508fd",
"main.dart.js": "74c822541443770bbd23a683c3f6cf48",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3666f6305a7a7287864da14071b4d957",
".git/config": "bad61e785a23397866dcd633259d9eb0",
".git/objects/61/e355377edb77ea39d90e6f1187c3e5c303f79f": "273164f47252ef0914bf3c9e877dcfe5",
".git/objects/0d/542fde92f6b74370fb37f1ae23db6e7f472719": "6b3af40f24c781f582498ece3b861e2a",
".git/objects/59/bf6f7efa4ab4c3546406661e6880ea22a08d76": "e28c83311dbc43e0a8e7befe46bde142",
".git/objects/0c/2ed98008aedb645a03bd4310943faf0c5f1248": "c0782f9473db13b60e0652ee636c98c5",
".git/objects/3e/c6034fab289a8ea850bf36c85bea85915fc137": "8fe7d0aec60034939c8f8faeb9afd4bf",
".git/objects/04/38e9479493b0d57502de6744f1b80f29426ea4": "33cba00d58e19cdc273c24d04a6133ac",
".git/objects/04/c2b5c4f4e3acc1e100b3c48d8cf8790c439c93": "805400f080df7a3dbbc8f93873902572",
".git/objects/6a/2c61fcdaad9f9f8e23f6a184f90c81192f1e65": "61c5ba3671269bdd5678317515cdf7e1",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/32/3507e664d734d03f9550651506edea8afddbf2": "a04c2af40eb0986c443fa551ef85ae1c",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/51/1ac01afd76b91dffa96a1e53a6f9aafd0ed314": "fbf47689187077428de2383d2667e8a5",
".git/objects/93/6ac71074b8ab7b01fdf50a07c9ba576c5f3921": "1f12f219c9b63f7a9c44a3d9a3f09b0a",
".git/objects/93/58c168e1aef5fe164fb2fdcd3a1f329949eab4": "1aabea77736b9df8fbd0bffe777a6e09",
".git/objects/5a/9e78e1344294863169b531ea574d2d19f940f0": "7953b04dc57293052c9989be5802b1ba",
".git/objects/33/82e548c7e9cb6f09f62b3a5eca285f85488168": "89d173e45c826411aafe71dc000fa752",
".git/objects/a3/a02f2ae30f99ab8c1d61ec8badceabc8d4094f": "b5d313b7882b3a5e3eb34fd227dab6df",
".git/objects/b5/8ea209b8991301e8380a95028f5aefae3f71a9": "2ddad56bf422da209b2ccf856504826c",
".git/objects/ac/529d2a319d5fe0c6002971e0e5a195d357e901": "8473815a7c5e474490e0c34356cbaf9e",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/bb/ac941ba39741b1e34db47367a87a97142d5a0f": "1075e04e176f07f5b35726ca384d6338",
".git/objects/be/9d0becefed86555d494c706306733d3c2a90c6": "94cbf4ec157ca4b4dcc592900e726812",
".git/objects/da/f3884b9177b95623cccd82bf24f0d8e7230af6": "0a0595625f0a0641c94adf7cb0e96eab",
".git/objects/a5/db4ee18129056115d274f13c8abf041cabefbc": "f0d7bb1911062e933305c96eec42c3c9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/1436697f4240cf87e40bb58f59eab4b70ef091": "2e153d2cc8fbfbfb19456cf28c5fc5ff",
".git/objects/fc/6831381276780438b53f0342f2349e9fe13233": "9e92dac8a0bbfcbad703c0b14a3c53c7",
".git/objects/fe/7466c9ba2e90c11bcb1d8b18f763e8f3bcab87": "c952ee5557cc46f664497b88f873a35e",
".git/objects/18/f425f93cf6df4cdaa36a6784965c5247291337": "f1830c16237f75d7176dc4e4c17ce59e",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/89/124e82cf3cfae54327ed538153ad4fe7132b79": "14fa8e32c43e8f643722918ae671e3d7",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/87/6c49f89d02bb17801240e521e004fe96825259": "33724a49c9da7b03e081f72445b53ad5",
".git/objects/17/edc7adad4cfc916c039fc32ed6c90ddc644293": "2c01aa1a7475c181d31f93abce5fa4b3",
".git/objects/8f/e7c96a533417623e78a1eecba45b6b01f1c7c3": "e82863ebadcac9832e0aaf6fc8f24e2b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/53f2159c0f82292ade31ae5cacd55d820802b3": "9ae6fb5a3a865c8201fa88bd7c82fdb1",
".git/objects/7e/d825df83a20490559f3a67a6586bc3b6ae6ee1": "235c9fedffdad3d7123b152db7977a30",
".git/objects/10/6b2d2edf5f9b47c9842ab5e5627abd099598b7": "626eb3c1987ad1bf9da3bfdedf1ab718",
".git/objects/86/9844000a74c4040294da7ccd02a40fd2de0e46": "2e4e82e7c19190f3b6582a2c3f29a172",
".git/objects/2a/54607a1da9e5ce8803e73c71c20a037f1d78ae": "4cdbcdd7adfce72402aed1add83f12b1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/39dacf4da642b4375c1a884e0098acb2c2c47a": "ff659d2bdc4410cb5f9a412bb2c40634",
".git/objects/6e/2cd5d588a87f2e797c986e3275837a61543d9f": "01d2e3436fd1135045f8e626df362eaf",
".git/objects/9a/5b5c772f2d96dce67aba6a2194036fd0fbf7a1": "681a20d7f9e0863c4523987ff5540ed0",
".git/objects/9a/69e99dfb65769862c5198fa96808f6825c5f07": "3886bee00fa1b124495c3572cb5438a0",
".git/objects/5c/180a9940461d102d83d65523c4a955d92eff73": "bc2c2f6eafa528be73ec1875c95e3ba2",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/3a/7977e69b6979ae269bde67997bba67dcdd752a": "2f0270c17ba988055c0ee3ea437b0fd5",
".git/objects/30/8c6a4ff9faab806c28196c15e6255943b08b35": "ab66327c59fb82db1f3a3a792a0b5bf1",
".git/objects/5e/5bfe73d2705999db081b8711f558967a403f6c": "e618b3330d3a0a65bffe5396f8c3d7d0",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/08/59e7ae2be68f971abe2c69f0b2296ff7f26341": "b2641de46990ed412358a45bf98083d2",
".git/objects/99/9f811d0caf3a82c9e3c8f2831f0c57675d8ba0": "ed0ab71726c58fbe9192b4b5654601fa",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/97/7a7acf2a286f4a72f71aec7ddbd7265a856fb2": "c5c737574cfb3609a1cf2f6ddffe0fd1",
".git/objects/0f/22540ef0d1b0ad49521eceefa06219ce18c2a6": "52bcd4cee03ee35f8b7c2d68345c8235",
".git/objects/0f/04e3799cc04cb88a982f74c5140a847312dcd3": "5924f72e16486a43a39a4ff392f5fb00",
".git/objects/d4/aeb016df6a2d66270924da059f7da6b09df6a4": "46cb0300b97930cf4f1bfc0b2c8e3915",
".git/objects/ba/69e2f51dc36e794834d4ce22d7317eced916a1": "458b4f9f743e9823f4666168bd9ce97e",
".git/objects/a0/68ff36c96720cdb1f864410057c99c79cd7c66": "2f1dcb7bb4f02dfc410d4f8c94989e1b",
".git/objects/b8/321143207364e7372fd85398edf2085071dc75": "071cf102748b3fb8c8489448c93faf1c",
".git/objects/b1/ed63f7058a4f734b8eb9c5b22c1019d2dbf435": "40efff67c87b2f3b39a7a0e8f8b40e53",
".git/objects/a9/ee79b08b65120b648f5897ffa561f2350da2df": "37c2460922bb0a6abe9ea2f3266f3731",
".git/objects/d5/99c91c3f31616b4335bc4bb68d250b6919fc83": "9bb04153d1aeba42d1aa6e2d88e940c9",
".git/objects/d5/c2c7486257f4f2cc1027c10a8ef4a224ce82a4": "52546aeddfcdb77de3bfcb161b42711b",
".git/objects/d2/cad38c36304784c83c2608db6cf43700ae58b6": "97e638770b12f9181e44d1621d4c0a3a",
".git/objects/af/5ed5a4344728afe9bf3e71940369bc3d5fd7f5": "4b9f5df479a390f03c4b768475220c8c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/d12d0fd723b750084c07951c34ddcf07e196b6": "94155aaf003b393f7510f608a976f175",
".git/objects/a8/686aef1e5a2b0b9ff91f70382fe78947ca0f46": "f437f92c9feff3bc9451013c4d6c72c5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/8e866385befb5fa21a9a2ee6e33d90e0adebe2": "3c427ba7f00b557f7673759821fb68b4",
".git/objects/c4/8ebb3f7d48243a30a5e3faecec8aedfd3c44f7": "a81d8e9b164b2889e6594aae55072694",
".git/objects/c5/140606ca61bc5210d479b50757744ee27c690b": "f7f6ac559f1054d9316423bc04632efc",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/c02726bcd78ca48da5dd83eb4c4dec9a0c897e": "ff31cbdaccdecbe072afdf5371357d11",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/48/5921ad694a11ade757efb0e9049a158625e895": "88fbe04b45915327b0dfe6f6ae00f76a",
".git/objects/12/d523df1b026fb16a837648e046ddcd0c6c5c03": "c6151128121a61d12ba023091efc0012",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/71/d5cf155be0863e75c901b67ed3cab68cfe4ed1": "d4b697359d30c35c3123f711ef61da00",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/2e/e3f651ac644b942ed7a64d9cbe7d0c3a44418f": "6065f67dbdd43d38c07033cc66f6573c",
".git/objects/78/a1beb41c7f2bd2c399dd9e9b38ab55e19797f2": "194e85ed1774a5bfdea0bc79c9e24f0e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cfaaefe24028ccb64433a5499b863277",
".git/logs/refs/heads/delete": "9b632bc7ac13af99ed62f546a54b2a17",
".git/logs/refs/heads/master": "aa8301d4f508eced6cc97f9059a37cf6",
".git/logs/refs/heads/main": "7cd68397c320f488d19b29f57ef3294f",
".git/logs/refs/remotes/vento/main": "184d7e6aede5cf027fceb51b98990f9b",
".git/logs/refs/remotes/origin/main": "20fddb643be0e7954bd790325ec1a286",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/delete": "bf97a51e59a41b0ad11a37490cb9fee8",
".git/refs/heads/master": "bf97a51e59a41b0ad11a37490cb9fee8",
".git/refs/heads/main": "8994164ac241a6d0caaeb7de032e3f67",
".git/refs/remotes/vento/main": "c463a19720df287605cbf5535b159b3b",
".git/refs/remotes/origin/main": "8994164ac241a6d0caaeb7de032e3f67",
".git/index": "34470d3852741ec5b902a4abe3d0ae54",
".git/COMMIT_EDITMSG": "129e3c44d1c0d09a343fc59ec786c7fb",
".git/FETCH_HEAD": "607258f1cef58cbcb1e25dd078e2819a",
"assets/AssetManifest.json": "7762a9063f09636810b1881a1b1c5ebc",
"assets/NOTICES": "9d8688b5df4afb6189c34e76f03269d1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/logo.png": "99762db8218a532a9e208760accade68",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
