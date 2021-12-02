<?php

namespace App\Models;

use CodeIgniter\Model;

class IndustryModel extends Model {
  protected $table      = 'industry';
  protected $primaryKey = 'occupation_id';

  protected $allowedFields = [
    'occupation',
  ];
}