<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;

class Industry extends ResourceController
{
  protected $modelName = 'App\Models\IndustryModel';
  protected $format = 'json';
  
  /**
   * Method index
   *
   * @return string JSON
   */
  public function index()
  {
    $posts = $this->model->findAll();
    return $this->respond($posts);
  }
}