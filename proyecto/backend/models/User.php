<?php
class User {
    private $conn;

    public function __construct() {
        $this->conn = DbConn::connection();
    }

    public function getUserById($id) {
        $stmt = $this->conn->prepare("SELECT * FROM users WHERE id = ?");
        $stmt->execute([$id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function createUser($id, $nombre, $apellidos, $ciudad, $estado, $password, $email) {
        $stmt = $this->conn->prepare("INSERT INTO users (id, name, last_name, city, state, password, email) VALUES (?, ?, ?, ?, ?, ?, ?)");
        $stmt->execute([$id, $nombre, $apellidos, $ciudad, $estado, $password, $email]);
        return $this->conn->lastInsertId();
    }

    public function updateUser($id, $nombre, $apellidos, $ciudad, $estado, $password, $email) {
        $stmt = $this->conn->prepare("UPDATE users SET nombre = ?, apellidos = ?, ciudad = ?, estado = ?, password = ?, email = ? WHERE id = ?");
        $stmt->execute([$id, $nombre, $apellidos, $ciudad, $estado, $password, $email]);
        return $stmt->rowCount();
    }

    public function deleteUser($id) {
        $stmt = $this->conn->prepare("DELETE FROM users WHERE id = ?");
        $stmt->execute([$id]);
        return $stmt->rowCount();
    }

    public function loginUser($id, $password) {
        $stmt = $this->conn->prepare("SELECT * FROM users WHERE id = ? AND password = ?");
        $stmt->execute([$id, $password]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
    
}
?>