# politie-api

Access the Politie Open data API with Node.js (unofficial)

[![npm](https://img.shields.io/npm/v/politie-api.svg?maxAge=3600)](https://github.com/fvdm/nodejs-politieapi/blob/main/CHANGELOG.md)
[![Build Status](https://github.com/fvdm/nodejs-politieapi/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/fvdm/nodejs-politieapi/actions/workflows/node.js.yml)
[![Coverage Status](https://coveralls.io/repos/github/fvdm/nodejs-politieapi/badge.svg?branch=main)](https://coveralls.io/github/fvdm/nodejs-politieapi?branch=main)

- [Node.js](https://nodejs.org/)
- [Politie Open data API](https://www.politie.nl/algemeen/open-data.html/)


## Usage

In the example below I first set up the Politie API basics.
Then I geolocate my current IP at Maxmind using my [geoip2ws](https://github.com/fvdm/nodejs-geoip2ws)
library and send the position to the news endpoint.
Finally some data is extracted and displayed on the console.


```js
const PolitieAPI = require ('politie-api');
const politie = new PolitieAPI();

const geoip = require ('geoip2ws')({
  userId: '12345',
  licenseKey: 'abc123',
  service: 'insights',
});

geoip ({ ip: 'me' })
  .then (geo => politie.nieuws ({
    lat: geo.location.latitude,
    lon: geo.location.longitude,
    radius: 25,
  }))
  .then (news => console.table (news, [
    'publicatiedatum',
    'titel',
    'gebied',
  ]))
  .catch (console.log)
;
```


## Installation

`npm install politie-api`


## Methods

All functions take one _object_ argument for the parameters.
They always return a Promise.


### nieuws

Get a list of all news messages, sorted by date
and optionally sorted by geo position.

```js
// Get all the news
politie.nieuws()
  .then (news => console.table (news, [
    'publicatiedatum',
    'titel',
    'gebied',
  ]))
  .catch (console.log)
;

// Or close to a location
politie.nieuws ({
  lat: 52.373089,
  lon: 4.8910403,
  radius: 5,
})
  .then (news => console.table (news, [
    'publicatiedatum',
    'titel',
    'gebied',
  ]))
  .catch (console.log)
;
```


### politiebureaus

Get a list of all police stations
or sorted by geo position.

```js
// Get all police stations
politie.politiebureaus()
  .then (data => data.map (itm => {
    return {
      naam: itm.naam,
      adres: itm.bezoekadres.postadres,
      plaats: itm.bezoekadres.plaats,
    };
  }))
  .then (console.table)
  .catch (console.log)
;

// Or close to a location
politie.politiebureaus ({
  lat: 52.373089,
  lon: 4.8910403,
  radius: 5,
})
  .then (data => data.map (itm => {
    return {
      naam: itm.naam,
      adres: itm.bezoekadres.postadres,
      plaats: itm.bezoekadres.plaats,
    };
  }))
  .then (console.table)
  .catch (console.log)
;
```


### wijkagenten

Get a list of local police agents.

```js
// Local police Twitters
politie.wijkagenten ({
  lat: 52.09314,
  lon: 5.1147328,
  radius: 5,
})
  .then (data => data.map (itm => {
    return {
      werkgebied: itm.werkgebied,
      twitter: itm.twitter.accountnaam.replace (/[^\w]/g, ''),
    };
  }))
  .then (data => data.filter (itm => itm.twitter))
  .then (console.table)
  .catch (console.log)
;
```


### urgentpolitiebericht

Get the current urgent police message, if available.

```js
politie.urgentpolitiebericht()
  .then (console.log)
  .catch (console.error)
;
```


## Unlicense

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <https://unlicense.org/>


## Author

[Franklin](https://fvdm.com)
| [Buy me a coffee](https://fvdm.com/donating)
