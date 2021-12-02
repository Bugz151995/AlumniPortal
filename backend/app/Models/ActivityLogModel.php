<?php

namespace App\Models;

use CodeIgniter\Model;

class ActivityLogModel extends Model
{
  protected $table      = 'admin_activity_log';
  protected $primaryKey = 'activity_id';
  protected $returnType = 'array';

  protected $allowedFields = [
    'activity_type',
    'admin_id',
    'time_log'
  ];
}
