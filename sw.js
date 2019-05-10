importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/03522b72586883f051dc.js",
    "revision": "1fa15e1089a19367eb29d7f089e3f186"
  },
  {
    "url": "/_nuxt/1681b4b04080ecd119e4.js",
    "revision": "4d01d81a05593aeec09673b2c689097f"
  },
  {
    "url": "/_nuxt/173b3ef8fc65e01343ef.js",
    "revision": "b6c412a52f1060c18cb32dc13bee007d"
  },
  {
    "url": "/_nuxt/179a254da22ddd65d0a0.js",
    "revision": "7c163a8b5ccc188183145226e1e547af"
  },
  {
    "url": "/_nuxt/4a130ce68abf858e320f.js",
    "revision": "1c685b2720f9cf86a137906c1ffa11e0"
  },
  {
    "url": "/_nuxt/78d1c4593f9f467e9aa8.js",
    "revision": "18476aaa8e5fa0c41dc1b84e83b75b97"
  },
  {
    "url": "/_nuxt/a0560da71414f33c875c.js",
    "revision": "708854d667f5eff914852d0fa9e1e816"
  },
  {
    "url": "/_nuxt/aae98cbcfc252e2e48d8.js",
    "revision": "a64e32aa14f6d6c947069eded18531a8"
  },
  {
    "url": "/_nuxt/aba3c45d2d49bc918c1f.js",
    "revision": "c4fbd30fd3248ac1dd23b2fe62a634ca"
  },
  {
    "url": "/_nuxt/abd0834f5be32f482ec9.js",
    "revision": "2033f9e89805a04c2e87fefbe45446ee"
  },
  {
    "url": "/_nuxt/ea6e1be52e7c7b3ba1ea.js",
    "revision": "547f64a297492700786428ee488755ab"
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
