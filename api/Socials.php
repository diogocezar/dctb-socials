<?php
	@session_start();
	include('./vendor/autoload.php');

	use Abraham\TwitterOAuth\TwitterOAuth;

	use Facebook\FacebookSession;
	use Facebook\FacebookRequest;
	use Facebook\GraphUser;
	use Facebook\FacebookRequestException;

	class Socials{

		/**
		* Curl
		*/

		public function _curl($url){
			$ch      = curl_init();
			$options = array(
			    CURLOPT_URL            => $url,
			    CURLOPT_RETURNTRANSFER => true,
			    CURLOPT_HEADER         => false,
			    CURLOPT_ENCODING       => "",
			    CURLOPT_AUTOREFERER    => true,
			    CURLOPT_CONNECTTIMEOUT => 120,
			    CURLOPT_TIMEOUT        => 120,
			    CURLOPT_MAXREDIRS      => 10,
			    CURLOPT_SSL_VERIFYPEER => false
			);
			curl_setopt_array($ch, $options);
			$query = curl_exec($ch); 
			$http_status = curl_getinfo($ch, CURLINFO_HTTP_CODE);	
			curl_close($ch);
			return $query;
		}

		/**
		* Facebook
		*/

		public function get_facebook($page, $limit){
			FacebookSession::setDefaultApplication(FB_APP_ID,FB_SECRET);
			$session = new FacebookSession(FB_TOKEN);
			try {
				$request = new FacebookRequest($session, 'GET', '/'.$page.'/feed?limit='.($limit+1));
				$response = $request->execute();
				$content = $response->getGraphObject()->asArray();
				return $content;
			} catch (FacebookRequestException $e) {
			} catch (\Exception $e) {
			}
		}

		/**
		* Twitter
		*/

		public function get_twitter($page, $limit){
			$tw = new TwitterOAuth(TW_CONSUMER_KEY, TW_CONSUMER_SECRET, TW_ACCESS_TOKEN, TW_ACCESS_TOKEN_SECRET);
			$params = array(
			    'screen_name' => $page,
			    'count' => $limit,
			    'exclude_replies' => true
			);
			$result = $tw->get('statuses/user_timeline', $params);
			return $result;
		}

		/**
		* Flickr
		*/

		public function get_flickr($page){
			$fl_url = "https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=4ef2fe2affcdd6e13218f5ddd0e2500d&user_id=" . FL_USER_ID . "&format=json";
			$result = $this->_curl($fl_url);
			$result = str_replace("jsonFlickrApi(", "", $result);
			$result = rtrim($result, ")");
			return $result;
		}

		/**
		* Youtube
		*/

		public function get_youtube($page, $limit){
			$yt_url = "http://gdata.youtube.com/feeds/api/users/" . $page . "/uploads/?v=2&max-results=" . $limit . "&alt=jsonc&orderby=published";
			$result = $this->_curl($yt_url);
			return $result;
		}

		/**
		* Instagram
		*/

		public function get_instagram($page, $limit){
			$in_url = "https://api.instagram.com/v1/users/" . $page . "/media/recent/?access_token=" . IN_ACCESS_TOKEN . "&count=" . $limit;
			$result = $this->_curl($in_url);
			return $result;
		}

		/**
		* Get
		*/

		public function _get($option, $page, $limit){
			$get_from_cache = "false";
			switch($option){
				case "facebook"  : $filename = CACHE_DIR . CACHE_FB; $hours = HOURS_CACHE_FB; break;
				case "twitter"   : $filename = CACHE_DIR . CACHE_TW; $hours = HOURS_CACHE_TW; break;
				case "flickr"    : $filename = CACHE_DIR . CACHE_FL; $hours = HOURS_CACHE_FL; break;
				case "youtube"   : $filename = CACHE_DIR . CACHE_YT; $hours = HOURS_CACHE_YT; break;
				case "instagram" : $filename = CACHE_DIR . CACHE_IN; $hours = HOURS_CACHE_IN; break;
			}
			if(ENABLE_CACHE == "true"){
				$created_at = $this->get_created_at($option);
				$date_now = date_create('now');
				$date_created_at = date_create($created_at);
				$interval = date_diff($date_now, $date_created_at);
				$get_from_cache = "true";
				if($interval->h > $hours || $interval->d >= 1){
					$get_from_cache = "false";
				}
				if(!is_file($filename)){
					$get_from_cache = "false";
				}
			}
			if($get_from_cache == "true"){
				$return = $this->get_from_cache($option);
			}
			else{
				switch($option){
					case "facebook"  : $return = json_encode($this->get_facebook($page, $limit));  break;
					case "twitter"   : $return = json_encode($this->get_twitter($page, $limit));   break;
					case "flickr"    : $return = $this->get_flickr($page);                         break;
					case "youtube"   : $return = $this->get_youtube($page, $limit);                break;
					case "instagram" : $return = $this->get_instagram($page, $limit);              break;
				}
			}
			if(ENABLE_CACHE == "true"){
				if($get_from_cache == "false"){
					$this->save_cache($option, $return);
				}
			}
			return $return;
		}

		/**
		* Echo
		*/

		public function _echo($option, $page, $limit=LIMIT){
			echo $this->_get($option, $page, $limit);
		}

		/**
		* Cache
		*/

		public function get_from_cache($option){
			switch($option){
				case "facebook"  : $filename = CACHE_DIR . CACHE_FB; $cache_option = "cache_fb"; break;
				case "twitter"   : $filename = CACHE_DIR . CACHE_TW; $cache_option = "cache_tw"; break;
				case "flickr"    : $filename = CACHE_DIR . CACHE_FL; $cache_option = "cache_fl"; break;
				case "youtube"   : $filename = CACHE_DIR . CACHE_YT; $cache_option = "cache_yt"; break;
				case "instagram" : $filename = CACHE_DIR . CACHE_IN; $cache_option = "cache_in"; break;
			}
			$doc = new DOMDocument("1.0", "utf-8");
			$doc->load($filename);
			$socials_cache = $doc->getElementsByTagName("socials_cache");
			foreach($socials_cache as $cache){
				$cache_in      = $cache->getElementsByTagName($cache_option);
				$cache_value   = $cache_in->item(0)->nodeValue;
			}
			return $cache_value;
		}

		public function get_created_at($option){
			switch($option){
				case "facebook"  : $filename = CACHE_DIR . CACHE_FB; $cache_option = "cache_fb"; break;
				case "twitter"   : $filename = CACHE_DIR . CACHE_TW; $cache_option = "cache_tw"; break;
				case "flickr"    : $filename = CACHE_DIR . CACHE_FL; $cache_option = "cache_fl"; break;
				case "youtube"   : $filename = CACHE_DIR . CACHE_YT; $cache_option = "cache_yt"; break;
				case "instagram" : $filename = CACHE_DIR . CACHE_IN; $cache_option = "cache_in"; break;
			}
			if(file_exists($filename)){
				$doc = new DOMDocument("1.0", "utf-8");
				$doc->load($filename);
				$socials_cache = $doc->getElementsByTagName("socials_cache");
				foreach($socials_cache as $cache){
					$created_at       = $cache->getElementsByTagName("created_at");
					$created_at_value = $created_at->item(0)->nodeValue;
				}
				return $created_at_value;
			}
			else{
				return false;
			}
		}

		public function save_cache($option, $value){
			switch($option){
				case "facebook"  : $filename = CACHE_DIR . CACHE_FB; $cache_option = "cache_fb"; break;
				case "twitter"   : $filename = CACHE_DIR . CACHE_TW; $cache_option = "cache_tw"; break;
				case "flickr"    : $filename = CACHE_DIR . CACHE_FL; $cache_option = "cache_fl"; break;
				case "youtube"   : $filename = CACHE_DIR . CACHE_YT; $cache_option = "cache_yt"; break;
				case "instagram" : $filename = CACHE_DIR . CACHE_IN; $cache_option = "cache_in"; break;
			}
			$date = date_create('now');
			$now  = date_format($date, 'Y-m-d H:i:s');
			$xml  = new DOMDocument("1.0", "utf-8");
			$root = $xml->createElement("socials_cache");
			$xml->appendChild($root);
			$created_at       = $xml->createElement("created_at");
			$created_at_value = $xml->createTextNode($now);
			$created_at->appendChild($created_at_value);
			$cache = $xml->createElement($cache_option);
			$cache_value = $xml->createTextNode($value);
			$cache->appendChild($cache_value);
			$root->appendChild($cache);
			$root->appendChild($created_at);
			$xml->formatOutput = true;
			$xml->save($filename) or die("Erro ao gerar cache.");
		}
	}
?>