# ORIS (Offline Random Image Slideshow) 🖼

A lightweight web app for viewing local images as a slideshow. Runs entirely in the browser using vanilla HTML, CSS, and JavaScript, without any need for uploads or internet connection.

## Features

- Load images from local folders, without uploading
- Select sub-folders to include or exclude
- Shuffle order of slideshow
- Adjustable slide duration
- Keyboard, mouse, and touch controls (with optional swipe animations)
- Optional screen wake lock (available when served via localhost or HTTPS)
- Optional PWA installation (see below)

### Slideshow Controls

| Action | Control |
|---|---|
| Play / pause | Space, or Play button |
| Previous / next | ←/→ keys, swipe left/right, or Prev/Next buttons |
| Close overlay | Esc, swipe up/down, or Close button |
| Fullscreen | Fullscreen button |
| Slide duration | Settings panel (⚙) |
| Swipe animations | Settings panel (⚙) — can be disabled |

## Usage

Download `index.html` and open it in any modern browser. No server, no dependencies.

Alternatively, clone the repository and serve it locally for wake lock support:

```
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

Or you can access a version hosted on [Github Pages](https://nitemice.github.io/img-slideshow/).

### Optional: Install as a PWA

ORIS can be installed as a Progressive Web App, giving it a home screen icon and a standalone window. To do this, all the files in this repository need to be served via localhost or HTTPS. The easiest option is to go to the Github Pages link above.


## Browser Compatibility

- Full functionality (including wake lock and lazy loading) requires a browser released after May 2024.
- Basic functionality works in any major browser released after April 2017.
- Tested in Firefox on Windows, and Firefox and Chromium on Android.


## Disclaimer

This project was originally developed by ChatGPT (OpenAI), enhanced with assistance from Claude (Anthropic), and has been **reviewed and edited by a human** to ensure accuracy, usability, and correctness.

---

Licensed under the MIT License.
