var Timer = require('../timer/Timer');

//TODO: pause, backward, delay, reset
function Timeline(manager){
    this._listeners = [];
    this.index = 0;
    this.timer = new Timer(null, manager);
    //this.timer.onUpdate(this.tick.bind(this));
    this.timer.onEnd(this.end.bind(this));
}

Timeline.prototype.constructor = Timeline;

Timeline.prototype.tick = function(time, delta){
    console.log('tick',time);
};

Timeline.prototype.end = function(time, delta){
    var listener = this._listeners[this.index];
    listener.callback.call(this,listener.name, listener.time);

    this.forward();
    return this;
};

Timeline.prototype.forward = function(){
    var len = this._listeners.length;
    this.index = (this.index+1 >= len) ? 0 : this.index+1;

    if(this.index === 0){
        this.timer.reset();
        this.stop()
            .start();
        return this;
    }

    var time = this._listeners[this.index].time - this._listeners[this.index-1].time;
    this.timer.reset()
        .setTime(time)
        .start();
};

Timeline.prototype.addTo = function(manager){
    this.timer.addTo(manager);
    return this;
};

Timeline.prototype.remove = function(){
    this.timer.remove();
    return this;
};

Timeline.prototype.addListener = function(name, time, callback){
    this._listeners.push({
        name: name,
        time: time,
        callback: callback
    });

    this._sort();
    return this;
};

Timeline.prototype.changeListener = function(name, time, callback){
    if(typeof time === "function"){
        time = null;
        callback = time;
    }
    var listener = this.getListener(name);
    if(listener){
        if(time)listener.time = time;
        if(callback)listener.callback = callback;
    }

    this._sort();
    return this;
};

Timeline.prototype.removeListener = function(name){
    var listener = this.getListener(name);
    if(listener){
        var index = this._listeners.indexOf(listener);
        if(index >= 0){
            this._listeners.splice(index, 1);
        }
    }

    return this;
};

Timeline.prototype.getListener = function(name){
    var listener = null;
    var len = this._listeners.length;
    for(var i = 0; i < len; i++){
        if(this._listeners[i].name === name){
            listener = this._listeners[i];
            break;
        }
    }

    return listener;
};

Timeline.prototype._sort = function(){
    this._listeners.sort(function(a,b){
        return (a.time - b.time);
    });
};

Timeline.prototype.start = function(){
    if(this.timer.active)return this;

    if(this._listeners.length < 1){
        console.log('Empty timeline');
        return this;
    }
    var listener = this._listeners[this.index];
    this.timer.setTime(listener.time);
    this.timer.start();

    return this;
};

Timeline.prototype.stop = function(){
    this.timer.stop();
    return this;
};

module.exports = Timeline;