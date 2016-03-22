http://wiki.openstreetmap.org/wiki/Slippy_map_tilenames

Zoom levels
The zoom parameter is an integer between 0 (zoomed out) and 18 (zoomed in). 18 is normally the maximum, but some tile servers might go beyond that.

zoom level	tile coverage	number of tiles	tile size in degrees
0	1 tile covers whole world	1 tile	360° x 170.1022°
1	2 × 2 tiles	4 tiles	180° x 85.0511°
2	4 × 4 tiles	16 tiles	90° x 42.5256°
n	2n × 2n tiles	22n tiles	360/2n° x 170.1022/2n°
12	4096 x 4096 tiles	16 777 216	0.0879° x 0.0415°
16		232 = 4 294 967 296 tiles	
17		17 179 869 184 tiles	
18		68 719 476 736 tiles	
19	Maximum zoom for Mapnik layer	274 877 906 944 tiles	
See Zoom levels for more details

X and Y
X goes from 0 (left edge is 180 °W) to 2zoom − 1 (right edge is 180 °E)
Y goes from 0 (top edge is 85.0511 °N) to 2zoom − 1 (bottom edge is 85.0511 °S) in a Mercator projection
For the curious, the number 85.0511 is the result of arctan(sinh(π)). By using this bound, the entire map becomes a (very large) square.
