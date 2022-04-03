<?php
namespace coding\app\controllers;

// use coding\app\models\User;

class MainController extends Controller{
    public function show(){
        $this->view('home');
    }


}