document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',  // Vista de mes por defecto
        events: [
            {
                title: 'Evento de Recolección',
                start: '2024-10-22',
                end: '2024-10-23',
                extendedProps: {
                    description: 'Recolección de materiales reciclables en la ciudad.',
                    maxVolunteers: 10,
                    currentVolunteers: 5
                }
            },
            {
                title: 'Clasificación de Residuos',
                start: '2024-10-25',
                extendedProps: {
                    description: 'Ayuda en la clasificación de residuos reciclables.',
                    maxVolunteers: 15,
                    currentVolunteers: 10
                }
            }
        ],
        eventClick: function(info) {
            var eventObj = info.event;
            
            // Mostrar la información detallada del evento
            alert(
                'Evento: ' + eventObj.title + '\n' +
                'Descripción: ' + eventObj.extendedProps.description + '\n' +
                'Cupos Disponibles: ' + (eventObj.extendedProps.maxVolunteers - eventObj.extendedProps.currentVolunteers) + '\n' +
                '¿Quieres unirte?'
            );

            // Aquí puedes agregar lógica para permitir que el usuario se registre
        },
        editable: true, // Permitir que los eventos puedan cambiarse de fecha
        eventDrop: function(info) {
            alert('El evento ' + info.event.title + ' fue movido a ' + info.event.start.toISOString());
        }
    });

    calendar.render();
});
