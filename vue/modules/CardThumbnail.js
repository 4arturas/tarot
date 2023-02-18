export default {
    props: {
        img: { type: String, required: true },
        idx: { type: Number, required: true }
    },
    data() {
        return {
            src: '/img/annak/' + this.img,
            href: '/card/' + this.idx
        }
    },
    template: `
<router-link :to="href">
    <img alt="" :src="src" style="width:100px"/>
</router-link>        
`
}