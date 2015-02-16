Socials = {

    months : ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],

    user_id_flickr:'',

    definition : {smile:{title:"Smile",codes:[":)",":=)",":-)","😍"]},"sad-smile":{title:"Sad Smile",codes:[":(",":=(",":-("]},"big-smile":{title:"Big Smile",codes:[":D",":=D",":-D",":d",":=d",":-d"]},cool:{title:"Cool",codes:["8)","8=)","8-)","B)","B=)","B-)","(cool)"]},wink:{title:"Wink",codes:["🙏",":=o",":-o",":O",":=O",":-O","😘"]},crying:{title:"Crying",codes:[";(",";-(",";=("]},sweating:{title:"Sweating",codes:["(sweat)","(:|"]},speechless:{title:"Speechless",codes:[":|",":=|",":-|"]},kiss:{title:"Kiss",codes:[":*",":=*",":-*"]},"tongue-out":{title:"Tongue Out",codes:[":P",":=P",":-P",":p",":=p",":-p"]},blush:{title:"Blush",codes:["(blush)",":$",":-$",":=$",':">']},wondering:{title:"Wondering",codes:[":^)"]},sleepy:{title:"Sleepy",codes:["|-)","I-)","I=)","(snooze)"]},dull:{title:"Dull",codes:["|(","|-(","|=("]},"in-love":{title:"In love",codes:["(inlove)"]},"evil-grin":{title:"Evil grin",codes:["]:)",">:)","(grin)"]},talking:{title:"Talking",codes:["(talk)"]},yawn:{title:"Yawn",codes:["(yawn)","|-()"]},puke:{title:"Puke",codes:["(puke)",":&",":-&",":=&"]},"doh!":{title:"Doh!",codes:["(doh)"]},angry:{title:"Angry",codes:[":@",":-@",":=@","x(","x-(","x=(","X(","X-(","X=("]},"it-wasnt-me":{title:"It wasn't me",codes:["(wasntme)"]},party:{title:"Party!!!",codes:["(party)"]},worried:{title:"Worried",codes:[":S",":-S",":=S",":s",":-s",":=s"]},mmm:{title:"Mmm...",codes:["(mm)"]},nerd:{title:"Nerd",codes:["8-|","B-|","8|","B|","8=|","B=|","(nerd)"]},"lips-sealed":{title:"Lips Sealed",codes:[":x",":-x",":X",":-X",":#",":-#",":=x",":=X",":=#"]},hi:{title:"Hi",codes:["(hi)"]},call:{title:"Call",codes:["(call)"]},devil:{title:"Devil",codes:["(devil)"]},angel:{title:"Angel",codes:["(angel)"]},envy:{title:"Envy",codes:["(envy)"]},wait:{title:"Wait",codes:["(wait)"]},bear:{title:"Bear",codes:["(bear)","(hug)"]},"make-up":{title:"Make-up",codes:["(makeup)","(kate)"]},"covered-laugh":{title:"Covered Laugh",codes:["(giggle)","(chuckle)"]},"clapping-hands":{title:"Clapping Hands",codes:["(clap)"]},thinking:{title:"Thinking",codes:["(think)",":?",":-?",":=?"]},bow:{title:"Bow",codes:["(bow)"]},rofl:{title:"Rolling on the floor laughing",codes:["(rofl)"]},whew:{title:"Whew",codes:["(whew)"]},happy:{title:"Happy",codes:["(happy)"]},smirking:{title:"Smirking",codes:["(smirk)"]},nodding:{title:"Nodding",codes:["(nod)"]},shaking:{title:"Shaking",codes:["(shake)"]},punch:{title:"Punch",codes:["(punch)"]},emo:{title:"Emo",codes:["(emo)"]},yes:{title:"Yes",codes:["(y)","(Y)","(ok)"]},no:{title:"No",codes:["(n)","(N)"]},handshake:{title:"Shaking Hands",codes:["(handshake)"]},skype:{title:"Skype",codes:["(skype)","(ss)"]},heart:{title:"Heart",codes:["(h)","<3","(H)","(l)","(L)","❤","💛","💙","💚"]},"broken-heart":{title:"Broken heart",codes:["(u)","(U)"]},mail:{title:"Mail",codes:["(e)","(m)"]},flower:{title:"Flower",codes:["(f)","(F)"]},rain:{title:"Rain",codes:["(rain)","(london)","(st)"]},sun:{title:"Sun",codes:["(sun)"]},time:{title:"Time",codes:["(o)","(O)","(time)"]},music:{title:"Music",codes:["(music)"]},movie:{title:"Movie",codes:["(~)","(film)","(movie)"]},phone:{title:"Phone",codes:["(mp)","(ph)"]},coffee:{title:"Coffee",codes:["(coffee)"]},pizza:{title:"Pizza",codes:["(pizza)","(pi)"]},cash:{title:"Cash",codes:["(cash)","(mo)","($)"]},muscle:{title:"Muscle",codes:["(muscle)","(flex)"]},cake:{title:"Cake",codes:["(^)","(cake)"]},beer:{title:"Beer",codes:["(beer)"]},drink:{title:"Drink",codes:["(d)","(D)"]},dance:{title:"Dance",codes:["(dance)","\\o/","\\:D/","\\:d/"]},ninja:{title:"Ninja",codes:["(ninja)"]},star:{title:"Star",codes:["(*)"]},mooning:{title:"Mooning",codes:["(mooning)"]},finger:{title:"Finger",codes:["(finger)"]},bandit:{title:"Bandit",codes:["(bandit)"]},drunk:{title:"Drunk",codes:["(drunk)"]},smoking:{title:"Smoking",codes:["(smoking)","(smoke)","(ci)"]},toivo:{title:"Toivo",codes:["(toivo)"]},rock:{title:"Rock",codes:["(rock)"]},headbang:{title:"Headbang",codes:["(headbang)","(banghead)"]},bug:{title:"Bug",codes:["(bug)"]},fubar:{title:"Fubar",codes:["(fubar)"]},poolparty:{title:"Poolparty",codes:["(poolparty)"]},swearing:{title:"Swearing",codes:["(swear)"]},tmi:{title:"TMI",codes:["(tmi)"]},heidy:{title:"Heidy",codes:["(heidy)"]},myspace:{title:"MySpace",codes:["(MySpace)"]},malthe:{title:"Malthe",codes:["(malthe)"]},tauri:{title:"Tauri",codes:["(tauri)"]},priidu:{title:"Priidu",codes:["(priidu)"]}},

    init: function () {
        $.emoticons.define(Socials.definition);
        $("#facebook").on("click", function () { Socials.get_social('facebook') });
        $("#twitter").on("click", function () { Socials.get_social('twitter') });
        $("#instagram").on("click", function () { Socials.get_social('instagram') });
        $("#youtube").on("click", function () { Socials.get_social('youtube') });
        $("#flickr").on("click", function () { Socials.get_social('flickr') });
    },

    format_facebook_json: function(json){
        json = json.data;
        str = "";
        str += "<ul>";
        for(var i=0;i<json.length;i++){
            if(json[i].message != undefined && json[i].message != null && json[i].message != ""){
                str += "<li class='facebook-li'>[";
                str += Socials.convert_utf(json[i].created_time);
                str += "] ";
                str += Socials.facebook_replaces(json[i].message);
                str += "</li>";
            }
        }
        str += "</ul>";
        return str;
    },

    format_twitter_json: function(json){
        str = "";
        str += "<ul>";
        for(var i=0;i<json.length;i++){
            if(json[i].text != undefined && json[i].text != null && json[i].text != ""){
                str += "<li class='twitter-li'>[";
                str += Socials.convert_utf(json[i].created_at);
                str += "] ";
                str += Socials.twitter_replaces(json[i].text);
                str += "</li>";
            }
        }
        str += "</ul>";
        return str;
    },

    format_instagram_json: function(json){
        json = json.data;
        str = "";
        str += "<ul>";
        for(var i=0;i<json.length;i++){
            if(json[i].link != undefined && json[i].link != null && json[i].link != ""){
                str += "<li>";
                if(json[i].caption != null){
                    str += "<h1 class='instagram-title'>" + json[i].caption.text + "</h1>";
                }
                str += "<div class='instagram-picture'><a href='" + json[i].link + "'><img src='" + json[i].images.low_resolution.url + "'/></a></div>";
                str += "<div class='instagram-when instagram-line'>" + Socials.convert_timestamp(json[i].created_time) + "</div>";
                str += "<div class='instagram-likes instagram-line'>Curtidas: " + json[i].likes.count + "</div>";
                str += "<div class='instagram-comments instagram-line'>Comentários: " + json[i].comments.count + "</div>";
                str += "</li>";
            }
        }
        str += "</ul>";
        return str;
    },

    format_youtube_json: function(json){
        json = json.data.items;
        str = "";
        str += "<ul>";
        for(var i=0;i<json.length;i++){
            if(json[i].title != undefined && json[i].title != null && json[i].title != "")
                str += "<li>";
                str += "<h1 class='youtube-title'>" + json[i].title + "</h1>";
                str += "<h2 class='youtube-description'>" + json[i].description + "</h2>";
                str += "<div class='youtube-picture'><a href='" + json[i].player.default + "'><img src='" + json[i].thumbnail.hqDefault + "'/></a></div>";
                str += "<div class='youtube-when youtube-line'>" + Socials.convert_ISO8601(json[i].uploaded) + "</div>";
                str += "<div class='youtube-duration youtube-line'>Duração: " + json[i].duration + "s</div>";
                str += "<div class='youtube-likes youtube-line'>Curtidas: " + json[i].likeCount + "</div>";
                str += "<div class='youtube-comments youtube-line'>Comentários: " + json[i].commentCount + "</div>";
                str += "<div class='youtube-views youtube-line'>Visualizações: " + json[i].viewCount + "</div>";
                str += "</li>";
        }
        str += "</ul>";
        return str;
    },

    format_flickr_json: function(json){
        json = json.photos.photo;
        str = "";
        str += "<ul>";
        for(var i=0;i<json.length;i++){
            if(json[i].id != undefined && json[i].id != null && json[i].id != "")
                str += "<li>";
                str += "<h1 class='flickr-title'>" + json[i].title + "</h1>";
                str += "<div class='flickr-picture'><a href='https://www.flickr.com/photos/" + Socials.user_id_flickr + "/" + json[i].id +"'><img src='https://farm" + json[i].farm + ".staticflickr.com/" + json[i].server + "/" + json[i].id + "_" + json[i].secret + ".jpg'/></a></div>";
                str += "</li>";
            }
        str += "</ul>";
        return str;
    },

    to_date : function(new_date){
        var year = new_date.getFullYear();
        var month = Socials.months[new_date.getMonth()];
        var date = new_date.getDate();
        var hour = new_date.getHours();
        var min = new_date.getMinutes();
        var sec = new_date.getSeconds();
        var time = date + ', ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
        return time;
    },

    convert_timestamp: function(timestamp){
        var new_date = new Date(timestamp*1000);
        return Socials.to_date(new_date);
    },

    convert_ISO8601: function(date){
        var parts = date.match(/\d+/g);
        var new_date = new Date(parts[0], parts[1] - 1, parts[2], parts[3], parts[4], parts[5]);
        return Socials.to_date(new_date);
    },

    convert_utf: function(utc){
        var new_date = new Date(utc);
        return Socials.to_date(new_date);
    },

    url_replace: function(str){
        var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
        str = str.replace(exp, "<a href='$1'>$1</a>");
        return str;
    },

    twitter_replaces: function(str){
        str = Socials.url_replace(str);
        str = str.replace(/(^|\W+)\@([\w\-]+)/gm,' <a href=\"http://twitter.com/$2\">@$2</a>');
        str = str.replace(/#([a-z_0-9]+)/ig, "<a href=\"http://twitter.com/search/$1\">#$1</a>");
        return str;
    },

    facebook_replaces: function(str){
        str = Socials.url_replace(str);
        return str;
    },

    get_social: function (type) {
        var get = "?option=";
        switch(type){
            case 'facebook':  get += 'facebook';  break;
            case 'twitter':   get += 'twitter';   break;
            case 'instagram': get += 'instagram'; break;
            case 'youtube':   get += 'youtube';   break;
            case 'flickr':    get += 'flickr';    break;
        }
        $("#socials").empty().html("Loading...");
        $.ajax({
            type: "POST",
            url: "./api/Ajax.php" + get,
            success: function (result) {
                result = JSON.parse(result);
                switch(type){
                    case 'facebook':  $("#socials").empty().html($.emoticons.replace(Socials.format_facebook_json(result))).hide().fadeIn();  break;
                    case 'twitter':   $("#socials").empty().html($.emoticons.replace(Socials.format_twitter_json(result))).hide().fadeIn();   break;
                    case 'instagram': $("#socials").empty().html($.emoticons.replace(Socials.format_instagram_json(result))).hide().fadeIn(); break;
                    case 'youtube':   $("#socials").empty().html($.emoticons.replace(Socials.format_youtube_json(result))).hide().fadeIn();   break;
                    case 'flickr':    $("#socials").empty().html($.emoticons.replace(Socials.format_flickr_json(result))).hide().fadeIn();    break;
                }
            },
        });
    }
}

$(document).ready(function () {
    Socials.init();
});