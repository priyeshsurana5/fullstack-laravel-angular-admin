<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Response;
use App\Http\Requests\RegisterRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $user =USER::Create([
             'first_name'=>$request->first_name,
             'last_name'=>$request->last_name,
             'email'=>$request->email,
             'password'=>hash::make($request->password),
             'role_id'=>1
        ]);
        return response()->json([
            'message'=>'User registered successfully', 
            'user'=>$user
        ],201);
    }
    public function login(Request $request)
    {
        if(!Auth::attempt($request->only('email','password'))){
            return response()->json([
                'message'=>'Invalid login details'
            ],401);
        }
        $user =Auth::user();
        $token =$user->createToken('auth_token')->plainTextToken;
        // $cookie =cookie('auth_token',$token,60*24);
          $cookie = cookie(
        'auth_token', 
        $token, 
        60 * 24, 
        '/', 
        null, 
        true,  
        true   
    );
        return response()->json(
            [
                'message'=>'User logged in successfully',
                'token_type'=>'Bearer'
            ]
        )->withCookie($cookie);
    }
    public function user(Request $request)
    {
        return response()->json($request->user());
    }
    public function logout(Request $request)
    {
        $cookie =cookie::forget('auth_token');
        return response()->json([
            'message'=>'User logged out successfully'
        ])->withCookie($cookie);
    }
}
