<?php

namespace App\Validation;

use App\Models\AdminModel;

class LoginRules {
  public function verify_email(string $str, string $fields, array $data) : bool {
    $a_model = new AdminModel();

    $admin = $a_model->where('email', $data['username'])->first();

    return (!$admin) ? FALSE : TRUE;
  }

  public function verify_account(string $str, string $fields, array $data) : bool {
    $a_model = new AdminModel();

    $admin = $a_model->where('email', $data['username'])->first();

    // it checks the status of the account and validates for password.
    // if status is activated, and possess a correct password, then send a toast.
    if ($admin && $admin['email_verified'] == 1) {  
      if (password_verify($data['password'], $admin['password'])) {  
        session()->set('admin_id', $admin['admin_id']);
        session()->set('admin_type', $admin['role_type']);
      }
      
      return TRUE;
    } else { 
      return FALSE;
    }
  }

  public function verify_pass(string $str, string $fields, array $data) : bool {
    $a_model = new AdminModel();

    $admin = $a_model->where('email', $data['username'])->first();

    return (!$admin) ? FALSE : password_verify($data['password'], $admin['password']);
  }

  public function login_attempt(string $str) {
    $throttler = \Config\Services::throttler();
    $allow = $throttler->check('login', 3, MINUTE);

    return $allow;
  }
}