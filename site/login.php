<?php
session_start();

// Configurações do banco de dados
$host = 'localhost';
$dbname = 'sistema_login';
$username_db = 'root';  // Altere conforme suas credenciais
$password_db = '';      // Altere conforme necessário

// Conectar ao banco de dados
try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username_db, $password_db);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erro de conexão: " . $e->getMessage());
}

// Processar o login
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = md5($_POST['password']);  // Usando MD5 para fins de exemplo (use bcrypt em produção)

    // Verificar se o usuário existe no banco de dados
    $stmt = $conn->prepare("SELECT * FROM usuarios WHERE username = :username AND password = :password");
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':password', $password);
    $stmt->execute();

    // Se o login for bem-sucedido, redirecionar o usuário para a página protegida
    if ($stmt->rowCount() > 0) {
        $_SESSION['username'] = $username;
        header("Location: pagina1.php");
        exit();
    } else {
        echo "Usuário ou senha incorretos.";
    }
}
