<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RoleController extends Controller
{
    //
    public function index()
    {
        return  role::all();
    }
    public function store(Request $request)
    {
        //
        Role::creat([
            'name'=>$request->name
        ]);
        return response()->json([
            'message'=>'Role created successfully'
        ],201);
    }
    public function show(string $id)
    {
        return Role::find($id);
    }
}
