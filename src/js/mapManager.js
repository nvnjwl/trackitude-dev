function MapManager() {


    function renderThisMap(mapId, lat, lng, zoom = 9) {
        let center = new google.maps.LatLng(lat, lng);
        var mapProp = {
            center: center,
            zoom: 9,
        };
        var map = new google.maps.Map(document.getElementById(mapId), mapProp);
        var marker = new google.maps.Marker({
            position: center,
            animation: google.maps.Animation.BOUNCE,
            icon: 'images/car.png'
        });

        marker.setMap(map);
    }


    function renderHistory() {

        var Noida = new google.maps.LatLng(28.5355, 77.3910);
        var Delhi = new google.maps.LatLng(28.7041, 77.1025);
        var Ghaziabad = new google.maps.LatLng(28.6667, 77.4333);
        let mapId = 'mainMenu3';
        let center = new google.maps.LatLng(28.5355, 77.3910);
        var mapProp = {
            center: center,
            zoom: 9,
        };






        var map = new google.maps.Map(document.getElementById(mapId), mapProp);


        var myTrip = [Noida, Delhi, Ghaziabad, Noida];
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
            icon: 'images/car.png'
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
            //random movenent of 10 meters
            let movementX = Math.random() * 0.001;
            let movementY = Math.random() * 0.001;
            lat += movementX;
            lng += movementY;
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