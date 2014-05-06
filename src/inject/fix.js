
//     HTML5 Flash Warning Fix for YouTube™
//     Copyright (c) 2012- Nick Baugh <niftylettuce@gmail.com>
//     MIT Licensed

// Automatically replaces the Adobe Flash warning message
// with an embedded HTML5 player (if you have Flash disabled).
// Silly bug YouTube hasn't fixed yet, so I did.
//
// <https://github.com/niftylettuce/youtube-html5-flash-warning-fix>

// * Author: [@niftylettuce](https://twitter.com/#!/niftylettuce)
// * Source: <https://github.com/niftylettuce/youtube-html5-flash-warning-fix>

// # HTML5 Flash Warning Fix for YouTube™

/*globals Zepto*/
(function(window, $) {

  /*globals yt*/
  var videoID = window.yt.config_.VIDEO_ID

  if ($('#html5-player-messages').css('display') === 'none')
    $('#player-api').replaceWith($('<iframe width="640" height="390" src="https://www.youtube.com/embed/' + videoID + '?autoplay=1" frameborder="0" allowfullscreen></iframe>'))

})(window, Zepto)
