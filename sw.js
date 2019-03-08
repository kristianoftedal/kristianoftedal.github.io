importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/325037545cf03638e7fe.js",
    "revision": "48f5d6a1166a0d0e75c69583a2fcacea"
  },
  {
    "url": "/_nuxt/3704d02d2d83edde6dae.js",
    "revision": "148e6d3f117b594f8b5e3c306dc2e08f"
  },
  {
    "url": "/_nuxt/a2efa80484506c3754f6.js",
    "revision": "00005a4b3bfb1db723ae47460f5c768e"
  },
  {
    "url": "/_nuxt/abd0834f5be32f482ec9.js",
    "revision": "2033f9e89805a04c2e87fefbe45446ee"
  },
  {
    "url": "/_nuxt/c0b58a0a7ea7292d916d.js",
    "revision": "cb1ab6fe765d68967cf63022e6b55e1c"
  },
  {
    "url": "/_nuxt/c0fee2d932d53509cef1.js",
    "revision": "ad5a8ea9fec96d36b81ed29497162547"
  },
  {
    "url": "/_nuxt/da976b13646024c3e52d.js",
    "revision": "a751d032d30a356d6972a152a7254119"
  },
  {
    "url": "/_nuxt/db5d118654acc161e87d.js",
    "revision": "eaabf112fe67dd01adfef27e320ee7eb"
  },
  {
    "url": "/_nuxt/f6956256a2b485139482.js",
    "revision": "543bde2de717e3f2ca20ce5c46395a21"
  }
], {
  "cacheId": "kjemia-web",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
