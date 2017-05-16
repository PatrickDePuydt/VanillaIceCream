# Vanilla Js
## Audio Methods
___
### [.playAudio(event)](/documentation/audio/audioMethods.md)
Fires a sound or audio file on keypress.


__Arguments: 1:__ (_event_)
_This is the key event that is passed to the function to grab the key code._

***
##### Step 1: Audio
Upload or add an audio file to you project and remember the `PATH` to this as you'll need to add it to your HTML `<audio></audio>` element as an attribute in step 2.

***

##### Step 2: HTML
First load the HTML into your DOM using an `<audio></audio>` tag with the source pointing at the audio file.

###### Usage:
```html
	<audio data-key="<number>" src="<path/to/sound/file>"></audio>
```

###### Example:

``` html
	<audio data-key="65" src="sounds/kickdrum.wav"></audio>
```


The `'data-key'="<number>"` corresponds to the event key code on the keyboard. To find the keycode, visit [KeyCode.info](keycode.info) and press a key there. For example, the __A__ key is _65_ so they HTML attribute would be `data-key="65"`


***

##### Step 3: JavaScript
###### 3.1 Import Audio into Project
You can add the method to your project either by importing a specific method or by importing the whole set of Audio Methods. 

Example:

``` js
import {playAudio} from './audioMethods'; // Single Method
import * as audioMethods from './audioMethods'; // All Audio Methods

```


###### 3.2 Import Audio into Project
Now all you need is to add an event listener to the window and have it invoke the `.playAudio()` funtion.

You will then invoke the method by calling it through dot notaton like so:
``` js
window.addEventListener('keydown', audioMethods.playAudio);
```

***

### Errors
The most common error is that there is no HTML audio element associated with the key press you're trying to associate. For example, you press the letter _"m"_, but nothing happens. This is usually because you haven't added HTML audio element to the page yet. See the __HTML__ section above to see examples.