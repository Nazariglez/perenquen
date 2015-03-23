var constants = require('../../lib/pixi/src/core/const');

/**
 * String of the current PQ version
 *
 * @static
 * @constant
 * @property {string} VERSION
 */
constants.VERSION = require('../../package.json').version;

/**
 * String of the current PIXI version
 * @constant
 * @property {string} PIXI_VERSION
 */
constants.PIXI_VERSION = require('../../lib/pixi/package.json').version;

/**
 * Constant to identify the Audio Type.
 *
 * @static
 * @constant
 * @property {object} AUDIO_TYPE
 * @property {number} AUDIO_TYPE.UNKNOWN
 * @property {number} AUDIO_TYPE.WEBAUDIO
 * @property {number} AUDIO_TYPE.HTMLAUDIO
 */
constants.AUDIO_TYPE = {
    UNKNOWN : 0,
    WEBAUDIO : 1,
    HTMLAUDIO : 2
};

/**
 * Constant to identify the game scale types
 *
 * @static
 * @constant
 * @property {object} GAME_SCALE_TYPE
 * @property {number} GAME_SCALE_TYPE.NONE
 * @property {number} GAME_SCALE_TYPE.FILL
 * @property {number} GAME_SCALE_TYPE.ASPECT_FIT
 * @property {number} GAME_SCALE_TYPE.ASPECT_FILL
 */
constants.GAME_SCALE_TYPE = {
    NONE: 0,
    FILL: 1,
    ASPECT_FIT: 2,
    ASPECT_FILL: 3
};

/**
 * The default game options if none are supplied to {@link PQ.Game}
 *
 * @static
 * @constant
 * @property {object} DEFAULT_GAME_OPTIONS
 * @property {boolean} DEFAULT_RENDER_OPTIONS.debug=false
 * @property {boolean} DEFAULT_RENDER_OPTIONS.sayHello=true
 * @property {boolean} DEFAULT_RENDER_OPTIONS.noWebAudio=false
 * @property {boolean} DEFAULT_RENDER_OPTIONS.noWebGL=false
 * @property {number} DEFAULT_RENDER_OPTIONS.frameLimit=35
 * @property {boolean} DEFAULT_RENDER_OPTIONS.persistantData=true
 * @property {boolean} DEFAULT_RENDER_OPTIONS.stopAtVisibilityChange=true
 * @property {array} DEFAULT_RENDER_OPTIONS.audioExts
 * @property {boolean} DEFAULT_RENDER_OPTIONS.pauseOnVisibilityChange=true
 */
constants.DEFAULT_GAME_OPTIONS = {
    debug: false, //todo
    sayHello: true,
    noWebAudio: false, //todo
    noWebGL: false,
    frameLimit: 35, //TODO: Cambiar esto, puede confundir por fps y no ms, quizás definir numero de frame minimo?
    persistantData: true, //todo
    stopAtVisibilityChange: true,
    audioExts: ['ogg', 'mp3', 'wav'], //todo
    scaleType: constants.GAME_SCALE_TYPE.NONE
}; //TODO: fustrum culling?

/**
 * The default name for all the constructors when we use the custom class system
 *
 * @static
 * @constant
 * @property {string} DEFAULT_CONSTRUCTOR_NAME
 */
constants.DEFAULT_CONSTRUCTOR_NAME = "_init";



module.exports = constants;
