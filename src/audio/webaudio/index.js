var sources = [];

function WebAudio(buffer, context){
    this._init(buffer, context);
}

WebAudio.prototype.constructor = WebAudio;

WebAudio.prototype._init = function(buffer, context){
    this.buffer = buffer;
    this.context = context;

    this._paused = false;
    this._volume = 1;
    this._loop = false;
    this.muted = false;
    this.fading = false;
    this.manager = null;

    if(sources.length === 0){
        for(var i = 0; i < 10; i++){
            sources.push('');
        }
    }
};

WebAudio.prototype.addTo = function(manager){
    this.manager.add(this);
    return this;
};

Object.defineProperties(WebAudio.prototype, {
    volume : {
        get: function(){
            return this._volume;
        },

        set: function(value){
            this._volume = value;
        }
    },

    paused : {
        get: function(){
            return this._paused;
        },

        set: function(value){
            this._paused = value !== false;
        }


    },

    loop : {
        get: function(){
            return this._loop;
        },

        set: function(value){
            this._loop = value !== false;
        }


    }
});

module.exports = WebAudio;