const cardMachine = XState.createMachine({
    id: 'CardMachine',
    context: {
        img: '',
        text: ''
    },
    initial: 'init',
    states: {
        init: {
            on: {
                AFTER_INIT: {
                    target: 'show_page_content',
                    actions: [
                        XState.assign(( context, event ) => {
                            context.img = annakImages[event.idx];
                        }),
                        XState.assign((context, event) => {
                            context.text = annakTexts[event.idx];
                        })
                    ]
                }
            }
        },
        show_page_content: {}
    }
}, {
    actions: {

    }
});
export default {
    props: {
    },
    data() {
        return {
            cardSystem: XState.interpret( cardMachine ),
            state: cardMachine.initialState
        }
    },
    created() {
        this.cardSystem
            .onTransition( (state) => {
                this.state = state;
            } )
            .start();
        this.cardSystem.send({ type: 'AFTER_INIT', idx: this.$route.params.id });
    },
    template: `
  <v-card
    class="mx-auto"
    
    prepend-icon="mdi-home"
    v-if="state.matches('show_page_content')"
  >
    <template v-slot:title>
      TODO - card name
    </template>

    <v-card-text>
      <table>
            <tbody>
                <tr>
                    <td style="vertical-align: top;">
                        <v-img
                            style="width:200px"
                            class="bg-white"
                            :src="'/img/annak/' + state.context.img"
                            cover
                        ></v-img>                                 
                    </td>        
                    <td style="vertical-align: top; width: 300px; text-indent: 20px; padding-left: 20px">{{state.context.text}}</td>            
                </tr>
            </tbody>
        </table>
    </v-card-text>
  </v-card>        
`
}