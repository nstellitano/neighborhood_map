/**
 * Created by nicholasstellitano on 8/15/15.
 */

var neighborhood, origin, map, marker, infowindow;

var octopus = {

    init: function(){
        this.setNeighborhood();
        this.buildMap(origin);
        this.setPointsOfInterest(neighborhood);

    },

    setNeighborhood: function(){
        neighborhood = new hood(destinations_london);
        origin = new google.maps.LatLng(neighborhood.dest()[0].lat, neighborhood.dest()[0].long);
        ko.applyBindings(neighborhood);
    },

    buildMap: function(origin){
        var mapOptions = {
            zoom: 11,
            center: origin
        };

        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    },

    setPointsOfInterest: function(neighborhood){
        infowindow = new google.maps.InfoWindow();

        for (var i = 1; i < neighborhood.dest().length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(neighborhood.dest()[i].lat, neighborhood.dest()[i].long),
                map: map
            });

            google.maps.event.addListener(marker, 'click', (function (marker, i) {

                return function () {

                    infowindow.setContent(neighborhood.dest()[i].name);
                    infowindow.open(map, marker);

                    map.setZoom(11);
                    map.setCenter(marker.getPosition());
                }
            })(marker, i));
        }
    }


}