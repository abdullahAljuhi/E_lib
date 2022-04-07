<?php
namespace coding\app\models;

class UserProfile extends Model{
   
    function __construct()
    {
        parent::$tblName="user_profiles";
        
    }

    function __set($name, $value)
    {
        $this->$name=$value;
        
    }
}