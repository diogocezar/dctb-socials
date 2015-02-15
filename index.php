<?php
	include('./config/config.php');
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <title>Socials</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width,initial-scale=1">
	<meta name="description" content="Socials" />
    <meta name="keywords" content="php, ajax, javascript, social networks, script, literal object, jquery" />
    <link href="images/favicon.png" rel="icon" type="image/png" />
    <link rel="stylesheet" href="css/resets.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/emoticons.css"/>
    <link href='http://fonts.googleapis.com/css?family=Dancing+Script' rel='stylesheet' type='text/css'>
    <script src="js/jquery.js"></script>
    <script src="js/emoticons.js"></script>
    <script src="js/socials.js">
		Socials.user_id_flickr = '<?php echo FL_USER_ID ?>';
    </script>
</head>
<body>
	<div class="top-bend">
		<div class="content">
			<h1>Socials</h1>
		</div>
	</div>
	<div id="main-bend" class="content">
		<div id="buttons">
			<div id="facebook" class="action"></div>
			<div id="twitter" class="action"></div>
			<div id="instagram" class="action"></div>
			<div id="youtube" class="action"></div>
			<div id="flickr" class="action"></div>
		</div>
		<div id="socials">Choose an option.</div>
	</div>
	<div id="instructions" class="content">
		<h1 class="title">Download</h1>
		<a href="https://github.com/diogocezar/dctb-socials"><div id="download" class="action"><span class="socials">Download Socials (GitHub)</span></div></a>
	</div>
</body>
</html>