<?php
if ($_POST["submit"]) {
	$name = $_POST['name'];
	$email = $_POST['_replyto'];
	$message = $_POST['message'];
	$to = 'iamnihargarg@outlook.com';
	$subject = 'Website Contact Form';

	$body = "From: $name ($email)\n\n Message:\n$message";

    mail ($to, $subject, $body, "From: $name <$email>");
}
?>