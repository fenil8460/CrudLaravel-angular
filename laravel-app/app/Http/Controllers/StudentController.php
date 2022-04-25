<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use App\Traits\ResponseAPI;

class StudentController extends Controller
{
    use ResponseAPI;
    //
    public function index(){
        $data = Student::all();
        if(count($data)>0){
            return $this->success($data);
        }else{
            return $this->error('Data not found',404);
        }
    }
}
