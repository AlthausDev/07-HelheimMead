var main = function(){

};
// Archivo: main.js
$(document).ready(function() {
    // Mostrar o ocultar el botón de pie de página pegajoso
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
        } else {
            $('.go-top').fadeOut(200);
        }
    });

    // Animar el desplazamiento hacia arriba
    $('.go-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
    });
});

