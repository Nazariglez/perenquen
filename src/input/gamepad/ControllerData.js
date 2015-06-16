function ControllerData(id){
    this._init(id);
}

ControllerData.prototype.constructor = ControllerData;

ControllerData.prototype._init = function(id){
    this.id = id;
    this.isConnected = false;
};

ControllerData.prototype.connect = function(data){
    console.log(data);
    this.isConnected = true;

    return this;
};

ControllerData.prototype.disconnect = function(){
    this.isConnected = false;
    return this;
};

module.exports = ControllerData;