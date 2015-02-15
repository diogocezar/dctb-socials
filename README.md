#Socials#

Social is a helper to provide informations from the following social networks:

* Facebook
* Twitter
* Instagram
* Youtube
* Flickr

##What is Socials?##

This is a helper. With socials, you can include social feed in your page through JQuery Ajax method.

Thinking in flood calls to servers, i created a cache system, that stores in a xml file the last JSON recovered from social server as least N hours.

After that, the next client that connect to server, refresh the XML file with new informations.

I replaced the hashtags, links and mentions.

Also have a smile icons system, that replace the icons posted at social medias.

##Technologies##

The system was developed based at 

* PHP
* JavaScript
* Ajax
* JQuery 2.x and 
* Literal Object.

##Usage##

To use socials, just replace your socials tokens at file _config/config.php_

Since the config file was filled, you can customise the JavaScript file _js/socials.js_ to put the informations in your website as you like.

The _ajax.php_ file, is the caller of methods developed at _Socials_ class.

All the core system are in _socials.php_

##Other##

* The _cache_ folder stores the xml files;
* _css_ folder contains some css to customize this example, if you want to preserve emoticons system, dont forget to include emoticons.css;
* The _images_ folder contais the buttons and emoticons images;
