var CONST = require('./const'),
    utils = require('./utils'),
    config = require('./config'),
    AssetLoader = require('../loader/AssetLoader'),
    DataManager = require('../extra/DataManager'),
    InputManager = require('../input/InputManager'),
    AudioManager = require('../audio/AudioManager'),
    autoDetectRenderer = require('../../lib/pixi/src/core').autoDetectRenderer,
    SceneManager = require('./SceneManager'),
    GameTime = require('./GameTime'),
    Device = require('./Device');

/**
 * The main object of your game.
 * @class
 * @memberof PQ
 * @param [width=800]
 * @param [height=600]
 * @param [options] {DEFAULT_GAME_OPTIONS}
 */
function Game(width, height, options){
    this._init(width, height, options);
}

Game.prototype.constructor = Game;

Game.prototype._init = function(width, height, options){
    if(typeof width === "object"){
        options = width;
        width = null;
        height = null;
    }
    /**
     * The config of the game
     *
     * @member {object}
     * @default CONST.DEFAULT_GAME_OPTIONS
     */
    this.config = parseConfig(options);
    var rendererOptions = parseRendererConfig(CONST.DEFAULT_RENDER_OPTIONS, this.config);

    /**
     * The renderer width
     * @member {number}
     */
    this.width = width || this.config.game.width;

    /**
     * The renderer height
     * @member {number}
     */
    this.height = height || this.config.game.height;

    /**
     * Bundle id for this game
     * @member {string}
     */
    this.id = this.config.id;

    /**
     * Version of this game
     * @member {string}
     */
    this.version = this.config.version;

    /**
     * Renderer in use
     * @member {WebGLRenderer|CanvasRenderer}
     */
    this.renderer = getRenderer(this.width, this.height, rendererOptions, !this.config.game.useWebGL);
    this.resize(this.width, this.height);

    /**
     * Canvas element
     * @member {HTMLCanvasElement}
     */
    this.canvas = this.renderer.view;

    this.time = new GameTime(this);

    /**
     * Whether the renderer is a webgl
     * @member {boolean}
     */
    this.isWebGL = (this.renderer.type === CONST.RENDERER_TYPE.WEBGL);

    /**
     * Is webAudio using in this game
     * @type {boolean}
     */
    this.isWebAudio = (Device.hasWebAudio && this.config.audio.useWebAudio);

    /**
     * The scene manager for this game
     * @member {SceneManager}
     */
    this.sceneManager = new SceneManager(this);

    /**
     * The audio manager for this game
     * @type {AudioManager}
     */
    this.audioManager = new AudioManager(this);

    /**
     * Basic loader
     * @member {AssetLoader}
     */
    this.assetLoader = new AssetLoader(this);

    /**
     * Manage all data, using localstorage or not
     * @type {DataManager}
     */
    this.dataManager = new DataManager(this);

    /**
     * The manager for mouse, keyboard, etc...
     * @type {InputManager}
     */
    this.inputManager = new InputManager(this); //TODO: Maybe rename to "input" instead "inputManager" ?

    /**
     * Store the resize method
     * @member {null|function}
     * @private
     */
    this._gameResizeListener = null;

    /**
     * Stop the game when it lost the focus
     */
    if(this.config.game.stopAtVisibilityChange){
        utils.watchVisibilityChanges(this);
    }

    /**
     * Autoscale the gamescreen
     */
    if(this.config.game.scaleType !== CONST.GAME_SCALE_TYPE.NONE){
        this.enableAutoResize(true);
    }

    if(this.config.sayHello){
        this.sayHello();
    }
};

/**
 * Start the request animation frame
 * @returns {Game}
 */
Game.prototype.start = function(){
    this.time.start();
    this.audioManager.resumeAllLines();
    return this;
};

/**
 * Stop the request animation frame
 * @returns {Game}
 */
Game.prototype.stop = function(){
    this.time.stop();
    this.audioManager.pauseAllLines();
    return this;
};

Game.prototype.update = function(gameTime, delta){

};

Game.prototype.postUpdate = function(gameTime, delta){

};

/**
 * Draw and animate all the actors in the scene
 * @returns {Game}
 */
Game.prototype.animate = function(){
    this.update(this.time, this.delta);

    this.renderer.render(this.sceneManager);
    this.sceneManager.animate(this.time.total, this.time.delta);
    this.inputManager.update(this.time.total, this.time.delta);

    this.postUpdate(this.time.total, this.time.delta);
    return this;
};

/**
 * Resize the view using DOM Style
 * @param width {number}
 * @param height {number}
 * @returns {Game}
 */
Game.prototype.resize = function(width, height){
    var canvas = this.renderer.view;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    return this;
};


/**
 * Stop or start the game when the focus is in or out
 * @param hidden {boolean}
 * @returns {Game}
 */
Game.prototype.visibilityChange = function(hidden){
    if(this.config.game.stopAtVisibilityChange){
        if(hidden){
            this.stop();
        }else{
            this.start();
        }
    }
    return this;
};

