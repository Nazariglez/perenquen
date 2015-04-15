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
 * //TODO: document
 */
constants.DEFAULT_GAME_OPTIONS = {
    id: 'pq.defaultbundle.id',
    version: "0.0.0",
    debug: false,
    sayHello: true,

    useDeltaAnimation: true,
    useSortChildrenByDepth: false,

    game : {
        width: 800,
        height: 600,
        resolution: 1,
        canvas: null,
        backgroundColor: 0x000000,
        transparentBackground: false,
        useAntialias: false,
        useWebGL: true,
        preserveDrawingBuffer: false,
        usePersitantData: false,
        scaleType: constants.GAME_SCALE_TYPE.NONE,
        minFrameLimit: 30,
        stopAtVisibiltyChange: true
        //TODO: fustrum culling?
    },

    audio : {
        useWebAudio: true,
        allowedExtensions: ["mp3", "ogg", "wav"]
    },

    input : {
        disableContextMenu: true,
        enableMouse: true,
        enableKeyboard: false,
        enableGamepad: false,
        enableAccelerometer: false
    }

};

/**
 * The default name for all the constructors when we use the custom class system
 *
 * @static
 * @constant
 * @property {string} DEFAULT_CONSTRUCTOR_NAME
 */
constants.DEFAULT_CONSTRUCTOR_NAME = "_init";



module.exports = constants;
