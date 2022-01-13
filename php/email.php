<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require __DIR__.'/vendor/PHPMailer/src/Exception.php';
require __DIR__.'/vendor/PHPMailer/src/PHPMailer.php';
require __DIR__.'/vendor/PHPMailer/src/SMTP.php';

$data = [];
foreach($_POST as $key => $value) {
    $data[$key] = htmlspecialchars($value);
}

header('Content-Type: application/json');
echo json_encode($data);