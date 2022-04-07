<?php

namespace coding\app\controllers;

use coding\app\lib\FileUpload;
use coding\app\models\Category;

class CategoryController extends Controller{

    function listAll(){
        $categories=new Category();
        $allCategories=$categories->getAll();
      

        $this->view('Dashboard/categories/list_categories',$allCategories);

    }

    function create(){
        $this->view('Dashboard/categories/add_category');

    }

    function AddCategory(){
 
        $category=new Category();
        $imageName="";
        $category->name=$_POST['category_name'];
        $uploadError = false;
                    if(!empty($_FILES['image']['name'])) {
                        $uploader = new FileUpload($_FILES['image']);
                        try {
                            $uploader->upload();
                            $imageName = $uploader->getFileName();
                        } catch (\Exception $e) {
                            $uploadError = true;
                        }
                    }

        $category->image=$imageName!=null?$imageName:"default.png";
        $category->created_by=1;
        $category->is_active=$_POST['is_active'];

        $category->save();
        $this->view('Dashboard/categories/add_category');

    }
    function edit(){
        echo 'hello';

    }
    function update(){

    }
    public function remove(){

    }

    




}