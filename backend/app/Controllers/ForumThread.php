<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;

class ForumThread extends ResourceController
{
  protected $modelName = 'App\Models\ForumThreadModel';
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