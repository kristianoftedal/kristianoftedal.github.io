importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/16d7d6a40775e5718d16.js",
    "revision": "d74e2d98ad235d9d950cae0bf868949e"
  },
  {
    "url": "/_nuxt/23a457a6026e494f2dff.js",
    "revision": "8291e7c5522a766ef9f43061efe49e61"
  },
  {
    "url": "/_nuxt/a09bcda27f0d31ff9b25.js",
    "revision": "d1c58fab62029ec0429d05a2040aa510"
  },
  {
    "url": "/_nuxt/abd0834f5be32f482ec9.js",
    "revision": "2033f9e89805a04c2e87fefbe45446ee"
  },
  {
    "url": "/_nuxt/bd9437a832e3a8d090b8.js",
    "revision": "ac90b109f1b182f724424ef5f5d44edd"
  },
  {
    "url": "/_nuxt/c0fee2d932d53509cef1.js",
    "revision": "ad5a8ea9fec96d36b81ed29497162547"
  },
  {
    "url": "/_nuxt/d1125085702dbec96320.js",
    "revision": "9747a6154ca56762d4ec3d6e22e57c7e"
  },
  {
    "url": "/_nuxt/ee0e97526f817f46c0fb.js",
    "revision": "92047a5dfeee56bb46a19d8f264e3029"
  },
  {
    "url": "/_nuxt/fbada9ffb8960020d424.js",
    "revision": "75dfb6fa918776606e44c1955d918c2d"
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
