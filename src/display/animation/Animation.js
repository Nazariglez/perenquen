var utils = require('../../core/utils');

function Animation(id, data, grid){
    this._init(id, data, grid);
}

Animation.prototype.constructor = Animation;

Animation.prototype._init = function(id, data, grid){
    this.id = id;
    this.data = data;
    this.isGrid = !!grid;

    if(this.isGrid){
        this._parseGrid();
    }
};

Animation.prototype._parseGrid = function(){
    var rows = this.data.rows,
        cols = this.data.cols,
        texture = (typeof this.data.texture === "string") ? utils.assetCache.getTexture(this.data.texture) : this.data.texture,
        frameOrder = this.data.order;

    var ww = texture.width/cols,
        hh = texture.height/rows,
        xx = texture.frame.x,
        yy = texture.frame.y;

    var frames = [];
};

module.exports = Animation;