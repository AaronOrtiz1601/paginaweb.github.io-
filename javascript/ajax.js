$(document).ready(function() {
    $.ajax({
        url: '/welcome-message', // Server endpoint that returns the welcome message
        type: 'GET',
        success: function(response) {
            $('#principio').text(response);
        },
        error: function() {
            $('#principio').text('No se pudo cargar el mensaje de bienvenida.');
        }
    });
});