<?php

namespace App\Controllers;

use Codeigniter\API\ResponseTrait;

use \App\Models\AdminModel;

class Login extends BaseController
{
  use ResponseTrait;

  /**
   * Method index
   *
   * authenticate user account
   * 
   * @return mixed
   */
  public function index()
  {
    helper('form');

    if (!$this->validate($this->validation->getRuleGroup('login'))) {
      return $this->fail($this->validator->getErrors());
    } else {
      $response = [
        'success' => 'Login Successful!'
      ];

      return $this->respond($response, 200);
    }    
  }
}
