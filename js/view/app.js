/**
 * Created by nicholasstellitano on 8/5/15.
 */
var hood = hood || {};

(function ($) {
    "strict"


var geocoder;
var directionsDisplay;
var map;
var origin = new google.maps.LatLng(neighborhood.dest()[0].lat, neighborhood.dest()[0].long);
var locations = [
        ['Adriana Conconi', 51.7519,-1.2578, 7],
        ['Nick Stellitano', 42.3708,-71.1833, 6],
        ['Diana Ortiz Sosa', 38.9047,-77.0164, 5],
        ['Pilar Tavella', 38.9000,-77.0150, 4],
        ['Diego Gilsanz', 40.707758, -74.00885, 3],
        ['Selihan Yilar', 39.920770, 32.854110, 2],
        ['Luciano Sobral', -23.550520, -46.633309, 1]
    ];

function initialize() {
    geocoder = new google.maps.Geocoder();
    directionsDisplay = new google.maps.DirectionsRenderer();

    var mapOptions = {
        zoom: 11,
        center: origin
    };

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    //directionsDisplay.setMap(map);

    var infowindow = new google.maps.InfoWindow();

    var marker;

    for (var i = 1; i < neighborhood.dest().length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(neighborhood.dest()[i].lat, neighborhood.dest()[i].long),
            map: map
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {

            return function () {

                //dest.A = marker.position.A;
                //dest.F = marker.position.F

                infowindow.setContent(neighborhood.dest()[i].name);
                infowindow.open(map, marker);

                map.setZoom(11);
                map.setCenter(marker.getPosition());
            }
        })(marker, i));
    }
}

google.maps.event.addDomListener(window, 'load', initialize);

})();