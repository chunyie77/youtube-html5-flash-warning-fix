
// # HTML5 Flash Warning Fix for YouTube™

var icons48 = chrome.extension.getURL('icons/icon48.png')

chrome.runtime.onInstalled.addListener(function(details) {
  if (details.reason === 'install' || details.reason === 'update') {
    var msg = webkitNotifications.createNotification(
      icons48,
      'Please reload YouTube to activate',
      'You must restart Chrome or reload YouTube tabs to use this extension.  Click here to open a new tab in YouTube.  Please send feedback to niftylettuce@gmail.com.'
    )
    msg.show()
    msg.addEventListener('click', function() {
      msg.cancel()
      chrome.tabs.create({
        url: 'https://youtube.com'
      }, function(tab) {
        chrome.tabs.reload(tab.id, {
          bypassCache: true
        })
      })
    })
  }
})

chrome.runtime.onConnect.addListener(function(port) {

  port.onMessage.addListener(function(message) {

    if (typeof message.image !== 'string'
        || typeof message.title !== 'string'
        || typeof message.description !== 'string')
      return

    var notification = webkitNotifications.createNotification(
      message.image,
      message.title,
      message.description
    )

    notification.addEventListener('click', function() {
      notification.cancel()
      if (typeof message.url === 'string')
        window.open(message.url)
    })

    notification.show()

    if (typeof message.timeout === 'number')
      setTimeout(function() {
        notification.cancel()
      }, message.timeout)

  })

})
