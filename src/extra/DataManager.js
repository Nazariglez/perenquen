function DataManager(game){
    this.game = game;
    this.id = game.id || "pq.bundle.default";

    this.data = null;

    this.load();
}

DataManager.prototype.constructor = DataManager;

DataManager.prototype.load = function(){
    this.data = JSON.parse(localStorage.getItem(this.id)) || getDefaultData(this.game.version);
    return this;
};

DataManager.prototype._setMetaData = function(){
    this.data.version = this.game.version;
    this.data.lastUpdate = Date.now();
};

DataManager.prototype.save = function(){
    this._setMetaData();

    if(this.game.config.game.usePresitantData){
        localStorage.setItem(this.id, JSON.stringify(this.data));
    }

    return this;
};

DataManager.prototype.reset = function(){
    this.data = getDefaultData();
    this.save();
    return this;
};

DataManager.prototype.set = function(key, value){
    if(Object.prototype.toString.call(key) === "[object Object]"){
        Object.assign(this.data.game, key);
    }else{
        this.data.game[key] = value;
    }

    this.save();
};

DataManager.prototype.get = function(key){
    if(!key){
        return this.data.game;
    }

    return this.data.game[key];
};

Object.defineProperties(DataManager.prototype, {
    lastUpdate: {
        get: function(){
            return this.data.lastUpdate;
        }
    },
    version: {
        get: function() {
            return this.data.version;
        }
    }
});


module.exports = DataManager;

function getDefaultData(version){
    version = version || "0.0.0";
    return {
        version: version,
        lastUpdate: Date.now(),
        game: {}
    };
}