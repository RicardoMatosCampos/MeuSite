<?php
session_start();
if (!isset($_SESSION['username'])) {
    header("Location: login.html");
    exit();
}
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Painel de Controle</title>
</head>
<body>
    <h1>Bem-vindo ao Painel, <?php echo $_SESSION['username']; ?>!</h1>
    <a href="logout.php">Sair</a>
</body>
</html>
