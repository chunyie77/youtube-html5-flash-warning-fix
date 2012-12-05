
//     YouTube HTML5 Flash Warning Fix
//     Copyright (c) 2012 Nick Baugh <niftylettuce@gmail.com>
//     MIT Licensed

// Automatically replaces the Adobe Flash warning message
// with an embedded HTML5 player (if you have Flash disabled).
// Silly bug YouTube hasn't fixed yet, so I did.
//
// <https://github.com/niftylettuce/youtube-html5-flash-warning-fix>

// * Author: [@niftylettuce](https://twitter.com/#!/niftylettuce)
// * Source: <https://github.com/niftylettuce/youtube-html5-flash-warning-fix>

// # Youtube HTML5 Flash Warning Fix

;(function($) {


  if (!$('#html5-player-messages').hasClass('hid')) {
    // we could use yt.VIDEO_ID here with chrome ext passing global var
    var videoID = $('meta[name="twitter:player"]').val();
    $('#watch-player').replaceWith($('<iframe width="640" height="390" src="' + videoID + '?autoplay=1" frameborder="0" allowfullscreen></iframe>'));
  }

})(Zepto);
