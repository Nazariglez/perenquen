require('./polyfill');
var CONST = require('./core/const'),
    math = require('../lib/pixi/src/core/math'),
    addInherits = require('./core/utils').addInherits;
    //interactionMouse = require('./input');

var core = {
    config : require('./core/config'),
    utils : require('./core/utils'),
    plugin : require('./core/plugin'),
    inject : require('./core/inject'),

    Class : require('./core/Class'),
    Game : require('./core/Game'),
    Container : require('./display/Container'),
    SceneManager : require('./core/SceneManager'),
    Scene : require('./display/Scene'),
    Graphics : require('./display/Graphics'),
    Sprite : require('./display/Sprite'),
    TilingSprite : require('./display/TilingSprite'),
    Camera : require('./display/Camera'),
    AssetLoader : require('./loader/AssetLoader'),
    Texture : require('../lib/pixi/src/core/textures/Texture'),
    Pool : require('./extra/Pool'),
    NinePatch: require('./extra/NinePatch'),
    Point : require('../lib/pixi/src/core/math/Point'),
    Matrix : require('../lib/pixi/src/core/math/Matrix'),
    Rectangle : require('../lib/pixi/src/core/math/shapes/Rectangle'),
    Circle : require('../lib/pixi/src/core/math/shapes/Circle'),
    Polygon : require('../lib/pixi/src/core/math/shapes/Polygon'),
    RoundedRectangle : require('../lib/pixi/src/core/math/shapes/RoundedRectangle'),
    Ellipse : require('../lib/pixi/src/core/math/shapes/Ellipse'),
    ParticleContainer : require('./display/ParticleContainer'),
    Text : require('./display/Text'),
    BitmapText : require('./display/BitmapText'),
    TimerManager : require('./timer/TimerManager'),
    Timer : require('./timer/Timer'),
    Timeline : require('./extra/Timeline'),
    Easing : require('./tween/Easing'),
    Tween : require('./tween/Tween'),
    TweenManager : require('./tween/TweenManager'),
    Path : require('./tween/Path'),
    InputManager : require('./input/InputManager'),
    Mouse : require('./input/mouse'),
    Keyboard : require('./input/keyboard'),
    Key : require('./input/keyboard/Key'),
    HotKey : require('./input/keyboard/HotKey'),
    Device : require('./extra/Device')

};

//Add inheritance system
for(var key in core){
    if(typeof core[key] === "function"){
        addInherits(core[key]);
    }
}

//Add Constants to the main object
for(var c in CONST) {
    if(typeof CONST[c] === "function"){
        continue;
    }
    core[c] = CONST[c];
}


module.exports = core;

//TODO: Revisar que dependencias son realmente necesarias para dev y cuales para prod, teniendo en cuenta la cli