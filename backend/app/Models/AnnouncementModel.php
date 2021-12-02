<?php

namespace App\Models;

use CodeIgniter\Model;

class AnnouncementModel extends Model {
  protected $table      = 'announcements';
  protected $primaryKey = 'announcement_id';
  protected $returnType = 'array';

  protected $allowedFields = [
    'content',
    'image', 
    'admin_id', 
    'posted_at'
  ];

  /**
   * Get announcement list.
   *
   * @return object
   */
  public function getAnnouncements() {
    return $this->select('announcement_id, content, fname, lname, role_name, image, posted_at')
                ->join('admins', 'admins.admin_id = announcements.admin_id')
                ->orderBy('posted_at', 'DESC');
  }

  /**
   * Get announcement list.
   *
   * @param array $data
   * @return object
   */
  public function search($data) {
    return $this->select('announcement_id, content, fname, lname, role_name, image, posted_at')
                ->join('admins', 'admins.admin_id = announcements.admin_id')
                ->like('fname', $data['fname'])
                ->orlike('lname', $data['lname'])
                ->orderBy('posted_at', 'DESC');
  }
}