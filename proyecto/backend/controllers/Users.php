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
        if (isset($_GET['id'])) {
            try {
                $data = $user->getUserById($_GET['id']);
                if ($data) {
                    sendResponse(200, "Usuario obtenido", $data);
                } else {
                    sendResponse(404, "Usuario no encontrado");
                }
            } catch (Exception $e) {
                sendResponse(500, "Error al obtener el usuario: " . $e->getMessage());
            }
        } else {
            sendResponse(400, "ID no proporcionado");
        }
        break;

    case 'POST':
        try {
            if (empty($body['id']) ||
                empty($body['nombre']) ||
                empty($body['apellidos']) ||
                empty($body['ciudad']) ||
                empty($body['estado']) ||
                empty($body['password']) ||
                empty($body['email'])) {
                    sendResponse(400, "Datos de entrada inválidos");
            }
            $data = $user->createUser(
                        $body['id'],
                        $body['nombre'],
                        $body['apellidos'],
                        $body['ciudad'],
                        $body['estado'],
                        $body['password'],
                        $body['email']
                    );
            sendResponse(201, "Usuario creado");
        } catch (Exception $e) {
            sendResponse(500, "4 Error al crear el usuario: " . $e->getMessage());
        }
        break;

    case 'PUT':
        try {
            if (empty($body['id']) ||
                empty($body['nombre']) ||
                empty($body['apellidos']) ||
                empty($body['ciudad']) ||
                empty($body['estado']) ||
                empty($body['password']) ||
                empty($body['email'])) {
                    sendResponse(400, "Datos de entrada inválidos");
            }
            $data = $user->updateUser(
                        $body['id'],
                        $body['nombre'],
                        $body['apellidos'],
                        $body['ciudad'],
                        $body['estado'],
                        $body['password'],
                        $body['email']
                    );
            sendResponse(200, "Usuario actualizado", $data);
        } catch (Exception $e) {
            sendResponse(500, "Error al actualizar el usuario: " . $e->getMessage());
        }
        break;

    case 'DELETE':
        if (isset($_GET['id'])) {
            try {
                $data = $user->deleteUser($_GET['id']);
                sendResponse(200, "Usuario eliminado", $data);
            } catch (Exception $e) {
                sendResponse(500, "Error al eliminar el usuario: " . $e->getMessage());
            }
        } else {
            sendResponse(400, "ID no proporcionado");
        }
        break;

    default:
        sendResponse(405, "Método no permitido");
        break;
}
?>