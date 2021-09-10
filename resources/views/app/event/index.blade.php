@extends('layouts.app')
@section('content')
    <div class="container">
        <div id="calendar">
        calendario
        </div>
    </div>

    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#evento">
        Launch static backdrop modal
    </button>

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
                    <form>
                        @csrf
                        <div class="form-group">
                            <label for="id">ID</label>
                            <input type="text" class="form-control" name="id" id="id" aria-describedby="">
                            <small id="HelpId" class="form-text text-muted">Help text</small>
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
                        <div class="form-group">
                            <label for="start">start</label>
                            <input type="datetime-local" class="form-control" name="start" id="start" aria-describedby="">
                            <small id="HelpId" class="form-text text-muted">Help text</small>
                        </div>
                        <div class="form-group">
                            <label for="end">end</label>
                            <input type="datetime-local" class="form-control" name="end" id="end" aria-describedby="">
                            <small id="HelpId" class="form-text text-muted">Help text</small>
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
