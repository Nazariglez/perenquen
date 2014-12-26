(function(){

    PQ.HUD = PQ.Container.extend({
        _update: function(){
            //TODO: Se adapta al viewport siempre, independientemente del tamaño de escena.
        },

        setScale: function(x,y){
            PQ.HUD._super.setScale.call(this, x,y);
            //TODO: Una escala de un solo valor (no vector) para mostrar los elementos.
            return this;
        }
    });

})();