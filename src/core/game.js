var CONST = require('./const'),
    utils = require('./utils'),
    AssetLoader = require('../loader/AssetLoader'),
    DataManager = require('../extra/DataManager'),
    autoDetectRenderer = require('../../lib/pixi/src/core').autoDetectRenderer,
    WebGLRenderer = require('../../lib/pixi/src/core/renderers/webgl/WebGLRenderer'),
    SceneManager = require('./SceneManager');

/**
 * The main object of your game.
 * @class
 * @memberof PQ
 * @param width=800
 * @param height=600
 * @param [gameOptions] {object} Optional game parameters
 * @param [gameOptions.debug=false] {boolean} Show development info, default false
 * @param [gameOptions.frameLimit] {number} limit the elapsed time
 * @param [gameOptions.sayHello=true] {boolean} logs out the version, renderer, and audio type
 * @param [gameOptions.noWebAudio=false] {boolean} prevents selection of WebAudio type
 * @param [gameOptions.persistantData=true] {boolean} Use localStorage to save all you need
 * @param [gameOptions.stopAtVisibilityChange] {boolean} Pause the game when lost the focus, default true
 * @param [gameOptions.audioExts] {array} Force load audio files in this order
 * @param [gameOptions.noWebGL=false] {boolean} prevents selection of WebGL renderer, even if such is present
 * @param [gameOptions.scaleType] {boolean} Screen behavior when the canvas size is different to the window size, default GAME_SCALE_TYPE.NONE
 * @param [rendererOptions] {object} Optional game parameters
 * @param [rendererOptions.view] {HTMLCanvasElement} the canvas to use as a view, optional
 * @param [rendererOptions.backgroundColor] {number} color used like a background, optional
 * @param [rendererOptions.transparent=false] {boolean} If the render view is transparent, default false
 * @param [rendererOptions.antialias=false] {boolean} sets antialias (only applicable in chrome at the moment)
 * @param [rendererOptions.preserveDrawingBuffer=false] {boolean} enables drawing buffer preservation, enable this if you
 *      need to call toDataUrl on the webgl context
 * @param [rendererOptions.resolution=1] {number} the resolution of the renderer
 */
function Game(width, height, gameOptions, rendererOptions){
    /**
     * The config of the game
     *
     * @member {object}
     * @default CONST.DEFAULT_GAME_OPTIONS
     */
    this.config = utils.defaultObject(CONST.DEFAULT_GAME_OPTIONS, gameOptions);
    utils._saidHello = !this.config.sayHello;
    rendererOptions = utils.defaultObject(CONST.DEFAULT_RENDER_OPTIONS, rendererOptions);

    /**
     * The id of requestAnimationFrame
     *
     * @member {number}
     */
    this.raf = -1;

    /**
     * The renderer width
     * @member {number}
     */
    this.width = width || 800;

    /**
     * The renderer height
     * @member {number}
     */
    this.height = height || 600;

    /**
     * Renderer in use
     * @member {WebGLRenderer|CanvasRenderer}
     */
    this.renderer = getRenderer(this.width, this.height, rendererOptions, this.config.noWebGL);
    this.resize(this.width, this.height);

    /**
     * The time between frames
     * @member {number}
     */
    this.frameElapsedTime = 0;

    /**
     * Last frame time
     * @member {number}
     */
    this.frameLastTime = 0;

    /**
     * The total game time
     * @member {number}
     */
    this.time = 0;

    /**
     * The delta time
     * @member {number}
     */
    this.delta = 0;

    /**
     * Whether the renderer is a webgl
     * @member {boolean}
     */
    this.isWebGL = (this.renderer instanceof WebGLRenderer);

    /**
     * The scene manager for this game
     * @member {SceneManager}
     */
    this.sceneManager = new SceneManager(this);

    /**
     * Basic loader
     * @member {AssetLoader}
     */
    this.assetLoader = new AssetLoader();

    this.dataManager = new DataManager(this);

    /**
     * Store the resize method
     * @member {null|function}
     * @private
     */
    this._gameResizeListener = null;

    /**
     * Stop the game when it lost the focus
     */
    if(this.config.stopAtVisibilityChange){
        utils.watchVisibilityChanges(this);
    }

    /**
     * Autoescale the gamescreen
     */
    if(this.config.scaleType !== CONST.GAME_SCALE_TYPE.NONE){
        this.enableAutoResize(true);
    }
}

Game.prototype.constructor = Game;

/**
 * Start the request animation frame
 * @returns {Game}
 */
Game.prototype.start = function(){
    this.updateTime();
    this.animate();
    //TODO: Unpause audio manager;
    return this;
};

/**
 * Stop the request animation frame
 * @returns {Game}
 */
Game.prototype.stop = function(){
    window.cancelAnimationFrame(this.raf);
    //TODO: pause audioManager
    return this;
};

/**
 * Draw and animate all the actors in the scene
 * @returns {Game}
 */
Game.prototype.animate = function(){
    this.raf = window.requestAnimationFrame(this.animate.bind(this));
    this.updateTime();
    this.renderer.render(this.sceneManager);

    this.sceneManager.animate(this.time, this.delta);

    return this;
};

/**
 * Calculate all game times
 * @returns {Game}
 */
Game.prototype.updateTime = function(){
    var now = Date.now();
    var time = now - this.frameLastTime;
    this.frameElapsedTime = (time <= this.config.frameLimit) ? time : this.config.frameLimit;
    this.frameLastTime = now;
    this.delta = this.frameElapsedTime/1000;
    this.time += this.delta;

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
    if(this.config.stopAtVisibilityChange){
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
    mode = mode || this.config.scaleType;
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

module.exports = Game;

function getRenderer(width, height, options, noWebGL){
    if(navigator.isCocoonJS&&!options.view)options.view = window.document.createElement("screencanvas");

    var renderer = new autoDetectRenderer(width, height, options, noWebGL);
    window.document.body.appendChild(renderer.view);

    return renderer;
}