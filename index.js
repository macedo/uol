/*jshint strict:false, browser:true */
(function bookmarklet() {
  var jQuery;

  function init() {
    (function($) {
      var UolUnblocker = (function() {
        var $overlay = $('.tm-gate')
          , $html = $('html')
          , $body = $('body');

        function init() {
          $overlay.remove();
          $html.css({overflow: ''});
          $body.css({overflow: ''});
        }

        return {
          init: init
        };
      })();

      UolUnblocker.init();
    })(jQuery.noConflict(true));
  }

  function scriptLoadHandler() {
    jQuery = window.jQuery.noConflict(true);
    init();
  }

  if (window.jQuery === undefined || window.jQuery.fn.jquery !== '3.3.1') {
    var script = document.createElement('script');
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js';
    if (script.readyState) {
      script.onreadystatechange = function () { // For old versions of IE
        if (this.readyState === 'complete' || this.readyState === 'loaded') {
          scriptLoadHandler();
        }
      };
    } else { // Other browsers
      script.onload = scriptLoadHandler;
    }
    (document.getElementsByTagName('head')[0] || document.documentElement).appendChild(script);
  } else {
    jQuery = window.jQuery;
    init();
  }
}());
