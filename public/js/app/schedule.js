//calendario
document.addEventListener('DOMContentLoaded', function() {
    //recolectar datos de un formulario
    let formulario = document.querySelector("form")

    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',

        locale:'es',

        // cabecera
        headerToolbar:{
            left:'prev,next today',
            center:'title',
            right:'dayGridMonth,timeGridWeek,listWeek'
        },

        dateClick:function(info){
            $("#evento").modal("show")
        }
    });

    //renderiza el calendario
    calendar.render();

    //captura la accion del botom
    document.getElementById("btnGuardar").addEventListener("click",function(){
        //recolecta todos los datos enviados por el formulario
        const datos= new FormData(formulario);
        //imprimir los datos en la consola
        console.log(datos);
        //imprime el valor del dato "title"
        console.log(formulario.title.value);
        axios.post()
    });


});

