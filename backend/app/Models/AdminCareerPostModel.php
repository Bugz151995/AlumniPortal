<?php

namespace App\Models;

use CodeIgniter\Model;

class AdminCareerPostModel extends Model {
  protected $table      = 'admin_career_posts';
  protected $primaryKey = 'post_id';
  protected $returnType = 'array';

  protected $allowedFields = [
    'admin_id', 
    'career_id', 
    'created_at'
  ];
  
}