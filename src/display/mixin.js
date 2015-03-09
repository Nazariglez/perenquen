module.exports = {
    addTo: function(parent){
        if(parent)parent.addChild(this);
        return this;
    },

    update: function(gameTime, delta){
        return true;
    },

    animate: function(gameTime, delta){
        if(this.update(gameTime, delta)){
            //TODO: Animate

            var len = this.children.length;
            for(var i = 0; i < len; i++){
                this.children[i].animate(gameTime, delta);
            }
        }

        return this;
    }
};
