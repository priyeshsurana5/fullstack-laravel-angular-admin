<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Closure;
use Illuminate\Http\Request;

class Authenticate extends Middleware
{
    public function handle(Request $request, Closure $next, ...$guards)
    {
        // Convert Cookie to Authorization header
        if ($jwt = $request->cookie('auth_token')) {
            $request->headers->set('Authorization', 'Bearer '.$jwt);
        }

        $this->authenticate($request, $guards);

        return $next($request);
    }
}
