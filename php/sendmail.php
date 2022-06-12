<?php

$to = 'test-wj4l2ps3q@srv1.mail-tester.com';
$subject = 'This is a test email';
$message = 'Hello john!';
$from = 'reacties@handboek-html-css.nl';

$headers = sprintf("From: %s\r\nReply-To: %s", $from, $from);

mail($to, $subject, $message, $headers);

?>