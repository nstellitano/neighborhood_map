/**
 * Created by nicholasstellitano on 8/15/15.
 */

var neighborhood, origin, map, marker, infowindow;

var octopus = function() {

    var that = this;


    this.init = function(){

        that.setNeighborhood(destinations_london);
        that.buildMap(that.origin);
        that.setPointsOfInterest(that.neighborhood);

    };

    this.setNeighborhood = function(city){

        that.neighborhood = ko.observableArray([]);
        that.cityName = city[0].city

        city.forEach(function(spots,i) {
            if(i==0){}else {
                that.neighborhood.push(new spot(spots));
            }
        });

        that.currentSpot = ko.observable(that.neighborhood()[0]);
        that.origin = new google.maps.LatLng(city[0].lat, city[0].long);
    };

    this.buildMap = function(origin){
        var mapOptions = {
            zoom: 11,
            center: origin
        };

        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    };

    this.setPointsOfInterest = function(neighborhood){
        infowindow = new google.maps.InfoWindow();

        for (var i = 0; i < that.neighborhood().length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(neighborhood()[i].lat(), neighborhood()[i].long()),
                map: map
            });

            google.maps.event.addListener(marker, 'click', (function (marker, i) {

                return function () {

                    infowindow.setContent(neighborhood()[i].name());
                    infowindow.open(map, marker);

                    map.setZoom(11);
                    map.setCenter(marker.getPosition());

                    that.getWeather(neighborhood()[i].lat(), neighborhood()[i].long() , i)
                    that.currentSpot(that.neighborhood()[i]);
                }
            })(marker, i));
        }
    };

    this.getWeather = function(lat, long, i){
        var url = "http://api.wunderground.com/api/0336bd7bfed51415/conditions/q/" + lat + "," + long + ".json"
        $.getJSON(url, function(data) {
            that.neighborhood()[i].weather = data;
        });

    }

}




