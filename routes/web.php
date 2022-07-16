<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::statamic('example', 'example-view', [
//    'title' => 'Example'
// ]);

Route::get('/file/{any}', function ($any) {
    if (\Illuminate\Support\Facades\Storage::disk('public')->exists($any)) {
        return response()
            ->file(\Illuminate\Support\Facades\Storage::disk('public')->path($any), [
                'Access-Control-Allow-Origin' => '*'
            ]);
    }
    abort(404);
})->where('any', '.*');
