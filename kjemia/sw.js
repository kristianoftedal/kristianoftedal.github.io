importScripts('/public/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/public/0638eb55edeb876ceb0a.css",
    "revision": "c63d718c6b50c4398070758600ed6cc1"
  },
  {
    "url": "/public/19ea04246b9226a15a2e.js",
    "revision": "1359527278c9cc8a43e4c0b8bf74b2a4"
  },
  {
    "url": "/public/27be6ee86a1db5dae4e7.js",
    "revision": "95046e66b52e2e0cf56c06f9cb93af86"
  },
  {
    "url": "/public/3573cd1a3da301faf7ff.js",
    "revision": "781c813b6cdbde0fe60fe4d4c831aea6"
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
    "url": "/public/7138ac9de90e9fc6a908.css",
    "revision": "20ff34e94bca428a1360a3d0b23f9d5f"
  },
  {
    "url": "/public/84d7ad71ddf95050e8a8.js",
    "revision": "71603a54607de0ef2b9b02e6841ed82d"
  },
  {
    "url": "/public/85f4def76a86f3eada5e.js",
    "revision": "5ac91c7ace8ff592dee630402d9e3407"
  },
  {
    "url": "/public/b138c602ae49398caa95.js",
    "revision": "95b94d4d79b1ee5109f0046c615963c5"
  },
  {
    "url": "/public/e7a0f59562d715ffe41a.js",
    "revision": "9ce70e657cdbb8de795baeb3e865eddc"
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
