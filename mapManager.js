function MapManager() {


    function renderThisMap(mapId, lat, lng, zoom = 5) {
        let center = new google.maps.LatLng(lat, lng);
        var mapProp = {
            center: center,
            zoom: 5,
        };
        var map = new google.maps.Map(document.getElementById(mapId), mapProp);
        var marker = new google.maps.Marker({
            position: center,
            animation: google.maps.Animation.BOUNCE,
            icon: 'car.png'
        });

        marker.setMap(map);
    }


    function renderHistory() {

        var stavanger = new google.maps.LatLng(58.970, 5.733);
        var amsterdam = new google.maps.LatLng(52.370, 4.890);
        var london = new google.maps.LatLng(51.508, -0.120);
        let mapId = 'mainMenu3';
        let center = new google.maps.LatLng(51.508742, -0.120850);
        var mapProp = {
            center: center,
            zoom: 5,
        };






        var map = new google.maps.Map(document.getElementById(mapId), mapProp);


        var myTrip = [stavanger, amsterdam, london, stavanger];
        var flightPath = new google.maps.Polygon({
            path: myTrip,
            strokeColor: "#0000FF",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#0000FF",
            fillOpacity: 0.4
        });

        flightPath.setMap(map);



        var marker = new google.maps.Marker({
            position: center,
            //animation: google.maps.Animation.BOUNCE
            icon: 'car.png'
        });

        marker.setMap(map);

        // move marker after every 5 seconds
        setInterval(function () {
            moveMarker(map, marker);
        }, 1000);


        setInterval(function () {
            moveMarker2(map, marker);
        }, 2000);

        function moveMarker(map, marker) {
            var latLng = marker.getPosition(); // returns LatLng object
            var lat = latLng.lat(); // returns latitude
            var lng = latLng.lng(); // returns longitude
            lat += 0.1;
            lng += 0.1;
            let newPos = new google.maps.LatLng(lat, lng);
            marker.setPosition(newPos);
        }

        function moveMarker2(map, marker) {
            var latLng = marker.getPosition(); // returns LatLng object
            var lat = latLng.lat(); // returns latitude
            var lng = latLng.lng(); // returns longitude
            lat += 0.001;
            marker.setMap(map);
        }



    }

    return {
        renderThisMap: renderThisMap,
        renderHistory: renderHistory

    }
}

let mapManager = new MapManager();