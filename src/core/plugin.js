var _plugins = {},
    active = [];

function plugin(name, fn){
    _plugins[name] = fn;
    return this;
}

function activate(plugins){
    if(typeof plugins === "string")plugins = [plugins];

    var len = plugins.length;
    for(var i = 0; i < len; i++){
        if(_plugins[plugins[i]] && active.indexOf(plugins[i]) === -1){
            _plugins[plugins[i]]();
            active.push(plugins[i]);
        }
    }
}

function getList(){
    return Object.keys(_plugins);
}

module.exports = plugin;
//module.exports._plugins = _plugins;
module.exports.activate = activate;
module.exports.getList = getList;
module.exports.getActive = function(){return active};