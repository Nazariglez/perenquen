/**
 * PerenquenJS - http://perenquenjs.com
 * Version: 0.0.0
 * Compiled: Mon Dec 22 2014 19:12:17 GMT+0000 (WET)
 *
 * Needs PixiJS v2.1.0 to work. [http://pixijs.com]
 */
var PQ = PQ || {};

(function(){
    //TODO: Plugin Socket.io

    PQ.VERSION = 'v0.0.0';

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
(function(){
    //Anchor fix
    PIXI.WebGLSpriteBatch.inject({
        render: function(sprite)
        {
            var texture = sprite.texture;

            //TODO set blend modes..
            // check texture..
            if(this.currentBatchSize >= this.size)
            {
                this.flush();
                this.currentBaseTexture = texture.baseTexture;
            }

            // get the uvs for the texture
            var uvs = texture._uvs;
            // if the uvs have not updated then no point rendering just yet!
            if(!uvs)return;

            // get the sprites current alpha
            var alpha = sprite.worldAlpha;
            var tint = sprite.tint;

            var verticies = this.vertices;

            // TODO trim??
            var aX = 0;
            var aY = 0;

            var w0, w1, h0, h1;

            if (texture.trim)
            {
                // if the sprite is trimmed then we need to add the extra space before transforming the sprite coords..
                var trim = texture.trim;

                w1 = trim.x - aX * trim.width;
                w0 = w1 + texture.crop.width;

                h1 = trim.y - aY * trim.height;
                h0 = h1 + texture.crop.height;

            }
            else
            {
                w0 = (texture.frame.width ) * (1-aX);
                w1 = (texture.frame.width ) * -aX;

                h0 = texture.frame.height * (1-aY);
                h1 = texture.frame.height * -aY;
            }

            var index = this.currentBatchSize * 4 * this.vertSize;

            var resolution = texture.baseTexture.resolution;

            var worldTransform = sprite.worldTransform;

            var a = worldTransform.a / resolution;
            var b = worldTransform.b / resolution;
            var c = worldTransform.c / resolution;
            var d = worldTransform.d / resolution;
            var tx = worldTransform.tx;
            var ty = worldTransform.ty;


            // xy
            verticies[index++] = a * w1 + c * h1 + tx;
            verticies[index++] = d * h1 + b * w1 + ty;
            // uv
            verticies[index++] = uvs.x0;
            verticies[index++] = uvs.y0;
            // color
            verticies[index++] = alpha;
            verticies[index++] = tint;

            // xy
            verticies[index++] = a * w0 + c * h1 + tx;
            verticies[index++] = d * h1 + b * w0 + ty;
            // uv
            verticies[index++] = uvs.x1;
            verticies[index++] = uvs.y1;
            // color
            verticies[index++] = alpha;
            verticies[index++] = tint;

            // xy
            verticies[index++] = a * w0 + c * h0 + tx;
            verticies[index++] = d * h0 + b * w0 + ty;
            // uv
            verticies[index++] = uvs.x2;
            verticies[index++] = uvs.y2;
            // color
            verticies[index++] = alpha;
            verticies[index++] = tint;

            // xy
            verticies[index++] = a * w1 + c * h0 + tx;
            verticies[index++] = d * h0 + b * w1 + ty;
            // uv
            verticies[index++] = uvs.x3;
            verticies[index++] = uvs.y3;
            // color
            verticies[index++] = alpha;
            verticies[index++] = tint;

            // increment the batchsize
            this.sprites[this.currentBatchSize++] = sprite;

        },

        renderTilingSprite : function(tilingSprite)
        {
            var texture = tilingSprite.tilingTexture;

            // check texture..
            if(this.currentBatchSize >= this.size)
            {
                //return;
                this.flush();
                this.currentBaseTexture = texture.baseTexture;
            }

            // set the textures uvs temporarily
            // TODO create a separate texture so that we can tile part of a texture

            if(!tilingSprite._uvs)tilingSprite._uvs = new PIXI.TextureUvs();

            var uvs = tilingSprite._uvs;

            tilingSprite.tilePosition.x %= texture.baseTexture.width * tilingSprite.tileScaleOffset.x;
            tilingSprite.tilePosition.y %= texture.baseTexture.height * tilingSprite.tileScaleOffset.y;

            var offsetX =  tilingSprite.tilePosition.x/(texture.baseTexture.width*tilingSprite.tileScaleOffset.x);
            var offsetY =  tilingSprite.tilePosition.y/(texture.baseTexture.height*tilingSprite.tileScaleOffset.y);

            var scaleX =  (tilingSprite.width / texture.baseTexture.width)  / (tilingSprite.tileScale.x * tilingSprite.tileScaleOffset.x);
            var scaleY =  (tilingSprite.height / texture.baseTexture.height) / (tilingSprite.tileScale.y * tilingSprite.tileScaleOffset.y);

            uvs.x0 = 0 - offsetX;
            uvs.y0 = 0 - offsetY;

            uvs.x1 = (1 * scaleX) - offsetX;
            uvs.y1 = 0 - offsetY;

            uvs.x2 = (1 * scaleX) - offsetX;
            uvs.y2 = (1 * scaleY) - offsetY;

            uvs.x3 = 0 - offsetX;
            uvs.y3 = (1 *scaleY) - offsetY;

            // get the tilingSprites current alpha
            var alpha = tilingSprite.worldAlpha;
            var tint = tilingSprite.tint;

            var  verticies = this.vertices;

            var width = tilingSprite.width;
            var height = tilingSprite.height;

            // TODO trim??
            var aX = 0;
            var aY = 0;
            var w0 = width * (1-aX);
            var w1 = width * -aX;

            var h0 = height * (1-aY);
            var h1 = height * -aY;

            var index = this.currentBatchSize * 4 * this.vertSize;

            var resolution = texture.baseTexture.resolution;

            var worldTransform = tilingSprite.worldTransform;

            var a = worldTransform.a / resolution;//[0];
            var b = worldTransform.b / resolution;//[3];
            var c = worldTransform.c / resolution;//[1];
            var d = worldTransform.d / resolution;//[4];
            var tx = worldTransform.tx;//[2];
            var ty = worldTransform.ty;///[5];

            // xy
            verticies[index++] = a * w1 + c * h1 + tx;
            verticies[index++] = d * h1 + b * w1 + ty;
            // uv
            verticies[index++] = uvs.x0;
            verticies[index++] = uvs.y0;
            // color
            verticies[index++] = alpha;
            verticies[index++] = tint;

            // xy
            verticies[index++] = (a * w0 + c * h1 + tx);
            verticies[index++] = d * h1 + b * w0 + ty;
            // uv
            verticies[index++] = uvs.x1;
            verticies[index++] = uvs.y1;
            // color
            verticies[index++] = alpha;
            verticies[index++] = tint;

            // xy
            verticies[index++] = a * w0 + c * h0 + tx;
            verticies[index++] = d * h0 + b * w0 + ty;
            // uv
            verticies[index++] = uvs.x2;
            verticies[index++] = uvs.y2;
            // color
            verticies[index++] = alpha;
            verticies[index++] = tint;

            // xy
            verticies[index++] = a * w1 + c * h0 + tx;
            verticies[index++] = d * h0 + b * w1 + ty;
            // uv
            verticies[index++] = uvs.x3;
            verticies[index++] = uvs.y3;
            // color
            verticies[index++] = alpha;
            verticies[index++] = tint;

            // increment the batchsize
            this.sprites[this.currentBatchSize++] = tilingSprite;
        }
    });


    PIXI.WebGLFastSpriteBatch.inject({
        renderSprite : function(sprite)
        {
            //sprite = children[i];
            if(!sprite.visible)return;

            // TODO trim??
            if(sprite.texture.baseTexture !== this.currentBaseTexture)
            {
                this.flush();
                this.currentBaseTexture = sprite.texture.baseTexture;

                if(!sprite.texture._uvs)return;
            }

            var uvs, verticies = this.vertices, width, height, w0, w1, h0, h1, index;

            uvs = sprite.texture._uvs;

            width = sprite.texture.frame.width;
            height = sprite.texture.frame.height;

            var aX = 0,
                aY = 0;

            if (sprite.texture.trim)
            {
                // if the sprite is trimmed then we need to add the extra space before transforming the sprite coords..
                var trim = sprite.texture.trim;

                w1 = trim.x - aX * trim.width;
                w0 = w1 + sprite.texture.crop.width;

                h1 = trim.y - aY * trim.height;
                h0 = h1 + sprite.texture.crop.height;
            }
            else
            {
                w0 = (sprite.texture.frame.width ) * (1-aX);
                w1 = (sprite.texture.frame.width ) * -aX;

                h0 = sprite.texture.frame.height * (1-aY);
                h1 = sprite.texture.frame.height * -aY;
            }

            index = this.currentBatchSize * 4 * this.vertSize;

            // xy
            verticies[index++] = w1;
            verticies[index++] = h1;

            verticies[index++] = sprite.position.x;
            verticies[index++] = sprite.position.y;

            //scale
            verticies[index++] = sprite.scale.x;
            verticies[index++] = sprite.scale.y;

            //rotation
            verticies[index++] = sprite.rotation;

            // uv
            verticies[index++] = uvs.x0;
            verticies[index++] = uvs.y1;
            // color
            verticies[index++] = sprite.alpha;


            // xy
            verticies[index++] = w0;
            verticies[index++] = h1;

            verticies[index++] = sprite.position.x;
            verticies[index++] = sprite.position.y;

            //scale
            verticies[index++] = sprite.scale.x;
            verticies[index++] = sprite.scale.y;

            //rotation
            verticies[index++] = sprite.rotation;

            // uv
            verticies[index++] = uvs.x1;
            verticies[index++] = uvs.y1;
            // color
            verticies[index++] = sprite.alpha;


            // xy
            verticies[index++] = w0;
            verticies[index++] = h0;

            verticies[index++] = sprite.position.x;
            verticies[index++] = sprite.position.y;

            //scale
            verticies[index++] = sprite.scale.x;
            verticies[index++] = sprite.scale.y;

            //rotation
            verticies[index++] = sprite.rotation;

            // uv
            verticies[index++] = uvs.x2;
            verticies[index++] = uvs.y2;
            // color
            verticies[index++] = sprite.alpha;




            // xy
            verticies[index++] = w1;
            verticies[index++] = h0;

            verticies[index++] = sprite.position.x;
            verticies[index++] = sprite.position.y;

            //scale
            verticies[index++] = sprite.scale.x;
            verticies[index++] = sprite.scale.y;

            //rotation
            verticies[index++] = sprite.rotation;

            // uv
            verticies[index++] = uvs.x3;
            verticies[index++] = uvs.y3;
            // color
            verticies[index++] = sprite.alpha;

            // increment the batchs
            this.currentBatchSize++;

            if(this.currentBatchSize >= this.size)
            {
                this.flush();
            }
        }
    });

    PIXI.InteractionManager.inject({
        hitTest : function(item, interactionData)
        {
            var global = interactionData.global;

            if (!item.worldVisible)
            {
                return false;
            }

            // temp fix for if the element is in a non visible

            var worldTransform = item.worldTransform, i,
                a = worldTransform.a, b = worldTransform.b,
                c = worldTransform.c, tx = worldTransform.tx,
                d = worldTransform.d, ty = worldTransform.ty,

                id = 1 / (a * d + c * -b),
                x = d * id * global.x + -c * id * global.y + (ty * c - tx * d) * id,
                y = a * id * global.y + -b * id * global.x + (-ty * a + tx * b) * id;


            interactionData.target = item;

            //a sprite or display object with a hit area defined
            if (item.hitArea && item.hitArea.contains)
            {
                if (item.hitArea.contains(x, y))
                {
                    interactionData.target = item;
                    return true;
                }
                return false;
            }
            // a sprite with no hitarea defined
            else if(item instanceof PIXI.Sprite)
            {
                var width = item.width;
                var height = item.height;
                var x1 = 0;
                var y1;

                if (x > x1 && x < x1 + width)
                {
                    y1 = 0;

                    if (y > y1 && y < y1 + height)
                    {
                        // set the target property if a hit is true!
                        interactionData.target = item;
                        return true;
                    }
                }
            }
            else if(item instanceof PIXI.Graphics)
            {
                var graphicsData = item.graphicsData;
                for (i = 0; i < graphicsData.length; i++)
                {
                    var data = graphicsData[i];
                    if(!data.fill)continue;

                    // only deal with fills..
                    if(data.shape)
                    {
                        if(data.shape.contains(x, y))
                        {
                            interactionData.target = item;
                            return true;
                        }
                    }
                }
            }

            var length = item.children.length;

            for (i = 0; i < length; i++)
            {
                var tempItem = item.children[i];
                var hit = this.hitTest(tempItem, interactionData);
                if (hit)
                {
                    // hmm.. TODO SET CORRECT TARGET?
                    interactionData.target = item;
                    return true;
                }
            }
            return false;
        }
    });
})();
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
(function(){

    //TODO: Mejorar la información dada
    var Debug = PQ.Class.extend({
        panel: null,
        enabled: false,
        fps: 0,
        ms: 0,

        fpsElement: null,
        msElement: null,
        actorsElement: null,

        frames: 0,
        startTime: 0,

        sceneActors: 0,

        _init: function(){
            this.panel = document.createElement('div');
            this.panel.style.cssText = "position:absolute;" +
                "left:0px;" +
                "bottom:0px;" +
                "background-color:#34352E;" +
                "border-top:2px solid #000;" +
                "width:" + window.innerWidth + "px;" +
                "height:20px;";

            var fps = document.createElement('div');
            fps.style.cssText = "text-align: left;" +
            "color: #c0c0c0;" +
            "margin-left: 5px;" +
            "float: left;";
            fps.innerHTML = "<b>Fps:</b> ";
            this.fpsElement = document.createElement('span');
            this.fpsElement.innerHTML = this.fps;
            fps.appendChild(this.fpsElement);

            this.panel.appendChild(fps);

            var ms = document.createElement('div');
            ms.style.cssText = "text-align: left;" +
            "color: #c0c0c0;" +
            "margin-left: 5px;" +
            "float: left;";
            ms.innerHTML = "|| <b>Ms:</b> ";
            this.msElement = document.createElement('span');
            this.msElement.innerHTML = this.ms;
            ms.appendChild(this.msElement);

            this.panel.appendChild(ms);

            var actors = document.createElement('div');
            actors.style.cssText = "text-align: left;" +
            "color: #c0c0c0;" +
            "margin-left: 5px;" +
            "float: left;";
            actors.innerHTML = "|| <b>Actors:</b> ";
            this.actorsElement = document.createElement('span');
            this.actorsElement.innerHTML = this.sceneActors;
            actors.appendChild(this.actorsElement);

            this.panel.appendChild(actors);
            return this;
        },

        enable: function(){
            document.body.appendChild(this.panel);
            this.enabled = true;
            return this;
        },

        disable: function(){
            this.enabled = false;
            document.body.removeChild(this.panel);
            return this;
        },

        update: function(){
            if(this.enabled) {
                this.frames++;
                this.ms += PQ.delta;
                this.actorsElement.innerHTML = this.sceneActors;

                var time = Date.now();
                if(time > this.startTime + 1000){
                    this.fps = Math.round((this.frames*1000)/(time-this.startTime));

                    this.msElement.innerHTML = Math.round((this.ms/this.frames)*1000);
                    this.fpsElement.innerHTML = this.fps;

                    this.startTime = time;
                    this.frames = 0;
                    this.ms = 0;
                }

                this.sceneActors = 0;
            }
        }
    });

    PQ.Debug = new Debug();

})();
(function(){
    PQ.JsonLoader = PIXI.JsonLoader.extend({
        _init: function(url, crossorigin){
            return PQ.JsonLoader._super._init.call(this, url, crossorigin);
        },

        onJSONLoaded: function(){

            if(!this.ajaxRequest.responseText )
            {
                this.onError();
                return;
            }

            this.json = JSON.parse(this.ajaxRequest.responseText);

            if(this.json.frames)
            {
                // sprite sheet
                var textureUrl = this.baseUrl + this.json.meta.image;
                var image = new PQ.ImageLoader(textureUrl, this.crossorigin);
                var frameData = this.json.frames;

                this.texture = image.texture.baseTexture;
                image.addEventListener('loaded', this.onLoaded.bind(this));

                for (var i in frameData)
                {
                    var rect = frameData[i].frame;

                    if (rect)
                    {
                        var textureSize = new PQ.Rectangle(rect.x, rect.y, rect.w, rect.h);
                        var crop = textureSize.clone();
                        var trim = null;

                        //  Check to see if the sprite is trimmed
                        if (frameData[i].trimmed)
                        {
                            var actualSize = frameData[i].sourceSize;
                            var realSize = frameData[i].spriteSourceSize;
                            trim = new PIXI.Rectangle(realSize.x, realSize.y, actualSize.w, actualSize.h);
                        }

                        var asset = {
                            type: 'texture',
                            asset: new PQ.Texture(this.texture, textureSize, crop, trim)
                        };
                        PQ.AssetCache.addAsset(i, asset);
                    }
                }

                image.load();

            }
            else if(this.json.bones)
            {
                //TODO: Revisar el Spine y los atlas a ver si funcionan correctamente.
                // spine animation
                var spineJsonParser = new spine.SkeletonJson();
                PIXI.AnimCache[this.url] = spineJsonParser.readSkeletonData(this.json);
                this.onLoaded();
            }
            else
            {
                this.onLoaded();
            }
        }
    });
})();
(function(){

    PQ.BitmapFontLoader = PIXI.BitmapFontLoader.extend({
        _init: function(url, crossorigin){
            this.type = url.split('?').shift().split('.').pop().toLowerCase();
            return PQ.BitmapFontLoader._super._init.call(this, url, crossorigin);
        },

        load: function(){
            this.ajaxRequest = new PIXI.AjaxRequest();
            this.ajaxRequest.onreadystatechange = this.onFontLoaded.bind(this);

            this.ajaxRequest.open('GET', this.url, true);
            if (this.ajaxRequest.overrideMimeType) this.ajaxRequest.overrideMimeType('application/xml');
            this.ajaxRequest.send(null);
        },

        onFontLoaded: function(){
            if(this.type === "xml"){
                this.onXMLLoaded();
                return;
            }

            if (this.ajaxRequest.readyState === 4) {
                if (this.ajaxRequest.status === 200 || window.location.protocol.indexOf('http') === -1) {
                    if(this.ajaxRequest.responseXML) {
                        this.onXMLLoaded();
                    }else if(navigator.isCocoonJS && this.ajaxRequest.responseText.indexOf('<') === 0){
                        //if is fnt file but xml format
                        this.onXMLLoaded();
                    }else{
                        this.onFNTLoaded();
                    }
                }
            }
        },

        onFNTLoaded: function(){
            if(!this.ajaxRequest.responseText){
                this.onError();
                return;
            }

            var text = this.ajaxRequest.responseText;
            var lines = text.split('\n');
            var image, currentLine, attr, data = {};

            data.chars = {};

            for(var i = 0; i < lines.length; i++){
                if(lines[i].indexOf("info ") === 0){
                    currentLine = lines[i].substring(5);
                    attr = this.getAttr(currentLine);

                    data.font = attr.face;
                    data.size = parseInt(attr.size, 10);
                }

                if(lines[i].indexOf("common ") === 0){
                    currentLine = lines[i].substring(7);
                    attr = this.getAttr(currentLine);
                    data.lineHeight = parseInt(attr.lineHeight,10);
                }

                if(lines[i].indexOf("page ") === 0){
                    currentLine = lines[i].substring(5);
                    var file = (currentLine.substring(currentLine.indexOf('file='))).split('=')[1];
                    var textureUrl = this.baseUrl + file.substr(1,file.length-2);
                    image = new PQ.ImageLoader(textureUrl, this.crossOrigin);
                    this.texture = image.texture.baseTexture;
                }

                if(lines[i].indexOf("char ") === 0){
                    currentLine = lines[i].substring(5);
                    attr = this.getAttr(currentLine);
                    var charCode = parseInt(attr.id,10);

                    var textureRect = new PQ.Rectangle(
                        parseInt(attr.x, 10),
                        parseInt(attr.y, 10),
                        parseInt(attr.width, 10),
                        parseInt(attr.height, 10)
                    );

                    data.chars[charCode] = {
                        xOffset: parseInt(attr.xoffset, 10),
                        yOffset: parseInt(attr.yoffset, 10),
                        xAdvance: parseInt(attr.xadvance, 10),
                        kerning: {},
                        texture: PIXI.TextureCache[charCode] = new PQ.Texture(this.texture, textureRect)
                    };
                }

                if(lines[i].indexOf('kerning ') === 0){
                    currentLine = lines[i].substring(8);
                    attr = this.getAttr(currentLine);

                    var first = parseInt(attr.first, 10);
                    var second = parseInt(attr.second, 10);

                    data.chars[second].kerning[first] = parseInt(attr.amount, 10);
                }
            }

            PIXI.BitmapText.fonts[data.font] = data;
            image.addEventListener('loaded', this.onLoaded.bind(this));
            image.load();

        },

        getAttr: function(line){
            var attr, i, n, data = {};

            /*
                Separo los strings con espacios para que queden excluidos en el split, y luego
                resituarlos en sus lugares
             */
            //TODO: Seguro que hay una forma mejor de hacer un match excluyendo resultados que esta mierda de bucles
            var regex = /"(\w*\d*\s*(-|_)*)*"/g;
            var matchs = line.match(regex);
            if(matchs && matchs.length >= 1){
                for(i = 0; i < matchs.length; i++){
                    line = line.replace(matchs[i], '{{' + i + '}}');
                }
                attr = line.split(/\s+/g);
                for(i = 0; i < matchs.length; i++) {
                    matchs[i] = matchs[i].substr(1, matchs[i].length-2);
                    for (n = 0; n < attr.length; n++) {
                        attr[n] = attr[n].replace('{{' + i + '}}', matchs[i]);
                    }
                }
            }else{
                attr = line.split(/\s+/g);
            }

            //Parece que los textObject de pixi no soportan igualmente nombres con espacio


            for(i = 0; i < attr.length; i++){
                var d = attr[i].split('=');
                data[d[0]] = d[1];
            }

            return data;
        }
    });

})();
(function(){

    PQ.ImageLoader = PIXI.ImageLoader.extend({
        _init: function(url, crossorigin){
            PQ.ImageLoader._super._init.call(this, url, crossorigin);
            var match = url.match(/@\dx\./g);
            if(match){
                this.texture.baseTexture.resolution = parseInt(match[0].match(/\d/g)[0]);
            }
        }
    });

})();
(function(){
    PQ.DataManager = PQ.Class.extend({
        _data: null,
        _init: function(id){
            this.id = id || 'PQDefault';
            this._load();
        },

        set: function(key, value){
            if(Object.prototype.toString.call(key) === "[object Object]"){
                for(var k in key){
                    this._set(k, key[k]);
                }
            }else{
                this._set(key, value);
            }

            this._save();
            return this;
        },

        _set: function(key, value){
            this._data.game[key] = value;
        },

        get: function(key){
            return this._data.game[key];
        },

        getAll: function(){
            return this._data.game;
        },

        reset: function(){
            this._data = this._getDefaultData();
            this._save();
            return this;
        },

        _load: function(){
            this._data = JSON.parse(localStorage.getItem(this.id)) || this._getDefaultData();
        },

        _save: function(){
            //TODO: Quizás añadir algún metadato extra?
            if(PQ.Config.persistentData)localStorage.setItem(this.id, JSON.stringify(this._data));
        },

        _getDefaultData: function(){
            return {
                game: {}
            };
        }


    });
})();
(function(){

    var resizeListener = null;

    PQ.Game = PQ.Class.extend({
        _id : 0,
        renderer: null,
        _game: null,
        _size : null,
        _raf: null,
        _lastTime: 0,
        _frameElapsedTime: null,
        _onStart: null,
        time: 0,
        paused: false,

        currentScene: null,

        _init: function(width, height, canvas){
            this._createRenderer(width, height, canvas);
            this.sceneManager = new PQ.SceneManager(this);
            this.assetLoader = new PQ.AssetLoader(this);
            this.audioManager = new PQ.AudioManager(this, PQ.Config.audioAtSameTime);
            this.timerManager = new PQ.TimerManager();
            this.tweenManager = new PQ.TweenManager();
            this.dataManager = new PQ.DataManager(PQ.Config.gameId);

            if(this.sceneManager.getTotal() === 0){
                this.sceneManager.createScene('initial', 0x000001);
            }

            if(PQ.Config.screenScale !== PQ.screenScale.NONE){
                this.enableAutoResize(true);
            }

            if(PQ.Config.captureKeyboard){
                PQ.Input.Keyboard.enable();
            }

            //TODO: Bloquear este evento con cocoon? o pasarle otro tipo de evento para cuando la app pasa a 2 plano?
            PQ.visibilityChange(this);
            this._sayHello();

            if(PQ.Config.debug){
                PQ.Debug.enable();
            }

            PQ.log('Game Resolution: ' + PQ.Config.resolution);
            return this;
        },

        createScene: function(id, color){
            return this.sceneManager.createScene(id, color);
        },

        addScene: function(scene, id){
            this.sceneManager.addScene(scene, id);
            return this;
        },

        getJson: function(id){
            return PQ.AssetCache.getJson(id);
        },

        getAudio: function(id){
            return PQ.AssetCache.getAudio(id);
        },

        getTexture: function(id){
            return PQ.AssetCache.getTexture(id);
        },

        visibilityChange: function(hidden){
            if(PQ.Config.pauseOnVisibilityChange){
                this.setPause(hidden);
            }
            return this;
        },

        _sayHello: function(){
            if(PQ.Config.sayHello){
                var renderType = (this.renderer instanceof PIXI.WebGLRenderer) ? 'WebGL' : 'Canvas';
                var audioType;
                if(this.audioManager.type === PQ.HTML_AUDIO){
                    audioType = 'HTMLAudio';
                }else if(this.audioManager.type === PQ.WEB_AUDIO){
                    audioType = 'WebAudio';
                }else{
                    audioType = 'None';
                }
                PQ.sayHello(renderType,audioType);
            }
        },

        _createRenderer : function(width, height, canvas){
            this._size = {
                width: width,
                height: height
            };

            if(navigator.isCocoonJS && !canvas){
                canvas = window.document.createElement('screencanvas');
            }
            this.renderer = PQ.getRenderer(width, height, canvas);
            this.resize(this._size.width, this._size.height);
            document.body.appendChild(this.renderer.view);

            return this;
        },

        _updateTime: function(){
            var now = Date.now();
            this._frameElapsedTime = now - this._lastTime;
            this._lastTime = now;
            PQ.delta = this._frameElapsedTime/1000;
        },

        start: function(){
            this._updateTime();
            this._animate();
            return this;
        },

        _update: function(){
            this._raf = window.requestAnimationFrame(this._animate.bind(this));
            this._updateTime();
            this.renderer.render(this.sceneManager);

            if(!this.paused && this.update(this.time, this._frameElapsedTime) !== false){
                this.time += this._frameElapsedTime;

                this.timerManager._update(this.time, this._frameElapsedTime);
                this.tweenManager._update(this.time, this._frameElapsedTime);
                this.sceneManager._update(this.time, this._frameElapsedTime);
            }

            if(PQ.Config.captureKeyboard && PQ.Input.Keyboard.enabled){
                PQ.Input.Keyboard._update();
            }

            PQ.Debug.update();

        },

        _animate: function(){
            this._update();
        },

        setPause: function(value){
            this.paused = (value !== false);
            this.audioManager.pauseAll(this.paused);
            return this;
        },

        pause: function(){
            return this.setPause(true);
        },

        resume: function(){
            return this.setPause(false);
        },

        createTimer: function(time){
            return this.timerManager.createTimer(time);
        },

        stop: function(){
            window.cancelAnimationFrame(this._raf);
            return this;
        },

        getSize: function(){
            return this._size;
        },

        enableAutoResize: function(value, mode){

            function removeListener(){
                if(resizeListener){
                    window.removeEventListener('resize', resizeListener);
                    resizeListener = null;
                }
            }

            mode = mode || PQ.Config.screenScale;
            value = (value !== false);
            var scope = this;
            var canvas = this.renderer.view;
            var size = this.getSize();

            if(navigator.isCocoonJS){
                //console.log('cocoonjs');
                //this.renderer.resize(window.innerWidth, window.innerHeight);
                //canvas.style.cssText = 'idtkscale:ScaleToFill;';
                return this;
            }

            if(mode !== PQ.screenScale.NONE) {
                if (value) {
                    removeListener();

                    if(PQ.Config.screenScale === PQ.screenScale.ASPECT_FIT) {

                        resizeListener = function (e) {
                            var ww = parseInt(canvas.style.width) || canvas.width;
                            var hh = parseInt(canvas.style.height) || canvas.height;

                            if (window.innerWidth < ww || window.innerHeight < hh || window.innerWidth > ww || window.innerHeight > hh) {
                                var scale = Math.min(window.innerWidth/size.width, window.innerHeight/size.height);
                                scope.resize(size.width*scale, size.height*scale);
                            }
                        };

                    }else if(PQ.Config.screenScale === PQ.screenScale.FILL){

                        resizeListener = function (e) {
                            var ww = parseInt(canvas.style.width) || canvas.width;
                            var hh = parseInt(canvas.style.height) || canvas.height;

                            if (window.innerWidth !== ww || window.innerHeight !== hh) {
                                scope.resize(window.innerWidth, window.innerHeight);
                            }
                        };

                    }else if(PQ.Config.screenScale === PQ.screenScale.ASPECT_FILL){

                        resizeListener = function (e) {
                            //TODO: Revisar en moviles
                            var ww = parseInt(canvas.style.width) || canvas.width;
                            var hh = parseInt(canvas.style.height) || canvas.height;

                            if (window.innerWidth < ww || window.innerHeight < hh || window.innerWidth > ww || window.innerHeight > hh) {
                                var scale = Math.max(window.innerWidth/size.width, window.innerHeight/size.height);
                                var width = size.width*scale,
                                    height = size.height*scale;
                                scope.resize(width, height);

                                var topMargin = (window.innerHeight-height)/2;
                                var leftMargin = (window.innerWidth-width)/2;

                                canvas.style['margin-top'] = topMargin + 'px';
                                canvas.style['margin-left'] = leftMargin + 'px';
                            }
                        };
                    }

                    window.addEventListener('resize', resizeListener);
                    resizeListener();
                } else {
                    removeListener();
                }
            }

            return this;
        },

        resize: function(width, height){
            var canvas = this.renderer.view;
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            return this;
        },

        preUpdate: function(gameTime, frameElapsedTime){return this;},
        postUpdate: function(gameTime, frameElapsedTime){return this;},
        update: function(gameTime, frameElapsedTime){return this;}
    });

    Object.defineProperty(PQ.Game.prototype, 'currentScene', {
        get : function(){
            return this.sceneManager.currentScene;
        }
    });

    Object.defineProperty(PQ.Game.prototype, 'width', {
        get : function(){
            return this._size.width;
        }
    });

    Object.defineProperty(PQ.Game.prototype, 'height', {
        get : function(){
            return this._size.height;
        }
    });

})();
(function(){

    PQ.Input = PQ.Input || {}; //TODO: Acelelometro y gamepad

    var Keyboard = PQ.Class.extend({
        _init: function(){
            this.pressedKeys = {};
            this.releasedKeys = {};
            this.downKeys = {};
            this.hotKeys = {};

            this.pressedCallbacks = [];
            this.releasedCallbacks = [];
            this.downCallbacks = [];

            this.enabled = false;
        },

        enable: function(){
            window.addEventListener('keydown', this._keyDown.bind(this));
            window.addEventListener('keyup', this._keyUp.bind(this));
            this.enabled = true;
            PQ.log('Keyboard enabled');
            return this;
        },

        disable: function(){
            window.removeEventListener('keydown', this._keyDown.bind(this));
            window.removeEventListener('keyup', this._keyUp.bind(this));
            this.enabled = false;
            PQ.log('Keyboard disabled');
            return this;
        },

        _keyDown: function(e){
            var key = e.which || e.keyCode;
            if(!this.down(key)){
                this.pressedKeys[key] = true;
                this.downKeys[key] = true;
                this._keyPressedCallback(parseInt(key));
            }
        },

        _keyPressedCallback: function(key){
            var len = this.pressedCallbacks.length;
            for(var i = 0; i < len; i++)this.pressedCallbacks[i](key);
        },

        _keyUp: function(e){
            var key = e.which || e.keyCode;
            if(this.down(key)){
                delete this.downKeys[key];
                delete this.pressedKeys[key];
                this.releasedKeys[key] = true;
                this._keyReleasedCallback(parseInt(key));
            }
        },

        _keyReleasedCallback: function(key){
            var len = this.releasedCallbacks.length;
            for(var i = 0; i < len; i++)this.releasedCallbacks[i](key);
        },

        pressed: function(key){
            return !!this.pressedKeys[key];
        },

        down: function(key){
            return !!this.downKeys[key];
        },

        released: function(key){
            return !!this.releasedKeys[key];
        },

        _update: function(){
            for(var key in this.hotKeys){
                this.hotKeys[key]._update();
            }

            var len = this.downCallbacks.length;
            for(var i = 0; i < len; i++){
                for(key in this.downKeys){
                    this.downCallbacks[i](parseInt(key));
                }
            }

            this.releasedKeys = {};
            this.pressedKeys = {};
            return this;
        },

        addHotKey: function(key){
            if(!this.hotKeys[key]){
                this.hotKeys[key] = new PQ.HotKey(key, this);
            }

            return this.hotKeys[key];
        },

        removeHotKey: function(key){
            delete this.hotKeys[key];
            return this;
        },

        clearHotKeys: function(){
            this.hotKeys = {};
            return this;
        },

        addEvent: function(state, callback){
            switch(state){
                case 'pressed': this.pressedCallbacks.push(callback); break;
                case 'released': this.releasedCallbacks.push(callback); break;
                case 'down': this.downCallbacks.push(callback); break;
            }

            return this;
        },

        removeEvent: function(state, callback){
            var arr;
            switch(state){
                case 'pressed': arr = this.pressedCallbacks; break;
                case 'released': arr = this.releasedCallbacks; break;
                case 'down': arr = this.downCallbacks; break;
            }

            var index = -1;
            for(var i = 0; i < arr.length; i++){
                if(arr[i] === callback){
                    index = i;
                    break;
                }
            }

            arr.splice(index, 1);
        }

    });

    PQ.Input.Keyboard = new Keyboard();

    PQ.HotKey = PQ.Class.extend({
        _init: function(key, manager){
            this.key = key;
            this.manager = manager;
            this.isPressed = false;
            this.isReleased = false;
            this.isDown = false;
            this.crtl = false;
            this.shift = false;
            this.alt = false;
        },

        _update: function(){
            this.isDown = this.manager.down(this.key);
            this.isPressed = this.manager.pressed(this.key);
            this.isReleased = this.manager.released(this.key);
            this.crtl = this.manager.down(PQ.Key.CTRL);
            this.shift = this.manager.down(PQ.Key.SHIFT);
            this.alt = this.manager.down(PQ.Key.ALT);
        }

    });

    //http://salinasjavi.wordpress.com/2010/06/09/codigos-javascript-del-teclado-keycodes/
    PQ.Key = {
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        SHIFT: 16,
        PAUSE: 19,
        CTRL: 17,
        ALT: 18,
        CAPS_LOCK: 20,
        ESCAPE: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        PRINT_SCREEN: 44,
        INSERT: 45,
        DELETE: 46,
        _0: 48,
        _1: 49,
        _2: 50,
        _3: 51,
        _4: 52,
        _5: 53,
        _6: 54,
        _7: 55,
        _8: 56,
        _9: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        CMD: 91,
        CMD_RIGHT: 93,
        NUM_0: 96,
        NUM_1: 97,
        NUM_2: 98,
        NUM_3: 99,
        NUM_4: 100,
        NUM_5: 101,
        NUM_6: 102,
        NUM_7: 103,
        NUM_8: 104,
        NUM_9: 105,
        MULTIPLY: 106,
        ADD: 107,
        SUBTRACT: 109,
        DECIMAL_POINT: 110,
        DIVIDE: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        NUM_LOCK: 144,
        SCROLL_LOCK: 145,
        SEMI_COLON: 186,
        EQUAL: 187,
        COMMA: 188,
        DASH: 189,
        PERIOD: 190,
        FORWARD_SLASH: 191,
        OPEN_BRACKET: 219,
        BACK_SLASH: 220,
        CLOSE_BRACKET: 221,
        SINGLE_QUOTE: 222
    };
})();
(function(){

    /*
     * Safari and ios browsers dont support "apply" on native objects
     * This is a dirty but easy fix
     */
    var applyFix = function(obj, args){
        var ev = "Function('obj',";
        var fn = "\"return new obj(";

        for(var i = 0; i < args.length; i++){
            ev += "'a"+i+"',";
            fn += "a"+i;
            if(i !== args.length-1){
                fn += ",";
            }
        }

        fn += ")\"";
        ev += fn + ")";

        return (eval(ev)).apply(this, ([obj]).concat(args));
    };

    PQ.Pool = PQ.Class.extend({
        _init: function(objectConstructor, args, num){
            this._poolItems = [];
            this.objectConstructor = objectConstructor || Object;
            this.args = args || [];
            this.num = num;
            if(num)this.generateObjects(num);
            return this;
        },

        getLength: function(){
            return this._poolItems.length;
        },

        getObject: function(){
            if(this.num && this._poolItems.length <= this.num*0.10){
                this.generateObjects(this.num);
            }else if(this._poolItems.length <= 0){
                return;
            }

            var obj = this._poolItems.pop();
            if(obj.onPoolExit){
                obj.onPoolExit(this);
            }
            return obj;
        },

        putObject: function(obj){
            this._poolItems.unshift(obj);
            if(obj.onPoolEnter){
                obj.onPoolEnter(this);
            }
            return this;
        },

        generateObjects: function(num){
            for(var i = 0; i < num; i++){
                this._poolItems.push(this.createNewObject());
            }
            return this;
        },

        createNewObject: function(){
            var scope = this;
            var obj;

            try {
                obj = new (Function.prototype.bind.apply(this.objectConstructor, ([null]).concat(this.args)))();
            }catch(e){

                /*
                function PoolObject(args){
                    scope.objectConstructor.apply(this, args);
                }
                PoolObject.prototype = Object.create(this.objectConstructor.prototype);
                PoolObject.constructor = this.objectConstructor;
                obj = new PoolObject(this.args);
                */

                obj = applyFix(this.objectConstructor, this.args);
            }

            obj.returnToPool = function(){
                scope.putObject(this);
                return this;
            };

            return obj;
        }
    });

})();
(function(){
    PQ.Point = PIXI.Point.extend({
        distance: function(x, y){
            var dx = x-this.x;
            var dy = y-this.y;
            return Math.sqrt(dx*dx+dy*dy);
        },

        copy: function(point){
            this.set(point.x, point.y);
            return this;
        },

        angle: function(x,y){
            return Math.atan2(y - this.y, x - this.x);
        }
    });
})();
(function(){

    PQ.Path = PQ.Class.extend({
        _init: function(){
            this.lineWidth = 1;
            this.lineColor = 0xff0000;
            this.lineAlpha = 1;
            this.pointCurves = 30;

            this.polygon = new PQ.Polygon();
            this._distance = null;

            this.graphic = null;

            this.dummyPoint = new PQ.Point(0,0);
            this.dummyPoint2 = new PQ.Point(0,0);
            return this;
        },

        setPointCurves: function(value){
            this.pointCurves = value || 30;
            return this;
        },

        moveTo: function(x, y){
            this.reset();
            this.polygon.points.push(x,y);
            return this;
        },

        getPoint: function(len){
            len = len*2;
            this.dummyPoint2.set(this.polygon.points[len],this.polygon.points[len + 1]);
            return this.dummyPoint2;
        },

        getStartPoint: function(){
            return this.getPoint(0);
        },

        _distanceBetween: function(len1, len2){
            var p1 = this.getPoint(len1);
            var p2 = this.getPoint(len2);

            var dx = p2.x-p1.x;
            var dy = p2.y-p1.y;

            return Math.sqrt(dx*dx+dy*dy);
        },

        drawStyle: function(lineWidth, color, alpha){
            this.lineWidth = lineWidth || 1;
            this.lineColor = color || 0xff0000;
            this.lineAlpha = (typeof alpha === "number") ? alpha : 1;
            return this;
        },

        lineTo: function(x, y){
            if(this.polygon.points.length === 0){
                this.moveTo(0,0);
            }

            this.polygon.points.push(x,y);
            return this;
        },

        getDistance: function(){
            this._distance = [0];
            var len = this.getLength();
            var distance = 0;
            for(var i = 0; i < len-1; i++){
                distance += this._distanceBetween(i, i + 1);
                this._distance.push(distance);
            }

            return distance;
        },

        getPointAtDistance: function(distance){
            if(!this._distance)this.getDistance();
            var len = this._distance.length;
            var n = 0;

            for(var i = 0; i < len; i++){
                if(distance >= this._distance[i]){
                    n = i;
                }

                if(distance < this._distance[i]){
                    break;
                }
            }

            if(n === this.getLength()-1){
                return this.getPointAtLength(n);
            }

            var diff1 = distance-this._distance[n];
            var diff2 = this._distance[n+1] - this._distance[n];

            return this.getPointAtLength(n+diff1/diff2);

        },

        reset: function(){
            this.polygon.points = [];
            return this;
        },


        bezierCurveTo: function(cpX, cpY, cpX2, cpY2, toX, toY){
            if(this.polygon.points.length === 0){
                this.moveTo(0,0);
            }

            var n = this.pointCurves,
                dt,
                dt2,
                dt3,
                t2,
                t3,
                points = this.polygon.points;

            var fromX = points[points.length-2];
            var fromY = points[points.length-1];

            var j = 0;

            for (var i=1; i<=n; i++)
            {
                j = i / n;

                dt = (1 - j);
                dt2 = dt * dt;
                dt3 = dt2 * dt;

                t2 = j * j;
                t3 = t2 * j;

                points.push( dt3 * fromX + 3 * dt2 * j * cpX + 3 * dt * t2 * cpX2 + t3 * toX,
                    dt3 * fromY + 3 * dt2 * j * cpY + 3 * dt * t2 * cpY2 + t3 * toY);
            }
            return this;
        },

        arc: function(cx, cy, radius, startAngle, endAngle, anticlockwise){
            var startX = cx + Math.cos(startAngle) * radius;
            var startY = cy + Math.sin(startAngle) * radius;

            var points = this.polygon.points;

            if(points.length === 0)
            {
                this.moveTo(startX, startY);
                points = this.polygon.points;
            }
            else if( points[points.length-2] !== startX || points[points.length-1] !== startY)
            {
                points.push(startX, startY);
            }

            if (startAngle === endAngle)return this;

            if( !anticlockwise && endAngle <= startAngle )
            {
                endAngle += Math.PI * 2;
            }
            else if( anticlockwise && startAngle <= endAngle )
            {
                startAngle += Math.PI * 2;
            }

            var sweep = anticlockwise ? (startAngle - endAngle) *-1 : (endAngle - startAngle);
            var segs =  ( Math.abs(sweep)/ (Math.PI * 2) ) * 40;

            if( sweep === 0 ) return this;

            var theta = sweep/(segs*2);
            var theta2 = theta*2;

            var cTheta = Math.cos(theta);
            var sTheta = Math.sin(theta);

            var segMinus = segs - 1;

            var remainder = ( segMinus % 1 ) / segMinus;

            for(var i=0; i<=segMinus; i++)
            {
                var real =  i + remainder * i;


                var angle = ((theta) + startAngle + (theta2 * real));

                var c = Math.cos(angle);
                var s = -Math.sin(angle);

                points.push(( (cTheta *  c) + (sTheta * s) ) * radius + cx,
                    ( (cTheta * -s) + (sTheta * c) ) * radius + cy);
            }
            return this;
        },

        arcTo: function(x1, y1, x2, y2, radius){
            if(this.polygon.points.length === 0){
                this.moveTo(0, 0);
            }

            var points = this.polygon.points;
            var fromX = points[points.length-2];
            var fromY = points[points.length-1];
            var a1 = fromY - y1;
            var b1 = fromX - x1;
            var a2 = y2   - y1;
            var b2 = x2   - x1;
            var mm = Math.abs(a1 * b2 - b1 * a2);

            if (mm < 1.0e-8 || radius === 0){
                if( points[points.length-2] !== x1 || points[points.length-1] !== y1)
                {
                    points.push(x1, y1);
                }
            }else{
                var dd = a1 * a1 + b1 * b1;
                var cc = a2 * a2 + b2 * b2;
                var tt = a1 * a2 + b1 * b2;
                var k1 = radius * Math.sqrt(dd) / mm;
                var k2 = radius * Math.sqrt(cc) / mm;
                var j1 = k1 * tt / dd;
                var j2 = k2 * tt / cc;
                var cx = k1 * b2 + k2 * b1;
                var cy = k1 * a2 + k2 * a1;
                var px = b1 * (k2 + j1);
                var py = a1 * (k2 + j1);
                var qx = b2 * (k1 + j2);
                var qy = a2 * (k1 + j2);
                var startAngle = Math.atan2(py - cy, px - cx);
                var endAngle   = Math.atan2(qy - cy, qx - cx);

                this.arc(cx + x1, cy + y1, radius, startAngle, endAngle, b1 * a2 > b2 * a1);
            }

            return this;
        },

        quadraticCurveTo: function(cpX, cpY, toX, toY){
            if(this.polygon.points.length === 0){
                this.moveTo(0,0);
            }

            var xa,
                ya,
                n = this.pointCurves,
                points = this.polygon.points;
            if(points.length === 0)this.moveTo(0, 0);


            var fromX = points[points.length-2];
            var fromY = points[points.length-1];

            var j = 0;
            for (var i = 1; i <= n; i++ )
            {
                j = i / n;

                xa = fromX + ( (cpX - fromX) * j );
                ya = fromY + ( (cpY - fromY) * j );

                points.push( xa + ( ((cpX + ( (toX - cpX) * j )) - xa) * j ),
                    ya + ( ((cpY + ( (toY - cpY) * j )) - ya) * j ) );
            }

            return this;

        },

        close: function(){
            var start = this.getStartPoint();
            this.lineTo(start.x, start.y);
            return this;
        },

        getLength: function(){
            return (this.polygon.points.length === 0) ? 0 : this.polygon.points.length/2;
        },

        getPointAtLength: function(len){
            if(len > this.getLength()){
                return this.getPoint(this.getLength()-1);
            }

            if(len%1 === 0){
                return this.getPoint(len);
            }else{
                this.dummyPoint.set(0,0);

                var diff = len%1;

                var ceil = this.getPoint(Math.ceil(len));
                var floor = this.getPoint(Math.floor(len));

                var xx = -((floor.x - ceil.x)*diff);
                var yy = -((floor.y - ceil.y)*diff);
                this.dummyPoint.set(floor.x + xx, floor.y + yy);

                return this.dummyPoint;
            }
        },

        generateGraphic: function(){
            if(!this.graphic){
                this.graphic = new PQ.Graphics();
            }
            this.graphic.clear();

            this.graphic.lineStyle(this.lineWidth, this.lineColor, this.lineAlpha)
                .drawShape(this.polygon);

            return this.graphic;
        },

        isClosed: function(){
            var start = this.getPoint(0);
            var close = this.getPoint(this.getLength()-1);
            return (close.x === start.x && close.y === start.y);
        }
    });

})();
(function(){

    PQ.LocaleManager = PQ.Class.extend({
        _init: function(){
            this.lang = navigator.language;
            return this;
        },

        _definitions: [],
        setLang: function(lang){
            this.lang = lang;
            return this;
        },

        /**
         * Almacena en una global para que los textobject traduzcan directamente
         * @param value
         * @returns {_LocaleManager}
         */
        setAutomatic: function(value){
            value = (value !== false);
            if(value){
                PQ._locale = this;
            }else{
                if(PQ._locale) delete PQ._locale;
            }
            return this;
        },

        addDefinitions: function(arr){
            if(Object.prototype.toString.call(arr) === "[object Array]"){
                for(var i = 0; i < arr.length; i++){
                    if(arr[i].id && arr[i].data){
                        this._definitions.push(arr[i]);
                    }
                }
            }else if(typeof arr === "object"){
                if(arr.id && arr.data){
                    this._definitions.push(arr);
                }
            }

            return this;
        },

        _getDefinition: function(lang){
            var def = false;
            for(var i = 0; i < this._definitions.length; i++) {
                if(this.lang === this._definitions[i].id){
                    def = this._definitions[i].data;
                    break;
                }
            }

            return def;
        },

        getLocale: function(id, lang){
            var lng = lang || this.lang;
            var def = this._getDefinition(lng);

            if(def){
                if(def.hasOwnProperty(id)){
                    return def[id];
                }
            }

            return id;
        }
    });

})();

(function(){

    PQ.DisplayCommon = {
        depth: 0,
        _z: 0,
        scaleX: 1,
        scaleY: 1,
        _scaleX: 1,
        _scaleY: 1,
        realWidth: 0,
        realHeight: 0,

        setPathSpeed: function(){
            //TODO: Velocidad sobre un path, como para un juego de escalectrix
        },

        setAsButton: function(value, onMouseClick){
            value = (value !== false);
            this.buttonMode = value;
            if(value && onMouseClick){
                this.onMouseClick = onMouseClick;
            }
            return this;
        },

        setTint: function(value){
            value = value || 0xffffff;
            this.tint = value;
            return this;
        },

        flipX: function(){
            this.scale.set(-this.scale.x, this.scale.y);
            return this;
        },

        flipY: function(){
            this.scale.set(this.sale.x, -this.scale.y);
            return this;
        },

        setInteractive: function(value, hitArea){
            value = (value !== false);
            this.interactive = (value !== false);
            if(value) {
                if (hitArea) {
                    this.hitArea = hitArea;
                } else if (!hitArea && (this instanceof PQ.Container)) {
                    this.hitArea = new PQ.Rectangle(0, 0, this.width, this.height);
                }
            }
            return this;
        },

        setBlendMode: function(mode){
            mode = mode ||  PQ.blendModes.NORMAL;
            this.blendMode = mode;
            return this;
        },

        setMask: function(mask){
            //TODO: Añadir mascara, filter, shader, todo lo necesario.
            return this;
        },

        setAnchor: function(x, y){
            this.anchor.set(x,y);
            return this;
        },

        setVelocity: function(x, y){
            this.vel.set(x||0, y||0);
            return this;
        },

        setVelocityDirection: function(speed, direction){
            direction = direction || 0;
            this.vel.x = speed * Math.cos(direction);
            this.vel.y = speed * Math.sin(direction);

            return this;
        },

        setPosition: function(x, y){
            this.position.set(x,y);
            return this;
        },

        setScale: function(x, y){
            this.scaleX = x;
            this.scaleY = y;
            return this;
        },

        tween: function(){
            var scene = PQ.Utils.findSceneParent(this);

            if(!scene){
                console.error('This actor dont have parent scene');
                return false;
            }

            return scene.tweenManager.createTween(this);
        },

        setAlpha: function(value){
            this.alpha = value;
            return this;
        },

        setDepth: function(value){
            this.depth = value;
            return this;
        },

        addTo: function(parent){
            parent.addChild(this);
            return this;
        },

        addChild: function(child){
            PIXI.DisplayObjectContainer.prototype.addChild.call(this, child);
            this._sortChildrenByDepth();

            return this;
        },

        _sortChildrenByDepth: function(){
            this.children.sort(function(a, b){
                return b._z - a._z;
            });

            if(this.stage)this.stage.dirty = true;
        },

        remove: function(){
            if(this.parent) {
                this.parent.removeChild(this);
            }
        },

        setSize: function(width, height){
            this.width = width;
            this.height = height;
            return this;
        },

        _update: function(gameTime, frameElapsedTime){
            if(PQ.Debug.enabled)PQ.Debug.sceneActors++;
            if(this._clickData){
                if(Date.now() - this._clickData.date >= PQ.Config.mouseDoubleClickWait){
                    this._onMouseClickCallback(this._clickData.mouseData);
                    delete this._clickData;
                }
            }

            if(this.update(gameTime, frameElapsedTime) === false){
                //this._isTweenForbidden = true;
                //TODO: Incluir algo para cancelar los mouseEvents si update es false;
                return;
            }

            if(this.vel.x !== 0 || this.vel.y !== 0){
                if(PQ.Config.deltaAnimation){
                    this.x += this.vel.x*PQ.delta;
                    this.y += this.vel.y*PQ.delta;
                }else {
                    this.x += this.vel.x;
                    this.y += this.vel.y;
                }
            }

            for (var i = 0; i < this.children.length; i++) {
                if (this.children[i]._update) {
                    this.children[i]._update(gameTime, frameElapsedTime);
                }
            }

            this.postUpdate(gameTime, frameElapsedTime);
        },

        removeAll: function(){
            for(var i = this.children.length-1; i >= 0; i--){
                this.removeChild(this.children[i]);
            }

            return this;
        },

        setCacheAsBitmap: function(value){
            this.cacheAsBitmap = (value !== false);
            return this;
        },

        update: function(gameTime, frameElapsedTime){return this;},
        postUpdate: function(gameTime, frameElapsedTime){return this;},

        mousedown: function(mouseData){
            this._isDragging = true;
            var pos = mouseData.getLocalPosition(this);
            this._draggingPos = pos;

            if(this.onMouseDown){
                var data = {
                    x: pos.x,
                    y: pos.y,
                    global: mouseData.global,
                    getLocalPosition: mouseData.getLocalPosition
                };
                this.onMouseDown(data);
            }
        },

        touchstart: function(mouseData){
            this._isDragging = true;
            var pos = mouseData.getLocalPosition(this);
            this._draggingPos = pos;

            if(this.onMouseDown){
                var data = {
                    x: pos.x,
                    y: pos.y,
                    global: mouseData.global,
                    getLocalPosition: mouseData.getLocalPosition
                };
                this.onMouseDown(data);
            }
        },

        mouseup: function(mouseData){
            this._isDragging = false;
            if(this.onMouseUp){
                var pos = mouseData.getLocalPosition(this);
                var data = {
                    x: pos.x,
                    y: pos.y,
                    global: mouseData.global,
                    getLocalPosition: mouseData.getLocalPosition
                };
                this.onMouseUp(data);
            }
        },

        touchend: function(mouseData){
            this._isDragging = false;
            if(this.onMouseUp){
                var pos = mouseData.getLocalPosition(this);
                var data = {
                    x: pos.x,
                    y: pos.y,
                    global: mouseData.global,
                    getLocalPosition: mouseData.getLocalPosition
                };
                this.onMouseUp(data);
            }
        },

        mouseover: function(mouseData){
            this._isMouseOver = true;
            if(this.onMouseOver){
                var pos = mouseData.getLocalPosition(this);
                var data = {
                    x: pos.x,
                    y: pos.y,
                    global: mouseData.global,
                    getLocalPosition: mouseData.getLocalPosition
                };
                this.onMouseOver(data);
            }
        },

        mouseout: function(mouseData){
            this._isMouseOver = false;
            this._isDragging = false;
            if(this.onMouseOut){
                var pos = mouseData.getLocalPosition(this);
                var data = {
                    x: pos.x,
                    y: pos.y,
                    global: mouseData.global,
                    getLocalPosition: mouseData.getLocalPosition
                };
                this.onMouseOut(data);
            }
        },

        mousemove: function(mouseData){
            if(!this._isMouseOver)return;
            var pos = mouseData.getLocalPosition(this);
            var data = {
                x: pos.x,
                y: pos.y,
                global: mouseData.global,
                getLocalPosition: mouseData.getLocalPosition
            };

            if(this.onMouseMove){
                this.onMouseMove(data);
            }

            if(this._isDragging && this.onMouseDrag){
                data.offsetX = data.x - this._draggingPos.x;
                data.offsetY = data.y - this._draggingPos.y;
                this.onMouseDrag(data);
            }
        },

        touchmove: function(mouseData){
            //if(!this._isMouseOver)return;
            var pos = mouseData.getLocalPosition(this);
            var data = {
                x: pos.x,
                y: pos.y,
                global: mouseData.global,
                getLocalPosition: mouseData.getLocalPosition
            };

            if(this.onMouseMove){
                this.onMouseMove(data);
            }
            if(this._isDragging && this.onMouseDrag){
                data.offsetX = data.x - this._draggingPos.x;
                data.offsetY = data.y - this._draggingPos.y;
                this.onMouseDrag(data);
            }
        },

        click: function(mouseData){
            if(this._clickData){
                if(this.onMouseDoubleClick){
                    var pos = mouseData.getLocalPosition(this);
                    var data = {
                        x: pos.x,
                        y: pos.y,
                        global: mouseData.global,
                        getLocalPosition: mouseData.getLocalPosition
                    };
                    this.onMouseDoubleClick(data);
                }
                delete this._clickData;
                return;
            }

            this._clickData = {
                date : Date.now(),
                mouseData: mouseData
            };
        },

        tap: function(mouseData) {
            if (this._clickData) {
                if (this.onMouseDoubleClick) {
                    var pos = mouseData.getLocalPosition(this);
                    var data = {
                        x: pos.x,
                        y: pos.y,
                        global: mouseData.global,
                        getLocalPosition: mouseData.getLocalPosition
                    };
                    this.onMouseDoubleClick(data);
                }
                delete this._clickData;
                return;
            }

            this._clickData = {
                date: Date.now(),
                mouseData: mouseData
            };
        },

        _onMouseClickCallback: function(mouseData){
            if(this.onMouseClick) {
                var pos = mouseData.getLocalPosition(this);
                var data = {
                    x: pos.x,
                    y: pos.y,
                    global: mouseData.global,
                    getLocalPosition: mouseData.getLocalPosition
                };
                this.onMouseClick(data);
            }
        },

        mouseupoutside: function(mouseData){
            this._isMouseOver = false;
            this._isDragging = false;
        },

        touchendoutside: function(mouseData){
            this._isMouseOver = false;
            this._isDragging = false;
        },

        //TODO: Mutlitouch en dispositivos de manera sencilla

        onMouseDown: function(evt){},
        onMouseUp: function(evt){},
        onMouseDrag: function(evt){},
        onMouseMove: function(evt){},
        onMouseOver: function(evt){},
        onMouseClick: function(evt){},
        onMouseDoubleClick: function(evt){},
        onKeyPressed: function(evt){},
        onKeyReleased: function(evt){},
        onKeyState: function(evt){}
    };

    Object.defineProperty(PQ.DisplayCommon, 'depth', {
        set: function(value){
            value = value || 0;
            this._z = value;
            if(this.parent){
                this.parent._sortChildrenByDepth();
            }
        },

        get: function(){
            return this._z;
        }
    });

    Object.defineProperty(PQ.DisplayCommon, 'scaleX', {
        set: function(value){
            this.scale.x = (this.scale.x/this._scaleX) * value;
            this._scaleX = value;
        },

        get: function(){
            return this._scaleX;
        }
    });

    Object.defineProperty(PQ.DisplayCommon, 'scaleY', {
        set: function(value){
            this.scale.y = (this.scale.y/this._scaleY) * value;
            this._scaleY = value;
        },

        get: function(){
            return this._scaleY;
        }
    });

    Object.defineProperty(PQ.DisplayCommon, 'width', {
        get: function() {
            return this._width;//this.scale.x * this.texture.frame.width;
        },
        set: function(value) {
            this.scale.x = (value / this.texture.frame.width) * this.scaleX;
            this._width = value;
        }
    });

    Object.defineProperty(PQ.DisplayCommon, 'height', {
        get: function() {
            return this._height; //this.scale.y * this.texture.frame.height;
        },
        set: function(value) {
            this.scale.y = (value / this.texture.frame.height) * this.scaleY;
            this._height = value;
        }
    });

    Object.defineProperty(PQ.DisplayCommon, 'realWidth', {
        get: function() {
            return this.scale.x * this._width;
        }
    });

    Object.defineProperty(PQ.DisplayCommon, 'realHeight', {
        get: function() {
            return  this.scale.y * this._height;
        }
    });

})();
(function(){

    //TODO: limited y unfixed bounds
    //TODO: generateTexture no calcula bien los bounds, sobrescribir?
    PQ.Container = PIXI.DisplayObjectContainer.extend(PQ.DisplayCommon, {
        _init: function(){
            PQ.Container._super._init.call(this);
            this.vel = new PQ.Point(0,0);

            this._size = {
                x: 0,
                y: 0
            };

            this.anchor = new PQ.Point(0.5, 0.5);
            return this;
        },

        getBounds : function(matrix){
            var width = this.width;
            var height = this.height;

            var w0 = width * (1-this.anchor.x);
            var w1 = width * -this.anchor.x;

            var h0 = height * (1-this.anchor.y);
            var h1 = height * -this.anchor.y;

            var worldTransform = matrix || this.worldTransform ;

            var a = worldTransform.a;
            var b = worldTransform.c;
            var c = worldTransform.b;
            var d = worldTransform.d;
            var tx = worldTransform.tx;
            var ty = worldTransform.ty;

            var x1 = a * w1 + c * h1 + tx;
            var y1 = d * h1 + b * w1 + ty;

            var x2 = a * w0 + c * h1 + tx;
            var y2 = d * h1 + b * w0 + ty;

            var x3 = a * w0 + c * h0 + tx;
            var y3 = d * h0 + b * w0 + ty;

            var x4 =  a * w1 + c * h0 + tx;
            var y4 =  d * h0 + b * w1 + ty;

            var maxX = -Infinity;
            var maxY = -Infinity;

            var minX = Infinity;
            var minY = Infinity;

            minX = x1 < minX ? x1 : minX;
            minX = x2 < minX ? x2 : minX;
            minX = x3 < minX ? x3 : minX;
            minX = x4 < minX ? x4 : minX;

            minY = y1 < minY ? y1 : minY;
            minY = y2 < minY ? y2 : minY;
            minY = y3 < minY ? y3 : minY;
            minY = y4 < minY ? y4 : minY;

            maxX = x1 > maxX ? x1 : maxX;
            maxX = x2 > maxX ? x2 : maxX;
            maxX = x3 > maxX ? x3 : maxX;
            maxX = x4 > maxX ? x4 : maxX;

            maxY = y1 > maxY ? y1 : maxY;
            maxY = y2 > maxY ? y2 : maxY;
            maxY = y3 > maxY ? y3 : maxY;
            maxY = y4 > maxY ? y4 : maxY;

            var bounds = this._bounds;

            bounds.x = minX;
            bounds.width = maxX - minX;

            bounds.y = minY;
            bounds.height = maxY - minY;

            // store a reference so that if this function gets called again in the render cycle we do not have to recalculate
            this._currentBounds = bounds;

            return bounds;
        },

        updateTransform : function() {
            if(!this.visible)return;
            // create some matrix refs for easy access
            var pt = this.parent.worldTransform;
            var wt = this.worldTransform;

            // temporary matrix variables
            var a, b, c, d, tx, ty;

            var anchorWidth = this.anchor.x * this.width,
                anchorHeight = this.anchor.y * this.height;

            if(this.rotation % PIXI.PI_2){
                if(this.rotation !== this.rotationCache)
                {
                    this.rotationCache = this.rotation;
                    this._sr = Math.sin(this.rotation);
                    this._cr = Math.cos(this.rotation);
                }

                // get the matrix values of the displayobject based on its transform properties..
                a  =  this._cr * this.scale.x;
                b  =  this._sr * this.scale.x;
                c  = -this._sr * this.scale.y;
                d  =  this._cr * this.scale.y;
                tx =  this.position.x;
                ty =  this.position.y;

                // check for pivot.. not often used so geared towards that fact!
                if(this.anchor.x || this.anchor.y)
                {
                    tx -= anchorWidth * a + anchorHeight * c;
                    ty -= anchorWidth * b + anchorHeight * d;
                }

                // concat the parent matrix with the objects transform.
                wt.a  = a  * pt.a + b  * pt.c;
                wt.b  = a  * pt.b + b  * pt.d;
                wt.c  = c  * pt.a + d  * pt.c;
                wt.d  = c  * pt.b + d  * pt.d;
                wt.tx = tx * pt.a + ty * pt.c + pt.tx;
                wt.ty = tx * pt.b + ty * pt.d + pt.ty;
            }else{
                a  = this.scale.x;
                d  = this.scale.y;
                tx = this.position.x - anchorWidth * a;
                ty = this.position.y - anchorHeight * d;

                wt.a  = pt.a * a;
                wt.b  = pt.b * d;
                wt.c  = pt.c * a;
                wt.d  = pt.d * d;
                wt.tx = tx * pt.a + ty * pt.c + pt.tx;
                wt.ty = tx * pt.b + ty * pt.d + pt.ty;
            }

            this.worldAlpha = this.alpha * this.parent.worldAlpha;

            for(var i=0,j=this.children.length; i<j; i++)
            {
                this.children[i].updateTransform();
            }
        },

        _setGraphicsData: function(){
            //TODO: Posiblemente todo esto sea inutil, con los datos del graphic data en draw deberia valer
            this.renderable = true;
            this.fillAlpha = 1;
            this.lineWidth = 0;
            this.lineColor = "black";
            this.graphicsData = [];
            this.tint = 0xFFFFFF;
            this.blendMode = PIXI.blendModes.NORMAL;
            //this.currentPath = {points:[]};
            this._webGL = [];
            this.isMask = false;
            this.bounds = null;
            this.boundsPadding = 0;
            this.dirty = true;

            this.isbackgroundGraphic = true;
        },

        setBackgroundColor : function(backgroundColor){
            this.backgroundColor = backgroundColor || 0x000001;
            this.backgroundColorSplit = PIXI.hex2rgb(this.backgroundColor);
            var hex = this.backgroundColor.toString(16);
            hex = '000000'.substr(0, 6 - hex.length) + hex;
            this.backgroundColorString = '#' + hex;

            return this;
        },

        _drawBackgroundColorCanvas: function(renderSession){
            if(this.visible === false || this.alpha === 0)return;

            if(this._cacheAsBitmap){
                this._renderCachedSprite(renderSession);
                return;
            }

            if (this._mask) {
                renderSession.maskManager.pushMask(this._mask, renderSession);
            }

            var ctx = renderSession.context;
            var transform = this.worldTransform;

            if (this.blendMode !== renderSession.currentBlendMode) {
                renderSession.currentBlendMode = this.blendMode;
                ctx.globalCompositeOperation = PIXI.blendModesCanvas[renderSession.currentBlendMode];
            }

            ctx.globalAlpha = this.worldAlpha;
            var resolution = renderSession.resolution;
            ctx.setTransform(transform.a * resolution,
                transform.b * resolution,
                transform.c * resolution,
                transform.d * resolution,
                transform.tx * resolution,
                transform.ty * resolution);
            ctx.beginPath();
            ctx.fillStyle = this.backgroundColorString;
            ctx.fillRect(0, 0, this.width, this.height);
            ctx.closePath();

            for (var i = 0, j = this.children.length; i < j; i++) {
                var child = this.children[i];
                child._renderCanvas(renderSession);
            }

            if (this._mask) {
                renderSession.maskManager.popMask(renderSession);
            }
        },

        _drawBackgroundColorWebGL: function(renderSession){
            if(!this.visible || this.alpha <= 0)return;

            if(this._cacheAsBitmap)
            {
                this._renderCachedSprite(renderSession);
                return;
            }

            var i, j, blendModeWebGL;

            if(this._mask || this._filters)
            {

                // push filter first as we need to ensure the stencil buffer is correct for any masking
                if(this._filters)
                {
                    renderSession.spriteBatch.flush();
                    renderSession.filterManager.pushFilter(this._filterBlock);
                }

                if(this._mask)
                {
                    renderSession.spriteBatch.stop();
                    renderSession.maskManager.pushMask(this.mask, renderSession);
                    renderSession.spriteBatch.start();
                }

                //PIXI.Graphics.prototype._renderWebGL.call(this, renderSession);
                //PIXI.WebGLGraphics.renderGraphics(this, renderSession);
                this._renderGraphicsWebGL(renderSession);

                // simple render children!
                for(i=0,j=this.children.length; i<j; i++)
                {
                    this.children[i]._renderWebGL(renderSession);
                }

                renderSession.spriteBatch.stop();

                if(this._mask)renderSession.maskManager.popMask(this._mask, renderSession);
                if(this._filters)renderSession.filterManager.popFilter();

                renderSession.spriteBatch.start();
            }
            else
            {

                //PIXI.Graphics.prototype._renderWebGL.call(this, renderSession);
                //PIXI.WebGLGraphics.renderGraphics(this, renderSession);
                this._renderGraphicsWebGL(renderSession);

                // simple render children!
                for(i=0,j=this.children.length; i<j; i++)
                {
                    this.children[i]._renderWebGL(renderSession);
                }
            }

            renderSession.drawCount++;
        },

        _renderGraphicsWebGL: function(renderSession){
            if(this.visible === false || this.alpha === 0 || this.isMask === true)return;


            if(this._cacheAsBitmap){

                if(this.dirty){
                    this._generateCachedSprite();
                    // we will also need to update the texture on the gpu too!
                    PIXI.updateWebGLTexture(this._cachedSprite.texture.baseTexture, renderSession.gl);

                    this.dirty =  false;
                }

                this._cachedSprite.alpha = this.alpha;
                PIXI.Sprite.prototype._renderWebGL.call(this._cachedSprite, renderSession);
            }else{
                renderSession.spriteBatch.stop();
                renderSession.blendModeManager.setBlendMode(this.blendMode);

                if(this._mask)renderSession.maskManager.pushMask(this._mask, renderSession);
                if(this._filters)renderSession.filterManager.pushFilter(this._filterBlock);

                // check blend mode
                if(this.blendMode !== renderSession.spriteBatch.currentBlendMode){
                    renderSession.spriteBatch.currentBlendMode = this.blendMode;
                    var blendModeWebGL = PIXI.blendModesWebGL[renderSession.spriteBatch.currentBlendMode];
                    renderSession.spriteBatch.gl.blendFunc(blendModeWebGL[0], blendModeWebGL[1]);
                }

                PIXI.WebGLGraphics.renderGraphics(this, renderSession);

                if(this._filters)renderSession.filterManager.popFilter();
                if(this._mask)renderSession.maskManager.popMask(this.mask, renderSession);

                renderSession.drawCount++;

                renderSession.spriteBatch.start();
            }
        },

        _clearBackgroundWebGL: function(){
            this.lineWidth = 0;
            this.filling = false;
            this.dirty = true;
            this.clearDirty = true;
            this.graphicsData = [];
        },

        _renderWebGL: function(renderSession){
           if(this.backgroundColor) {

               if(!this.isbackgroundGraphic)this._setGraphicsData();
               this._clearBackgroundWebGL();
               this.graphicsData[0] = {lineWidth:this.lineWidth, lineColor:this.lineColor, lineAlpha:this.alpha,
                   fillColor:this.backgroundColor, fillAlpha:this.fillAlpha, fill:true,
                   shape:new PIXI.Rectangle(0,0, this.width, this.height), type:PIXI.Graphics.RECT};

               this._drawBackgroundColorWebGL(renderSession);
           }else {
               PQ.Container._super._renderWebGL.call(this, renderSession);
           }
        },

        _renderCanvas: function(renderSession){
            if(this.backgroundColor) {
                this._drawBackgroundColorCanvas(renderSession);
            }else{
                PQ.Container._super._renderCanvas.call(this, renderSession);
            }

        }

    });

    Object.defineProperty(PQ.Container.prototype, 'width', {
        set: function(value){
            this._size.x = value;
        },

        get: function(){
            return this._size.x;
        }
    });

    Object.defineProperty(PQ.Container.prototype, 'height', {
        set: function(value){
            this._size.y = value;
        },

        get: function(){
            return this._size.y;
        }
    });
    
})();
(function(){
    PQ.Graphics = PIXI.Graphics.extend(PQ.DisplayCommon, {
        _init: function(){
            PQ.Graphics._super._init.call(this);
            this.vel = new PQ.Point(0,0);
            return this;
        },

        beginFill: function(color){
            color = color || 0x000001;
            return PQ.Graphics._super.beginFill.call(this, color);
        },

        drawPath: function(path){
            this.drawShape(path.polygon);
            return this;
        }
    });
})();
(function(){

    //TODO: Funcion de crop

    PQ.Sprite = PIXI.Sprite.extend(PQ.DisplayCommon, {
        _init: function(texture){
            if(!texture){
                texture = PQ.AssetCache.getTexture("_PQDefaultTexture");
            }else if(typeof texture === "string"){
                texture = PQ.AssetCache.getTexture(texture);
            }
            PQ.Sprite._super._init.call(this, texture);

            this.position = new PQ.Point();
            this.anchor = new PQ.Point(0.5, 0.5);
            this.vel = new PQ.Point(0,0);

            this._anims = [];
            this._currentAnim = 0;
            this.playing = false;
            return this;
        },

        updateTransform : function() {
            // create some matrix refs for easy access
            var pt = this.parent.worldTransform;
            var wt = this.worldTransform;

            // temporary matrix variables
            var a, b, c, d, tx, ty;

            var aX = this.anchor.x * this.width;
            var aY = this.anchor.y * this.height;

            // TODO create a const for 2_PI
            // so if rotation is between 0 then we can simplify the multiplication process..
            if(this.rotation % PIXI.PI_2)
            {
                // check to see if the rotation is the same as the previous render. This means we only need to use sin and cos when rotation actually changes
                if(this.rotation !== this.rotationCache)
                {
                    this.rotationCache = this.rotation;
                    this._sr = Math.sin(this.rotation);
                    this._cr = Math.cos(this.rotation);
                }

                // get the matrix values of the displayobject based on its transform properties..
                a  =  this._cr * this.scale.x;
                b  =  this._sr * this.scale.x;
                c  = -this._sr * this.scale.y;
                d  =  this._cr * this.scale.y;
                tx =  this.position.x;
                ty =  this.position.y;

                // check for pivot.. not often used so geared towards that fact!
                if(aX || aY)
                {
                    tx -= aX * a + aY * c;
                    ty -= aX * b + aY * d;
                }

                // concat the parent matrix with the objects transform.
                wt.a  = a  * pt.a + b  * pt.c;
                wt.b  = a  * pt.b + b  * pt.d;
                wt.c  = c  * pt.a + d  * pt.c;
                wt.d  = c  * pt.b + d  * pt.d;
                wt.tx = tx * pt.a + ty * pt.c + pt.tx;
                wt.ty = tx * pt.b + ty * pt.d + pt.ty;


            }
            else
            {
                // lets do the fast version as we know there is no rotation..
                a  = this.scale.x;
                d  = this.scale.y;

                tx = this.position.x - aX * a;
                ty = this.position.y - aY * d;

                wt.a  = a  * pt.a;
                wt.b  = a  * pt.b;
                wt.c  = d  * pt.c;
                wt.d  = d  * pt.d;
                wt.tx = tx * pt.a + ty * pt.c + pt.tx;
                wt.ty = tx * pt.b + ty * pt.d + pt.ty;
            }

            // multiply the alphas..
            this.worldAlpha = this.alpha * this.parent.worldAlpha;


            for(var i=0,j=this.children.length; i<j; i++)
            {
                this.children[i].updateTransform();
            }
        },

    getBounds : function(matrix)
    {
        var res = this.texture.baseTexture.resolution || 1;
        var width = this.texture.frame.width/res;
        var height = this.texture.frame.height/res;

        var w0 = width;
        var w1 = 0;

        var h0 = height;
        var h1 = 0;

        var worldTransform = matrix || this.worldTransform ;

        var a = worldTransform.a;
        var b = worldTransform.b;
        var c = worldTransform.c;
        var d = worldTransform.d;
        var tx = worldTransform.tx;
        var ty = worldTransform.ty;

        var x1 = a * w1 + c * h1 + tx;
        var y1 = d * h1 + b * w1 + ty;

        var x2 = a * w0 + c * h1 + tx;
        var y2 = d * h1 + b * w0 + ty;

        var x3 = a * w0 + c * h0 + tx;
        var y3 = d * h0 + b * w0 + ty;

        var x4 =  a * w1 + c * h0 + tx;
        var y4 =  d * h0 + b * w1 + ty;

        var maxX = -Infinity;
        var maxY = -Infinity;

        var minX = Infinity;
        var minY = Infinity;

        minX = x1 < minX ? x1 : minX;
        minX = x2 < minX ? x2 : minX;
        minX = x3 < minX ? x3 : minX;
        minX = x4 < minX ? x4 : minX;

        minY = y1 < minY ? y1 : minY;
        minY = y2 < minY ? y2 : minY;
        minY = y3 < minY ? y3 : minY;
        minY = y4 < minY ? y4 : minY;

        maxX = x1 > maxX ? x1 : maxX;
        maxX = x2 > maxX ? x2 : maxX;
        maxX = x3 > maxX ? x3 : maxX;
        maxX = x4 > maxX ? x4 : maxX;

        maxY = y1 > maxY ? y1 : maxY;
        maxY = y2 > maxY ? y2 : maxY;
        maxY = y3 > maxY ? y3 : maxY;
        maxY = y4 > maxY ? y4 : maxY;

        var bounds = this._bounds;

        bounds.x = minX;
        bounds.width = maxX - minX;

        bounds.y = minY;
        bounds.height = maxY - minY;

        // store a reference so that if this function gets called again in the render cycle we do not have to recalculate
        this._currentBounds = bounds;

        return bounds;
    },

        addAnimationFromRowsAndCols: function(id, data, time, loop){
            var rows = data.rows,
                cols = data.cols,
                texture = (typeof data.texture === "string") ? PQ.AssetCache.getTexture(data.texture) : data.texture,
                frameOrder = data.order;

            var w = texture.width/cols,
                h = texture.height/rows,
                xx = texture.frame.x,
                yy = texture.frame.y;

            var frames = [];
            for(var y = 0; y < rows; y++){
                for(var x = 0; x < cols; x++){
                    var textureSize = new PQ.Rectangle(xx + x*w, yy + y*h, w,h),
                        crop = textureSize.clone();
                    frames.push(new PQ.Texture(texture, textureSize, crop));
                }
            }

            var textures;
            if(frameOrder){
                textures = [];
                for(var i = 0; i < frameOrder.length; i++){
                    textures.push(frames[frameOrder[i]]);
                }
            }else{
                textures = frames;
            }

            return this.addAnimation(id, textures, time, loop);

        },

        addAnimation: function(id, textures, time, loop){
            for(var i = 0; i < textures.length; i++){
                if(typeof textures[i] === "string"){
                    textures[i] = PQ.AssetCache.getTexture(textures[i]);
                }
            }

            var anim = {
                id: id,
                index : 0,
                textures: textures,
                time: time,
                loop: loop || false
            };

            this._anims.push(anim);

            return this;
        },

        _getAnimInfo: function(id){
            var anim = false;
            for(var i = 0; i < this._anims.length; i++){
                if(id === this._anims[i].id){
                    anim = this._anims[i];
                    break;
                }
            }

            return anim;

        },

        setTexture: function(texture){
            if(!texture){
                texture = PQ.AssetCache.getTexture("_PQDefaultTexture");
            }else if(typeof texture === "string"){
                texture = PQ.AssetCache.getTexture(texture);
            }
            PQ.Sprite._super.setTexture.call(this, texture);
            return this;
        },

        _update: function(gameTime, frameElapsedTime){
            if(PQ.Debug.enabled)PQ.Debug.sceneActors++;
            if(this._clickData){
                if(Date.now() - this._clickData.date >= PQ.Config.mouseDoubleClickWait){
                    this._onMouseClickCallback(this._clickData.mouseData);
                    delete this._clickData;
                }
            }

            if(this.update(gameTime, frameElapsedTime) === false){
                return;
            }

            if(this.vel.x !== 0 || this.vel.y !== 0){
                if(PQ.Config.deltaAnimation){
                    this.x += this.vel.x*PQ.delta;
                    this.y += this.vel.y*PQ.delta;
                }else {
                    this.x += this.vel.x;
                    this.y += this.vel.y;
                }
            }

            if(this.playing){
                var scope = this;
                this._currentAnim.tick += frameElapsedTime;

                var anim = Math.floor(this._currentAnim.tick/this._currentAnim.time);
                if(anim >= this._currentAnim.textures.length){
                    this._currentAnim.tick = 0;
                    anim = 0;
                    if(!this._currentAnim.loop){
                        this.stopAnimation(this._currentAnim.textures.length-1);
                        if(this._currentAnim.onEnd){
                            this._currentAnim.onEnd.apply(scope);
                        }
                    }
                }

                if(this.playing && this._currentAnim.index !== anim){
                    this._currentAnim.index = anim;
                    this.texture = this._currentAnim.textures[this._currentAnim.index];
                    if(this.onAnimationFrame){
                        this.onAnimationFrame(this._currentAnim);
                    }
                }

            }

            for (var i = 0; i < this.children.length; i++) {
                if (this.children[i]._update) {
                    this.children[i]._update(gameTime, frameElapsedTime);
                }
            }

            this.postUpdate(gameTime, frameElapsedTime);
        },

        //TODO: Revisar, quizás implementar un objeto Animation que se añada a los sprites con addAnimation(new PQ.Animation()) ???
        onAnimationFrame: function(){return this;},

        playAnimation: function(id, callback, frame){
            var anim = this._getAnimInfo(id);

            if(anim){
                this.playing = true;
                this._currentAnim = anim;
                this._currentAnim.tick = 0;
                if(frame){
                    this._currentAnim.index = frame;
                }
                this.texture = this._currentAnim.textures[this._currentAnim.index];

                if(callback){
                    this._currentAnim.onEnd = callback;
                }
            }

            return this;
        },

        stopAnimation: function(frame){
            this.playing = false;
            if(frame){
                this._currentAnim.index = frame;
                this.texture = this._currentAnim.textures[this._currentAnim.index];
            }
            return this;
        },

        _renderCanvas: function(renderSession){
            // If the sprite is not visible or the alpha is 0 then no need to render this element
            if (this.visible === false || this.alpha === 0 || this.texture.crop.width <= 0 || this.texture.crop.height <= 0) return;

            if (this.blendMode !== renderSession.currentBlendMode)
            {
                renderSession.currentBlendMode = this.blendMode;
                renderSession.context.globalCompositeOperation = PIXI.blendModesCanvas[renderSession.currentBlendMode];
            }

            if (this._mask)
            {
                renderSession.maskManager.pushMask(this._mask, renderSession);
            }

            //  Ignore null sources
            if (this.texture.valid)
            {
                var resolution = this.texture.baseTexture.resolution / renderSession.resolution;

                renderSession.context.globalAlpha = this.worldAlpha;

                //  Allow for pixel rounding
                if (renderSession.roundPixels)
                {
                    renderSession.context.setTransform(
                        this.worldTransform.a,
                        this.worldTransform.b,
                        this.worldTransform.c,
                        this.worldTransform.d,
                        (this.worldTransform.tx* renderSession.resolution) | 0,
                        (this.worldTransform.ty* renderSession.resolution) | 0);
                }
                else
                {
                    renderSession.context.setTransform(
                        this.worldTransform.a,
                        this.worldTransform.b,
                        this.worldTransform.c,
                        this.worldTransform.d,
                        this.worldTransform.tx * renderSession.resolution,
                        this.worldTransform.ty * renderSession.resolution);
                }

                //  If smoothingEnabled is supported and we need to change the smoothing property for this texture
                if (renderSession.smoothProperty && renderSession.scaleMode !== this.texture.baseTexture.scaleMode)
                {
                    renderSession.scaleMode = this.texture.baseTexture.scaleMode;
                    renderSession.context[renderSession.smoothProperty] = (renderSession.scaleMode === PIXI.scaleModes.LINEAR);
                }

                //  If the texture is trimmed we offset by the trim x/y, otherwise we use the frame dimensions
                var dx = (this.texture.trim) ? this.texture.trim.x : 0;
                var dy = (this.texture.trim) ? this.texture.trim.y  : 0;

                if (this.tint !== 0xFFFFFF)
                {
                    if (this.cachedTint !== this.tint)
                    {
                        this.cachedTint = this.tint;

                        //  TODO clean up caching - how to clean up the caches?
                        this.tintedTexture = PIXI.CanvasTinter.getTintedTexture(this, this.tint);
                    }

                    renderSession.context.drawImage(
                        this.tintedTexture,
                        0,
                        0,
                        this.texture.crop.width,
                        this.texture.crop.height,
                        dx / resolution,
                        dy / resolution,
                        this.texture.crop.width / resolution,
                        this.texture.crop.height / resolution);
                }
                else
                {
                    renderSession.context.drawImage(
                        this.texture.baseTexture.source,
                        this.texture.crop.x,
                        this.texture.crop.y,
                        this.texture.crop.width,
                        this.texture.crop.height,
                        dx / resolution,
                        dy / resolution,
                        this.texture.crop.width / resolution,
                        this.texture.crop.height / resolution);
                }
            }

            // OVERWRITE
            for (var i = 0, j = this.children.length; i < j; i++)
            {
                this.children[i]._renderCanvas(renderSession);
            }

            if (this._mask)
            {
                renderSession.maskManager.popMask(renderSession);
            }
        }
    });

    Object.defineProperty(PQ.Sprite.prototype, 'width', {
        get: function() {
            if(!this._width)this._width=this.texture.frame.width/this.texture.baseTexture.resolution;
            return this._width;//this.scale.x * this.texture.frame.width;
        },
        set: function(value) {
            this.scale.x = (value / (this.texture.frame.width/this.texture.baseTexture.resolution)) * this.scaleX;
            this._width = value;
        }
    });

    Object.defineProperty(PQ.Sprite.prototype, 'height', {
        get: function() {
            if(!this._height)this._height=this.texture.frame.height/this.texture.baseTexture.resolution;
            return this._height; //this.scale.y * this.texture.frame.height;
        },
        set: function(value) {
            this.scale.y = (value / (this.texture.frame.height/this.texture.baseTexture.resolution)) * this.scaleY;
            this._height = value;
        }
    });

})();
(function(){
    //TODO: Problemas con renderTexture en webgl no recibe el parametro source y peta, en canvas funciona, hacer testcase para pixi
    PQ.TilingSprite = PIXI.TilingSprite.extend(PQ.DisplayCommon, {
        _init: function(texture, width, height){
            if(!texture){
                texture = PQ.AssetCache.getTexture("_PQDefaultTexture");
            }else if(typeof texture === "string"){
                texture = PQ.AssetCache.getTexture(texture);
            }

            PQ.TilingSprite._super._init.call(this, texture, width, height);
            this._textureResolution = texture.baseTexture.resolution || 1;
            this.anchor = new PQ.Point(0.5, 0.5);
            this.vel = new PQ.Point(0,0);
            this.tileVel = new PQ.Point(0,0);
        },

        updateTransform : function() {
            // create some matrix refs for easy access
            var pt = this.parent.worldTransform;
            var wt = this.worldTransform;

            // temporary matrix variables
            var a, b, c, d, tx, ty;

            var aX = this.anchor.x * this.width;
            var aY = this.anchor.y * this.height;

            // TODO create a const for 2_PI
            // so if rotation is between 0 then we can simplify the multiplication process..
            if(this.rotation % PIXI.PI_2)
            {
                // check to see if the rotation is the same as the previous render. This means we only need to use sin and cos when rotation actually changes
                if(this.rotation !== this.rotationCache)
                {
                    this.rotationCache = this.rotation;
                    this._sr = Math.sin(this.rotation);
                    this._cr = Math.cos(this.rotation);
                }

                // get the matrix values of the displayobject based on its transform properties..
                a  =  this._cr * this.scale.x;
                b  =  this._sr * this.scale.x;
                c  = -this._sr * this.scale.y;
                d  =  this._cr * this.scale.y;
                tx =  this.position.x;
                ty =  this.position.y;

                // check for pivot.. not often used so geared towards that fact!
                if(aX || aY)
                {
                    tx -= aX * a + aY * c;
                    ty -= aX * b + aY * d;
                }

                // concat the parent matrix with the objects transform.
                wt.a  = a  * pt.a + b  * pt.c;
                wt.b  = a  * pt.b + b  * pt.d;
                wt.c  = c  * pt.a + d  * pt.c;
                wt.d  = c  * pt.b + d  * pt.d;
                wt.tx = tx * pt.a + ty * pt.c + pt.tx;
                wt.ty = tx * pt.b + ty * pt.d + pt.ty;


            }
            else
            {
                // lets do the fast version as we know there is no rotation..
                a  = this.scale.x;
                d  = this.scale.y;

                tx = this.position.x - aX * a;
                ty = this.position.y - aY * d;

                wt.a  = a  * pt.a;
                wt.b  = a  * pt.b;
                wt.c  = d  * pt.c;
                wt.d  = d  * pt.d;
                wt.tx = tx * pt.a + ty * pt.c + pt.tx;
                wt.ty = tx * pt.b + ty * pt.d + pt.ty;
            }

            // multiply the alphas..
            this.worldAlpha = this.alpha * this.parent.worldAlpha;


            for(var i=0,j=this.children.length; i<j; i++)
            {
                this.children[i].updateTransform();
            }
        },

        getBounds : function(matrix)
        {
            var width = this._width;
            var height = this._height;

            var w0 = width;
            var w1 = 0;

            var h0 = height;
            var h1 = 0;

            var worldTransform = matrix || this.worldTransform ;

            var a = worldTransform.a;
            var b = worldTransform.b;
            var c = worldTransform.c;
            var d = worldTransform.d;
            var tx = worldTransform.tx;
            var ty = worldTransform.ty;

            var x1 = a * w1 + c * h1 + tx;
            var y1 = d * h1 + b * w1 + ty;

            var x2 = a * w0 + c * h1 + tx;
            var y2 = d * h1 + b * w0 + ty;

            var x3 = a * w0 + c * h0 + tx;
            var y3 = d * h0 + b * w0 + ty;

            var x4 =  a * w1 + c * h0 + tx;
            var y4 =  d * h0 + b * w1 + ty;

            var maxX = -Infinity;
            var maxY = -Infinity;

            var minX = Infinity;
            var minY = Infinity;

            minX = x1 < minX ? x1 : minX;
            minX = x2 < minX ? x2 : minX;
            minX = x3 < minX ? x3 : minX;
            minX = x4 < minX ? x4 : minX;

            minY = y1 < minY ? y1 : minY;
            minY = y2 < minY ? y2 : minY;
            minY = y3 < minY ? y3 : minY;
            minY = y4 < minY ? y4 : minY;

            maxX = x1 > maxX ? x1 : maxX;
            maxX = x2 > maxX ? x2 : maxX;
            maxX = x3 > maxX ? x3 : maxX;
            maxX = x4 > maxX ? x4 : maxX;

            maxY = y1 > maxY ? y1 : maxY;
            maxY = y2 > maxY ? y2 : maxY;
            maxY = y3 > maxY ? y3 : maxY;
            maxY = y4 > maxY ? y4 : maxY;

            var bounds = this._bounds;

            bounds.x = minX;
            bounds.width = maxX - minX;

            bounds.y = minY;
            bounds.height = maxY - minY;

            // store a reference so that if this function gets called again in the render cycle we do not have to recalculate
            this._currentBounds = bounds;

            return bounds;
        },

        setTexture: function(texture){
            if(!texture){
                texture = PQ.AssetCache.getTexture("_PQDefaultTexture");
            }else if(typeof texture === "string"){
                texture = PQ.AssetCache.getTexture(texture);
            }
            PQ.TilingSprite._super.setTexture.call(this, texture);
            this._textureResolution = texture.baseTexture.resolution || 1;
            return this;
        },

        setTileScale: function(x,y){
            this.tileScale.set(x,y);
            return this;
        },

        setTileVelocity: function(x,y){
            this.tileVel.set(x||0, y||0);
            return this;
        },

        setTilePosition: function(x, y){
            this.tilePosition.set(x,y);
            return this;
        },

        _update: function(gameTime, frameElapsedTime){
            if(PQ.Debug.enabled)PQ.Debug.sceneActors++;
            if(this.update(gameTime, frameElapsedTime) === false){
                return;
            }

            if(this.vel.x !== 0 || this.vel.y !== 0){
                if(PQ.Config.deltaAnimation){
                    this.x += this.vel.x*PQ.delta;
                    this.y += this.vel.y*PQ.delta;
                }else {
                    this.x += this.vel.x;
                    this.y += this.vel.y;
                }
            }

            if(this.tileVel.x !== 0 || this.tileVel.y !== 0){
                if(PQ.Config.deltaAnimation){
                    this.tilePosition.x += this.tileVel.x*PQ.delta;
                    this.tilePosition.y += this.tileVel.y*PQ.delta;
                }else {
                    this.tilePosition.x += this.tileVel.x;
                    this.tilePosition.y += this.tileVel.y;
                }
            }

            for (var i = 0; i < this.children.length; i++) {
                if (this.children[i]._update) {
                    this.children[i]._update(gameTime, frameElapsedTime);
                }
            }

            this.postUpdate(gameTime, frameElapsedTime);
        },

        generateTilingTexture: function(forcePowerOfTwo){
            if (!this.texture.baseTexture.hasLoaded) return;

            var res = this._textureResolution;

            var texture = this.originalTexture || this.texture;
            var frame = texture.frame;
            var targetWidth, targetHeight;

            //  Check that the frame is the same size as the base texture.
            var isFrame = frame.width !== texture.baseTexture.width || frame.height !== texture.baseTexture.height;

            var newTextureRequired = false;

            if (!forcePowerOfTwo)
            {
                if (isFrame)
                {
                    targetWidth = frame.width;
                    targetHeight = frame.height;

                    newTextureRequired = true;
                }
            }
            else
            {

                targetWidth = PIXI.getNextPowerOfTwo(frame.width);
                targetHeight = PIXI.getNextPowerOfTwo(frame.height);

                //TODO: El isFrame lo he añadido, hay un bug muy extraño cuando la textura es pot2 y el frame es pot2 tambien (revisar)
                if (isFrame || frame.width !== targetWidth || frame.height !== targetHeight) newTextureRequired = true;
            }

            if (newTextureRequired)
            {
                var canvasBuffer;

                if (this.tilingTexture && this.tilingTexture.isTiling)
                {
                    canvasBuffer = this.tilingTexture.canvasBuffer;
                    canvasBuffer.resize(targetWidth, targetHeight);
                    this.tilingTexture.baseTexture.width = targetWidth;
                    this.tilingTexture.baseTexture.height = targetHeight;
                    this.tilingTexture.needsUpdate = true;
                }
                else
                {
                    canvasBuffer = new PIXI.CanvasBuffer(targetWidth, targetHeight);

                    this.tilingTexture = PIXI.Texture.fromCanvas(canvasBuffer.canvas);
                    this.tilingTexture.canvasBuffer = canvasBuffer;
                    this.tilingTexture.isTiling = true;
                }

                canvasBuffer.context.drawImage(texture.baseTexture.source,
                    texture.crop.x,
                    texture.crop.y,
                    texture.crop.width,
                    texture.crop.height,
                    0,
                    0,
                    targetWidth,
                    targetHeight);

                this.tileScaleOffset.x = frame.width / targetWidth/res;
                this.tileScaleOffset.y = frame.height / targetHeight/res;
            }
            else
            {
                //  TODO - switching?
                if (this.tilingTexture && this.tilingTexture.isTiling)
                {
                    // destroy the tiling texture!
                    // TODO could store this somewhere?
                    this.tilingTexture.destroy(true);
                }

                this.tileScaleOffset.x = 1;
                this.tileScaleOffset.y = 1;
                this.tilingTexture = texture;
            }

            this.refreshTexture = false;

            this.originalTexture = this.texture;
            this.texture = this.tilingTexture;

            this.tilingTexture.baseTexture._powerOf2 = true;
            //this.tilingTexture.baseTexture.resolution = res;
        },

        _renderCanvas: function(renderSession){
            if (this.visible === false || this.alpha === 0)return;

            var res = this._textureResolution;

            var context = renderSession.context;

            if (this._mask)
            {
                renderSession.maskManager.pushMask(this._mask, context);
            }

            context.globalAlpha = this.worldAlpha;

            var transform = this.worldTransform;

            var i,j;

            var resolution = renderSession.resolution;

            context.setTransform(transform.a * resolution,
                transform.c * resolution,
                transform.b * resolution,
                transform.d * resolution,
                transform.tx * resolution,
                transform.ty * resolution);

            if (!this.__tilePattern ||  this.refreshTexture)
            {
                this.generateTilingTexture(false);

                if (this.tilingTexture)
                {
                    this.__tilePattern = context.createPattern(this.tilingTexture.baseTexture.source, 'repeat');
                }
                else
                {
                    return;
                }
            }

            // check blend mode
            if (this.blendMode !== renderSession.currentBlendMode)
            {
                renderSession.currentBlendMode = this.blendMode;
                context.globalCompositeOperation = PIXI.blendModesCanvas[renderSession.currentBlendMode];
            }

            var tilePosition = this.tilePosition;
            var tileScale = this.tileScale;
            tileScaleX = tileScale.x / res;
            tileScaleY = tileScale.y / res;

            tilePosition.x %= this.tilingTexture.baseTexture.width;
            tilePosition.y %= this.tilingTexture.baseTexture.height;

            // offset - make sure to account for the anchor point..
            context.scale(tileScaleX,tileScaleY);
            context.translate(tilePosition.x, tilePosition.y);

            context.fillStyle = this.__tilePattern;

            context.fillRect(-tilePosition.x,
                -tilePosition.y,
                this._width / tileScaleX,
                this._height / tileScaleY);

            context.scale(1 / tileScaleX, 1 / tileScaleY);
            context.translate(-tilePosition.x, -tilePosition.y);

            if (this._mask)
            {
                renderSession.maskManager.popMask(renderSession.context);
            }

            for (i=0,j=this.children.length; i<j; i++)
            {
                this.children[i]._renderCanvas(renderSession);
            }
        }

    });

})();
(function(){

    PQ.SceneManager = PIXI.Stage.extend({
        _initiated: true,

        _init: function(game, color){
            this.currentScene = null;

            color = color || 0x000001;
            this.game = game;
            this._scenes = [];

            PQ.SceneManager._super._init.call(this,color);

            return this;
        },

        removeScene: function(scene){
            var i;
            if(typeof scene === "string") {
                for (i = 0; i < this._scenes.length; i++) {
                    if (scene === this._scenes[i].getID()) {
                        this._scenes.splice(i, 1);
                    }
                }
            }else if(scene instanceof PQ.Scene){
                for (i = 0; i < this._scenes.length; i++) {
                    if (scene === this._scenes[i]) {
                        this._scenes.splice(i, 1);
                    }
                }
            }

            return this;
        },

        removeAll: function(){
            for(var i = this.children.length-1; i >= 0; i--){
                this.removeChild(this.children[i]);
            }

            return this;
        },

        setScene: function(scene){
            if(typeof scene === "string"){
                scene = this.getScene(scene);
            }
            this.removeAll();
            this.addChild(scene);
            return this;
        },

        getTotal: function(){
            return this._scenes.length;
        },

        addScene: function(scene, id){
            if(id){
                scene.setID(id);
            }

            this._scenes.push(scene);
            this._initiated = false;
            return this;
        },

        createScene: function(id, color){
            color = (typeof color !== "number") ? 0x000001 : color;

            var scene = new PQ.Scene(this.game, color);

            this.addScene(scene, id);

            if(!this.game.currentScene){
                this.renderScene(scene);
            }

            return scene;
        },

        _update: function(lastTime, frameElapsedTime){
            this.currentScene._update(lastTime, frameElapsedTime);
        },

        createTransitionTo: function(scene, effect){
            if(typeof scene === "string") scene = this.getScene(scene);
            return new PQ.SceneTransition(this.game, scene, this.currentScene, effect);
        },

        getScene: function(id){
            var scene = null;
            for(var i = 0; i < this._scenes.length; i++){
                if(id === this._scenes[i].getID()){
                    scene = this._scenes[i];
                }
            }
            return scene;
        },

        addTransitionSprites: function(one, two){
            this.removeAll();
            this.addChild(one);
            this.addChild(two);

            return this;
        },

        renderScene: function(scene){
            if(typeof scene === "string"){
                var id = scene;
                scene = this.getScene(scene);
            }

            if(scene){
                this.currentScene = scene;
                this.setScene(scene);
                if(typeof scene.onActive === "function"){
                    scene.onActive();
                }
            }

            return this;
        },

        _renderWebGL: function(rendererSession){
            if(!this._initiated) {
                //Initialize new scenes
                var i, init = [];
                for (i = 0; i < this._scenes.length; i++) {
                    if (!this._scenes[i]._initiated) {
                        init.push(this._scenes[i]);
                        this.addChildAt(this._scenes[i], 0);
                        this._scenes[i]._initiated = true;
                    }
                }
                PQ.SceneManager._super._renderWebGL.call(this, rendererSession);
                if (init.length >= 1) {
                    for (i = 0; i < init.length; i++) {
                        if (init[i] !== this.currentScene) {
                            this.removeChild(init[i]);
                        }
                    }
                }
                this._initiated = true;
                return;
            }

            PQ.SceneManager._super._renderWebGL.call(this, rendererSession);

            //TODO: RenderCanvas???

        }

    });

})();
(function(){

    PQ.Scene = PQ.Container.extend({
        id: null,
        _init: function(game, color){
            PQ.Scene._super._init.call(this);
            this._initiated = false;
            this._mask = null;
            this.paused = false;
            this.game = game;
            var size = game.getSize();

            this.anchor = new PQ.Point(0,0);
            color = color || 0x000001;
            this.setSize(size.width, size.height)
                .setBackgroundColor(color);

            this.camera = new PQ.Camera(this)
                .setSize(size.width, size.height)
                .setPosition(size.width/2, size.height/2);

            this._addChild(this.camera);

            this.gui = new PQ.Container()
                .setSize(size.width, size.height)
                .setPosition(size.width/2, size.height/2);

            this._addChild(this.gui);

            this.scale.set(PQ.Config.resolution, PQ.Config.resolution);

            this.timerManager = new PQ.TimerManager();
            this.tweenManager = new PQ.TweenManager();
            return this;
        },

        createTimer: function(time){
            return this.timerManager.createTimer(time);
        },

        createTween: function(target){
            return this.tweenManager.createTween(target);
        },

        setPause: function(value){
            this.paused = (value !== false);
            return this;
        },

        togglePause: function(){
            this.paused = !this.paused;
            return this;
        },

        addChild: function(child){
            this.camera.addChild(child);
            return this;
        },

        _addChild: function(child){
            PIXI.DisplayObjectContainer.prototype.addChild.call(this, child);
            this._sortChildrenByDepth();

            return this;
        },

        setID: function(id){
            this.id = id;
            return this;
        },

        getID: function(){
            return this.id;
        },

        addTween: function(tween){
            this._tweenManager.addTween(tween);
            return this;
        },

        _update: function(gameTime, frameElapsedTime){
            if(this.paused || this.update(gameTime, frameElapsedTime) === false){
                return;
            }

            if(this.timerManager._update) {
                this.timerManager._update(gameTime, frameElapsedTime);
            }

            if(this.tweenManager._update) {
                this.tweenManager._update(gameTime, frameElapsedTime);
            }

            if(this.camera._update) {
                this.camera._update(gameTime, frameElapsedTime);
            }

            if(this.gui._update) {
                this.gui._update(gameTime, frameElapsedTime);
            }
        },

        setClip: function(value){
            if(value === false){
                if(this._mask){
                    this.removeChild(this._mask);
                    this._mask = null;
                    this.mask = null;
                }
            }else if(!this._mask) {
                this._mask = new PQ.Graphics()
                    .beginFill()
                    .drawRect(0, 0, this.game.getSize().width, this.game.getSize().height)
                    .endFill()
                    .addTo(this);

                this.mask = this._mask;
            }

            return this;
        },

        transitionTo: function(scene, effect){
            return this.game.sceneManager.createTransitionTo(scene, effect);
        },

        update: function(gameTime, frameElapsedTime){ return this; },

        onActive: function(){ return this; }

    });

})();
(function(){

    PQ.SceneTransition = PQ.Class.extend({
        _tweenIn: null,
        _tweenOut: null,

        _onStartCallback: null,
        _onEndCallback: null,

        transitionTimer: null,

        _init: function(game, sceneIn, sceneOut, effect, delay, time, easing){
            var scope = this;
            this.game = game;
            this.time = time || 1000;
            this.delay = delay || 0;
            this.easing = easing || PQ.Easing.linear();
            this.effect = effect || PQ.Transition.pushFromLeft();

            this.transitionTimer = new PQ.Timer(this.time, game.timerManager);

            var inTexture, outTexture;

            //TODO: Ejecutar esto un frame despues, me permitiria separar la carga de crear la textuas si el usuario usa delay
            this.transitionTimer.onStart(function(){
                sceneIn.setPause().setClip();
                inTexture = scope._takeSnapShot(sceneIn);
                sceneIn.setPause(false).setClip(false);
                sceneOut.setPause().setClip();
                outTexture = scope._takeSnapShot(sceneOut);
                sceneOut.setPause(false).setClip(false);

                var tweens = scope.effect(scope.game.sceneManager, inTexture, outTexture, scope.time, scope.easing);
                scope._tweenIn = tweens.tweenIn;
                scope._tweenOut = tweens.tweenOut;

                if(scope._tweenIn){
                    scope._tweenIn.setManager(scope.game.tweenManager);
                }

                if(scope._tweenOut){
                    scope._tweenOut.setManager(scope.game.tweenManager);
                }

                if(scope._onStartCallback && typeof scope._onStartCallback === "function"){
                    scope._onStartCallback(sceneIn, sceneOut);
                }

            }).onEnd(function(){
                scope.game.sceneManager.renderScene(sceneIn);

                if(scope._onEndCallback && typeof scope._onEndCallback === "function"){
                    scope._onEndCallback(sceneIn, sceneOut);
                }

                inTexture.texture.destroy();
                outTexture.texture.destroy();
            });

            return this;
        },

        _takeSnapShot: function(scene){
            var texture = scene.generateTexture();
            var sprite = new PQ.Sprite(texture)
                .setAnchor(0,0);

            sprite.scale.set(PQ.Config.resolution, PQ.Config.resolution);
            return sprite;
        },

        onEnd: function(callback){
            this._onEndCallback = callback;
            return this;
        },

        onStart: function(callback){
            this._onStartCallback = callback;
            return this;
        },

        setEasing: function(easing){
            easing = easing || PQ.Easing.Linear;
            this.easing = easing;
            return this;
        },

        setTime: function(time){
            time = time || 1000;
            this.time = time;
            this.transitionTimer.setTime(time);
            return this;
        },

        setDelay: function(delay){
            delay = delay || 0;
            this.delay = delay;
            this.transitionTimer.setDelay(delay);
            return this;
        }

    });

    PQ.Transition = {

        //Empujar parejo
        pushFromTop: function() {
            return function (sceneManager, sceneIn, sceneOut, time, easing) {
                sceneManager.addTransitionSprites(sceneIn, sceneOut);

                var tweenIn = new PQ.Tween(sceneIn)
                    .from({
                        x: 0,
                        y: -sceneIn.height*PQ.Config.resolution
                    }).to({
                        x: 0,
                        y: 0
                    })
                    .setTime(time)
                    .setEasing(easing);

                var tweenOut = new PQ.Tween(sceneOut)
                    .from({
                        x: 0,
                        y: 0
                    }).to({
                        x: 0,
                        y: sceneOut.height*PQ.Config.resolution
                    })
                    .setTime(time)
                    .setEasing(easing);

                return {
                    tweenIn: tweenIn,
                    tweenOut: tweenOut
                };
            };
        },

        pushFromBottom: function(){
            return function(sceneManager, sceneIn, sceneOut, time, easing) {
                sceneManager.addTransitionSprites(sceneIn, sceneOut);

                var tweenIn = new PQ.Tween(sceneIn)
                    .from({
                        x: 0,
                        y: sceneIn.height*PQ.Config.resolution
                    }).to({
                        x: 0,
                        y: 0
                    })
                    .setTime(time)
                    .setEasing(easing);

                var tweenOut = new PQ.Tween(sceneOut)
                    .from({
                        x: 0,
                        y: 0
                    }).to({
                        x: 0,
                        y: -sceneOut.height*PQ.Config.resolution
                    })
                    .setTime(time)
                    .setEasing(easing);

                return {
                    tweenIn: tweenIn,
                    tweenOut: tweenOut
                };
            };
        },

        pushFromLeft: function(){
            return function(sceneManager, sceneIn, sceneOut, time, easing){
                sceneManager.addTransitionSprites(sceneIn, sceneOut);

                var tweenIn = new PQ.Tween(sceneIn)
                    .from({
                        x : -sceneIn.width*PQ.Config.resolution,
                        y : 0
                    }).to({
                        x: 0,
                        y: 0
                    })
                    .setTime(time)
                    .setEasing(easing);

                var tweenOut = new PQ.Tween(sceneOut)
                    .from({
                        x : 0,
                        y : 0
                    }).to({
                        x: sceneOut.width*PQ.Config.resolution,
                        y: 0
                    })
                    .setTime(time)
                    .setEasing(easing);

                return {
                    tweenIn : tweenIn,
                    tweenOut : tweenOut
                };
            };
        },

        pushFromRight: function(){
            return function(sceneManager, sceneIn, sceneOut, time, easing){
                sceneManager.addTransitionSprites(sceneIn, sceneOut);

                var tweenIn = new PQ.Tween(sceneIn)
                    .from({
                        x : sceneIn.width*PQ.Config.resolution,
                        y : 0
                    }).to({
                        x: 0,
                        y: 0
                    })
                    .setTime(time)
                    .setEasing(easing);

                var tweenOut = new PQ.Tween(sceneOut)
                    .from({
                        x : 0,
                        y : 0
                    }).to({
                        x: -sceneOut.width*PQ.Config.resolution,
                        y: 0
                    })
                    .setTime(time)
                    .setEasing(easing);

                return {
                    tweenIn : tweenIn,
                    tweenOut : tweenOut
                };
            };
        },

        //Situar encima sin mover la anterior
        overlapFromTop: function(){
            return function(sceneManager, sceneIn, sceneOut, time, easing){
                sceneManager.addTransitionSprites(sceneOut, sceneIn);

                var tweenIn = new PQ.Tween(sceneIn)
                    .from({
                        x : 0,
                        y : -sceneIn.height*PQ.Config.resolution
                    }).to({
                        x: 0,
                        y: 0
                    })
                    .setTime(time)
                    .setEasing(easing);

                return {
                    tweenIn : tweenIn,
                    tweenOut : null
                };
            };
        },

        overlapFromBottom: function(){
            return function(sceneManager, sceneIn, sceneOut, time, easing){
                sceneManager.addTransitionSprites(sceneOut, sceneIn);

                var tweenIn = new PQ.Tween(sceneIn)
                    .from({
                        x : 0,
                        y : sceneIn.height*PQ.Config.resolution
                    }).to({
                        x: 0,
                        y: 0
                    })
                    .setTime(time)
                    .setEasing(easing);

                return {
                    tweenIn : tweenIn,
                    tweenOut : null
                };
            };
        },

        overlapFromLeft: function(){
            return function(sceneManager, sceneIn, sceneOut, time, easing){
                sceneManager.addTransitionSprites(sceneOut, sceneIn);

                var tweenIn = new PQ.Tween(sceneIn)
                    .from({
                        x : -sceneIn.width*PQ.Config.resolution,
                        y : 0
                    }).to({
                        x: 0,
                        y: 0
                    })
                    .setTime(time)
                    .setEasing(easing);

                return {
                    tweenIn : tweenIn,
                    tweenOut : null
                };
            };
        },

        overlapFromRight: function(){
            return function(sceneManager, sceneIn, sceneOut, time, easing){
                sceneManager.addTransitionSprites(sceneOut, sceneIn);

                var tweenIn = new PQ.Tween(sceneIn)
                    .from({
                        x : sceneIn.width*PQ.Config.resolution,
                        y : 0
                    }).to({
                        x: 0,
                        y: 0
                    })
                    .setTime(time)
                    .setEasing(easing);

                return {
                    tweenIn : tweenIn,
                    tweenOut : null
                };
            };
        },

        //La que está sale dejando ver a la nueva debajo ya situada
        exitFromTop: function(){
            return function(sceneManager, sceneIn, sceneOut, time, easing){
                sceneManager.addTransitionSprites(sceneIn, sceneOut);

                var tweenOut = new PQ.Tween(sceneOut)
                    .to({
                        x: 0,
                        y: -sceneOut.height*PQ.Config.resolution
                    })
                    .setTime(time)
                    .setEasing(easing);

                return {
                    tweenIn : null,
                    tweenOut : tweenOut
                };
            };
        },

        exitFromBottom: function(){
            return function(sceneManager, sceneIn, sceneOut, time, easing){
                sceneManager.addTransitionSprites(sceneIn, sceneOut);

                var tweenOut = new PQ.Tween(sceneOut)
                    .to({
                        x: 0,
                        y: sceneOut.height*PQ.Config.resolution
                    })
                    .setTime(time)
                    .setEasing(easing);

                return {
                    tweenIn : null,
                    tweenOut : tweenOut
                };
            };
        },

        exitFromLeft: function(){
            return function(sceneManager, sceneIn, sceneOut, time, easing){
                sceneManager.addTransitionSprites(sceneIn, sceneOut);

                var tweenOut = new PQ.Tween(sceneOut)
                    .to({
                        x: -sceneOut.width*PQ.Config.resolution,
                        y: 0
                    })
                    .setTime(time)
                    .setEasing(easing);

                return {
                    tweenIn : null,
                    tweenOut : tweenOut
                };
            };
        },

        exitFromRight: function(){
            return function(sceneManager, sceneIn, sceneOut, time, easing){
                sceneManager.addTransitionSprites(sceneIn, sceneOut);

                var tweenOut = new PQ.Tween(sceneOut)
                    .to({
                        x: sceneOut.width*PQ.Config.resolution,
                        y: 0
                    })
                    .setTime(time)
                    .setEasing(easing);

                return {
                    tweenIn : null,
                    tweenOut : tweenOut
                };
            };
        },

        //Fundido a un color, y vuelta
        fadeToColor: function(color){
            color = color || 0x000001;

            return function(sceneManager, sceneIn, sceneOut, time, easing){
                sceneManager.addTransitionSprites(sceneIn, sceneOut);

                var colorGraph = new PQ.Graphics()
                    .beginFill(color)
                    .drawRect(0, 0, sceneIn.width*PQ.Config.resolution, sceneIn.height*PQ.Config.resolution)
                    .endFill();

                colorGraph.setAlpha(0);

                sceneManager.addChild(colorGraph)
                    .setPosition(0,0);

                time = time/2;

                var tween = new PQ.Tween(colorGraph)
                    .to({
                        alpha : 1
                    }).setPingPong()
                    .onPingPong(function(){
                        sceneOut.visible = false;
                    })
                    .setTime(time)
                    .setEasing(easing);

                return {
                    tweenIn : null,
                    tweenOut : tween
                };
            };
        },

        fadeIn: function(){ //La nueva aparece encima de la vieja
            return function(sceneManager, sceneIn, sceneOut, time, easing){
                sceneManager.addTransitionSprites(sceneOut, sceneIn);

                var tweenIn = new PQ.Tween(sceneIn)
                    .from({
                        alpha : 0
                    }).to({
                        alpha : 1
                    })
                    .setTime(time)
                    .setEasing(easing);

                return {
                    tweenIn : tweenIn,
                    tweenOut : null
                };
            };
        },

        fadeOut: function(){ //La vieja desaparece dejando ver la nueva debajo
            return function(sceneManager, sceneIn, sceneOut, time, easing){
                sceneManager.addTransitionSprites(sceneIn, sceneOut);

                var tweenOut = new PQ.Tween(sceneOut)
                    .to({
                        alpha : 0
                    })
                    .setTime(time)
                    .setEasing(easing);

                return {
                    tweenIn : null,
                    tweenOut : tweenOut
                };
            };
        },
        crossFade: function(){ //Desapafece una y aparece la otra
            return function(sceneManager, sceneIn, sceneOut, time, easing){
                sceneManager.addTransitionSprites(sceneIn, sceneOut);

                var tweenIn = new PQ.Tween(sceneIn)
                    .from({
                        alpha : 0
                    })
                    .to({
                        alpha : 1
                    })
                    .setTime(time)
                    .setEasing(easing);

                var tweenOut = new PQ.Tween(sceneOut)
                    .to({
                        alpha : 0
                    })
                    .setTime(time)
                    .setEasing(easing);

                return {
                    tweenIn : tweenIn,
                    tweenOut : tweenOut
                };
            };
        },

        flipX: function(){
            return function(sceneManager, sceneIn, sceneOut, time, easing){
                sceneManager.addTransitionSprites(sceneIn, sceneOut);
                sceneIn.setPosition(sceneIn.width*PQ.Config.resolution/2, 0).setAnchor(0.5, 0);
                sceneOut.setPosition(sceneOut.width*PQ.Config.resolution/2, 0).setAnchor(0.5, 0);
                var ww = sceneIn.width*PQ.Config.resolution;
                sceneIn.width = 0;

                var tweenOut = new PQ.Tween(sceneOut)
                    .to({
                        width: 0
                    }).onEnd(function(){
                        sceneOut.visible = false;
                    })
                    .setTime(time/2)
                    .setEasing(easing);

                var tweenIn = new PQ.Tween(sceneIn)
                    .from({
                        width: 0
                    })
                    .to({
                        width: ww
                    })
                    .setDelay(time/2)
                    .setTime(time/2)
                    .setEasing(easing);

                return {
                    tweenIn : tweenIn,
                    tweenOut : tweenOut
                };
            };
        },

        flipY: function(){
            return function(sceneManager, sceneIn, sceneOut, time, easing){
                sceneManager.addTransitionSprites(sceneIn, sceneOut);
                sceneIn.setPosition(0, sceneIn.height*PQ.Config.resolution/2).setAnchor(0, 0.5);
                sceneOut.setPosition(0, sceneOut.height*PQ.Config.resolution/2).setAnchor(0, 0.5);
                var hh = sceneIn.height*PQ.Config.resolution;
                sceneIn.height = 0;

                var tweenOut = new PQ.Tween(sceneOut)
                    .to({
                        height: 0
                    }).onEnd(function(){
                        sceneOut.visible = false;
                    })
                    .setTime(time/2)
                    .setEasing(easing);

                var tweenIn = new PQ.Tween(sceneIn)
                    .from({
                        height: 0
                    })
                    .to({
                        height: hh
                    })
                    .setDelay(time/2)
                    .setTime(time/2)
                    .setEasing(easing);

                return {
                    tweenIn : tweenIn,
                    tweenOut : tweenOut
                };
            };
        },

        zoom: function(value){
            value = (typeof value !== "number") ? 0.5 : value;
            return function(sceneManager, sceneIn, sceneOut, time, easing){
                sceneManager.addTransitionSprites(sceneIn, sceneOut);
                sceneIn.setPosition(sceneIn.width*PQ.Config.resolution/2, sceneIn.height*PQ.Config.resolution/2).setAnchor(0.5, 0.5);
                sceneOut.setPosition(sceneOut.width*PQ.Config.resolution/2, sceneOut.height*PQ.Config.resolution/2).setAnchor(0.5, 0.5);
                var ww = sceneIn.width*PQ.Config.resolution;
                var hh = sceneIn.height*PQ.Config.resolution;

                var scale = sceneIn.scaleX * value;
                var _scale = sceneIn.scaleX;

                sceneIn.setScale(scale,scale);

                var tweenOut = new PQ.Tween(sceneOut)
                    .to({
                        scaleX: scale,
                        scaleY: scale
                    }).onEnd(function(){
                        sceneOut.visible = false;
                    })
                    .setTime(time/2)
                    .setEasing(easing);

                var tweenIn = new PQ.Tween(sceneIn)
                    .from({
                        scaleX: scale,
                        scaleY: scale
                    })
                    .to({
                        scaleX: _scale,
                        scaleY: _scale
                    })
                    .setDelay(time/2)
                    .setTime(time/2)
                    .setEasing(easing);

                return {
                    tweenIn : tweenIn,
                    tweenOut : tweenOut
                };

            };
        },

    };

})();
(function(){

    //TODO: Revisar problemas con las transiciones cuando hay un setFollow de la camara.

    PQ.Camera = PQ.Container.extend({
        _init: function () {
            PQ.Camera._super._init.call(this);
            this.depth = Infinity;
            this.offset = 0;
            this._target = null;
            this._initFollow = false;
            this.zoom = 1;

            this.vel = new PQ.Point(0,0);

            this._blockAxis = {x: false, y: false};
            //this._myPos = {x:0, y:0};
            this._targetDiff = new PQ.Point(0, 0);
            this._myCenter = new PQ.Point(0, 0);

            return this;
        },

        //TODO: Añadir offset en pantalla, etc...

        unFollow: function(){
            this.setFollow(false);
            return this;
        },

        setFollow: function(target){
            if(!target){
                this._target = null;
                return;
            }

            //TODO: Al hacer follow la camara ha de dirigirse para centrar el objeto

            this._target = target;
            this._initFollow = true;
            return this;
        },

        setZoom: function(value){
            this.zoom = value;
            this.setScale(value, value);
            return this;
        },

        zoomIn: function(value){
            this.setZoom(this.zoom+value);
            return this;
        },

        zoomOut: function(value){
            this.setZoom(this.zoom-value);
            return this;
        },

        goTo: function(x, y){
            //TODO: Methodo para enviar la camara a una posición espcifica, o a un objeto
        },

        setBlockAxis: function(x, y){
            this._blockAxis = {
                x: !!x,
                y: !!y
            };

            return this;
        },

        _follow: function(){
            if(this._initFollow){
                this._targetDiff.set(this._target.worldTransform.tx, this._target.worldTransform.ty);
                this._initFollow = false;
                //this._myPos = new PIXI.Point(this.worldTransform.tx, this.worldTransform.ty);
            }

            //TODO: Revisar, a veces provoca vibraciones, posiblemente se pueda mejorar usando algo similar al getLocation de los mouseEvents
            var diffX = this._target.worldTransform.tx - this._targetDiff.x;
            var diffY = this._target.worldTransform.ty - this._targetDiff.y;

            //console.log(diffX, this.x);

            if(!this._blockAxis.x && this.worldTransform.tx !== -diffX){
                this.x -= diffX;
            }

            if(!this._blockAxis.y && this.worldTransform.ty !== -diffY){
                this.y -= diffY;
            }

        },

        _update: function(gameTime, frameElapsedTime){
            if(this.update(gameTime, frameElapsedTime) === false){
                return;
            }

            if(this._target){
                this._follow();
            }else if(this.vel.x !== 0 || this.vel.y !== 0){
                if(PQ.Config.deltaAnimation){
                    this.x += this.vel.x*PQ.delta;
                    this.y += this.vel.y*PQ.delta;
                }else {
                    this.x += this.vel.x;
                    this.y += this.vel.y;
                }
            }

            for (var i = 0; i < this.children.length; i++) {
                if (this.children[i]._update) {
                    this.children[i]._update(gameTime, frameElapsedTime);
                }
            }

            this.postUpdate(gameTime, frameElapsedTime);
        }

    });

})();
(function(){

    PQ.AssetManager = PQ.Class.extend({
        _textures: [],
        _json: [],
        _audios: [],

        _init: function(){
            var _default = new PQ.Graphics()
                .beginFill(0x000000)
                .drawRect(0,0,0,0)
                .endFill();

            this.addAsset('_PQDefaultTexture', {
                type: 'texture',
                asset:_default.generateTexture()
            });

            return this;
        },

        getTexture: function(id){
            return this._getAsset(id, this._textures);
        },

        getJson: function(id){
            return this._getAsset(id, this._json);
        },

        getAudio: function(id){
            return this._getAsset(id, this._audios);
        },

        _getAsset: function(id, group){
            var r = null;
            for(var i = 0; i < group.length; i++){
                if(group[i].id === id){
                    r = group[i].asset;
                    break;
                }
            }

            return r;
        },

        /**
         * Destroy the texture from de memory on webgl
         * @param id
         */
        destroyTexture: function(id){
            this.getTexture(id).destroy(true);
            return this;
        },

        addAsset: function(id, asset){
            //this._assets.push(asset);
            asset = this._checkAssetsFromLoader(asset);

            switch(asset.type){
                case 'texture':
                    asset.id = id;
                    this._textures.push(asset);
                    break;
                case 'json':
                    asset.id = id;
                    this._json.push(asset);
                    break;
                case 'audio':
                    asset.id = id;
                    this._audios.push(asset);
                    break;
            }

            return asset;

        },

        _checkAssetsFromLoader: function(asset){
            //TODO: Probar con atlas, spine;
            switch(asset.constructor){
                case PQ.ImageLoader:
                    asset = {
                        type : 'texture',
                        asset: asset.texture
                    };
                    break;
                case PQ.JsonLoader:
                    asset = {
                        type : 'json',
                        asset: asset.json
                    };
                    break;
                case PQ.AtlasLoader:
                    console.log('Atlas');
                    asset = {
                        type : 'atlas',
                        asset: asset
                    };
                    break;
                case PQ.SpineLoader:
                    console.log('Spine');
                    asset = {
                        type : 'spine',
                        asset: asset
                    };
                    break;
                case PQ.BitmapFontLoader:
                    //No es necesario almacenarlo
                    asset = {
                        type : 'bitmapfont',
                        asset: asset
                    };
                    break;
                case PQ.AudioLoader:
                    asset = {
                        type: 'audio',
                        asset: asset.audio
                    };
                    break;
            }

            return asset;
        }
    });

    //Namespace for cache
    PQ.AssetCache = new PQ.AssetManager();

})();
(function(){

    var mimeTypes = {
        'ogg': 'audio/ogg',
        'mp3': 'audio/mpeg',
        'wav': 'audio/wav'
    };

    var audioTypes = ['ogg','wav','mp3','audio'];
    var canPlayAudio = null;

    PQ.AssetLoader = PQ.Class.extend({
        loadCount: null,
        _onEndCallback: null,
        _onProgressCallback: null,
        startDate: null,
        totalAssets: 0,

        _init: function(){
            this._assets = [];

            this.loadersByType = {
                'jpg':  PQ.ImageLoader,
                'jpeg': PQ.ImageLoader,
                'png':  PQ.ImageLoader,
                'gif':  PQ.ImageLoader,
                'json': PQ.JsonLoader,
                'atlas': PQ.AtlasLoader,
                'anim': PQ.SpineLoader,
                'xml':  PQ.BitmapFontLoader,
                'fnt':  PQ.BitmapFontLoader,
                'ogg': PQ.AudioLoader,
                'wav': PQ.AudioLoader,
                'mp3': PQ.AudioLoader

                //TODO: Meter un loader de shaders, para crear efectos
                //TODO: Meter un loader para json de particulas
            };

            canPlayAudio = (PQ.getAudioType() !== PQ.NONE_AUDIO);

            if(canPlayAudio){
                var audio = new Audio();

                for(var i = 0; i < PQ.Config.audioExts.length; i++){
                    var ext = PQ.Config.audioExts[i];
                    var r = audio.canPlayType(mimeTypes[ext]);
                    if(r !== ""){
                        PQ.currentAudioExt = ext;
                        break;
                    }
                }

                PQ.log('Audio ext: ' + PQ.currentAudioExt);
            }

            return this;
        },

        addAssets : function(assetsArray){
            var len = assetsArray.length;
            for(var i = 0; i < len; i++){
                if(typeof assetsArray[i] === "string"){
                    this._assets.push({
                        id: assetsArray[i],
                        url: assetsArray[i],
                        type: this._getType(assetsArray[i])
                    });
                }else{
                    this._assets.push({
                        id: assetsArray[i].id,
                        url: assetsArray[i].url,
                        type: this._getType(assetsArray[i].url)
                    });
                }
            }

            return this;
        },

        load: function(callback){
            this.startDate = Date.now();
            if(callback && typeof callback === "function"){
                this._onEndCallback = callback;
            }

            this.totalAssets = this.loadCount = this._assets.length;

            var scope = this;
            var onLoad = function(e){
                scope._assetLoaded(e.content.content);
            };

            for(var i = 0; i < this._assets.length; i++){

                if(audioTypes.indexOf(this._assets[i].type) !== -1 && !canPlayAudio){
                    this.loadCount--;
                    this._checkEnd();
                    continue;
                }

                if(this._assets[i].type === "audio") {
                    this._assets[i].url = this._assets[i].url.substr(0, this._assets[i].url.length - 5) + PQ.currentAudioExt;
                    this._assets[i].type = PQ.currentAudioExt;
                }

                var Constructor = this.loadersByType[this._assets[i].type];
                if(!Constructor){
                    throw new Error(this._assets[i].url + ' is an unsupported file type');
                }

                var loader = new Constructor(this._assets[i].url);
                loader._assetId = this._assets[i].id;
                loader._assetType = this._assets[i].type;
                loader.url = this._assets[i].url;
                loader.addEventListener('loaded', onLoad);
                loader.load();

            }

            return this;
        },

        _getType: function(str){
            return str.split('?').shift().split('.').pop().toLowerCase();
        },

        _assetLoaded: function(e){
            PQ.log('Asset Loaded: ' + e._assetId + ' - ' + e.url);
            this.loadCount--;
            var asset = PQ.AssetCache.addAsset(e._assetId, e);

            if(this._onProgressCallback){
                this._onProgressCallback(asset.id || e._assetId, asset, this.loadCount);

                if(this.loadCount === 0){
                    this._onProgressCallback = null;
                }
            }

            this._checkEnd();

            return this;
        },

        _checkEnd: function(){
            if(this.loadCount === 0){
                PQ.log('All assets has been loaded in ' + (Date.now()-this.startDate) + ' ms.');
                this._assets = [];
                if(this._onEndCallback){
                    var cb = this._onEndCallback;
                    this._onEndCallback = null;

                    cb(PQ.AssetCache);
                }
            }
        },

        onEnd: function(callback){
            if(callback && typeof callback === "function"){
                this._onEndCallback = callback;
            }
            return this;
        },

        onProgress: function(callback){
            if(callback && typeof callback === "function"){
                this._onProgressCallback = callback;
            }
            return this;
        }
    });

})();
(function(){

    //TODO: Adaptar el realWidth y realHeight
    //TODO: el fill se pasa como string, por hacerla como los demás, en plan 0xffffff
    PQ.Text = PIXI.Text.extend(PQ.DisplayCommon, {
        _init: function(text, style){
            text = text || ' ';
            PQ.Text._super._init.call(this, text, style);
            this.vel = new PQ.Point(0,0);
            this.anchor = new PQ.Point(0.5, 0.5);
            return this;
        },

        _getLocale: function(text){
            if(PQ._locale){
                console.log(PQ._locale);
                return PQ._locale.getLocale(text);
            }

            return text;
        },

        setWordWrap: function(value){
            if(value === false){
                this.style.wordWrap = value;
            }else{
                this.style.wordWrap = true;
                this.style.wordWrapWidth = value;
            }

            this.dirty = true;
            return this;
        },

        setFont: function(font){
            this.style.font = font;
            this.dirty = true;
            return this;
        },

        setFillColor: function(color){
            this.style.fill = color;
            this.dirty = true;
            return this;
        },

        setText: function(text, args){
            if(args)text = PQ.Utils.parseText(text, args);
            PQ.Text._super.setText.call(this, text);
            return this;
        },

        setStyle: function(style){
            PQ.Text._super.setStyle.call(this, style);
            return this;
        },

        setAlign: function(align){
            this.style.align = align || 'left';
            this.dirty = true;
        }
    });

    PQ.BitmapText = PIXI.BitmapText.extend(PQ.DisplayCommon, {
        _init: function(text, style){
            text = text || ' ';
            PQ.BitmapText._super._init.call(this, text, style);
            this.vel = new PQ.Point(0,0);
            this.anchor = new PQ.Point(0.5, 0.5);
            return this;
        },
        setTintColor: function(color){
            this.tint = color;
            this.dirty = true;
            return this;
        },

        setWordWrap: function(value){
            if(value === false){
                this.style.wordWrap = value;
            }else{
                this.style.wordWrap = true;
                this.style.wordWrapWidth = value;
            }

            this.dirty = true;
            return this;
        },

        setAlign: function(align){
            this.style.align = align || 'left';
            this.dirty = true;
            return this;
        },

        setFont: function(font){
            this.style.font = font;
            font = font.split(' ');
            this.fontName = font[font.length - 1];
            this.fontSize = font.length >= 2 ? parseInt(font[font.length - 2], 10) : PQ.BitmapText.fonts[this.fontName].size;

            this.dirty = true;
            return this;
        },

        setText: function(text, args){
            if(args)text = PQ.Utils.parseText(text, args);
            PQ.BitmapText._super.setText.call(this, text);
            return this;
        },

        setStyle: function(style){
            style = style || {};
            style.align = style.align || 'left';
            style.wordWrap = style.wordWrap || false;
            style.wordWrapWidth = style.wordWrapWidth || 100;
            this.style = style;

            if(style.font) {
                var font = style.font.split(' ');
                this.fontName = font[font.length - 1];
                this.fontSize = font.length >= 2 ? parseInt(font[font.length - 2], 10) : PIXI.BitmapText.fonts[this.fontName].size;
            }

            this.dirty = true;
            this.tint = style.tint;
            return this;
        },

        updateText: function(){
            if(!this.style.font)return;

            var outputText = this.text;

            if(this.style.wordWrap)outputText = this._wordWrap(outputText);

            var data = PIXI.BitmapText.fonts[this.fontName];
            var pos = new PIXI.Point();
            var prevCharCode = null;
            var chars = [];
            var maxLineWidth = 0;
            var lineWidths = [];
            var line = 0;
            var scale = this.fontSize / data.size;

            for(var i = 0; i < outputText.length; i++)
            {
                var charCode = outputText.charCodeAt(i);

                if(/(?:\r\n|\r|\n)/.test(outputText.charAt(i)))
                {
                    lineWidths.push(pos.x);
                    maxLineWidth = Math.max(maxLineWidth, pos.x);
                    line++;

                    pos.x = 0;
                    pos.y += data.lineHeight;
                    prevCharCode = null;
                    continue;
                }

                var charData = data.chars[charCode];

                if(!charData) continue;

                if(prevCharCode && charData.kerning[prevCharCode])
                {
                    pos.x += charData.kerning[prevCharCode];
                }

                chars.push({texture:charData.texture, line: line, charCode: charCode, position: new PIXI.Point(pos.x + charData.xOffset, pos.y + charData.yOffset)});
                pos.x += charData.xAdvance;

                prevCharCode = charCode;
            }

            lineWidths.push(pos.x);
            maxLineWidth = Math.max(maxLineWidth, pos.x);

            var lineAlignOffsets = [];

            for(i = 0; i <= line; i++)
            {
                var alignOffset = 0;
                if(this.style.align === 'right')
                {
                    alignOffset = maxLineWidth - lineWidths[i];
                }
                else if(this.style.align === 'center')
                {
                    alignOffset = (maxLineWidth - lineWidths[i]) / 2;
                }
                lineAlignOffsets.push(alignOffset);
            }

            var lenChildren = this.children.length;
            var lenChars = chars.length;
            var tint = this.tint || 0xFFFFFF;

            for(i = 0; i < lenChars; i++)
            {
                var c = i < lenChildren ? this.children[i] : this._pool.pop(); // get old child if have. if not - take from pool.

                if (c) c.setTexture(chars[i].texture); // check if got one before.
                else c = new PIXI.Sprite(chars[i].texture); // if no create new one.

                c.position.x = (chars[i].position.x + lineAlignOffsets[chars[i].line]) * scale;
                c.position.y = chars[i].position.y * scale;
                c.scale.x = c.scale.y = scale;
                c.tint = tint;
                if (!c.parent) this.addChild(c);
            }

            // remove unnecessary children.
            // and put their into the pool.
            while(this.children.length > lenChars)
            {
                var child = this.getChildAt(this.children.length - 1);
                this._pool.push(child);
                this.removeChild(child);
            }

            this.textWidth = maxLineWidth * scale;
            this.textHeight = (pos.y + data.lineHeight) * scale;

        },

        updateTransform: function(){
            if(this.dirty)
            {
                this.updateText();
                this.dirty = false;
            }

            PQ.Container.prototype.updateTransform.call(this);
        },

        _getWordWidth: function(word){
            var data = PIXI.BitmapText.fonts[this.fontName];
            var scale = this.fontSize / data.size;
            var prevCharCode = null;
            var ww = 0;
            var charCode, charData;

            for(var i = 0; i < word.length; i++){
                charCode = word.charCodeAt(i);
                charData = data.chars[charCode];
                if(!charData) continue;

                if(prevCharCode && charData.kerning[prevCharCode])
                {
                    ww += charData.kerning[prevCharCode];
                }

                ww += charData.xAdvance;

                prevCharCode = charCode;
            }

            var spaceWidth = 0;
            charData = data.chars[(' ').charCodeAt(0)];
            if(prevCharCode && charData.kerning[prevCharCode])
            {
                spaceWidth += charData.kerning[prevCharCode];
            }
            spaceWidth += charData.xAdvance;
            return {
                wordWidth : ww*scale,
                spaceWidth: spaceWidth*scale
            };
        },

        _wordWrap: function(text){

            var result = '';
            var lines = text.split('\n');
            for (var i = 0; i < lines.length; i++)
            {
                var spaceLeft = this.style.wordWrapWidth;
                var words = lines[i].split(' ');
                for (var j = 0; j < words.length; j++)
                {

                    var wordData = this._getWordWidth(words[j]);
                    var wordWidth = wordData.wordWidth;
                    var wordWidthWithSpace = wordWidth + wordData.spaceWidth;

                    if(j === 0 || wordWidthWithSpace > spaceLeft)
                    {
                        // Skip printing the newline if it's the first word of the line that is
                        // greater than the word wrap width.
                        if(j > 0)
                        {
                            result += '\n';
                        }
                        result += words[j];
                        spaceLeft = this.style.wordWrapWidth - wordWidth;
                    }
                    else
                    {
                        spaceLeft -= wordWidthWithSpace;
                        result += ' ' + words[j];
                    }
                }

                if (i < lines.length-1)
                {
                    result += '\n';
                }
            }
            return result;
        }
    });

})();

(function(){
    PQ.WebAudioSource = PQ.Class.extend({
        _init: function(ctx){
            PIXI.EventTarget.call(this);
            this.context = ctx;
            this.gainNode = this.context.createGain();
            this.refreshSource();

            this.loop = this.source.loop;
            this.buffer = null;

            this.lastPauseTime = 0;
            this.startTime = 0;
            this.offsetTime = 0;
        },

        refreshSource: function(){
            this.source = this.context.createBufferSource();

            if (!this.source.start) {
                this.source.start = this.source.noteOn;
            }

            if (!this.source.stop) {
                this.source.stop = this.source.noteOff;
            }

            var scope = this;
            this.source.onended = function(){
                scope.onEnd();
            };
        },

        onEnd: function(){
            this.stop();
            this.dispatchEvent({
                type: 'ended',
                content: this
            });
            return this;
        },

        setBuffer: function(buffer){
            this.source.buffer = buffer;
            this.buffer = buffer;
            return this;
        },

        setLoop: function(value){
            value = (value !== false);
            this.source.loop = value;
            this.loop = value;
            return this;
        },

        setVolume: function(value){
            this.gainNode.gain.value = value;
            return this;
        },

        pause: function(){
            this.offsetTime += this.context.currentTime - this.startTime;
            this.lastPauseTime = this.offsetTime%this.source.buffer.duration;
            this.stop();
            return this;
        },

        play: function(pause, loop){
            var pauseTime = pause ? this.lastPauseTime : 0;
            if(!this.source.buffer){
                this.setBuffer(this.buffer)
                    .setLoop(this.loop);
            }

            this.startTime = this.context.currentTime;
            this.source.connect(this.gainNode);
            this.gainNode.connect(this.context.destination);
            this.source.start(0, pauseTime);
            if(loop)this.source.loop = true;
            return this;
        },

        stop: function(){
            this.source.stop(0);
            this.source.disconnect();
            this.refreshSource();
        }
    });
})();
(function(){

    var audioPool = null;

    PQ.WebAudio = PQ.Class.extend({
        paused: false,
        _paused: false,
        _loop: false,
        volume: 1,
        _volume: 1,
        _muted: false,

        fading: false,

        _init: function(buffer, ctx){
            this.buffer = buffer;
            this._instances = [];
            if(!audioPool){
                audioPool = new PQ.Pool(PQ.WebAudioSource, [ctx], 10);
            }

            this.manager = null;
            return this;
        },

        setManager: function(manager){
            this.manager = manager;
            return this;
        },

        play: function(loop) {

            var audio = audioPool.getObject();
            audio.setBuffer(this.buffer)
                .setLoop(this._loop)
                .setVolume((this._muted) ? 0 : this._volume)
                .play(false, loop);

            this._instances.push(audio);

            var scope = this;
            var cb = function(e){
                scope._removeInstance(audio);
                audio.returnToPool();
            };

            if(typeof audio.cb === "function"){
                audio.removeEventListener('ended', audio.cb);
            }

            audio.cb = cb;
            audio.addEventListener('ended', cb, false);
            return this;
        },

        setLoop: function (value) {
            value = (value !== false);
            if (this.isPlaying()) {
                this.source.loop = value;
            }
            this._loop = value;
            return this;
        },

        setMute: function(value){
            value = (value !== false);
            var len = this._instances.length;
            for(var i = 0; i < len; i++){
                if(value){
                    this._instances[i].gainNode.gain.value = 0;
                }else{
                    this._instances[i].gainNode.gain.value = this.volume;
                }
            }

            this._muted = value;

            return this;
        },

        isMuted: function(){
            return this._muted;
        },

        stop: function () {
            var len = this._instances.length;
            for(var i = 0; i < len; i++){
                this._instances[i].stop();
                this._instances[i].returnToPool();
                if(this.manager){
                    this.manager._endAudio(this._instances[i]);
                }
            }

            this._instances = [];
            return this;
        },

        setPause: function(value){
            value = (value !== false);
            if(value === this.paused)return this;

            var len = this._instances.length;
            for(var i = 0; i < len; i++){
                if(value) {
                    this._instances[i].pause();
                }else{
                    this._instances[i].play(true);
                }
            }
            this._paused = value;

            return this;
        },

        setVolume: function (value) {
            if(value > 0 && this._muted){
                this._muted = false;
            }
            var len = this._instances.length;
            for(var i = 0; i < len; i++){
                this._instances[i].setVolume(value);
            }
            this._volume = value;
            return this;
        },

        isPlaying: function () {
            return !!(this._instances.length);
        },

        _removeInstance: function(instance){
            var len = this._instances.length;
            var index = null;
            for(var i = 0; i < len; i++){
                if(this._instances[i] === instance){
                    index = i;
                    break;
                }
            }

            this._instances.splice(index,1);
            if(this.manager){
                this.manager._endAudio(this);
            }
        }
    });

    Object.defineProperty(PQ.WebAudio.prototype, 'volume', {
        set: function(value){
            this.setVolume(value);
        },

        get: function(){
            return this._volume;
        }
    });

    Object.defineProperty(PQ.WebAudio.prototype, 'paused', {
        set: function(value){
            this.setPause(value);
        },

        get: function(){
            return this._paused;
        }
    });

})();
(function(){
    var audioPool = null;

    var loopFix = function(e){
        this.currentTime = 0;
        this.play();
    };

    PQ.HTMLAudio = PQ.Class.extend({
        volume: 1,
        _volume: 1,
        paused: false,
        _paused: false,
        _muted: false,

        fading: false,

        _init: function(audio){
            this.audio = audio;
            this._instances = [];
            if(!audioPool){
                audioPool =  new PQ.Pool(Audio, [], 10);
            }

            this.manager = null;
        },

        setManager: function(manager){
            this.manager = manager;
            return this;
        },

        play: function(loop){
            var audio = audioPool.getObject();
            audio.src = this.audio.src;
            audio.preload = "auto";
            audio.volume = (this._muted) ? 0 : this._volume;
            audio.load();
            audio.play();
            this._instances.push(audio);

            var scope = this;
            var cb = function(e){
                scope._removeInstance(this);
                this.returnToPool();
            };

            if(typeof audio.cb === "function"){
                audio.removeEventListener('ended', audio.cb);
            }

            audio.cb = cb;
            if(loop){
                audio.addEventListener('ended', loopFix, false);
            }else{
                audio.removeEventListener('ended', loopFix);
                audio.addEventListener('ended', cb, false);
            }
            return this;
        },

        stop: function(){
            var len = this._instances.length;
            for(var i = 0; i < len; i++){
                var audio = this._instances[i];
                audio.pause();
                audio.currentTime = 0;
                audio.returnToPool();

                if(this.manager){
                    this.manager._endAudio(audio);
                }
            }

            this._instances = [];
            return this;
        },

        setMute: function(value){
            value = (value !== false);
            var len = this._instances.length;
            for(var i = 0; i < len; i++){
                if(value){
                    this._instances[i].volume = 0;
                }else{
                    this._instances[i].volume = this.volume;
                }
            }

            this._muted = value;

            return this;
        },

        isMuted: function(){
            return this._muted;
        },

        setVolume: function(value){
            if(value > 0 && this._muted){
                this._muted = false;
            }
            this.volume = value;
            return this;
        },

        setPause: function(value){
            value = (value !== false);
            if(value === this.paused)return this;
            this.paused = value;
            return this;
        },

        isPlaying: function () {
            return !!(this._instances.length);
        },

        _removeInstance: function(instance){
            var len = this._instances.length;
            var index = null;
            for(var i = 0; i < len; i++){
                if(this._instances[i] === instance){
                    index = i;
                    break;
                }
            }

            this._instances.splice(index,1);
            if(this.manager){
                this.manager._endAudio(this);
            }

        }
    });

    Object.defineProperty(PQ.HTMLAudio.prototype, 'volume', {
        set: function(value){
            this._volume = value;
            var len = this._instances.length;
            for(var i = 0; i < len; i++){
                this._instances[i].volume = this._volume;
            }
        },

        get: function(){
            return this._volume;
        }
    });

    Object.defineProperty(PQ.HTMLAudio.prototype, 'paused', {
        set: function(value){
            value = (value !== false);
            this._paused = value;
            var len = this._instances.length;
            for(var i = 0; i < len; i++){
                if(value) {
                    this._instances[i].pause();
                }else{
                    this._instances[i].play();
                }
            }
        },

        get: function(){
            return this._paused;
        }
    });
})();
(function(){

    var ctx;
    if(PQ.isWebAudioSupported) {
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        ctx = new AudioContext();

        if (!ctx.createGain) {
            ctx.createGain = ctx.createGainNode;
        }
    }

    PQ.AudioLoader = PQ.Class.extend({
        audio: null,
        ajaxRequest: null,
        loaded: false,

        _init: function(url, crossorigin){
            PIXI.EventTarget.call(this);
            this.url = url;
            this.crossorigin = crossorigin;

            this.audioType = PQ.getAudioType();
            return this;
        },

        load: function(){
            if(this.audioType === PQ.WEB_AUDIO){
                return this._loadWebAudio();
            }else if(this.audioType === PQ.HTML_AUDIO){
                return this._loadHTMLAudio();
            }
        },

        _loadWebAudio: function(){
            this.ajaxRequest = new PIXI.AjaxRequest();
            this.ajaxRequest.open('GET', this.url, true);
            this.ajaxRequest.responseType = 'arraybuffer';

            //var ctx = new AudioContext();

            var scope = this;
            this.ajaxRequest.onload = function(){
                ctx.decodeAudioData(scope.ajaxRequest.response, function(buffer){
                    scope.audio = ctx.createBufferSource();
                    scope.audio.buffer = buffer;
                    scope.audio.connect(ctx.destination);

                    scope.audio = new PQ.WebAudio(buffer, ctx);

                    scope.onLoaded();
                }, scope.onError);
            };

            this.ajaxRequest.send(null);

            return this;
        },

        _loadHTMLAudio: function(){
            //TODO: Teastear a fondo, no estoy usando el canplaythrough
            this.ajaxRequest = new PIXI.AjaxRequest();
            this.ajaxRequest.open('GET', this.url, true);

            var audio = new Audio();

            var scope = this;
            this.ajaxRequest.onload = function(){
                audio.src = scope.url;
                audio.load();

                scope.audio = new PQ.HTMLAudio(audio);

                scope.onLoaded();
            };

            this.ajaxRequest.send(null);
        },

        onLoaded: function(){
            this.loaded = true;
            this.dispatchEvent({
                type: 'loaded',
                content: this
            });

            return this;
        },

        onError: function(e){
            this.dispatchEvent({
                type: 'error',
                content: this
            });

            return this;
        }

    });

})();
(function(){

    //TODO: 3d emitters y track list
    PQ.AudioManager = PQ.Class.extend({
        _muted: false,
        _paused: false,

        _init: function(game, limit){
            this.game = game;
            this.limit = limit || 10;
            this._instances = [];
            this.type = PQ.getAudioType();
            this.noneAudio = this.type === PQ.NONE_AUDIO;
        },

        setLimit: function(num){
            this.limit = num;
            return this;
        },

        setVolume: function(id,value){
            if(this.noneAudio)return this;

            var audio = this.getAudio(id);
            if(audio){
                audio.setVolume(value);
            }

            return this;
        },

        pauseAll: function(value){
            if(this.noneAudio)return this;
            value = (value !== false);
            this._paused = value;
            var len = this._instances.length;
            for(var i = 0; i < len; i++){
                var audio = this._instances[i];
                if(audio.fading){
                    var tweens = this.game.tweenManager.getTweensForActor(audio);
                    for(var n = 0; n < tweens.length; n++){
                        tweens[n].setPause(value);
                    }
                }

                audio.setPause(value);
            }
        },

        resumeAll: function(){
            return this.pauseAll(false);
        },

        muteAll: function(value){
            if(this.noneAudio)return this;
            value = (value !== false);
            this._muted = value;
            var len = this._instances.length;
            for(var i = 0; i < len; i++){
                this._instances[i].setMute(value);
            }

            return this;
        },

        unmuteAll: function(){
            return this.muteAll(false);
        },

        isPlaying: function(id){
            var audio = this.getAudio(id);
            if(audio){
                return audio.isPlaying();
            }

            return false;
        },

        isPaused: function(id){
            if(this.noneAudio)return null;

            var audio = this.getAudio(id);
            if(audio){
                return audio.paused;
            }

            return null;
        },

        play: function(id, loop){
            if(this.noneAudio)return this;

            if(this._instances.length >= this.limit){
                PQ.log('AudioManager limit');
                return this;
            }

            var audio = this.getAudio(id);
            if(audio){
                audio.setManager(this)
                    .setMute(this._muted)
                    .setPause(this._paused)
                    .play(loop);

                this._instances.push(audio);
            }

            return this;
        },

        _endAudio: function(audio){
            var len = this._instances.length;
            var index = null;
            for(var i = 0; i < len; i++){
                if(this._instances[i] === audio){
                    index = i;
                    break;
                }
            }

            this._instances.splice(index, 1);
        },

        getAudio: function(audio){
            return PQ.AssetCache.getAudio(audio);
        },

        mute: function(id, value){
            if(this.noneAudio)return this;
            value = (value !== false);
            var audio = this.getAudio(id);
            if(audio){
                audio.setMute(value);
            }

            return this;
        },

        unmute: function(id){
            return this.mute(id, false);
        },

        isMuted: function(id){
            var audio = this.getAudio(id);
            if(audio){
                return audio.isMuted();
            }

            return null;
        },

        setFade: function(id, to, time){
            if(this.noneAudio)return this;
            var audio = this.getAudio(id);
            if(audio && !audio.fading && audio.isPlaying()){

                audio.fading = true;

                var audioTween = new PQ.Tween()
                    .setTarget(audio)
                    .setManager(this.game)
                    .to({
                        volume : to
                    }).setTime(time)
                    .onEnd(function(){
                        audio.fading = false;
                    });
            }

            return this;
        },

        getVolume: function(id){
            if(this.noneAudio)return null;
            var audio = this.getAudio(id);
            if(audio){
                return audio.volume;
            }

            return null;
        },

        stop: function(id){
            if(this.noneAudio)return null;
            var audio = this.getAudio(id);
            if(audio){

                audio.stop();

            }

            return this;
        },

        pause: function(id, value){
            if(this.noneAudio)return this;
            var audio = this.getAudio(id);

            value = (value !== false);

            if(audio){
                if(audio.fading){
                    var tweens = this.game.tweenManager.getTweensForActor(audio);
                    for(var i = 0; i < tweens.length; i++){
                        tweens[i].setPause(value);
                    }
                }

                audio.setPause(value);
            }

            return this;

        },

        resume: function(id){
            return this.pause(id, false);
        }
    });

})();
(function(){
    PQ.TimerManager = PQ.Class.extend({
        _init: function(){
            this._timers = [];
            this._removeTimers = [];
            return this;
        },

        createTimer: function(time){
            return new PQ.Timer(time, this);
        },

        addTimer: function(timer){
            this._timers.push(timer);
            return this;
        },

        removeTimer: function(timer){
            this._removeTimers.push(timer);
            return this;
        },

        _update: function(gameTime, frameElapsedTime){
            var len = this._timers.length;
            if(len > 0){
                for(var i = 0; i < len; i++){
                    this._timers[i]._update(gameTime, frameElapsedTime);
                    if(this._timers[i]._ended){
                        this.removeTimer(this._timers[i]);
                    }
                }
            }

            var removeLen = this._removeTimers.length;
            if(removeLen > 0){
                for(var n = 0; n < len; n++){
                    this._remove((this._removeTimers[n]));
                }
            }
        },

        _remove: function(timer){
            var len = this._timers.length;
            for(var i = 0; i < len; i++){
                if(this._timers[i] === timer){
                    //this._timers[i] = null;
                    this._timers.splice(i, 1);
                    break;
                }
            }

            this._removeTimers = [];
        }
    });
})();

(function(){
    //TODO: Añadir un notExpire para reaprovechar la instancia
    PQ.Timer = PQ.Class.extend({
        _loop: false,
        _repeat: false,
        _leftRepeat: false,
        manager: null,
        _paused: false,
        _time: null,
        _leftTime: null,
        _started: false,
        _ended: false,
        _loopCount: null,
        _delay: null,
        _delayLeft: null,

        _onEndCallback: null,
        _onTickCallback: null,
        _onStartCallback: null,
        _onRepeatCallback: null,
        _onCancelCallback: null,

        _init: function(time, manager){
            this.setTime(time);
            this.setManager(manager);
            return this;
        },

        setDelay: function(value){
            this._delay = value;
            this._delayLeft = value;
            return this;
        },

        togglePause: function(){
            this._paused = !this._paused;
            return this;
        },

        reset: function(){
            this.setTime(this._time);
            this._started = false;
            this._ended = false;
            this._loopCount = 0;

            if(this._repeat) this.setRepeat(this._repeat);
            return this;
        },

        setTime: function(time){
            this._time = time;
            this._leftTime = time;
            return this;
        },

        setPause: function(value){
            this._paused = (value !== false);
            return this;
        },

        resume: function(){
            return this.setPause(false);
        },

        setManager: function(manager){
            if(manager instanceof PQ.TimerManager){
                this.manager = manager;
                this.manager.addTimer(this);
            }else if(manager instanceof PQ.Scene || manager instanceof PQ.Game){
                this.manager = manager.timeManager;
                this.manager.addTimer(this);
            }

            return this;
        },

        setRepeat: function(value){
            this.setLoop(false);
            this._repeat = value || 2;
            this._leftRepeat = this._repeat;
            return this;
        },

        setLoop: function(value){
            if(typeof value === "number" && value !== 0){
                this._loop = false;
                this.setRepeat(value);
            }else if(value !== false){
                this._loop = true;
                this._loopCount = 0;
            }else{
                this._loop = false;
                this._loopCount = 0;
            }

            return this;
        },

        getElapsedTime: function(){
            return this._time - this._leftTime;
        },

        onEnd: function(callback){
            this._onEndCallback = callback;
            return this;
        },

        onTick: function(callback){
            this._onTickCallback = callback;
            return this;
        },

        onStart: function(callback){
            this._onStartCallback = callback;
            return this;
        },

        onRepeat: function(callback){
            this._onRepeatCallback = callback;
            return this;
        },

        onCancel: function(callback){
            this._onCancelCallback = callback;
            return this;
        },

        cancel: function(){
            this._ended = true;

            if(typeof this._onCancelCallback === "function"){
                this._onCancelCallback(this._time - this._leftTime);
            }
            return this;
        },

        _update: function(lastTime, frameElapsedTime){
            if(!this.manager || this._paused || !this._time){
                return;
            }

            if(this._delay && this._delayLeft > 0){
                this._delayLeft -= frameElapsedTime;
                return;
            }

            if(!this._started){
                this._started = true;

                if(typeof this._onStartCallback === "function"){
                    this._onStartCallback(this._time - this._leftTime);
                }
            }

            if(this._leftTime > 0){
                this._leftTime -= frameElapsedTime;
                if(this._leftTime < 0) this._leftTime = 0;

                if(typeof this._onTickCallback === "function"){
                    var loop = null;
                    if(this._loop){
                        loop = this._loopCount;
                    }else if(this._repeat){
                        loop = this._repeat-this._leftRepeat;
                    }
                    this._onTickCallback(this._time - this._leftTime, loop);
                }
            }else if(this._loop) {

                this.setTime(this._time);

                if(typeof this._onRepeatCallback === "function"){
                    this._onRepeatCallback(this._time - this._leftTime, this._loopCount);
                }

                this._loopCount++;

            }else if(this._leftRepeat && this._leftRepeat > 1) {

                this.setTime(this._time);
                this._leftRepeat--;

                if(typeof this._onRepeatCallback === "function"){
                    this._onRepeatCallback(this._time - this._leftTime, this._repeat-this._leftRepeat);
                }

            }else if(!this._ended){

                this._ended = true;
                if(typeof this._onEndCallback === "function"){
                    this._onEndCallback(this._time - this._leftTime);
                }

            }

        }
    });
})();
(function(){

    PQ.TweenManager = PQ.Class.extend({
        _init: function(){
            this._tweens = [];
            this._removeTweens = [];
            return this;
        },

        createTween: function(target){
            return new PQ.Tween(target, this);
        },

        addTween: function(tween){
            this._tweens.push(tween);
            return this;
        },

        removeTween: function(tween){
            this._removeTweens.push(tween);
            return this;
        },

        cancelAll: function(actor){
            var len = 0;
            if(!actor) {
                len = this._tweens.length;
                for (var i = 0; i < len; i++) {
                    this._tweens[i].cancel();
                }
            }else{
                var tweens = this.getTweensForActor(actor);
                len = tweens.length;
                for(var j = 0; j < len; j++){
                    tweens[j].cancel();
                }
            }

            return this;
        },

        getTweensForActor: function(target){
            var len = this._tweens.length;
            var tweens = [];
            for(var i = 0; i < len; i++){
                if(this._tweens[i].target === target){
                    tweens.push(this._tweens[i]);
                }
            }

            return tweens;
        },

        pauseAll: function(value){
            value = (value !== false);
            var len = this._tweens.length;
            for(var i = 0; i < len; i++) this._tweens[i].setPause(value);
            return this;
        },

        resumeAll: function(){
            this.pauseAll(false);
            return this;
        },

        _update: function(gameTime, frameElapsedTime){
            var len = this._tweens.length;
            if(len > 0){
                for(var i = 0; i < len; i++){
                    this._tweens[i]._update(gameTime, frameElapsedTime);
                    if(this._tweens[i]._ended){
                        this.removeTween(this._tweens[i]);
                    }
                }
            }

            var removeLen = this._removeTweens.length;
            if(removeLen > 0){
                for(var n = 0; n < len; n++){
                    this._remove((this._removeTweens[n]));
                }
            }
        },

        _remove: function(tween){
            var len = this._tweens.length;
            for(var i = 0; i < len; i++){
                if(this._tweens[i] === tween){
                    this._tweens.splice(i,1);
                    break;
                }
            }

            this._removeTweens = [];
        }
    });

    //TODO: pasarle valores a algunos algoritmos -> http://upshots.org/actionscript/jsas-understanding-easing
    PQ.Easing = {
        linear: function(){
            return function(k){
                return k;
            };
        },

        inQuad: function(){
            return function(k){
                return k*k;
            };
        },

        outQuad: function(){
            return function(k){
                return k*(2-k);
            };
        },

        inOutQuad: function(){
            return function(k){
                if ( ( k *= 2 ) < 1 ) return 0.5 * k * k;
                return - 0.5 * ( --k * ( k - 2 ) - 1 );
            };
        },

        inCubic: function(){
            return function (k) {
                return k * k * k;
            };
        },

        outCubic: function(){
            return function(k){
                return --k * k * k + 1;
            };
        },

        inOutCubic: function(){
            return function(k){
                if ( ( k *= 2 ) < 1 ) return 0.5 * k * k * k;
                return 0.5 * ( ( k -= 2 ) * k * k + 2 );
            };
        },

        inQuart: function(){
            return function(k){
                return k * k * k * k;
            };
        },

        outQuart: function(){
            return function(k){
                return 1 - ( --k * k * k * k );
            };
        },

        inOutQuart: function(){
            return function(k){
                if ( ( k *= 2 ) < 1) return 0.5 * k * k * k * k;
                return - 0.5 * ( ( k -= 2 ) * k * k * k - 2 );
            };
        },

        inQuint: function(){
            return function(k){
                return k * k * k * k * k;
            };
        },

        outQuint: function(){
            return function(k){
                return --k * k * k * k * k + 1;
            };
        },

        inOutQuint: function(){
            return function(k){
                if ( ( k *= 2 ) < 1 ) return 0.5 * k * k * k * k * k;
                return 0.5 * ( ( k -= 2 ) * k * k * k * k + 2 );
            };
        },

        inSine: function(){
            return function(k){
                return 1 - Math.cos( k * Math.PI / 2 );
            };
        },

        outSine: function(){
            return function(k){
                return Math.sin( k * Math.PI / 2 );
            };
        },

        inOutSine: function(){
            return function(k){
                return 0.5 * ( 1 - Math.cos( Math.PI * k ) );
            };
        },

        inExpo: function(){
            return function(k){
                return k === 0 ? 0 : Math.pow( 1024, k - 1 );
            };
        },

        outExpo: function(){
            return function(k){
                return k === 1 ? 1 : 1 - Math.pow( 2, - 10 * k );
            };
        },

        inOutExpo: function(){
            return function(k){
                if ( k === 0 ) return 0;
                if ( k === 1 ) return 1;
                if ( ( k *= 2 ) < 1 ) return 0.5 * Math.pow( 1024, k - 1 );
                return 0.5 * ( - Math.pow( 2, - 10 * ( k - 1 ) ) + 2 );
            };
        },

        inCirc: function(){
            return function(k){
                return 1 - Math.sqrt( 1 - k * k );
            };
        },

        outCirc: function(){
            return function(k){
                return Math.sqrt( 1 - ( --k * k ) );
            };
        },

        inOutCirc: function(){
            return function(k){
                if ( ( k *= 2 ) < 1) return - 0.5 * ( Math.sqrt( 1 - k * k) - 1);
                return 0.5 * ( Math.sqrt( 1 - ( k -= 2) * k) + 1);
            };
        },

        inElastic: function(){
            return function(k){
                var s, a = 0.1, p = 0.4;
                if ( k === 0 ) return 0;
                if ( k === 1 ) return 1;
                if ( !a || a < 1 ) { a = 1; s = p / 4; }
                else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
                return - ( a * Math.pow( 2, 10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) );
            };
        },

        outElastic: function(){
            return function(k){
                var s, a = 0.1, p = 0.4;
                if ( k === 0 ) return 0;
                if ( k === 1 ) return 1;
                if ( !a || a < 1 ) { a = 1; s = p / 4; }
                else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
                return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );
            };
        },

        inOutElastic: function(){
            return function(k){
                var s, a = 0.1, p = 0.4;
                if ( k === 0 ) return 0;
                if ( k === 1 ) return 1;
                if ( !a || a < 1 ) { a = 1; s = p / 4; }
                else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
                if ( ( k *= 2 ) < 1 ) return - 0.5 * ( a * Math.pow( 2, 10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) );
                return a * Math.pow( 2, -10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) * 0.5 + 1;
            };
        },

        inBack: function(v){
            return function(k){
                var s = v || 1.70158;
                return k * k * ( ( s + 1 ) * k - s );
            };
        },

        outBack: function(v){
            return function(k){
                var s = v || 1.70158;
                return --k * k * ( ( s + 1 ) * k + s ) + 1;
            };
        },

        inOutBack: function(v){
            return function(k){
                var s =  (v || 1.70158) * 1.525;
                if ( ( k *= 2 ) < 1 ) return 0.5 * ( k * k * ( ( s + 1 ) * k - s ) );
                return 0.5 * ( ( k -= 2 ) * k * ( ( s + 1 ) * k + s ) + 2 );
            };
        },

        inBounce: function(){
            return function(k){
                return 1 - PQ.Easing.outBounce()( 1 - k );
            };
        },

        outBounce: function(){
            return function(k){
                if ( k < ( 1 / 2.75 ) ) {

                    return 7.5625 * k * k;

                } else if ( k < ( 2 / 2.75 ) ) {

                    return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;

                } else if ( k < ( 2.5 / 2.75 ) ) {

                    return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;

                } else {

                    return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;

                }
            };
        },

        inOutBounce: function(){
            return function(k){
                if ( k < 0.5 ) return PQ.Easing.inBounce()( k * 2 ) * 0.5;
                return PQ.Easing.outBounce()( k * 2 - 1 ) * 0.5 + 0.5;
            };
        }
    };

})();
(function(){

    function isObject(obj){
        return Object.prototype.toString.call(obj) === "[object Object]";
    }

    //TODO: Añadir un notExpire para reaprovechar la instancia
    //TODO: Pemitir meter todos los datos en json desde .set o desde el constructor
    PQ.Tween = PQ.Timer.extend({
        _easing: null,
        _from: null,
        _to: null,
        _pingPong: false,
        _pingPongState: null,
        _pathInfo: null,

        _chainTween: null,

        _onPingPongCallback: null,

        _init: function(target, manager){
            this.setTarget(target);
            this.setManager(manager);
            this._easing = PQ.Easing.linear();

            return this;
        },

        onPingPong: function(callback){
            this._onPingPongCallback = callback;
            return this;
        },

        setTarget: function(target){
            this.target = target;
            return this;
        },

        setEasing: function(ease){
            this._easing = ease || PQ.Easing.linear;
            return this;
        },

        setManager: function(manager){
            var oldManager = this.manager;

            if(manager instanceof PQ.TweenManager){
                this.manager = manager;
                this.manager.addTween(this);
            }else if(manager instanceof PQ.Scene || manager instanceof PQ.Game){
                this.manager = manager.tweenManager;
                this.manager.addTween(this);
            }

            if(oldManager) oldManager.removeTween(this);

            return this;
        },

        to: function(object){
            this._to = object;
            return this;
        },

        path: function(path, reverse){
            this._pathInfo = {
                path: path,
                reverse: reverse
            };
            return this;
        },

        cancel: function(){
            this._ended = true;
        },

        from: function(object){
            this._from = object;
            return this;
        },

        _doNotUpdate: function(){
            //En caso de que el target se haya borrado despues de empezar, elimino el tween
            if(!this.target && this._started){
                this.cancel();
            }

            return (!this.manager || this._paused || !this._time || !this.target || (!this._to&&!this._pathInfo) || this.target.blockTween || this._ended);
        },

        _checkFromTo: function(){
            if(!this._from) this._from = {};

            function checkRecursiveFrom(to, from, target){
                for(var k in to){
                    if(from[k] !== 0 && !from[k]){
                        if(isObject(target[k])){
                            from[k] = JSON.parse(JSON.stringify(target[k]));
                            checkRecursiveFrom(to[k], from[k], target[k]);
                        }else{
                            from[k] = target[k];
                        }
                    }
                }
            }

            checkRecursiveFrom(this._to, this._from, this.target);

            if(this._pathInfo){
                var distance = this._pathInfo.path.getDistance();
                if(this._pathInfo.reverse){
                    this._pathInfo.from = distance;
                    this._pathInfo.to = 0;
                }else{
                    this._pathInfo.from = 0;
                    this._pathInfo.to = distance;
                }
            }

        },

        _applyTween: function(){
            var scope = this;
            function recursiveApply(to, from, target){
                for(var k in to){
                    if(!isObject(to[k])) {
                        var b = from[k],
                            c = to[k] - from[k],
                            d = scope._time,
                            t = (d - scope._leftTime)/d;
                        target[k] = b + (c*scope._easing(t));
                    }else{
                        recursiveApply(to[k], from[k], target[k]);
                    }
                }
            }

            recursiveApply(this._to, this._from, this.target);

            if(this._pathInfo){
                var b = this._pathInfo.from,
                    c = this._pathInfo.to - this._pathInfo.from,
                    d = this._time,
                    t = (d - this._leftTime)/d;

                var distance = b + (c*scope._easing(t));
                var pos = this._pathInfo.path.getPointAtDistance(distance);
                this.target.x = pos.x;
                this.target.y = pos.y;
            }
        },

        setPingPong: function(value){
            this._pingPong = (value !== false);
            if(this._pingPong){
                this._pingPongState = 0;
            }
            return this;
        },

        _update: function(gameTime, frameElapsedTime){
            var to, from;
            if(this._doNotUpdate()){
                return;
            }

            /*if(this.target._isTweenForbidden){
                delete this.target._isTweenForbidden;
                return;
            }*/

            if(this._delay && this._delayLeft > 0){
                this._delayLeft -= frameElapsedTime;
                return;
            }

            if(!this._started){
                this._started = true;

                this._checkFromTo();

                if(typeof this._onStartCallback === "function"){
                    this._onStartCallback(this.target, this._time - this._leftTime);
                }
            }

            if(this._leftTime > 0) {
                this._leftTime -= frameElapsedTime;
                if (this._leftTime < 0) this._leftTime = 0;

                this._applyTween();

                if (typeof this._onTickCallback === "function") {
                    var loop = null;
                    if (this._loop) {
                        loop = this._loopCount;
                    } else if (this._repeat) {
                        loop = this._repeat - this._leftRepeat;
                    }
                    this._onTickCallback(this.target, this._time - this._leftTime, loop);
                }

            }else if(this._pingPong && this._pingPongState === 0){
                this._applyPingPong();
            }else if(this._loop) {

                this.setTime(this._time);
                if(this._pingPong){
                    this._pingPongState = 0;
                    to = this._to;
                    from = this._from;
                    this._from = to;
                    this._to = from;

                    if(this._pathInfo){
                        to = this._pathInfo.to;
                        from = this._pathInfo.from;
                        this._pathInfo.to = from;
                        this._pathInfo.from = to;
                    }
                }

                if(typeof this._onRepeatCallback === "function"){
                    this._onRepeatCallback(this.target, this._time - this._leftTime, this._loopCount);
                }

                this._loopCount++;

            }else if(this._leftRepeat && this._leftRepeat > 1) {

                this.setTime(this._time);
                this._leftRepeat--;
                if(this._pingPong){
                    this._pingPongState = 0;
                    to = this._to;
                    from = this._from;
                    this._from = to;
                    this._to = from;

                    if(this._pathInfo){
                        to = this._pathInfo.to;
                        from = this._pathInfo.from;
                        this._pathInfo.to = from;
                        this._pathInfo.from = to;
                    }
                }

                if(typeof this._onRepeatCallback === "function"){
                    this._onRepeatCallback(this.target, this._time - this._leftTime, this._repeat-this._leftRepeat);
                }

            }else if(!this._ended){

                this._ended = true;

                if(typeof this._onEndCallback === "function"){
                    this._onEndCallback(this.target, this._time - this._leftTime);
                }

                if(this._chainTween){
                    this._chainTween.setManager(this.manager);
                }

            }

        },

        _applyPingPong: function(){
            var to = this._to;
            var from = this._from;
            this._from = to;
            this._to = from;

            this._pingPongState = 1;
            this.setTime(this._time);

            if(this._pathInfo){
                to = this._pathInfo.to;
                from = this._pathInfo.from;
                this._pathInfo.to = from;
                this._pathInfo.from = to;
            }

            if(typeof this._onPingPongCallback === "function"){
                this._onPingPongCallback(this.target, this._time - this._leftTime, this._pingPongState);
            }
        },

        chain: function(tween){
            this._chainTween = tween || new PQ.Tween(this.target);
            return this._chainTween;
        }

    });

})();
(function(){

    //TODO: Portar mi sistema de particulas y crear un helper

})();
(function(){

    PQ.Utils = {

        //TODO: Mejor que esto sería un sprite que se dibujara asi directamente, mejor rendimiento, flexibilidad, etc...
        ninePatchTexture : function(texture, width, height, name){
            if(!texture){
                texture = PQ.AssetCache.getTexture("_PQDefaultTexture");
            }else if(typeof texture === "string"){
                texture = PQ.AssetCache.getTexture(texture);
            }

            var ww = texture.width,
                hh = texture.height,
                xx = texture.frame.x,
                yy = texture.frame.y;

            var left = ww / 3,
                right = ww / 3,
                top = hh / 3,
                bottom = hh / 3;

            var container = new PQ.DisplayObjectContainer();

            for(var i = 0; i < 9; i++){
                var sprite, x, y, w, h;
                switch(i){
                    case 0:
                        x = xx;
                        y = yy;
                        w = left;
                        h = top;
                        sprite = new PQ.Sprite(new PQ.Texture(texture, new PQ.Rectangle(x,y,w,h)))
                            .setAnchor(0,0)
                            .setPosition(0,0)
                            .setSize(left, top);
                        break;
                    case 1:
                        x = xx+left;
                        y = yy;
                        w = Math.floor(ww-left-right);
                        h = top;
                        sprite = new PQ.Sprite(new PQ.Texture(texture, new PQ.Rectangle(x,y,w,h)))
                            .setAnchor(0,0)
                            .setPosition(left,0)
                            .setSize(width-right-left,top);
                        break;
                    case 2:
                        x = xx+Math.floor(ww-right);
                        y = yy;
                        w = right;
                        h = top;
                        sprite = new PQ.Sprite(new PQ.Texture(texture, new PQ.Rectangle(x,y,w,h)))
                            .setAnchor(0,0)
                            .setPosition(width-right,0)
                            .setSize(right,top);
                        break;
                    case 3:
                        x = xx;
                        y = yy+top;
                        w = left;
                        h = Math.floor(hh-top-bottom);
                        sprite = new PQ.Sprite(new PQ.Texture(texture, new PQ.Rectangle(x,y,w,h)))
                            .setAnchor(0,0)
                            .setPosition(0,top)
                            .setSize(left,height-top-bottom);
                        break;
                    case 4:
                        x = xx+left;
                        y = yy+top;
                        w = Math.floor(ww-left-right);
                        h = Math.floor(hh-top-bottom);
                        sprite = new PQ.Sprite(new PQ.Texture(texture, new PQ.Rectangle(x,y,w,h)))
                            .setAnchor(0,0)
                            .setPosition(left,top)
                            .setSize(width-left-right,height-top-bottom);
                        break;
                    case 5:
                        x = xx+Math.floor(ww-right);
                        y = yy+top;
                        w = Math.floor(ww-left-right);
                        h = Math.floor(hh-top-bottom);
                        sprite = new PQ.Sprite(new PQ.Texture(texture, new PQ.Rectangle(x,y,w,h)))
                            .setAnchor(0,0)
                            .setPosition(width-right,top)
                            .setSize(right,height-top-bottom);
                        break;
                    case 6:
                        x = xx;
                        y = yy+Math.floor(hh-bottom);
                        w = left;
                        h = bottom;
                        sprite = new PQ.Sprite(new PQ.Texture(texture, new PQ.Rectangle(x,y,w,h)))
                            .setAnchor(0,0)
                            .setPosition(0,height-bottom)
                            .setSize(left,bottom);
                        break;
                    case 7:
                        x = xx+left;
                        y = yy+Math.floor(hh-bottom);
                        w = Math.floor(ww-left-right);
                        h = bottom;
                        sprite = new PQ.Sprite(new PQ.Texture(texture, new PQ.Rectangle(x,y,w,h)))
                            .setAnchor(0,0)
                            .setPosition(left,height-bottom)
                            .setSize(width-left-right,bottom);
                        break;
                    case 8:
                        x = xx+Math.floor(ww-right);
                        y = yy+Math.floor(hh-bottom);
                        w = right;
                        h = bottom;
                        sprite = new PQ.Sprite(new PQ.Texture(texture, new PQ.Rectangle(x,y,w,h)))
                            .setAnchor(0,0)
                            .setPosition(width-right,height-bottom)
                            .setSize(right,bottom);
                        break;
                }

                container.addChild(sprite);
            }

            var ninePatch = container.generateTexture();

            if(name && PQ.AssetCache){
                var asset = {
                    type : 'texture',
                    asset: ninePatch
                };

                PQ.AssetCache.addAsset(name, asset);
            }

            return ninePatch;

        },

        findSceneParent: function(actor) {
            if (actor instanceof PQ.Scene) {
                return actor;
            } else if (actor.parent) {
                return PQ.Utils.findSceneParent(actor.parent);
            }

            return false;
        },

        parseText: function(text, args){
            for(var key in args){
                var regExp = new RegExp('{{'+key+'}}','g');
                text = text.replace(regExp, args[key]);
            }
            return text;
        }

        //TODO: Añadir un convertidos de hex color string to hex y hex to string

    };

})();