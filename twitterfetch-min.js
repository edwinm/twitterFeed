/*
 twitterFetch 1.0.1
 @copyright 2016 Edwin Martin
 @see {@link http://www.bitstorm.org/javascript/}
 @license MIT
*/
var twitterFetch=function(){var d,c;return{fetch:function(b,a,e){c=a;d=e;a=document.createElement("script");a.src="https://cdn.syndication.twimg.com/widgets/timelines/"+b+"?&lang=en&callback=twitterFetch.callback&suppress_response_codes=true&rnd="+Math.random();document.head.appendChild(a)},callback:function(b){var a=document.createElement("div");b=b.body;!0!==c.images&&(b=b.replace(/<img/g,"<x-img"));a.innerHTML=b;a=Array.prototype.map.call(a.querySelectorAll(".timeline-Tweet-text"),function(a){a=
a.textContent;!0!==c.plaintext&&(a=a.replace("&","&amp;").replace("<","&lt;").replace(">","&gt;"));!1!==c.hyperlinks&&(a=a.replace(/(https?:\/\/[a-zA-Z0-9\/\&\?=\[\]%~#;\$\-_\+!\*',":\.\(\)]+[a-zA-Z0-9\/\&\?=\[\]%~#;\$\-_\+!\*',":]{2})/g,"<a href='$1'>$1</a>").replace(/@([0-9a-zA-Z_-]+)/g,"<a href='http://twitter.com/$1'>@$1</a>"));return a});d(a)}}}();
