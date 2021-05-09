<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use Illuminate\Http\Request;

class ActivityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $activitys = Activity::all()->toArray();
        return response()->json(array_reverse($activitys));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $activity = new Activity([
            'search' => $request->input('search'),
            'results' => $request->input('results'),
            'message' => $request->input('message')
        ]);
        $activity->save();

        return response()->json('The activity successfully saved');
    }
}
