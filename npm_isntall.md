## Installation (requires node.js and npm):

## topojson
    npm install -g topojson

### Example:

    $ topojson -p -o countries.topo.json -- countries.geo.json

## Polyline
    
    npm install polyline
    
### Example

```js
var polyline = require('polyline');

// returns an array of lat, lon pairs
polyline.decode('_p~iF~ps|U_ulLnnqC_mqNvxq`@');

// returns a string-encoded polyline
polyline.encode([[38.5, -120.2], [40.7, -120.95], [43.252, -126.453]]);

// returns a string-encoded polyline from a GeoJSON LineString
polyline.fromGeoJSON({ "type": "Feature",
  "geometry": {
    "type": "LineString",
    "coordinates": [[-120.2, 38.5], [-120.95, 40.7], [-126.453, 43.252]]
  },
  "properties": {}
});
```
* [polyline algorithm](https://developers.google.com/maps/documentation/utilities/polylinealgorithm)
* https://github.com/mapbox/polyline

* http://www.confusedbycode.com/curl/#downloads

* [GDAL](http://www.gisinternals.com/)

* [Make](https://bost.ocks.org/mike/make/)