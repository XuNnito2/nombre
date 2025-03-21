<?php
// Crear una cookie llamada "usuario" con el valor "XuNnito"
// Expira en 1 hora (3600 segundos)
setcookie("usuario", "XuNnito", time() + 3600, "/");

// Verificar si la cookie está creada
if(isset($_COOKIE["usuario"])) {
    echo "Hola, " . $_COOKIE["usuario"] . "! Bienvenido de nuevo.";
} else {
    echo "No hay cookies disponibles.";
}
?>
