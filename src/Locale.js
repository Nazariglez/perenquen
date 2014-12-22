(function(){

    PQ.LocaleManager = PQ.Class.extend({
        _init: function(){
            this.lang = navigator.language;
            return this;
        },

        _definitions: [],
        setLang: function(lang){
            this.lang = lang;
            return this;
        },

        /**
         * Almacena en una global para que los textobject traduzcan directamente
         * @param value
         * @returns {_LocaleManager}
         */
        setAutomatic: function(value){
            value = (value !== false);
            if(value){
                PQ._locale = this;
            }else{
                if(PQ._locale) delete PQ._locale;
            }
            return this;
        },

        addDefinitions: function(arr){
            if(Object.prototype.toString.call(arr) === "[object Array]"){
                for(var i = 0; i < arr.length; i++){
                    if(arr[i].id && arr[i].data){
                        this._definitions.push(arr[i]);
                    }
                }
            }else if(typeof arr === "object"){
                if(arr.id && arr.data){
                    this._definitions.push(arr);
                }
            }

            return this;
        },

        _getDefinition: function(lang){
            var def = false;
            for(var i = 0; i < this._definitions.length; i++) {
                if(this.lang === this._definitions[i].id){
                    def = this._definitions[i].data;
                    break;
                }
            }

            return def;
        },

        getLocale: function(id, lang){
            var lng = lang || this.lang;
            var def = this._getDefinition(lng);

            if(def){
                if(def.hasOwnProperty(id)){
                    return def[id];
                }
            }

            return id;
        }
    });

})();
