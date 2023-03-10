//IIFE
(function () {


    function onBodyLoad() { 
        //create appManager instance
        var uiManager = new UIManager();
        //call initialize method
        uiManager.initialize();

    }

    if (document.body) {
        onBodyLoad();
    } else {
        document.addEventListener("DOMContentLoaded", onBodyLoad);
    }
    
})();