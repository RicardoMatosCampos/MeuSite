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
    <title>Página 2</title>
</head>
<body>
    <h1>Bem-vindo à Página 2, <?php echo $_SESSION['username']; ?>!</h1>
    <a href="pagina3.php">Ir para Página 3</a><br>
    <a href="logout.php">Sair</a>
</body>
</html>
