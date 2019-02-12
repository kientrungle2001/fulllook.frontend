<?php
session_start();
define('FL_API_URL', 'http://api2.nextnobels.com');
define('FL_URL', 'http://' . $_SERVER['HTTP_HOST']);
$iPad    = stripos($_SERVER['HTTP_USER_AGENT'],"iPad");
if($iPad) {
	header('Location: http://s1.nextnobels.com');
}
