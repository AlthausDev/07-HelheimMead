var main = function(){

};

// init.js

$(document).ready(function() {
    $('.retrieveFromDatabase').linkPreviewRetrieve();

    // Inicialización de los elementos con el id 'lp1' y 'lp2' como linkPreview
    $('#lp1').linkPreview();
    $('#lp2').linkPreview({ placeholder: "Second Field" });

});
