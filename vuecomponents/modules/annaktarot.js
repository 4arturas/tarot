import Card from './Card.js';
export default {
    components: {
        Card
    },
    data() {
        return {
            annakTarotSystem: interpret( annakTarotMachine ),
            state: annakTarotMachine.initialState,
            context: annakTarotMachine.context,
            count: 1
        }
    },
    created() {
        this.annakTarotSystem
            .onTransition( (state) => {
                this.state = state;
                this.context = state.context;
            })
            .start();
        this.send('LOAD_IMAGES_AND_TEXTS');
    },
    methods: {
        send( event ) {
            this.annakTarotSystem.send( event );
        }
    },
    template:
        `<div>
            <div>{{state.value}}</div>
<!--        <div>{{state.context}}</div>-->
            <span v-for="(img, idx) in context.images">
                <div v-if="idx===0">Major Arcana</div>
                <div v-if="idx===22">Minor Arcana</div>
                
                <div v-if="idx===22">Cups</div>
                <div v-if="idx===34">Pentacles</div>
                <div v-if="idx===46">Wands</div>
                <div v-if="idx===58">Swords</div>
                
                <span style="padding: 5px">
                    <Card :title="idx" :img="img" :key="idx"/>
                </span>            
                
                <br v-if="idx===9" title="Major"/>
                <br v-if="idx===19" title="Major"/>
                <br v-if="idx===21" title="Major"/>
                
                <br v-if="idx===33" title="Pentacles"/>
                
                <br v-if="idx===57" title="Wands" />
                
                                                            
            </span>        
        </div>`
}