<?php

namespace App\Models;

use CodeIgniter\Model;

class AdminArchivePostModel extends Model
{
  protected $table      = 'admin_archive_posts';
  protected $primaryKey = 'admin_archive_post_id';
  protected $returnType = 'array';

  protected $allowedFields = [
    'admin_id',
    'posted_at',
    'archive_id'
  ];
}
