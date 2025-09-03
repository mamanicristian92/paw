<html>
    <head>
        <!-- <meta charset="UTF-8"> -->
        <title>Ejercicio: Conexión a Base de Datos</title>
    </head>
    <body>
        <h2>EJERCICIO: CONEXIÓN A BASE DE DATOS</h2><br>
        <h3>Conectando a base de datos...</h3>
        <?php
            $mysqli = new mysqli("localhost", "root", "", "prueba");
            if(!$mysqli) {
                echo "<br>error de conexion<br>";
            }
            else {
                echo "<b>".$mysqli->host_info."<b>";
                $name="'Carlos'";
                $dni=15046783;
                $mysqli->query("INSERT INTO personas(nombre,dni) VALUES (".$name.",".$dni.")");
            }
        ?>
    </body>
</html>