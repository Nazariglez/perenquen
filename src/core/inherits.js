var addInherits = require('./utils').addInherits;

module.exports = function(core){
    addInherits(core.utils.Pool);
    addInherits(core.Graphics);
    addInherits(core.Scene);
    addInherits(core.Game);
    addInherits(core.SceneManager);

    return core;
};