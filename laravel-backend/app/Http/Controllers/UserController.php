<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\UserCreateRequest;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json([
            'users'=>User::paginate(10)
        ],200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UserCreateRequest $request)
    {
        //
        User::create([
            'first_name'=>$request->first_name,
            'last_name'=>$request->last_name,
            'email'=>$request->email,
            'password'=>hash::make($request->password)
        ]);
        return response->json([
            'message'=>'User created successfully'
        ],201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return response()->json([
  
        ],200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UserUpdateRequest $request, string $id)
    {
       $user=User::find($id);
       if(!$user){
        return response()->json([
            'message'=>'User not found'
        ],404);
       };
         $user->update([
          'first_name'=>$request->first_name,
          'last_name'=>$request->last_name,
          'email'=>$request->email,
          'password'=>hash::make($request->password)
         ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $user=User::find($id);
        if(!$user){
         return response()->json([
             'message'=>'User not found'
         ],404);
        };
        $user->delete();
          return response()->json([
            'message'=>'User deleted successfully'
        ],200);
    }

    public function UpadtePassword(Request $request, string $id)
    {
        $user=User::find($id);
        if(!$user){
         return response()->json([
             'message'=>'User not found'
         ],404);
        };
        $request->validate([
            'password'=>'required'
        ]);
        $user->update([
            'password'=>Hash::make($request->password)
        ]);
          return response()->json([
            'message'=>'Password updated successfully'
        ],200);
    }
}
