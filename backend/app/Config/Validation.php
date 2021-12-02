<?php

namespace Config;

use CodeIgniter\Validation\CreditCardRules;
use CodeIgniter\Validation\FileRules;
use CodeIgniter\Validation\FormatRules;
use CodeIgniter\Validation\Rules;

use \App\Validation\LoginRules;

class Validation
{
    //--------------------------------------------------------------------
    // Setup
    //--------------------------------------------------------------------

    /**
     * Stores the classes that contain the
     * rules that are available.
     *
     * @var string[]
     */
    public $ruleSets = [
        Rules::class,
        FormatRules::class,
        FileRules::class,
        CreditCardRules::class,
        LoginRules::class
    ];

    /**
     * Specifies the views that are used to display the
     * errors.
     *
     * @var array<string, string>
     */
    public $templates = [
        'list'     => 'CodeIgniter\Validation\Views\list',
        'single'   => 'CodeIgniter\Validation\Views\single'
    ];

    //--------------------------------------------------------------------
    // Rules
    //--------------------------------------------------------------------
    
    // search rules
    public $search_rule = [
        's' => [
            'rules' => 'required'
        ]
    ];

    // login rules
    public $login = [
        'username' => [
            'label' => 'Email',
            'rules' => 'required|verify_email[username]|verify_account[username,pass]',
            'errors' => [
                'verify_email'   => 'The Email is invalid',
                'verify_account' => 'The Account is still inactive.'
            ]
        ],
        'password' => [
            'label' => 'Password',
            'rules' => 'required|verify_pass[pass]|login_attempt',
            'errors' => [
                'verify_pass' => 'The Password is invalid'
            ]
        ]
    ];

    // signup rules
    public $signup = [
        'fname' => [
            'label' => 'First Name',
            'rules' => 'required'
        ],
        'lname' => [
            'label' => 'Last Name',
            'rules' => 'required'
        ],
        'role' => [
            'label' => 'Role',
            'rules' => 'required'
        ],
        'email' => [
            'label' => 'Email',
            'rules' => 'required|valid_email|is_unique[admins.email]',
            'errors' => [
                'is_unique' => 'The Email has already been taken.'
            ]
        ],
        'password' => [
            'label' => 'Password',
            'rules' => 'required'
        ],
        'passconf' => [
            'label' => 'Password Confirmation',
            'rules' => 'required|matches[password]'
        ],      
    ];

    // create career rules
    public $career_rules = [
        'job' => [
            'label' => 'Job',
            'rules' => 'required'
        ],
        'j_type' => [
            'label' => 'Job Type',
            'rules' => 'required'
        ],
        'loc' => [
            'label' => 'Localation',
            'rules' => 'required'
        ],
        'desc' => [
            'label' => 'Job Description',
            'rules' => 'required'
        ],
        'salary' => [
            'label' => 'Salary range',
            'rules' => 'required'
        ],
    ];

    // create career rules
    public $announcement_rules = [
        'content' => [
            'rules'  => 'required',
            'errors' => [
                'required' => 'Please Enter some text here.'
            ]
        ],
    ];

    // create career rules
    public $archive_rules = [
        'file' => [
            'label' => 'File Attachment',
            'rules' => 'uploaded[file]|ext_in[file,pdf]',
            'errors' => [
                'ext_in' => 'Please upload a pdf file here.'
            ]
        ],
        'title' => [
            'label' => 'Research Title',
            'rules' => 'required',
        ],
        'desc' => [
            'rules'  => 'required',
            'errors' => [
                'required' => 'Please Enter some text here.'
            ]
        ],
    ];    
}
