<?php
	include('../config/config.php');
	include('Socials.php');
	if(!empty($_GET['option'])){
		$option = $_GET['option'];
			if(empty($option))
				exit();
	}
	else{
		exit();
	}
	$socials = new Socials();
	switch($option){
		case 'facebook':
			$socials->_echo("facebook", FB_USER_ID);
		break;
		case 'twitter':
			$socials->_echo("twitter", TW_USER_ID);
		break;
		case 'instagram':
			$socials->_echo("instagram", IN_USER_ID);
		break;
		case 'youtube':
			$socials->_echo("youtube", YT_USER_ID);
		break;
		case 'flickr':
			$socials->_echo("flickr", FL_USER_ID);
		break;
	}
?>