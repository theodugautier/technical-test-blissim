<?php
  include_once('user/user.php');

  header("Access-Control-Allow-Origin: http://localhost:3000");
  header('Access-Control-Allow-Headers: Content-Type; Access-Control-Allow-Origin; Set-Cookie; ');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Credentials: true');
  header('access-control-expose-headers: Set-Cookie');
  
  echo json_encode([]);
  // session_start();

  // if (!isset($_SESSION["users"])) {
  //   $_SESSION["users"] = array();
  // }

  // http_response_code(200);
  // echo json_encode($_SESSION["users"]);
  