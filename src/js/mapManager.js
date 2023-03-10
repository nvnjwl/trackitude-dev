function MapManager() {
    let currentSpeed = 1;

    let map = null;
    var markers_list = [];

    function renderThisMap(mapId, lat, lng, carDetails) {
        carDetails = carDetails || CAR_LIST[0];

        var infowindow = new google.maps.InfoWindow({
                content: "Hello World!"
            });

            infowindow.open(map, marker);
        let center = new google.maps.LatLng(lat, lng);
        var mapProp = {
            center: center,
            zoom: 10,
        };
        map = new google.maps.Map(document.getElementById(mapId), mapProp);
        var marker = new google.maps.Marker({
            position: center,
            //animation: google.maps.Animation.BOUNCE,
            icon: 'images/car.png'
        });

        marker.setMap(map);


        var infowindow = new google.maps.InfoWindow({
                content: carDetails.name
            });

        infowindow.open(map, marker);
        markers_list.push(marker);


        //show car details
        let carDetailsDiv = document.querySelector('#carDetails');


    }


    function renderSpeedMenu() {
        let parent = document.querySelector('#mainMenu3');
        let speedMenu = document.createElement('div');
        speedMenu.classList.add('speedMenu');
        //render 1x, 2X , 4X, 8 X 

        speedMenu.innerHTML = `
            <div class="speedMenuBodyItemTitle">1X</div>
            <div class="speedMenuBodyItemTitle">2X</div>
            <div class="speedMenuBodyItemTitle">4X</div>
            <div class="speedMenuBodyItemTitle">8X</div>
        `;
        parent.appendChild(speedMenu);
        //click event for speed
        let speedMenuBodyItems = document.querySelectorAll('.speedMenuBodyItemTitle');
        speedMenuBodyItems.forEach(function (speedMenuBodyItem) {
            speedMenuBodyItem.addEventListener('click', function (event) {
                let speed = event.target.innerHTML;
                speed = parseInt(speed);
                currentSpeed = speed;
                console.log(speed);
            });
        });
        
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

        let mapDiv = document.getElementById("mapDiv");
       


        var map = new google.maps.Map(mapDiv, mapProp);


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
            let movementX = Math.random() * 0.001 * currentSpeed;
            let movementY = Math.random() * 0.001 * currentSpeed;
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


    function hideAllMarkers() {
        for (var i = 0; i < markers_list.length; i++) {
            markers_list[i].setMap(null);
        }
    }


    function showMultiCar(carArray) {
        hideAllMarkers();
        var mapProp = {
            center: new google.maps.LatLng(carArray[0].lat, carArray[0].lng),
            zoom: 9,
        };
        if (!map) {
            map = new google.maps.Map(document.getElementById("mainMenu2"), mapProp);
        }

        for (let i = 0; i < carArray.length; i++) {
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(carArray[i].lat, carArray[i].lng),
                //animation: google.maps.Animation.BOUNCE,
                icon: 'images/car.png'
            });

            marker.setMap(map);
            markers_list.push(marker);
        }
    }

    return {
        renderThisMap: renderThisMap,
        renderHistory: renderHistory,
        showMultiCar: showMultiCar,
            renderSpeedMenu: renderSpeedMenu

    }
}

let mapManager = new MapManager();