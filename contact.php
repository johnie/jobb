<?php

$crlf = "\r\n";

// Blank message to start with so we can append to it.
$message = '';

// Check that name & email aren't empty.
if(empty($_POST['name']) || empty($_POST['email'])){
    die('Please ensure name and email are provided.');
}

// Construct the message
$message .= <<<TEXT
    Namn: {$_POST['name']}
    Email: {$_POST['email']}
    Tel: {$_POST['phone']}
    Meddelande: {$_POST['message']}
TEXT;

// Email to send to
$to = 'jobb@johnie.se';

// Email Subject
$subject = 'Jobbansökan!';

// Name to show email from
$from = $_POST['name'];

// Domain to show the email from
$fromEmail = $_POST['email'];

// Construct a header to send who the email is from
$header = 'From: ' . $from . $crlf .
          'Reply-To: ' . $fromEmail  . $crlf .
          'Content-Type: text/plain; charset=UTF-8' .  $crlf .
          'Para: WebSite'  .  $crlf .
          'X-Mailer: PHP/' . phpversion();

// Try sending the email
if(!mail($to, $subject, $message, $header)){
    die('Oj, något gick fel. Försök igen!');
}else{
    die('Skickat! Vi hör av oss så snart som möjligt.');
}
