const saveImagesToContextRename = XState.assign({
    images: (context, event) => annakImages
});

const saveTextsToContextRename = XState.assign({
    texts: ( context, event ) => annakTexts
});

// Guard to check if the glass is full
function glassIsFull(context, event) {
    return context.amount >= 10;
}

const tarotTableMachine =
    /** @xstate-layout N4IgpgJg5mDOIC5QEEB2qCGBpAdAGwHsMIB9ASwFsMZYBiAGQHlkAREgSQFlkBxAUQDKJZADk2AFT4ANcQIDaABgC6iUAAcCsMgBcyBVKpAAPRAFoAjADYAnDmsBmAOwBWADQgAnonPmATDl9nAF8Q91QCCDhDNEwsQw0tXX1DEwRTX3NHOyc3TzMAFnycYKD3GOx8IlJKaiikEASdPQN61ItzexwADgUFRy6-XK8EfPtQkHLcWAALAgB3cioaeM0m5NazHyzRl3dh3x6AkpCgA */
    XState.createMachine({
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
                        actions: ["saveImagesToContextRename", "saveTextsToContextRename"]
                    }
                }
            },

            show_images: {}
        },

        initial: "load_images"      
    },
    {
        actions: { saveImagesToContextRename, saveTextsToContextRename },
        // guards: { glassIsFull }
    });