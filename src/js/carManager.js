function CarManager() {
    
function renderAllCars(cars) {
    let carListElement = document.querySelector('#mainMenu4');
    let carParent = document.createElement('div');
    carParent.classList.add('carParent');
    carListElement.appendChild(carParent);
        cars.forEach(function (car) {
            let carElement = renderCar(car);
            carParent.appendChild(carElement);
        });
    }

    function renderCar(car) {
        let carElement = document.createElement('div');

        carElement.classList.add('car');
        carElement.setAttribute('data-car-id', car.id);
        carElement.innerHTML = `
            <div class="car-imageDiv">
                <img class="car-image" src="${car.image}" alt="${car.name}">
            </div>
            <div class="car-name">
                ${car.name}
            </div>
            <div class="car-driver">
                
                ${car.driver}
            </div>
            <div class="car-country">
                ${car.country}
            </div>
            <div class="car-description">   
                ${car.description}
            </div>
        `;
        carElement.addEventListener('click', mapThisCar);
        return carElement;
    }


    function mapThisCar() {
        let carId = this.getAttribute('data-car-id');
        let car = CAR_LIST.find(function (car) {
            return car.id == carId;
        });
        let carDetails = car;
        mapManager.renderThisMap('mainMenu2', car.lat, car.lng,carDetails);

        let submenuId = 'subMenu2';
        let subMenuDiv = document.querySelector(`#${submenuId}`);
        
        //click on submenu2
        subMenuDiv.click();

    }

    return {
        renderAllCars: renderAllCars
    }

}