@extends('layouts.app')
@section('content')
    <div class="container">
        <div id="calendar">
        </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="evento" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form action="" id="formularioEventos">
                        @csrf
                        <!-- start validaciones -->
                        <!-- end validaciones-->
                        <div class="form-group">
                            <label for="id">ID</label>
                            <input type="text" class="form-control" name="id" id="id" aria-describedby="" readonly>
                            <small id="HelpId" class="form-text text-muted">El id es un dato automatico y no se puede modificar</small>
                        </div>
                        <div class="form-group">
                            <label for="title">Titulo</label>
                            <input type="text" class="form-control" name="title" id="title" aria-describedby="">
                            <small id="HelpId" class="form-text text-muted">Help text</small>
                        </div>
                        <div class="form-group">
                            <label for="description">Descripcion</label>
                            <textarea class="form-control" name="description" id="description" rows="3"></textarea>
                            <small id="HelpId" class="form-text text-muted">Help text</small>
                        </div>
                        <div class="row form-group">
                            <div class="col-6">
                                <label for="date">Fecha</label>
                                <input type="date" class="form-control" name="date" id="date" aria-describedby="" readonly>
                                <small id="HelpId" class="form-text text-muted">fecha de la cita</small>
                            </div>

                            <div class="col-6">
                                <label for="time">Hora</label>
                                <input type="time" class="form-control" name="time" id="time" aria-describedby="">
                                <small id="HelpId" class="form-text text-muted">Hora de la cita</small>
                            </div>
                        </div>



                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-success" id="btnGuardar" >Guardar</button>
                    <button type="button" class="btn btn-warning" id="btnModificar" >Modificar</button>
                    <button type="button" class="btn btn-danger" id="btnEliminar" >Eliminar</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>

                </div>
            </div>
        </div>
    </div>

@endsection
