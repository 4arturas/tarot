export default {
    props: {
        question: { type: String, required: true },
        solution: { type: String, required: true },
        image: { type: String, required: true }
    },
    data() {
        return {
            // href: '/card/' + this.idx
        }
    },
    template: `
<tr style="padding-top: 10px;">
    <td style="padding-left: 10px; font-weight: bold;">{{question}}</td>
    <td style="padding-left: 10px; color: red;">No &#9193;</td>
    <td style="padding-left: 50px">{{solution}}</td>                
    <td style="padding-left: 1px"><img :src="image" alt="" style="width:60px"/></td>                
</tr>
<tr>
    <td colspan="4" style="color:green;padding:10px; padding-left: 20px;">Yes &#9196;</td>
</tr>
<!--<router-link :to="href">

</router-link>-->        
`
}