require('./polyfill');
var CONST = require('./core/const'),
    Class = require('./core/Class'),
    math = require('../lib/pixi/src/core/math');

var core = {
    config : require('./core/config'),
    utils : require('./core/utils'),
    plugin : require('./core/plugin'),

    Class : Class,
    Game : Class.parse(require('./core/Game')),
    Container : Class.parse(require('./display/Container')),
    SceneManager : Class.parse(require('./core/SceneManager')),
    Scene : Class.parse(require('./display/Scene')),
    Graphics : Class.parse(require('./display/Graphics')),
    Sprite : Class.parse(require('./display/Sprite')),
    TilingSprite : Class.parse(require('./display/TilingSprite')),
    Camera : Class.parse(require('./display/Camera')),
    AssetLoader : Class.parse(require('./loader/AssetLoader')),
    AssetCache : Class.parse(require('./loader/AssetCache')),
    Texture : Class.parse(require('../lib/pixi/src/core/textures/Texture')),
    Pool : Class.parse(require('./extra/Pool')),
    NinePatch: Class.parse(require('./extra/NinePatch')),
    Point : Class.parse(require('../lib/pixi/src/core/math/Point')),
    Matrix : Class.parse(require('../lib/pixi/src/core/math/Matrix')),
    Rectangle : Class.parse(require('../lib/pixi/src/core/math/shapes/Rectangle')),
    Circle : Class.parse(require('../lib/pixi/src/core/math/shapes/Circle')),
    Polygon : Class.parse(require('../lib/pixi/src/core/math/shapes/Polygon')),
    RoundedRectangle : Class.parse(require('../lib/pixi/src/core/math/shapes/RoundedRectangle')),
    Ellipse : Class.parse(require('../lib/pixi/src/core/math/shapes/Ellipse')),
    ParticleContainer : Class.parse(require('./display/ParticleContainer')),
    Text : Class.parse(require('./display/Text')),
    BitmapText : Class.parse(require('./display/BitmapText')),
    TimerManager : Class.parse(require('./timer/TimerManager')),
    Timer : Class.parse(require('./timer/Timer')),
    Timeline : Class.parse(require('./extra/Timeline')),
    Easing : Class.parse(require('./tween/Easing')),
    Tween : Class.parse(require('./tween/Tween')),
    TweenManager : Class.parse(require('./tween/TweenManager')),
    Path : Class.parse(require('./tween/Path')),
    InputManager : Class.parse(require('./input/InputManager')),
    Mouse : Class.parse(require('./input/mouse')),
    Keyboard : Class.parse(require('./input/keyboard')),
    Key : Class.parse(require('./input/keyboard/Key')),
    HotKey : Class.parse(require('./input/keyboard/HotKey')),
    Device : Class.parse(require('./core/Device')),
    AnimationManager : Class.parse(require('./display/animation/AnimationManager')),
    filters : require('../lib/pixi/src/filters')

};

//Add Constants to the main object
for(var c in CONST) {
    if(typeof CONST[c] === "function"){
        continue;
    }
    core[c] = CONST[c];
}


module.exports = core;

//TODO: Revisar que dependencias son realmente necesarias para dev y cuales para prod, teniendo en cuenta la cli