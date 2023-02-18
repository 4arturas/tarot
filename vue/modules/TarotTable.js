import CardThumbnail from './CardThumbnail.js';
export default {
    components: {
        CardThumbnail
    },
    props: {
        // images: { type: Array, required: true }
    },
    data() {
        return {
            cardIdx: 0,
            tarotTableSystem: XState.interpret( tarotTableMachine ),
            state: tarotTableMachine.initialState,
            context: tarotTableMachine.context,
        }
    },
    created() {
        this.tarotTableSystem
            .onTransition( (state) => {
                /*if ( state.matches('show_images') ) {
                    this.$router.push('/about');
                }*/
                this.state = state;
                this.context = state.context;
            })
            .start();
        this.send('LOAD_IMAGES_AND_TEXTS');
        // this.$router.push('/about');
    },
    methods: {
        send( event ) {
            this.tarotTableSystem.send( event );
        }
    },
    template: `
<v-card class="mx-auto" append-icon="" style="margin: 15px">
    <template v-slot:title>
        Major Arcana
    </template>
    <div><b>State:</b> {{tarotTableSystem.state.value}}</div>
    <div>{{router}}</div>
    <span v-for="(img, idx) in context.images.slice(0,22)" style="padding: 5px">        
        <CardThumbnail :idx="cardIdx++" :img="img" :key="idx"/>
    </span>
</v-card>

<v-card class="mx-auto" append-icon="" style="margin: 15px">
    <template v-slot:title>
        Minor Arcana
    </template>
    
    <v-card class="mx-auto" append-icon="" style="margin: 15px">
        <template v-slot:title>
            Cups
        </template>
        <span v-for="(img, idx) in context.images.slice(22, 34)" style="padding: 5px">
            <CardThumbnail :idx="cardIdx++" :img="img" :key="idx"/>
        </span>
    </v-card>
    
    <v-card class="mx-auto" append-icon="" style="margin: 15px">
        <template v-slot:title>
            Pentacles
        </template>
        <span v-for="(img, idx) in context.images.slice(34, 46)" style="padding: 5px">
            <CardThumbnail :idx="cardIdx++" :img="img" :key="idx"/>
        </span>
    </v-card>
    
    <v-card class="mx-auto" append-icon="" style="margin: 15px">
        <template v-slot:title>
            Wands
        </template>
        <span v-for="(img, idx) in context.images.slice(46, 58)" style="padding: 5px">
            <CardThumbnail :idx="cardIdx++" :img="img" :key="idx"/>            
        </span>
    </v-card>
    
    <v-card class="mx-auto" append-icon="" style="margin: 15px">
        <template v-slot:title>
            Swords
        </template>
        <span v-for="(img, idx) in context.images.slice(58, 70)" style="padding: 5px">
            <CardThumbnail :idx="cardIdx++" :img="img" :key="idx"/>
        </span>
    </v-card>
        
</v-card>                         
`
}