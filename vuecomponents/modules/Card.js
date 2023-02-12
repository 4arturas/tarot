export default {
    props: {
        img: { type: String, required: true }
    },
    data() {
        return {
            src: '/img/annak/' + this.img
        }
    },
    template:
    `<span>        
<!--        Card {{img}}-->
<!--        <img alt="" src="/img/annak/00_fool.jpg" />-->
        <img alt="" :src="src" style="width:100px"/>
    </span>`
}