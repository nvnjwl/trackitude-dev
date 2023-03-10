function UIManager() {

    let allSubmenu;
    let allMainmenu;
    function initialize() {

       


        allSubmenu = document.querySelectorAll('.subMenu');
        allMainmenu = document.querySelectorAll('.mainMenu');
        allSubmenu.forEach(function (submenu) {
            submenu.setAttribute('data-submenu-id', submenu.id);
            submenu.addEventListener('click', onSubmenuClick);
        });
        renderAllCars(CAR_LIST);
        if (MAPS_READY) {
            mapManager.renderThisMap('mainMenu2', 51.508742, -0.120850);
        } else {
            document.addEventListener('mapsReady', function () {
                mapManager.renderThisMap('mainMenu2', 51.508742, -0.120850);
            });
        }
    }

    function onSubmenuClick(event) {
        //alert('submenu clicked');
        let submenu = event.currentTarget;

        //id of submenu
        let submenuId = submenu.getAttribute('data-submenu-id');
        let mainmenuId = submenu.getAttribute('data-mainmenu-id');
        let submenuToActivate = document.querySelector(`#${submenuId}`);
        let mainmenuToActivate = document.querySelector(`#mainMenu${mainmenuId}`);
        deactivateAllSubmenu();
        hideAllMainmenu();
        submenuToActivate && submenuToActivate.classList.add('active');
        mainmenuToActivate && mainmenuToActivate.classList.remove('hidden');
        if (submenuId === 'subMenu3') {
               mapManager.renderHistory();
        }
    }



    function hideAllMainmenu (){
        allMainmenu.forEach(function (mainmenu) {
            mainmenu.classList.add('hidden');
        });
    }

    function deactivateAllSubmenu()  {
        allSubmenu.forEach(function (submenu) {
            submenu.classList.remove('active');
        });
    }

function renderAllCars(cars) {
        let carListElement = document.querySelector('#mainMenu4');
        carListElement.innerHTML = '';
        cars.forEach(function (car) {
            let carElement = renderCar(car);
            carListElement.appendChild(carElement);
        });
    }

    function renderCar(car) {
        let carElement = document.createElement('div');
        carElement.classList.add('car');
        carElement.setAttribute('data-car-id', car.id);
        carElement.innerHTML = `
            <div class="car-image">
                <img src="${car.image}" alt="${car.name}">
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
        return carElement;
    }




    return {
        initialize: initialize
    }
}