/**
 * Rules to define how to resize the game screen
 * @param [value] {boolean}
 * @param [mode] {GAME_SCALE_TYPE}
 * @returns {Game}
 */
Game.prototype.enableAutoResize = function(value, mode){
    mode = mode || this.config.game.scaleType;
    value = (value !== false);
    var scope = this,
        canvas = this.renderer.view;

    //Remove previous listeners
    if(this._gameResizeListener){
        window.removeEventListener('resize', this._gameResizeListener);
        this._gameResizeListener = null;
    }

    //Nothing to do here
    if(mode === CONST.GAME_SCALE_TYPE.NONE||!value){
        return this;
    }

    switch(mode){
        case CONST.GAME_SCALE_TYPE.ASPECT_FIT:
            this._gameResizeListener = function(e){
                var ww = parseInt(canvas.style.width,10) || canvas.width;
                var hh = parseInt(canvas.style.height,10) || canvas.height;

                if (window.innerWidth < ww || window.innerHeight < hh || window.innerWidth > ww || window.innerHeight > hh) {
                    var scale = Math.min(window.innerWidth/scope.width, window.innerHeight/scope.height);
                    scope.resize(scope.width*scale, scope.height*scale);
                }
            };
            break;
        case CONST.GAME_SCALE_TYPE.ASPECT_FILL:
            this._gameResizeListener = function(e){
                //TODO: Revisar en moviles
                var ww = parseInt(canvas.style.width,10) || canvas.width;
                var hh = parseInt(canvas.style.height,10) || canvas.height;

                if (window.innerWidth < ww || window.innerHeight < hh || window.innerWidth > ww || window.innerHeight > hh) {
                    var scale = Math.max(window.innerWidth/scope.width, window.innerHeight/scope.height);
                    var width = scope.width*scale,
                        height = scope.height*scale;
                    scope.resize(width, height);

                    var topMargin = (window.innerHeight-height)/2;
                    var leftMargin = (window.innerWidth-width)/2;

                    canvas.style['margin-top'] = topMargin + 'px';
                    canvas.style['margin-left'] = leftMargin + 'px';
                }
            };
            break;
        case CONST.GAME_SCALE_TYPE.FILL:
            this._gameResizeListener = function(e){
                var ww = parseInt(canvas.style.width,10) || canvas.width;
                var hh = parseInt(canvas.style.height,10) || canvas.height;

                if (window.innerWidth !== ww || window.innerHeight !== hh) {
                    scope.resize(window.innerWidth, window.innerHeight);
                }
            };
            break;
    }

    window.addEventListener('resize', this._gameResizeListener);
    this._gameResizeListener();

    return this;
};

Game.prototype.setFullScreen = function(value){
    if(!Device.hasFullScreen)return this;
    value = (value !== false);

    if(value){
        this.canvas[Device.fullScreenRequest]();
    }else{
        document[Device.fullScreenCancel]();
    }

    return this;

};

Game.prototype.sayHello = function(){
    var renderer = this.isWebGL ? "WebGL" : "Canvas",
        audio = this.isWebAudio ? "WebAudio" : "HTMLAudio";

    console.log('Powered by Perenquen v'+CONST.VERSION + ' (' + renderer + ' - ' + audio + ') [http://perenquenjs.com]');
    return this;
};

module.exports = Game;

Object.defineProperties(Game.prototype, {
    scene : {
        get: function(){
            return this.sceneManager.currentScene;
        }
    },

    mouse: {
        get: function(){
            return this.inputManager.mouse;
        }
    },

    keyboard: {
        get: function(){
            return this.inputManager.keyboard;
        }
    },

    gamepad: {
        get: function(){
            return this.inputManager.gamepad;
        }
    }
});

function getRenderer(width, height, options, noWebGL){
    if(navigator.isCocoonJS&&!options.view)options.view = window.document.createElement("screencanvas");

    var renderer = new autoDetectRenderer(width, height, options, noWebGL);
    window.document.body.appendChild(renderer.view);

    return renderer;
}

function parseConfig(options){
    var cfg = utils.defaultObject(CONST.DEFAULT_GAME_OPTIONS, options);
    config.useDeltaAnimation = cfg.useDeltaAnimation;
    config.useSortChildrenByDepth = cfg.useSortChildrenByDepth;
    return cfg;
}

function parseRendererConfig(defaultConfig, config){
    var cfg = JSON.parse(JSON.stringify(defaultConfig));

    for(var key in config.game){
        switch(key){
            case "autoResize":
            case "clearBeforeRenderer":
            case "forceFXAA":
            case "preserveDrawingBuffer":
            case "backgroundColor":
            case "resolution":
                cfg[key] = config.game[key];
                break;
            case "canvas":
                cfg.view = config.game[key];
                break;
            case "transparentBackground":
                cfg.transparent = config.game[key];
                break;
            case "useAntialias":
                cfg.antialias = config.game[key];
                break;
        }
    }

    return cfg;
}