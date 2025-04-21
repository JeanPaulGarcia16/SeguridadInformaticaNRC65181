<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type: application/json');

require_once "../config/DbConn.php";
require_once("../models/User.php");

$user = new User;

function sendResponse($code, $message, $data = null) {
    http_response_code($code);
    echo json_encode(['message' => $message, 'data' => $data]);
    exit;
}

$body = json_decode(file_get_contents("php://input"), true);

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'OPTIONS':
        // Manejar solicitudes preflight
        header('HTTP/1.1 204 No Content');
        exit;

    case 'GET':
        sendResponse(400, "Método GET");
    break;

    case 'POST':        
        try {
            if (empty($body['id']) ||
                empty($body['password'])) {
                    sendResponse(400, "Datos de entrada inválidos. ID vacío");
            }
            $data = $user->loginUser(
                        $body['id'],
                        $body['password']
                    );
            sendResponse(200, "UCredenciales correctas", $data);
        } catch (Exception $e) {
            sendResponse(500, "Error: Credenciales incorrectas" . $e->getMessage());
        }
        break;
}
?>