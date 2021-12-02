<?php

namespace App\Controllers;

use \App\Libraries\Oauth;
use \OAuth2\Request;
use Codeigniter\API\ResponseTrait;

class Authorize extends BaseController
{
  use ResponseTrait;

  /**
   * Method index
   *
   * authorize user create an expiring access token for the client
   * 
   * @return mixed
   */
  public function index()
  {
    $oauth = new Oauth();
    $request = new Request();
    $response = $oauth->server->handleTokenRequest($request->createFromGlobals());
    $code = $response->getStatusCode();
    $body = $response->getResponseBody();
    return $this->respond(json_decode($body), $code);
  }
}
