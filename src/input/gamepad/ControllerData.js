function ControllerData(id, gamepadManager){
    this._init(id, gamepadManager);
}

ControllerData.prototype.constructor = ControllerData;

ControllerData.prototype._init = function(id, gamepadManager){
    this.id = id;
    this.manager = gamepadManager;
    this.axeSensibility = this.manager.axeSensibility;

    this.isConnected = false;
    this.axes = [];
    this.buttons = [];
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

    var i;
    for(i = 0; i < data.axes.length; i++){
        if( (data.axes[i] < 0 && data.axes[i] < -this.axeSensibility) || (data.axes[i] > 0 && data.axes[i] > this.axeSensibility)){
            this.axes[i] = data.axes[i];
        }else{
            this.axes[i] = 0;
        }
    }
    this.buttons = data.buttons;
    
};

ControllerData.prototype._reset = function(){
    this.axes = [];
    this.buttons = [];
    this.type = "";
    this.lastTime = 0;
};

module.exports = ControllerData;