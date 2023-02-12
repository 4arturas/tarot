const { createMachine, actions, interpret, assign } = XState;

const saveImagesToContext = assign({
    images: (context, event) => annakImages
});

const saveTextsToContext = assign({
    texts: ( context, event ) => annakTexts
});
  
  // Guard to check if the glass is full
  function glassIsFull(context, event) {
    return context.amount >= 10;
  }

const annakTarotMachine = 
/** @xstate-layout N4IgpgJg5mDOIC5QEEB2qCGBpAdAGwHsMIB9ASwFsMZYBiAGQHlkAREgSQFlkBxAUQDKJZADk2AFT4ANcQIDaABgC6iUAAcCsMgBcyBVKpAAPRAFoAjADYAnDmsBmAOwBWADQgAnonPmATDl9nAF8Q91QCCDhDNEwsQw0tXX1DEwRTX3NHOyc3TzMAFgUcYKD3GOx8IlJKaiikEASdPQN61It88wDHe3yc9y8EfMdQkHLcWAALAgB3cioaeM0m5Nazc3z8u3MFc2dLQP7EX0dOlxCQoA */
createMachine({
    id: 'AnnaK',
    context: {
        images: [],
        texts: []
    },
    states: {
        load_images: {
            on: {
                LOAD_IMAGES_AND_TEXTS: {
                    target: "show_images",
                    actions: ["saveImagesToContext", "saveTextsToContext"]
                }
            }
        },

        show_images: {}
    },

    initial: "load_images",    
}, 
{
    actions: { saveImagesToContext, saveTextsToContext },
    // guards: { glassIsFull }
});