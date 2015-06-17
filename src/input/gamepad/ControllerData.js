function ControllerData(id){
    this._init(id);
}

ControllerData.prototype.constructor = ControllerData;

ControllerData.prototype._init = function(id){
    this.id = id;
    this.isConnected = false;
    this.axes = null;
    this.buttons = null;
    this.type = "";
    this.lastTime = 0;
};

ControllerData.prototype.connect = function(data){
    this.isConnected = true;
    this._reset();

    console.log(data);
    this.type = data.id;

    this.updateData(data);
    return this;
};

ControllerData.prototype.disconnect = function(){
    this.isConnected = false;
    return this;
};

ControllerData.prototype.updateData = function(data){
    if(data.timestamp === this.lastTime)return this;
    this.lastTime = data.timestamp;

    this.axes = data.axes;
    this.buttons = data.buttons;

    //TODO: Umbral de sensibilidad para evitar temblores
};

ControllerData.prototype._reset = function(){
    this.axes = null;
    this.buttons = null;
    this.type = "";
    this.lastTime = 0;
};

module.exports = ControllerData;