var PQ = PQ || {};

(function(){
    //TODO: Plugin Socket.io

    PQ.VERSION = 'v0.1.0';

    PQ.CANVAS_RENDERER = PIXI.CANVAS_RENDERER;
    PQ.WEBGL_RENDERER = PIXI.WEBGL_RENDERER;
    PQ.AUTO_RENDERER = 2;

    PQ.blendModes = PIXI.blendModes;
    PQ.scaleModes = PIXI.scaleModes;

    PQ.NONE_AUDIO = 0;
    PQ.WEB_AUDIO = 1;
    PQ.HTML_AUDIO = 2;

    PQ.screenScale = {
        NONE: 0,
        FILL: 1,
        ASPECT_FIT: 2,
        ASPECT_FILL: 3
    };

    PQ.RAD_TO_DEG = 180 / Math.PI;
    PQ.DEG_TO_RAD = Math.PI / 180;

    PQ.Config = {
        debug: false,
        mouseDoubleClickWait: 180, //TIempo de espera para lanzar el doble click en milisegundos
        methodDecoration: false, //this._super() y this._base() desactivado por defecto (más rápido)
        rendererType: PQ.AUTO_RENDERER, //PQ.AUTO_RENDERER: auto, PQ.CANVAS_RENDERER: canvas, PQ.WEBGL_RENDERER: webgl
        deltaAnimation: false, //Tiene en cuenta el tiempo en vez de los frames para las animaciones
        sayHello: true, //Log de "PixiJS vX.X.X && PerenquenJS vX.X.X [Renderer && AudioType]"
        audioType: PQ.WEB_AUDIO, //Tipo de Audio a usar
        audioExts: ['ogg', 'mp3', 'wav'], //Orden de extensiones para forzar cargas
        audioAtSameTime: 10, //Numero de audios que se pueden reproducir simultaneamente
        screenScale: PQ.screenScale.NONE, //Tipo de escalado que usa el renderer externamente
        gameId: 'PQDefault', //Namespace de identificación del localStorage
        persistentData: true, //en true los datos quedan almacenados en localStorage, en false se pierden al cerrar el juego
        pauseOnVisibilityChange: true, //Pausa al cambiar de pestaña
        captureKeyboard: false, //Escucha al teclado y genera los eventos
        frameLimit: 35, //Si se pasa de 35ms (quizás un freeze?) se asigna este maxitmo de frameElaspedTime
        resolution: 1 //Multiplica el tamaño del renderer, en retina se pondría a 2
    };

    PQ.setConfig = function(config){
        for(var i in config){
            if(config.hasOwnProperty(i)) {
                PQ.Config[i] = config[i];
            }
        }

        return this;
    };

    /**
     * basic class
     * @returns {PQ.Class}
     * @constructor
     */
    PQ.Class = function(){
        return this;
    };

    PQ.Class.prototype = {};
    PQ.Class.prototype.constructor = PQ.Class;

    /**
     * Inject properties and methods in parent classes
     */
    PQ.Class.inject = function(){
        var args = Array.prototype.slice.call(arguments, 0, arguments.length);
        var base = this._base = this._base || {};

        var inheritanceFn = function (name, fn) {
            return function () {
                var tmp = this._base;
                this._base = base[name];
                var ret = fn.apply(this, arguments);
                this._base = tmp;
                return ret;
            };
        };

        /*
            Un plugin sustituye otro, porque se almacena siempre el metodo base raiz
         */
        //TODO: Quizás idear una forma de arbol de funciones para que no se sustituyan los metodos con varios plugins, vale la pena la carga?
        for(var i = 0; i < args.length; i++){
            for(var pr in args[i]){
                if(args[i].hasOwnProperty(pr)) {
                    var property = Object.getOwnPropertyDescriptor(args[i], pr);
                    if(typeof this.prototype[pr] === "function" && !this._base[pr]){
                        this._base[pr] = this.prototype[pr];
                        if (PQ.Config.methodDecoration) {
                            property.value = inheritanceFn(pr, property.value);
                        }
                    }
                    Object.defineProperty(this.prototype, pr, property);
                }
            }
        }
    };

    /**
     * Create a new class with parent properties and methods
     */
    PQ.Class.extend = function() {
        var args = Array.prototype.slice.call(arguments, 0, arguments.length);
        var parent;
        var childClass = function PQClass(){
            if(typeof this._init === "function") return this._init.apply(this, arguments);
            return this;
        };
        var obj = Object.create(this.prototype);

        if (PQ.Config.methodDecoration) {
            parent = Object.create(this.prototype);
        }

        var inheritanceFn = function (name, fn) {
            return function () {
                var tmp = this._super;
                this._super = parent[name];
                var ret = fn.apply(this, arguments);
                this._super = tmp;
                return ret;
            };
        };

        for (var i = 0; i < args.length; i++) {
            var childPrototype = args[i];

            for (var pr in childPrototype) {
                if (childPrototype.hasOwnProperty(pr)) {
                    var property = Object.getOwnPropertyDescriptor(childPrototype, pr);

                    if (PQ.Config.methodDecoration && typeof property.value === "function" && parent[pr] && typeof parent[pr] === "function") {
                        property.value = inheritanceFn(pr, property.value);
                    }

                    Object.defineProperty(obj, pr, property);
                }
            }
        }

        childClass._super = this.prototype;
        childClass.extend = this.extend;
        childClass.inject = this.inject;
        childClass.prototype = obj;
        childClass.prototype.constructor = childClass;

        return childClass;
    };

    PQ.getRenderer = function(width, height, canvas){
        var rendererOptions = {
            resolution: 1
        };
        if(canvas)rendererOptions.view = canvas;

        width *= PQ.Config.resolution;
        height *= PQ.Config.resolution;

        /*if(navigator.isCocoonJS){
            width = (width>window.innerWidth) ? window.innerWidth : width;
            height = (height>window.innerHeight) ? window.innerHeight : height;
        }*/

        if(PQ.Config.rendererType === PQ.AUTO_RENDERER){
            return PIXI.autoDetectRenderer(width, height, rendererOptions);
        }else if(PQ.Config.rendererType === PQ.CANVAS_RENDERER){
            return new PIXI.CanvasRenderer(width, height, rendererOptions);
        }else{
            return new PIXI.WebGLRenderer(width, height, rendererOptions);
        }
    };

    /*
        Make PixiJS objects extendable
     */
    for(var i in PIXI){
        if(PIXI[i].prototype instanceof Object){
            //PIXI[i].prototype.init = PIXI[i].prototype.constructor;
            PIXI[i].prototype._init = PIXI[i].prototype.constructor;
            PIXI[i].extend = PQ.Class.extend;
            PIXI[i].inject = PQ.Class.inject;
            PQ[i] = PIXI[i];
        }
        //PQ[i] = PIXI[i];
    }


    PQ.isWebAudioSupported = false;
    PQ.isHTMLAudioSupported = false;
    PQ.isAudioSupported = true;
    PQ.currentAudioExt = null;

    function checkAudioSupport(){
        var webAudio = (!!window.AudioContext || !!window.webkitAudioContext);
        var HTMLAudio = !!window.Audio;

        if(webAudio) {
            var context, ctx;
            try {
                context = window.AudioContext || window.webkitAudioContext;
                ctx = new context();
                PQ.isWebAudioSupported = true;
            } catch (error) {
                PQ.isWebAudioSupported = false;
            }
        }

        if(HTMLAudio){
            PQ.isHTMLAudioSupported = true;
        }

        if(!webAudio&&!HTMLAudio){
            PQ.isAudioSupported = false;
        }
    }

    checkAudioSupport();

    PQ.getAudioType = function(){
        if(PQ.isAudioSupported && PQ.Config.audioType !== PQ.NONE_AUDIO){
            if(PQ.Config.audioType === PQ.WEB_AUDIO && PQ.isWebAudioSupported){
                return PQ.WEB_AUDIO;
            }

            return PQ.HTML_AUDIO;
        }

        return PQ.NONE_AUDIO;
    };

    function getVisibilityChange(){
        if(typeof document.hidden !== 'undefined'){
            return 'visibilitychange';
        }else if(typeof document.webkitHidden !== 'undefined'){
            return 'webkitvisibilitychange';
        }else if(typeof document.mozHidden !== 'undefined'){
            return 'mozvisibilitychange';
        }else if(typeof document.msHidden !== 'undefined'){
            return 'msvisibilitychange';
        }
    }

    PQ.visibilityChange = function(game){
        document.addEventListener(getVisibilityChange(), function() {
            var hidden = document.hidden || document.webkitHidden || document.mozHidden || document.msHidden;
            game.visibilityChange(!!hidden);
        }, false);
    };


    PQ.sayHello = function(renderer, audio){
        console.log('Pixi.js ' + PIXI.VERSION + ' && Perenquen.js ' + PQ.VERSION + ' [' + renderer + ' - ' + audio + ']');
    };

    PQ.log = function(){
        if(PQ.Config.debug){
            console.log.apply(console, arguments);
        }
    };

    PIXI.dontSayHello = true;

})();