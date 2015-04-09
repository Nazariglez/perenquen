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

    this.setCurrentScene(this.createScene('initial'));
}

SceneManager.prototype = Object.create(Container.prototype);
SceneManager.prototype.constructor = SceneManager;

/**
 * Store a new scene
 *
 * @param scene {Scene}
 * @param [id] {string}
 * @returns {SceneManager}
 */
SceneManager.prototype.addScene = function(scene, id){
    if(id)scene.id = id;
    this.scenes.push(scene);
    return this;
};

/**
 * Animate the currentScene
 * @param gameTime {number}
 * @param delta {number}
 * @returns {SceneManager}
 */
SceneManager.prototype.animate = function(gameTime, delta){
    if(this.currentScene&&this.currentScene.animate){
        this.currentScene.animate(gameTime, delta);
    }

    return this;
};

/**
 * Set a scene to render and animate
 * @param scene {string|Scene}
 * @returns {SceneManager}
 */
SceneManager.prototype.setCurrentScene = function(scene){
    if(typeof scene === "string")scene = this.getSceneById(scene);
    scene.setManager(this);
    this.currentScene = scene;
    this.children.length = 0;
    this.addChild(scene);
    return this;
};

/**
 * Create a new scene, if the param id is not provided the id will be set automatically
 * @param [id] {string}
 * @returns {Scene}
 */
SceneManager.prototype.createScene = function(id){
    var scene = new Scene(this.game);
    scene.id = (id) ? id : 'id'+this.scenes.length;
    this.addScene(scene);

    return scene;
};

/**
 * Return the requested scene or null if don't exists
 * @param id {string}
 * @returns {null|Scene}
 */
SceneManager.prototype.getSceneById = function(id){
    var scene = null;
    for(var i = 0; i < this.scenes.length; i++){
        if(id === this.scenes[i].id){
            scene = this.scenes[i];
        }
    }
    return scene;
};

/**
 * Remove the scene from the array
 * @param scene {string|Scene}
 * @returns {SceneManager}
 */
SceneManager.prototype.removeScene = function(scene){
    if(typeof scene === "string")scene = this.getSceneById(scene);
    var index = this.scenes.indexOf(scene);
    if(index !== -1){
        this.scenes.splice(index,1);
    }
    return this;
};

/**
 * Remove all the scenes in this manager
 * @returns {SceneManager}
 */
SceneManager.prototype.removeAllScenes = function(){
    this.children.length = 0;
    this.scenes.length = 0;
    return this;
};


module.exports = SceneManager;