<?php
    include_once('user/user.php');

    header("Access-Control-Allow-Origin: http://localhost:3000");
    header('Access-Control-Allow-Headers: Content-Type; Access-Control-Allow-Origin; Set-Cookie; ');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Credentials: true');
    header('access-control-expose-headers: Set-Cookie');
    session_start();
    
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);

    if( empty($_POST['name']) || empty($_POST['age']) ) {
        http_response_code(400);
        echo json_encode(
            [
                "message" => "age or name is not filled in",
            ]
        ); 
        exit();
    }

    if ($_POST) {
      $name = $_POST['name'];
      $age = $_POST['age'];
      $newUser = new User($name, $age);

      if (!isset($_SESSION["users"])) {
        $_SESSION["users"] = array();
      }

      array_push($_SESSION["users"], ["name" => $newUser->getName(), "age" => $newUser->getAge()]);

      http_response_code(201);
      echo json_encode($_SESSION["users"]);
    } else {
      http_response_code(500);
      echo json_encode(
        [
          "message" => "There seems to have been an error."
        ]
      );
    }