<?php 

namespace App\Controllers;

use Codeigniter\API\ResponseTrait;

use \App\Models\AdminModel;

class Signup extends BaseController
{
  use ResponseTrait;
  
  /**
   * Method index
   *
   * Inserts the registration of the admin.
   * 
   * @return mixed
   */
  public function index(){
    helper('form');

    if (!$this->validate($this->validation->getRuleGroup('signup'))) {
      return $this->fail($this->validator->getErrors());
    } else {
      $admin_model = new AdminModel();

      $data = [
        'fname'    => $this->request->getVar('fname'),
        'lname'    => $this->request->getVar('lname'),
        'role'     => $this->request->getVar('role'),
        'email'    => $this->request->getVar('email'),
        'password' => $this->request->getVar('password')
      ];

      $admin_id = $admin_model->insert($data);
      $data['id'] = $admin_id;
      unset($data['password']);

      return $this->respondCreated($data);
    }        
  }
}