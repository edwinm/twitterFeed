/**!
 @preserve twitterFetch 1.0.1
 @copyright 2016 Edwin Martin
 @see {@link http://www.bitstorm.org/javascript/}
 @license MIT
 */
var twitterFetch = function () {
    var _callback, _options;

    return {
        fetch: function (widgetId, options, callback) {
            _options = options;
            _callback = callback;
            var script = document.createElement("script");
            script.src = "https://cdn.syndication.twimg.com/widgets/timelines/" + widgetId
                + "?&lang=en&callback=twitterFetch.callback&suppress_response_codes=true&rnd=" + Math.random();
            document.head.appendChild(script);
        },

        callback: function (feed) {
            var div = document.createElement("div");
            var html = feed.body;
            if (_options.images !== true) {
                html = html.replace(/<img/g, '<x-img');
            }
            div.innerHTML = html;

            var tweets = Array.prototype.map.call(div.querySelectorAll(".timeline-Tweet-text"), function(el) {
                var txt = el.textContent;
                if (_options.plaintext !== true) {
                    txt = txt.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;');
                }
                if (_options.hyperlinks !== false) {
                    txt = txt.replace(/(https?:\/\/[a-zA-Z0-9\/\&\?=\[\]%~#;\$\-_\+!\*',":\.\(\)]+[a-zA-Z0-9\/\&\?=\[\]%~#;\$\-_\+!\*',":]{2})/g,
                            '<a href=\'$1\'>$1</a>')
                        .replace(/@([0-9a-zA-Z_-]+)/g, '<a href=\'http://twitter.com/$1\'>@$1</a>');
                }
                return txt;
            });

            _callback(tweets)
        }
    }
}();
