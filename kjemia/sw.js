importScripts('/public/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/public/0638eb55edeb876ceb0a.css",
    "revision": "c63d718c6b50c4398070758600ed6cc1"
  },
  {
    "url": "/public/48500a77805a9ace0e89.css",
    "revision": "184f2873e23a7dfd66a8515d7e11a414"
  },
  {
    "url": "/public/4cc6d657592d15841e3f.css",
    "revision": "516f30b9161664fec24a2c2000433252"
  },
  {
    "url": "/public/542c7a5b28c4298b0de7.js",
    "revision": "da9e7a9e584d8b17bace05297ed81bec"
  },
  {
    "url": "/public/5455df0e859b40728e69.js",
    "revision": "52e9b549dd36aaed1886565a17f202e6"
  },
  {
    "url": "/public/686737c3cd8512836435.js",
    "revision": "fc250a34c2970ee48343479035e809ab"
  },
  {
    "url": "/public/7138ac9de90e9fc6a908.css",
    "revision": "20ff34e94bca428a1360a3d0b23f9d5f"
  },
  {
    "url": "/public/7e0b7be43d344279dc6a.js",
    "revision": "6df3f44d25b2c859adfa42cf3599e0ec"
  },
  {
    "url": "/public/86810b736e360a9ac142.js",
    "revision": "774f57be5e15a933e735081922c06d68"
  },
  {
    "url": "/public/ae511a42a478101ab8de.js",
    "revision": "77e4e648aea62e8ddac65cfde1633253"
  },
  {
    "url": "/public/b5d25696bce9a2407cb9.js",
    "revision": "73e4241b9edf7825f6d753734c348d86"
  },
  {
    "url": "/public/ee7edab5b36905cec2f2.css",
    "revision": "b6518421876628ddfe366f769ee9225b"
  }
], {
  "cacheId": "kjemia-web",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/public/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
