importScripts('/kjemia/public/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/kjemia/public/0638eb55edeb876ceb0a.css",
    "revision": "c63d718c6b50c4398070758600ed6cc1"
  },
  {
    "url": "/kjemia/public/48500a77805a9ace0e89.css",
    "revision": "184f2873e23a7dfd66a8515d7e11a414"
  },
  {
    "url": "/kjemia/public/4cc6d657592d15841e3f.css",
    "revision": "516f30b9161664fec24a2c2000433252"
  },
  {
    "url": "/kjemia/public/542c7a5b28c4298b0de7.js",
    "revision": "da9e7a9e584d8b17bace05297ed81bec"
  },
  {
    "url": "/kjemia/public/5455df0e859b40728e69.js",
    "revision": "52e9b549dd36aaed1886565a17f202e6"
  },
  {
    "url": "/kjemia/public/7138ac9de90e9fc6a908.css",
    "revision": "20ff34e94bca428a1360a3d0b23f9d5f"
  },
  {
    "url": "/kjemia/public/774b44644b34ad35d081.js",
    "revision": "39df1233f3891fb2c1802f8aec17deb7"
  },
  {
    "url": "/kjemia/public/7ca0794dccabd85f32f0.js",
    "revision": "e3f7449cb4bc0686637aad7a789c72e5"
  },
  {
    "url": "/kjemia/public/7e0b7be43d344279dc6a.js",
    "revision": "6df3f44d25b2c859adfa42cf3599e0ec"
  },
  {
    "url": "/kjemia/public/ae511a42a478101ab8de.js",
    "revision": "77e4e648aea62e8ddac65cfde1633253"
  },
  {
    "url": "/kjemia/public/b5d25696bce9a2407cb9.js",
    "revision": "73e4241b9edf7825f6d753734c348d86"
  },
  {
    "url": "/kjemia/public/ee7edab5b36905cec2f2.css",
    "revision": "b6518421876628ddfe366f769ee9225b"
  }
], {
  "cacheId": "kjemia-web",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/kjemia/public/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
