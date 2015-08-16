/**
 * Created by nicholasstellitano on 8/5/15.
 */
var neighborhood = neighborhood || {};
'use strict';

//Set destination for London.  Can be easily turned into a file that contains numerous vacation destinations
var destinations_london = [
    {
        city: "London",
        lat: 51.5072,
        long:-0.1275
    },
    {   name: "Big Ben",
        lat: 51.5008,
        long: -.1247,
        description: "Big Clock",
        meta: ["tourist", "kids"],
        visible: true
    },
    {   name: "St Paul's Cathedral",
        lat: 51.5136,
        long: -.0981,
        description: "Very Old Church",
        meta: ["tourist", "kids"],
        visible: true
    }
];

//Define neighbor"hood" for the model.
var hood = function(destinations) {
    this.dest = ko.observableArray(destinations);
    this.destToAdd = ko.observable("");
    this.addDestination = function() {
        if (this.addDestination() != "") {
            this.dest.push(this.destToAdd()); // Adds the item. Writing to the "items" observableArray causes any associated UI to update.
            this.destToAdd(""); // Clears the text box, because it's bound to the "itemToAdd" observable
        }
    }.bind(this);  // Ensure that "this" is always this view model
};

//Define and build the map utilizing the origin and neighborhood based on the desired locaiton of the user
//var map = function(origin, neighborhood) {
//    this.initialize = function() {
//        var geocoder = new google.maps.Geocoder();
//        //directionsDisplay = new google.maps.DirectionsRenderer();
//
//        var mapOptions = {
//            zoom: 11,
//            center: origin
//        };
//
//        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
//        //directionsDisplay.setMap(map);
//
//        var infowindow = new google.maps.InfoWindow();
//
//        var marker;
//
//        for (var i = 1; i < neighborhood.dest().length; i++) {
//            marker = new google.maps.Marker({
//                position: new google.maps.LatLng(neighborhood.dest()[i].lat, neighborhood.dest()[i].long),
//                map: map
//            });
//
//            google.maps.event.addListener(marker, 'click', (function (marker, i) {
//
//                return function () {
//
//                    //dest.A = marker.position.A;
//                    //dest.F = marker.position.F
//
//                    infowindow.setContent(neighborhood.dest()[i].name);
//                    infowindow.open(map, marker);
//
//                    map.setZoom(11);
//                    map.setCenter(marker.getPosition());
//                }
//            })(marker, i));
//        }
//    }
//};




