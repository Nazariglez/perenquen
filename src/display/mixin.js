module.exports = {
    addTo: function(parent){
        if(parent)parent.addChild(this);
        return this;
    }
};
