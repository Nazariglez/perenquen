var _plugins = {},
    active = [],
    namespace = null;

function plugin(name, fn){
    namespace = this;
    _plugins[name] = fn;
    return this;
}

function enable(plugins){
    if(typeof plugins === "string")plugins = [plugins];

    var len = plugins.length;
    for(var i = 0; i < len; i++){
        if(_plugins[plugins[i]] && active.indexOf(plugins[i]) === -1){
            _plugins[plugins[i]].call(namespace);
            active.push(plugins[i]);
        }
    }
}

function getList(){
    return Object.keys(_plugins);
}

module.exports = plugin;
//module.exports._plugins = _plugins;
module.exports.enable = enable;
module.exports.getList = getList;
module.exports.getActive = function(){return active;};