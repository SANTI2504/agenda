//calendario
document.addEventListener('DOMContentLoaded', function () {
    //recolectar datos de un formulario
    let formulario = document.querySelector("#formularioEventos")

    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',

        locale: 'es',

        // cabecera
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,listWeek'
        },
        //se visualizara de esta manera 01:00 AM en la columna de horas
        slotLabelFormat:{
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        },
        //y este código se visualizara de la misma manera pero en el titulo del evento creado en fullcalendar
        eventTimeFormat: {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        },


        //hacer uso de la ruta para mostrar detalles del evento
        //events: baseURL+"/evento/mostrar",
        eventSources:{
            url: baseURL+"/evento/mostrar",
            method: "POST",
            extraParams:{
                _token: formulario._token.value,
            },

        },

        //cuando seleccione fecha
        dateClick: function (info) {
            //resetea lo que este en el formulario
            formulario.reset();
            //asigna las fechas segun la fecha seleccionada
            formulario.date.value=info.dateStr;
            //formulario.end.value=info.dateStr;

            $("#evento").modal("show")
            $("#btnGuardar").show();
            $("#btnEliminar").hide();
            $("#btnModificar").hide();

        },


        //cuando seleccione evento creado
        eventClick:function (info){
            //todos los datos del evento seleccionado
            var evento = info.event;
            //imprime los datos en la consola
            console.log(evento);

            //envio de datos al controlador con la funcion edit
            //then: si realiza el envio correctamente
            //catch: si genera error imprimir el error de respuesta en la consola
            axios.post(baseURL+"/evento/editar/"+info.event.id).
            then(
                (respuesta)=>{
                    //muestra solo el id
                    formulario.id.value = respuesta.data.id;
                    formulario.title.value = respuesta.data.title;
                    formulario.description.value = respuesta.data.description;
                    formulario.date.value = respuesta.data.date;
                    formulario.time.value = respuesta.data.time;
                    //formulario.end.value = respuesta.data.end;
                    //formulario.end_time.value = respuesta.data.end_time;
                    //mostrar el modal
                    $("#evento").modal("show");
                    $("#btnGuardar").hide();
                    $("#btnEliminar").show();
                    $("#btnModificar").show();

                }
            ).

            catch(
                error=>{
                    if(error.response){
                        console.log(error.response.data)
                    }
                }
            )
        }
    });

    //renderiza el calendario
    calendar.render();

    //captura la accion del botom
    document.getElementById("btnGuardar").addEventListener("click", function () {
        Swal.fire({
            title: '¿Estas seguro?',
            text: "Se creara un nuevo evento!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, crear!',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                enviarDatos("/evento/agregar");
                Swal.fire({
                    icon: "success",
                    title: "Creado!",
                    text: "El evento ha sido creado exitosamente.",
                    confirmButtonClass: "btn btn-success",
                    timer: 2000
                });
            }
        })

    });



    //captura la accion del botom
    document.getElementById("btnEliminar").addEventListener("click", function (){
        Swal.fire({
            title: '¿Estas seguro?',
            text: "Se borrara el evento que creaste!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                enviarDatos("/evento/borrar/"+formulario.id.value);
                Swal.fire({
                    icon: "success",
                    title: "Eliminado!",
                    text: "El evento ha sido eliminado exitosamente.",
                    confirmButtonClass: "btn btn-success",
                    timer: 2000
                });
            }
        })

    });
    //captura la accion del botom
    document.getElementById("btnModificar").addEventListener("click", function (){
        Swal.fire({
            title: '¿Estas seguro?',
            text: "Se modificara el evento!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, modificar!',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                enviarDatos("/evento/actualizar/"+formulario.id.value);
                Swal.fire({
                    icon: "success",
                    title: "Actalizado!",
                    text: "El evento ha sido actualizado exitosamente.",
                    confirmButtonClass: "btn btn-success",
                    timer: 2000
                });
            }
        })

    });
    //funcion para enviar datos al controlador
    function enviarDatos(url) {

       //recolecta todos los datos enviados por el formulario
       // const datos = new FormData(formulario);
        let datos = recuperarDatosFormulario();
        //creacion de variable el cual va a contenet la variable baseURL + url enviada por el boton
        const newURL = baseURL+url;
        //imprimir los datos en la consola
        console.log(datos);

        //imprime el valor del dato "title"
        //console.log(formulario.title.value);


        //envio de datos al controlador
        //then: si realiza el envio correctamente
        //catch: si genera error imprimir el error de respuesta en la consola
        axios.post(newURL,datos).
        then(
            (respuesta)=>{
                //actualizar en tiempo real
                calendar.refetchEvents();
                //cerrar el modal
                $("#evento").modal("hide");

            }
        ).
        catch(
            error=>{
                if(error.response){
                    console.log(error.response.data)
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'La accion no se pudo realizar!',
                        footer: error,
                    });
                    $("#validaciones").hide();
                }
            }
        )
    }

    function recuperarDatosFormulario() {
        let datos = {
            id: formulario.id.value,
            title: formulario.title.value,
            description: formulario.description.value,
            date: formulario.date.value,
            time: formulario.time.value,
            start: formulario.date.value+ ' ' + formulario.time.value,
            end: formulario.date.value+ ' ' + formulario.time.value,

        };
        return datos;

    }



});

