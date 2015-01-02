(function(){

    //TODO: Mejorar la información dada
    var Debug = PQ.Class.extend({
        panel: null,
        enabled: false,
        fps: 0,
        ms: 0,

        fpsElement: null,
        msElement: null,
        actorsElement: null,

        frames: 0,
        startTime: 0,

        sceneActors: 0,

        _init: function(){
            this.panel = document.createElement('div');
            this.panel.style.cssText = "position:absolute;" +
                "left:0px;" +
                "bottom:0px;" +
                "background-color:#34352E;" +
                "border-top:2px solid #000;" +
                "width:" + window.innerWidth + "px;" +
                "height:20px;";

            var fps = document.createElement('div');
            fps.style.cssText = "text-align: left;" +
            "color: #c0c0c0;" +
            "margin-left: 5px;" +
            "float: left;";
            fps.innerHTML = "<b>Fps:</b> ";
            this.fpsElement = document.createElement('span');
            this.fpsElement.innerHTML = this.fps;
            fps.appendChild(this.fpsElement);

            this.panel.appendChild(fps);

            var ms = document.createElement('div');
            ms.style.cssText = "text-align: left;" +
            "color: #c0c0c0;" +
            "margin-left: 5px;" +
            "float: left;";
            ms.innerHTML = "|| <b>Ms:</b> ";
            this.msElement = document.createElement('span');
            this.msElement.innerHTML = this.ms;
            ms.appendChild(this.msElement);

            this.panel.appendChild(ms);

            var actors = document.createElement('div');
            actors.style.cssText = "text-align: left;" +
            "color: #c0c0c0;" +
            "margin-left: 5px;" +
            "float: left;";
            actors.innerHTML = "|| <b>Actors:</b> ";
            this.actorsElement = document.createElement('span');
            this.actorsElement.innerHTML = this.sceneActors;
            actors.appendChild(this.actorsElement);

            this.panel.appendChild(actors);
            return this;
        },

        enable: function(){
            document.body.appendChild(this.panel);
            this.enabled = true;
            return this;
        },

        disable: function(){
            this.enabled = false;
            document.body.removeChild(this.panel);
            return this;
        },

        update: function(){
            if(this.enabled) {
                this.frames++;
                this.ms += PQ.delta;
                this.actorsElement.innerHTML = this.sceneActors;

                var time = Date.now();
                if(time > this.startTime + 1000){
                    this.fps = Math.round((this.frames*1000)/(time-this.startTime));

                    this.msElement.innerHTML = Math.round((this.ms/this.frames)*1000);
                    this.fpsElement.innerHTML = this.fps;

                    this.startTime = time;
                    this.frames = 0;
                    this.ms = 0;
                }

                this.sceneActors = 0;
            }
        }
    });

    PQ.Debug = new Debug();

})();