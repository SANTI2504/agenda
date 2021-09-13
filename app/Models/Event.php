<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;
    protected $fillable=[
        'title',
        'description',
        'date',
        'time',
        //datos requeridos por fullcalendar
        'start',
        'end',


        //'end_time',
    ];

    //validaciones
    static $rules= [
        'title'=>'required',
        'description'=>'required',
        'date'=>'required',
        'time'=>'required',
    ];

}
