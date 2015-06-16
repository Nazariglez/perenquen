//Many checks are based on https://github.com/arasatasaygin/is.js/blob/master/is.js
require('../polyfill/index');

var userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '',
    vendor = 'navigator' in window && 'vendor' in navigator && navigator.vendor.toLowerCase() || '',
    appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || '';

//Browsers
var isChrome = /chrome|chromium/i.test(userAgent) && /google inc/.test(vendor),
    isFirefox = /firefox/i.test(userAgent),
    isIE = /msie/i.test(userAgent) || "ActiveXObject" in window,
    isOpera = /^Opera\//.test(userAgent) || /\x20OPR\//.test(userAgent),
    isSafari = /safari/i.test(userAgent) && /apple computer/i.test(vendor);

//Devices && OS
var isIphone = /iphone/i.test(userAgent),
    isIpad = /ipad/i.test(userAgent),
    isIpod = /ipod/i.test(userAgent),
    isAndroid = /android/i.test(userAgent),
    isAndroidPhone = /android/i.test(userAgent) && /mobile/i.test(userAgent),
    isAndroidTablet = /android/i.test(userAgent) && !/mobile/i.test(userAgent),
    isLinux = /linux/i.test(appVersion),
    isMac = /mac/i.test(appVersion),
    isWindow = /win/i.test(appVersion),
    isWindowPhone = isWindow && /phone/i.test(userAgent),
    isWindowTablet = isWindow && !isWindowPhone && /touch/i.test(userAgent),
    isMobile = isIphone || isIpod|| isAndroidPhone || isWindowPhone,
    isTablet = isIpad || isAndroidTablet || isWindowTablet,
    isDesktop = !isMobile && !isTablet,
    isTouchDevice = 'ontouchstart' in window ||'DocumentTouch' in window && document instanceof DocumentTouch,
    isCocoon = !!navigator.isCocoonJS,
    isNodeWebkit = !!(typeof process === "object" && process.title === "node" && typeof global === "object"),
    isEjecta = !!window.ejecta,
    isCrosswalk = /Crosswalk/.test(userAgent),
    isCordova = !!window.cordova,
    isElectron = !!(process && process.versions && (process.versions.electron || process.versions['atom-shell']));

var hasVibrate = !!navigator.vibrate && (isMobile || isTablet),
    hasMouseWheel = 'onwheel' in window || 'onmousewheel' in window || 'MouseScrollEvent' in window,
    hasAccelerometer = 'DeviceMotionEvent' in window,
    hasGamepad = !!navigator.getGamepads || !!navigator.webkitGetGamepads;

//FullScreen
var div = document.createElement('div');
var fullScreenRequest = div.requestFullscreen || div.webkitRequestFullScreen || div.msRequestFullScreen || div.mozRequestFullScreen,
    fullScreenCancel = document.cancelFullScreen || document.exitFullScreen || document.webkitCancelFullScreen || document.msCancelFullScreen || document.mozCancelFullScreen,
    hasFullScreen = !!(fullScreenRequest && fullScreenCancel);

//Audio
var hasHTMLAudio = !!window.Audio,
    webAudioContext = window.AudioContext || window.webkitAudioContext,
    hasWebAudio = !!webAudioContext,
    hasAudio = hasWebAudio || hasHTMLAudio,
    hasMp3 = false,
    hasOgg = false,
    hasWav = false,
    hasM4a = false;

//Audio mimeTypes
if(hasAudio){
    var audio = document.createElement('audio');
    hasMp3 = audio.canPlayType('audio/mpeg;') !== "";
    hasOgg = audio.canPlayType('audio/ogg; codecs="vorbis"') !== "";
    hasWav = audio.canPlayType('audio/wav') !== "";
    hasM4a = audio.canPlayType('audio/mp4; codecs="mp4a.40.5"') !== "";
}

var Device = module.exports = {
    isChrome : isChrome,
    isFirefox : isFirefox,
    isIE : isIE,
    isOpera : isOpera,
    isSafari : isSafari,
    isIphone : isIphone,
    isIpad : isIpad,
    isIpod : isIpod,
    isAndroid : isAndroid,
    isAndroidPhone : isAndroidPhone,
    isAndroidTablet : isAndroidTablet,
    isLinux : isLinux,
    isMac : isMac,
    isWindow : isWindow,
    isWindowPhone : isWindowPhone,
    isWindowTablet : isWindowTablet,
    isMobile : isMobile,
    isTablet : isTablet,
    isDesktop : isDesktop,
    isTouchDevice : isTouchDevice,
    isCocoon : isCocoon,
    isNodeWebkit : isNodeWebkit,
    isEjecta : isEjecta,
    isCordova : isCordova,
    isCrosswalk : isCrosswalk,
    isElectron : isElectron,
    isAtomShell : isElectron, //TODO: Remove soon, when atom-shell (version) is deprecated

    //isOnline : navigator.onLine,
    hasVibrate : hasVibrate,
    hasMouseWheel : hasMouseWheel,
    hasFullScreen : hasFullScreen,
    hasAccelerometer : hasAccelerometer,
    hasGamepad : hasGamepad,

    fullScreenRequest : fullScreenRequest ? fullScreenRequest.name : undefined,
    fullScreenCancel : fullScreenCancel ? fullScreenCancel.name : undefined,

    hasAudio : hasAudio,
    hasHTMLAudio : hasHTMLAudio,
    hasWebAudio: hasWebAudio,
    webAudioContext : webAudioContext,

    hasMp3 : hasMp3,
    hasM4a : hasM4a,
    hasOgg : hasOgg,
    hasWav : hasWav,

    getMouseWheelEvent : function(){
        if(!hasMouseWheel)return;
        var evt;
        if('onwheel' in window){
            evt = 'wheel';
        }else if('onmousewheel' in window){
            evt = 'mousewheel';
        }else if('MouseScrollEvent' in window){
            evt = 'DOMMouseScroll';
        }

        return evt;
    },

    vibrate : function(value){
        if(hasVibrate){
            navigator.vibrate(value);
        }
    }
};

Object.defineProperties(Device, {
    isOnline: {
        get : function() {
            return window.navigator.onLine;
        }
    }
});