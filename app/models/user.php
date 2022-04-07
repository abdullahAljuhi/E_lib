<?php
namespace coding\app\models;
use coding\app\system\AppSystem;
use PDO;

class User extends Model{
       function __construct()
    {
        parent::$tblName="users";
        
    }

    function __set($name, $value)
    {
        $this->$name=$value;
        
    }
    
   
    public static function userExists($email)
    {
      
            $sql_query="select id from users where email='".$email."'";
           
            $stmt=AppSystem::$appSystem->database->pdo->prepare($sql_query);
            $stmt->execute();
            return $stmt->fetch(PDO::FETCH_ASSOC);
            
    }
   public function cryptPassword($password)
    {
        $this->Password = crypt($password, 'yeNCSNwRpYopOhv0TrrReP');
    }

}