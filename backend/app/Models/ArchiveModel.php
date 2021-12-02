<?php

namespace App\Models;

use CodeIgniter\Model;

class ArchiveModel extends Model {
  protected $table      = 'archive';
  protected $primaryKey = 'archive_id';
  protected $returnType = 'array';

  protected $allowedFields = [
    'title', 
    'description', 
    'file', 
    'publish_at', 
    'upload_at', 
    'alumni_id'
  ];

  /**
   * Get a specific archive.
   *
   * @param array $data
   * @return object
   */
  public function search($data) {
    return $this->select('*')
                ->join('admins', 'admins.admin_id = announcements.admin_id')
                ->like($data);
  }
}