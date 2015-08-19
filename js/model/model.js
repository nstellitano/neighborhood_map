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
        weather: {},
        visible: true
    },
    {   name: "St Paul's Cathedral",
        lat: 51.5136,
        long: -.0981,
        description: "Very Old Church",
        meta: ["tourist", "kids"],
        weather: {},
        visible: true
    }
];


//Define neighbor"hood" for the model.
var spot = function(destinations) {
    this.name = ko.observable(destinations.name);
    this.lat = ko.observable(destinations.lat);
    this.long = ko.observable(destinations.long);
    this.description = ko.observable(destinations.description);
    this.meta = ko.observable(destinations.meta);
    this.weather = ko.observable(destinations.weather);
    this.visible = ko.observable(destinations.visible);

    this.destToAdd = ko.observable("");
    this.addDestination = function() {
        if (this.addDestination() != "") {
            this.dest.push(this.destToAdd()); // Adds the item. Writing to the "items" observableArray causes any associated UI to update.
            this.destToAdd(""); // Clears the text box, because it's bound to the "itemToAdd" observable
        }
    }.bind(this);  // Ensure that "this" is always this view model
};


//*********************** Helper Functions *****************************





