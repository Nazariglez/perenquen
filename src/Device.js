(function(){

    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate || null;


    var Device = PQ.Class.extend({

        isDesktop: false,
        isNodeWebkit: (typeof process === "object" && process.title === "node" && typeof global === "object"),
        isTouchDevice: 'ontouchstart' in window,
        isCocoonJS: navigator.isCocoonJS,

        canVibrate: !!navigator.vibrate,

        _init: function(){
            /*
                TODO: Diferente informacion, sobre el navegador
                si es movil, si es desktop, que navegador, tamaño
                pixel ratio, si soporta touch events, etc...
             */
        },

        vibrate: function(value){
            if(this.canVibrate){
                navigator.vibrate(value);
            }

            return this;
        }

    });

    PQ.Device = new Device();
})();