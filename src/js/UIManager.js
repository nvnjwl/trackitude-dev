function UIManager() {

    let allSubmenu;
    let allMainmenu;

    let carManager;
    let reportManager;
    let groupManager;
    function initialize() {


        allSubmenu = document.querySelectorAll('.subMenu');
        allMainmenu = document.querySelectorAll('.mainMenu');
        allSubmenu.forEach(function (submenu) {
            submenu.setAttribute('data-submenu-id', submenu.id);
            submenu.addEventListener('click', onSubmenuClick);
        });
        carManager = new CarManager();
        reportManager = new ReportManager();
        groupManager = new GroupManager();
        mapManager.renderSpeedMenu();


        
        if (MAPS_READY) {
            let noida = { lat: 28.5355, lng: 77.3910 };
            mapManager.renderThisMap('mainMenu2', noida.lat, noida.lng);
        } else {
            document.addEventListener('mapsReady', function () {
                mapManager.renderThisMap('mainMenu2', noida.lat, noida.lng);
            });
        }



        let submenuId = 'subMenu1';
        let subMenuDiv = document.querySelector(`#${submenuId}`);
        
        //click on submenu2
        subMenuDiv.click();
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

        if (submenuId === "subMenu1") {
            reportManager.renderReports();
        }
        if (submenuId === 'subMenu2') {
            mapManager.renderHistory();
        }
        if (submenuId === 'subMenu3') {
            mapManager.renderHistory();
        }
        if (submenuId === "subMenu4") {
            carManager.renderAllCars(CAR_LIST);
        }
        if (submenuId === "subMenu5") {
            groupManager.renderGroups();
        }
    }


    function hideAllMainmenu() {
        allMainmenu.forEach(function (mainmenu) {
            mainmenu.classList.add('hidden');
        });
    }

    function deactivateAllSubmenu() {
        allSubmenu.forEach(function (submenu) {
            submenu.classList.remove('active');
        });
    }


    return {
        initialize: initialize,
        onSubmenuClick: onSubmenuClick
    }
}