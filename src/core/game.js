var CONST = require('./const'),
    utils = require('./utils'),
    autoDetectRenderer = require('../../lib/pixi/src/core').autoDetectRenderer,
    WebGLRenderer = require('../../lib/pixi/src/core/renderers/webgl/WebGLRenderer');

/**
 * The main object of your game.
 *
 * @param width=800
 * @param height=600
 * @param [gameOptions] {object} Optional game parameters
 * @param [gameOptions.debug=false] {boolean} Show development info, default false
 * @param [gameOptions.frameLimit] {number} limit the elapsed time
 * @param [gameOptions.sayHello=true] {boolean} logs out the version, renderer, and audio type
 * @param [gameOptions.noWebAudio=false] {boolean} prevents selection of WebAudio type
 * @param [gameOptions.persistantData=true] {boolean} Use localStorage to save all you need
 * @param [gameOptions.audioExts] {array} Force load audio files in this order
 * @param [gameOptions.noWebGL=false] {boolean} prevents selection of WebGL renderer, even if such is present
 * @param [rendererOptions] {object} Optional game parameters
 * @param [rendererOptions.view] {HTMLCanvasElement} the canvas to use as a view, optional
 * @param [rendererOptions.transparent=false] {boolean} If the render view is transparent, default false
 * @param [rendererOptions.antialias=false] {boolean} sets antialias (only applicable in chrome at the moment)
 * @param [rendererOptions.preserveDrawingBuffer=false] {boolean} enables drawing buffer preservation, enable this if you
 *      need to call toDataUrl on the webgl context
 * @param [rendererOptions.resolution=1] {number} the resolution of the renderer
 *
 * @constructor
 */
function Game(width, height, gameOptions, rendererOptions){
    this.config = utils.extendNewObject(CONST.DEFAULT_GAME_OPTIONS, gameOptions);
    utils._saidHello = !this.config.sayHello;
    rendererOptions = utils.extendNewObject(CONST.DEFAULT_RENDER_OPTIONS, rendererOptions);

    this.raf = null;
    this.width = width || 800;
    this.height = height || 600;
    this.renderer = getRenderer(this.width, this.height, rendererOptions, this.config.noWebGL);
    this.resize(this.width, this.height);

    this.frameElapsedTime = 0;
    this.frameLastTime = 0;
    this.time = 0;
    this.delta = 0;

    this.isWebGL = (this.renderer instanceof WebGLRenderer);
}

Game.prototype.constructor = Game;

Game.prototype.start = function(){
    this.updateTime();
    this.animate();
    //TODO: Unpause audio manager;
    return this;
};

Game.prototype.stop = function(){
    window.cancelAnimationFrame(this.raf);
    //TODO: pause audioManager
    return this;
};

Game.prototype.animate = function(){
    this.raf = window.requestAnimationFrame(this.animate.bind(this));
    this.updateTime();
    //TODO: Renderer scene
};

Game.prototype.updateTime = function(){
    var now = Date.now();
    var time = now - this.frameLastTime;
    this.frameElapsedTime = (time <= this.config.frameLimit) ? time : this.config.frameLimit;
    this.frameLastTime = now;
    this.delta = this.frameElapsedTime/1000;
    this.time += this.frameElapsedTime;
};

Game.prototype.resize = function(width, height){
    var canvas = this.renderer.view;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    return this;
};

module.exports = Game;

function getRenderer(width, height, options, noWebGL){
    if(navigator.isCocoonJS&&!options.view)options.view = window.document.createElement("screencanvas");

    var renderer = new autoDetectRenderer(width, height, options, noWebGL);
    window.document.body.appendChild(renderer.view);

    return renderer;
}