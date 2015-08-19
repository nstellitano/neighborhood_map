/**
 * Created by nicholasstellitano on 8/15/15.
 */

var neighborhood, origin, map, marker, infowindow;

var octopus = function() {

    var that = this;

    this.spotlist = ko.observableArray([]);

    destinations_london.forEach(function(spot) {
        that.spotlist.push(new spot(spot));
    };

    this.currentSpot = ko.observable(this.spotlist()[0])

    this.init = function(){
        this.setNeighborhood();
        this.buildMap(origin);
        this.setPointsOfInterest(neighborhood);

    };

    this.setNeighborhood = function(){

        neighborhood = new spot(destinations_london);
        origin = new google.maps.LatLng(neighborhood.dest()[0].lat, neighborhood.dest()[0].long);
        ko.applyBindings(neighborhood);
    };

    this.buildMap = function(origin){
        var mapOptions = {
            zoom: 11,
            center: origin
        };

        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    };

    this.setPointsOfInterest = function(neighborhood){
        that = this;
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

                    that.getWeather(neighborhood.dest()[i].lat,neighborhood.dest()[i].long , i)
                }
            })(marker, i));
        }
    };

    this.getWeather = function(lat, long, i){
        var url = "http://api.wunderground.com/api/0336bd7bfed51415/conditions/q/" + lat + "," + long + ".json"
        $.getJSON(url, function(data) {
            neighborhood.dest()[i].weather = data;
        });

    }

}




