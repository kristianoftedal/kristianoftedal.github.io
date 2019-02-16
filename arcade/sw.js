importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/04e09ff91458eb87dcc9.js",
    "revision": "3a317e3e54da00fe9062abea82895272"
  },
  {
    "url": "/_nuxt/2611224de8e3a886fe2d.js",
    "revision": "aa98cd993bfd2c681b334d2e3a742ae2"
  },
  {
    "url": "/_nuxt/67aa52b71a4df2b89095.js",
    "revision": "f0d09ab401c18586b9b0f84ca3443450"
  },
  {
    "url": "/_nuxt/d6cd39794a1bfaad7b4c.js",
    "revision": "1151c921391a85091bcd12d1c23f9ce5"
  },
  {
    "url": "/_nuxt/e2ea79e6f86a277cb06a.js",
    "revision": "0c84797b1005114babf949704556c991"
  },
  {
    "url": "/_nuxt/fa9cb1d67a2db542936b.js",
    "revision": "18cf0b655cd384035fddcf5eb27bee57"
  }
], {
  "cacheId": "arcade",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
