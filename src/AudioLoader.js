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