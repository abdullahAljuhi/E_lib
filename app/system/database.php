<?php
namespace coding\app\system;

use PDOException;

class Database{
    public $pdo;
    function __construct($dbConfig)
    {
        try {
            $dsn="mysql:host=".$dbConfig['servername'].";dbname=".$dbConfig['dbname']."";
            $username=$dbConfig["username"];
            $pass=$dbConfig["dbpass"];
            $this->pdo=new \PDO($dsn,$username,$pass);
        } catch (PDOException $e) {
            //throw $th;
            echo "there is an error in conection".$e->getMessage();
        }
   
        
        
    }

    public function insert(){

    }
    public function udpate(){

    }
    public function delete(){
        
    }

}
?>