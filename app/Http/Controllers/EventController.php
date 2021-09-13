<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
//dar formato a varios datos
use Carbon\Carbon;
use function GuzzleHttp\Promise\all;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('app.event.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //validar informacion
        request()->validate(Event::$rules);
        //sentencia
        $evento=Event::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function show(Event $event)
    {
        //muestra todos los registros
        $event=Event::all();
        //devuelve el formato en json
        return response()->json($event);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //sentencia consulta por id
        $event=Event::find($id);

        //cambio de formato de fecha y hora a solo fecha
        //$event->start=Carbon::createFromFormat('Y-m-d H:i:s', $event-> start)->format('Y-m-d');
        //$event->end=Carbon::createFromFormat('Y-m-d H:i:s', $event-> end)->format('Y-m-d');
        //devuelve la sentencia en json
        return response()->json($event);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id )
    {
        //validar informacion
        request()->validate(Event::$rules);
       $event=Event::find($id)->update($request->all());
       return response()->json($event);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //eliminar todos los datos por id
        $event = Event::find($id)->delete();
        //devuelve la sentencia en json
        return response()->json($event);
    }
}
