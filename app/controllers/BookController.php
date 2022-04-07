<?php
namespace coding\app\controllers;

use coding\app\lib\FileUpload;
use coding\app\models\Book;

class BookController extends Controller{

    public function AddBook(){
        $book=new Book();
        $book->title=$_POST['title'];
        $book->description=$_POST['description'];
        $book->pages_number=$_POST['pages_number'];
        $book->quantity=$_POST['quantity'];
        $book->price=$_POST['price'];
        $book->format=$_POST['format'];
        if(!empty($_FILES['image']['name'])) {
            $imageName = new FileUpload($_FILES['image']);
            try {
                $imageName->upload();
                $imageName= $imageName->getFileName();
            } catch (\Exception $e) {
                $imageNameror = true;
            }
        }
        $book->image=$imageName!=null?$imageName:"default.png";
        $book->created_by=1;
        $book->is_active=isset($_POST['is_active'])?1:0 ;
        $book->save();
        if($book->save())
        $this->view('feedback',['success'=>'data inserted successful']);
        else 
        $this->view('feedback',['danger'=>'can not add data']);
    }

    public function show(){
        $this->view('Dashboard/books/add_book');
    }

    function listAll(){
        $books=new Book();
        $allbooks=$books->getAll();
      

        $this->view('Dashboard/books/list_book',$allbooks);

    }




}