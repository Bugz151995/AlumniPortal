<?php

namespace App\Models;

use CodeIgniter\Model;

class ForumThreadModel extends Model {
  protected $table      = 'forum_threads';
  protected $primaryKey = 'forum_thread_id';

  protected $allowedFields = [
    'topic', 
    'created_at', 
    'status', 
    'alumni_id'
  ];
}