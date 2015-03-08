var Container = require('../../lib/pixi/src/core/display/Container'),
    Scene = require('../display/Scene');

/**
 * Manage and store all the scenes in the game
 *
 * @class
 * @memberof PQ
 * @param game {Game}
 */
function SceneManager(game){
    Container.call(this);

    /**
     *
     * @member {Game}
     */
    this.game = game;

    /**
     *
     * @member {array}
     */
    this.scenes = [];

    /**
     *
     * @member {Scene}
     */
    this.currentScene = null;
}

SceneManager.prototype = Object.create(Container.prototype);
SceneManager.prototype.constructor = SceneManager;

/**
 * Store a new scene
 *
 * @param scene {Scene}
 * @returns {SceneManager}
 */
SceneManager.prototype.addScene = function(scene){
    this.scenes.push(scene);
    return this;
};

SceneManager.prototype.animate = function(gameTime, delta){
    if(this.currentScene&&this.currentScene.animate){
        this.currentScene.animate(gameTime, delta);
    }

    return this;
};

SceneManager.prototype.setCurrentScene = function(scene){
    scene.setManager(this);
    this.currentScene = scene;
    this.children.length = 0;
    this.addChild(scene);
    return this;
};


module.exports = SceneManager;