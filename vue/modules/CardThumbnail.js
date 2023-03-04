export default {
    props: {
        img: { type: String, required: true },
        idx: { type: Number, required: true }
    },
    data() {
        return {
            href: '/card/' + this.idx
        }
    },
    template: `
<router-link :to="href">
    <img alt="" :src="'/img/annak/' + img" style="width:95px"/>
    <!--<v-img
        style="width:100px;"
        :src="'/img/annak/' + img"
    ></v-img>--> 
</router-link>        
`
}