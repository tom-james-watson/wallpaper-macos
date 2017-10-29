const $ = require('nodobjc')

// Import the "Foundation" and "Cocoa" frameworks
$.framework('Foundation')
$.framework('Cocoa')

module.exports.set = function(file) {

  const imageURL = $.NSURL('fileURLWithPath', $(file))
  const imagePath = $(imageURL, 'absoluteString')

  const screens = $.NSScreen('screens')

  for(let i = 0; i < screens('count'); i++) {

    const screen = screens('objectAtIndex', i)

    const currentImagePath = $(
      $.NSWorkspace('sharedWorkspace')('desktopImageURLForScreen', screen),
      'absoluteString'
    )

    // Get current background image properties (fill, fit, scale etc)
    const screenOptions = $(
      $.NSWorkspace('sharedWorkspace')('desktopImageOptionsForScreen', screen),
      'mutableCopy'
    )

    if(currentImagePath.toString() === imagePath.toString()) {
      return
    }

    // Change background image for screen
    const success = $.NSWorkspace('sharedWorkspace')('setDesktopImageURL', imageURL, 'forScreen', screen, 'options', screenOptions, 'error', null)

    if(!success) {
      throw 'An error occurred whilst attempting to change background image'
    }

  }

}
