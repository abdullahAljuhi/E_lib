<?php
namespace coding\app\controllers;

// use coding\app\models\User;

class Site extends Controller{
    public function index(){
        $this->view('front/index');
    }
    public function bookdetails(){
        $this->view('front/bookdetails');
    }
    public function category(){
        $this->view('front/category');
    }
    public function checkout(){
        $this->view('front/checkout');
    }
}