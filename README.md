perenquen.js
===========
##WebGL and Canvas HTML5 Game Framework

PerenquenJS is a HTML5 Game Framework designed for mobile, web and desktop development. API inspired in [CAAT](https://github.com/hyperandroid/caat).

Currently under development. See "dev" branch.

##How to install

Clone this repository and move to main path, type this in your terminal:

    npm install

Now use `gulp` to compile all in one file or `gulp dev` for a development build and watch changes.  
You can find this files in ./build directory.

##Current Features

- Class System (OOP)
    - Extend PQ Class or create your owns
    - Plugin system with the inject method
- Inputs
    - Keyboard
    - Mouse and Touches
- Actors
    - Containers
    - Sprites
    - Easy paralax (TilingSprite)
    - Images
    - 9patchs textures
    - Primitive Graphics (Like a canvas draw api)
- Timer system
- Tween System
- Audio
    - WebAudio system
    - HTMLAudio
    - Auto Fallback
    - Auto detect the best audio ext
- Renderer (pixi.js)
    - WebGL
    - Canvas
    - Auto Fallback
    - Auto detect the best renderer
- Texts
    - Native fonts
    - Bitmap fonts
    - Multiline text on both
- Loaders
    - Images
    - Spritesheets
    - Json
    - Particles
    - XML and FNT bitmap fonts
- Path System
    - Create, draw, etc..
    - Tween Paths
- Object pool helper
- Datamanager
    - Persistent data
    - Temporal data
- Game Camera
    - HUD Layer
    - Following actors
    - Positions, etc...
- Game Scale System
    - None
    - Fill
    - Aspect Fit
    - Aspect Fill
- Basic Debug Info
    - Show FPS
    - Show Actors in scene
    - Show MS
    - Show Particles in scene
- Basic Device Info
    - Desktop
    - Mobile
    - Cocoon
    - Node-Webkit
    - Vibrate
- Particle System
    - Easy and powerful

##Roadmap

- Create Examples
- Add TileMap Support
- Add Spine Support
- Add Gamepad Support
- Add Accelerometer Support
- Add Spine Support
- Add Physics Engine
- Check all features under Cocoon
- Document API
- Upgrade to Pixi v3