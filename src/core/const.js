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
    HTMLADUDIO : 2
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
 * @property {boolean} DEFAULT_RENDER_OPTIONS.ersistantData=true
 * @property {array} DEFAULT_RENDER_OPTIONS.audioExts
 * @property {boolean} DEFAULT_RENDER_OPTIONS.pauseOnVisibilityChange=true
 */
constants.DEFAULT_GAME_OPTIONS = {
    debug: false,
    sayHello: true,
    noWebAudio: false,
    noWebGL: false,
    frameLimit: 35,
    persistantData: true,
    audioExts: ['ogg', 'mp3', 'wav'],
    pauseOnVisibilityChange: true
};

module.exports = constants;
