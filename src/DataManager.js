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