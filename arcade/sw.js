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
    "url": "/_nuxt/3e42d3fd7e5f9889bcce.js",
    "revision": "b63dfcf47a3c7cd6361a58af5ed78833"
  },
  {
    "url": "/_nuxt/5b6f40b0188ac3c2c266.js",
    "revision": "10a8cd6167a9e931645d6dd965c3c35f"
  },
  {
    "url": "/_nuxt/d6cd39794a1bfaad7b4c.js",
    "revision": "1151c921391a85091bcd12d1c23f9ce5"
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
