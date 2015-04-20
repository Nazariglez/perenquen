var Device = require('../core/Device');

function Accelerometer(){
    this.isEnabled = false;

    this.x = 0;
    this.y = 0;
    this.z = 0;

    this._onDeviceMotion = this._onDeviceMotion.bind(this);
}

Accelerometer.prototype.constructor = Accelerometer;

Accelerometer.prototype.set = function(accel){
    if(!accel)return this;

    this.x = accel.x || 0;
    this.y = accel.y || 0;
    this.z = accel.z || 0;
    return this;
};

Accelerometer.prototype.enable = function(value){
    value = (value !== false);

    if(value&&!this.isEnabled) {
        this.isEnabled = true;
        this._enableEvents();
    }else if(!value&&this.isEnabled){
        this.isEnabled = false;
        this._disableEvents();
    }

    return this;
};

Accelerometer.prototype.disable = function(){
    return this.enable(false);
};

Accelerometer.prototype._enableEvents = function(){
    if(Device.hasAccelerometer){
        window.addEventListener('devicemotion', this._onDeviceMotion, true);
    }
};

Accelerometer.prototype._disableEvents = function(){
    if(Device.hasAccelerometer){
        window.removeEventListener('devicemotion', this._onDeviceMotion, true);
    }
};

Accelerometer.prototype._onDeviceMotion = function(e){
    this.set(e.accelerationIncludingGravity);
};

module.exports = Accelerometer;