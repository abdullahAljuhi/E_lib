<?php
namespace coding\app\controllers;

use coding\app\lib\FileUpload;
use coding\app\lib\Helper;
use coding\app\lib\InputFilter;
use coding\app\lib\Validate;
use coding\app\models\User;
use coding\app\models\UserProfile;

class UsersController extends Controller{
 use Validate;
 use Helper;
 use InputFilter;
 private $useRole =
 [
     'name'     => 'req|alpha|between(3,10)',
     'password'      => 'req|min(6)',
     'email'        => 'req|email',

 ];

    function newUser(){
        $this->view('Dashboard/users/add_user');
    }
    function listAll(){
        $user=new User();
        $all_user=$user->getAll();

        $this->view('Dashboard/users/list_user',$all_user);

    }

        public function show(){

    }

    public function saveUser(){
                $errors=$this->isValid($this->useRole, $_POST);
                if($errors){
                    $this->view('Dashboard/users/add_user',[
                        'errors'=>$errors
                        ]);}
                $user = new User();
                $user->name = $this->filterString($_POST['name']);
                $user->cryptPassword($_POST['password']);
                $user->email = $this->filterString($_POST['email']);
                $user->is_active=isset($_POST['is_active'])?1:0;
                $user->role_id=1;
        
              
                if(User::userExists($user->email)){
                    $this->view('Dashboard/users/add_user',[
                        'message'=>['danger'=>'this user exist']
                    ]);
                    exit;

                }
                // TODO:: SEND THE USER WELCOME EMAIL
                if($user->save()) {
                    $u=$user->getId($user->email);
                    $userProfile = new UserProfile();
                    $userProfile->user_id= $u->id;
                    $user->phone = $this->filterString($_POST['PhoneNumber']??'');
                    $uploadError = false;
                    if(!empty($_FILES['image']['name'])) {
                        $uploader = new FileUpload($_FILES['image']);
                        try {

                            $uploader->upload();
                            $userProfile->img = $uploader->getFileName();
                        } catch (\Exception $e) {
                            $uploadError = true;
                        }
                    }
                    if($uploadError === false && $userProfile->save()){
                        $this->view('Dashboard/users/add_user',[
                            'message'=>['success'=>'data inserted successful']
                            ]);
                } else {
                    $this->view('Dashboard/users/add_user',['danger'=>'error']);
                }
            }
        
    }
    public function edit(){
        
    }
    public function delete(){
        
    }




}
?>