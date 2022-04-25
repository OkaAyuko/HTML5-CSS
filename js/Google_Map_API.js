var map = null;
var lat = 0;
var long = 0;

function showMap(){
    window.navigator.geolocation.getCurrentPosition(function(pos){
        lat = pos.coords.latitude;
        long = pos.coords.longitude;
    });
    map = new google.maps.Map(document.getElementById('map'),{
        center:{lat: lat, lng: long},
        zoom:14
    });
}