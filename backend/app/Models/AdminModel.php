<?php

namespace App\Models;

use CodeIgniter\Model;

class AdminModel extends Model
{
  protected $table      = 'admins';
  protected $primaryKey = 'admin_id';
  protected $returnType = 'array';

  protected $allowedFields = [
    'fname', 
    'lname', 
    'role', 
    'email', 
    'password', 
    'email_verified',
  ];

  protected $beforeInsert = ['beforeInsert'];
  protected $beforeUpdate = ['beforeUpdate'];

  /**
   * Method beforeInsert
   *
   * return the encrypted password
   * 
   * @param array $data [contains password of the admin]
   *
   * @return void
   */
  protected function beforeInsert(array $data)
  {
    $data = $this->passwordHash($data);
    return $data;
  }
 
  /**
   * Method passwordHash
   *
   * encrypt the string password using the php password_hash default
   * 
   * @param array $data [contains password of the admin]
   *
   * @return void
   */
  protected function passwordHash(array $data)
  {
    if (isset($data['data']['password']))
      $data['data']['password'] = password_hash($data['data']['password'], PASSWORD_DEFAULT);
    
    return $data;  
  }
}
