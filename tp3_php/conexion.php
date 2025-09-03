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
                $statement=$mysqli->prepare("INSERT INTO personas(nombre,dni) VALUES (?,?)");
                $name='Pedro';
                $dni = 39056759;
                $statement->bind_param("si", $name, $dni); // "is" significa que $id está enlazado como un integer y $label como un string
                $statement->execute();
            }
        ?>
    </body>
</html>