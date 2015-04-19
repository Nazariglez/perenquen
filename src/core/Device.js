//Based on https://github.com/arasatasaygin/is.js/blob/master/is.js
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
    isNodeWebkit = typeof process === "object" && process.title === "node" && typeof global === "object",
    isEjecta = !!window.ejecta,
    isCrosswalk = /Crosswalk/.test(userAgent),
    isCordova = !!window.cordova;

var canVibrate = !!navigator.vibrate && (isMobile || isTablet);

//TODO: Check audio support

module.exports = {
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

    isOnline : navigator.onLine,
    canVibrate : canVibrate,

    vibrate : function(value){
        if(canVibrate){
            navigator.vibrate(value);
        }
    }
};

