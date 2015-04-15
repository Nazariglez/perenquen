var interaction = {
        InteractionData: require('../../../lib/pixi/src/interaction/InteractionData'),
        InteractionManager: require('./InteractionManager'),
        interactiveTarget: require('../../../lib/pixi/src/interaction/interactiveTarget')
    };

//TODO: Reescribir el sistema de interactividad, añadiendo eventos como drag y doble click, gestion de rueda de ratón, nuevo eventdata, multitouch, pixelperfect, keyhandler con combinación de teclas, etc...

module.exports = interaction;