importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/039bc31164ac95723d75.js",
    "revision": "9185406e3960ca0aa0f4a7dc8b81d1ed"
  },
  {
    "url": "/_nuxt/2fa2b4bcd0c87554daa4.js",
    "revision": "8a1131aaf4924d5a44dc39d686f4868f"
  },
  {
    "url": "/_nuxt/4bc6dfec90a0282bef7c.js",
    "revision": "b65d9e9ed916fce67d95b69105fbdace"
  },
  {
    "url": "/_nuxt/95acec119b911ce15af5.js",
    "revision": "54667752d308fb3788d9ebd5e0c3f899"
  },
  {
    "url": "/_nuxt/a5b5fac56d7fd2a799be.js",
    "revision": "eee0c88b919a4012fd53f125bfbb4590"
  },
  {
    "url": "/_nuxt/b1f6164358a8c67bc1c3.js",
    "revision": "ed33a3c37d30e0475b0cea849ffacfb1"
  },
  {
    "url": "/_nuxt/da0c34bc8c65ad47885a.js",
    "revision": "0f4a2b67ae5e9ced1abcbdc047981db1"
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
