
var gewannPosition = L.latLng(49.217332, 8.677177);

var mymap = L.map('map', {
    // center: gewannPosition,
    // zoom: 17,
    zoomControl: false,
    attributionControl: false
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(mymap);

var gewannPolygon = L.polygon([
    L.latLng(49.218531, 8.677058),
    L.latLng(49.216258, 8.676849),
    L.latLng(49.216280, 8.674748),
    L.latLng(49.216217, 8.674712),
    L.latLng(49.216199, 8.676846),
    L.latLng(49.216100, 8.676861),
    L.latLng(49.216188, 8.677283),
    L.latLng(49.218530, 8.677462)
], {
    color: 'red'
}).addTo(mymap);

var trees = [
    L.latLng(49.218523, 8.677202),
    L.latLng(49.218400, 8.677193),
    L.latLng(49.218310, 8.677184),
    L.latLng(49.217826, 8.677112),
    L.latLng(49.217069, 8.677103),
    L.latLng(49.218023, 8.677368),
    L.latLng(49.216232, 8.676591),
    L.latLng(49.216239, 8.676211),
    L.latLng(49.216240, 8.675681),
    L.latLng(49.216245, 8.675173)
];

var treeMarkers = [];

trees.forEach((tree)=>{
    treeMarkers.push(
        L.marker(tree).addTo(mymap)
    );
});

//allign view to contain polygon
mymap.fitBounds(gewannPolygon.getBounds());