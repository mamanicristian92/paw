<html>
    <head>
        <meta charset="UTF-8">
        <title>Enviando email</title>
    </head>
    <body>
        <h1>Enviando email...</h1>
        <br>
        <?php
            use PHPMailer\PHPMailer\PHPMailer;
            use PHPMailer\PHPMailer\Exception;

            require 'vendor/autoload.php'; // Ajuste la ruta según sea necesario si no está usando Composer

            $mail = new PHPMailer(true);
            try {
                //Server settings
                $mail->isSMTP();                                            // Enviar usando SMTP
                /* $mail->Host       = 'sandbox.smtp.mailtrap.io';             // Configura el servidor SMTP para enviar
                $mail->SMTPAuth   = true;                                   // Habilitar autenticación SMTP
                $mail->Username   = '062dd205eef589';                       // Usuario SMTP
                $mail->Password   = '7b4e0fdf744ae3';                       // Contraseña SMTP
                $mail->SMTPSecure = 'tls';                                  // Habilitar encriptación TLS
                $mail->Port       = 2525;                                    // Puerto TCP para conectar */

                //mailsender
                $mail->Host       = 'smtp.gmail.com';             // Configura el servidor SMTP para enviar
                $mail->SMTPAuth   = true;                                   // Habilitar autenticación SMTP
                $mail->Username   = 'mamanicristian92@gmail.com';                       // Usuario SMTP
                $mail->Password   = 'aoew fwso isxt iksb';                       // Contraseña SMTP
                $mail->SMTPSecure = 'tls';                                  // Habilitar encriptación TLS
                $mail->Port       = 587;                                    // Puerto TCP para conectar


                // Configuración de remitente y destinatario
                $mail->setFrom('desde@ejemplo.com',$_POST['name']);
                $mail->addAddress($_POST['destinatario'], $_POST['destinatario']);
                // Enviando email de texto plano
                $mail->isHTML(false); // Establecer formato de email a texto plano
                $mail->Subject = 'Asunto: '.$_POST['asunto'];
                $mail->Body    = 'Mensaje: '.$_POST['message'];
                // Enviar el email
                if(!$mail->send()){
                    echo 'El mensaje no pudo ser enviado. Error de Mailer: ' . $mail->ErrorInfo;
                } else {
                    echo 'El mensaje ha sido enviado';
                }
            } catch (Exception $e) {
                echo "No se pudo enviar el mensaje. Error de Mailer: {$mail->ErrorInfo}";
            }
        ?>
    </body>
</html>