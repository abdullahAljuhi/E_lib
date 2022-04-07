<?php
namespace coding\app\controllers;

class MainController extends Controller{

    public function show(){
        $this->view('home');
    }
    
}