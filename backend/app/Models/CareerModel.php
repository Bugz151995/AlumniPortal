<?php

namespace App\Models;

use CodeIgniter\Model;

class CareerModel extends Model {
  protected $table      = 'careers';
  protected $primaryKey = 'career_id';
  protected $returnType = 'array';

  protected $allowedFields = [
    'industry', 
    'location', 
    'job_description', 
    'salary_range', 
    'salary_type', 
    'job_type', 
    'photo'
  ];

  public function getCareers() {
    return $this->select('careers.career_id, fname, lname, role_name, admin_career_posts.created_at, industry, location, job_description, salary_range, job_type, salary_type')
                ->join('admin_career_posts', 'admin_career_posts.career_id = careers.career_id')
                ->join('admins', 'admins.admin_id = admin_career_posts.admin_id');
  }

  /**
   * Get a specifi career list.
   *
   * @param array $data
   * @return object
   */
  public function search($data) {
    return $this->select('careers.career_id, fname, lname, role_name, admin_career_posts.created_at, industry, location, job_description, salary_range, job_type, salary_type')
                ->join('admin_career_posts', 'admin_career_posts.career_id = careers.career_id')
                ->join('admins', 'admins.admin_id = admin_career_posts.admin_id')
                ->like($data);
  }
}