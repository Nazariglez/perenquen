require('./polyfill');
var CONST = require('./core/const'),
    Class = require('./core/Class'),
    math = require('../lib/pixi/src/core/math');

var core = {
    config : require('./core/config'),
    utils : require('./core/utils'),
    plugin : require('./core/plugin'),

    Class : Class,
    SystemTimer : Class.parse(require('./core/GameTime')),
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
    Text : Class.parse(require('./display/Text')),
    BitmapText : Class.parse(require('./display/BitmapText')),
    TimerManager : Class.parse(require('./timer/TimerManager')),
    Timer : Class.parse(require('./timer/Timer')),
    Timeline : Class.parse(require('./extra/Timeline')),
    Easing : Class.parse(require('./tween/Easing')),
    TweenManager : Class.parse(require('./tween/TweenManager')),
    Tween : Class.parse(require('./tween/Tween')),
    Path : Class.parse(require('./tween/Path')),
    InputManager : Class.parse(require('./input/InputManager')),
    Mouse : Class.parse(require('./input/mouse')),
    MouseHotKey : Class.parse(require('./input/mouse/HotKey')),
    Keyboard : Class.parse(require('./input/keyboard')),
    Key : Class.parse(require('./input/Key')),
    HotKey : Class.parse(require('./input/keyboard/HotKey')),
    Gamepad : Class.parse(require('./input/gamepad')),
    Controller : Class.parse(require('./input/gamepad/Controller')),
    ControllerHotKey : Class.parse(require('./input/gamepad/HotKey')),
    Device : Class.parse(require('./core/Device')),
    AnimationManager : Class.parse(require('./display/animation/AnimationManager')),
    Animation : Class.parse(require('./display/animation/Animation')),
    AudioManager : Class.parse(require('./audio/AudioManager')),
    Transition : Class.parse(require('./extra/Transition')),
    Particle : Class.parse(require('./particle/Particle')),
    ParticleEmitter : Class.parse(require('./particle/ParticleEmitter')),
    ParticleContainer : Class.parse(require('./particle/ParticleContainer')),
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