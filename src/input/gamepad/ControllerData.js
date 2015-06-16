function ControllerData(id){
    this._init(id);
}

ControllerData.prototype.constructor = ControllerData;

ControllerData.prototype._init = function(id){
    this.id = id;
    this.isConnected = false;
    this.axes = null;
    this.buttons = null;
};

ControllerData.prototype.connect = function(data){
    this.isConnected = true;
    this.updateData(data);
    return this;
};

ControllerData.prototype.disconnect = function(){
    this.isConnected = false;
    return this;
};

ControllerData.prototype.updateData = function(data){
    this.axes = data.axes;
    this.buttons = data.buttons;
};

module.exports = ControllerData;