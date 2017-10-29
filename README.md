# wallpaper-macos

Change macOS desktop background, implemented natively using official Apple APIs, using [nodobjc](https://github.com/TooTallNate/NodObjC) Objective-C bridge.

Correctly change the wallpaper of _all spaces_, without using nasty hacks like restarting the Dock.


## Usage

```javascript
var wallpaperMacOS = require('wallpaper-macos')

// Update wallpaper of the current space
wallpaperMacOS.setOnCurrentSpace(file)

// Update wallpaper of all spaces
wallpaperMacOS.setOnCurrentSpace(file)
```
_Note_ - switching on all spaces is achieved by listening for the activeSpaceDidChange workspace notification and setting the wallpaper on each space as the user switches to it. This means that this method cannot be used as a synchronous script, but must be run as part of a long-running application or service.

## Authors

Tom Watson <tom@tomjwatson.com>

Jack Lypskyi <https://github.com/avaganz>
