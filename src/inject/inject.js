
// # HTML5 Flash Warning Fix for YouTube™

(function(document) {

  var zeptoScript = document.createElement('script')
  zeptoScript.type = 'text/javascript'
  zeptoScript.src = chrome.extension.getURL('bower_components/zepto/zepto.min.js')
  document.body.appendChild(zeptoScript)

  var fixScript = document.createElement('script')
  fixScript.type = 'text/javascript'
  fixScript.src = chrome.extension.getURL('src/inject/fix.js')
  document.body.appendChild(fixScript)

})(document)
