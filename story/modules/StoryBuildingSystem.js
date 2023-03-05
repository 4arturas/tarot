import Line from './Line.js';
export default {
    components: {
        Line
    },
    data() {
        return {
            arr: [
                { question: 'Do you  know why you need a story?', solution: 'Concept', img: 'https://thumbs.dreamstime.com/b/knowledge-icon-vector-sign-symbol-isolated-white-backgrou-background-your-web-mobile-app-design-logo-concept-133746781.jpg' },
                { question: 'Do you know where to find your story?', solution: 'Explore', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9iii7x-Nl4Lr2vhKMAIuU_7Ihvufz7IpHkTQHF8JjIDgQ24s7DYixP5U-2U-nbhnbm5U&usqp=CAU' },
                { question: 'Do you know your role in the story?', solution: 'Character', img: 'https://www.shutterstock.com/shutterstock/photos/1468802948/display_1500/stock-vector-superhero-line-icon-hero-symbol-color-superman-mockup-super-dad-template-vector-illustration-1468802948.jpg' },
                { question: 'Do you know what your story needs to do?', solution: 'Function', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Function_machine2.svg/1200px-Function_machine2.svg.png' },
                { question: 'Do you know how to plan your story?', solution: 'Structure', img: 'https://www.shutterstock.com/image-vector/hierarchy-icon-isolated-structure-line-260nw-776432704.jpg' },
                { question: 'Do you know how to tell your story?', solution: 'Style', img: 'https://thumbs.dreamstime.com/b/creative-fashion-style-logo-design-vector-sign-lettering-hanger-symbol-logotype-calligraphy-creative-fashion-style-logo-148836793.jpg' },
                { question: 'Do you know how to share your story?', solution: 'Organise', img: 'https://cdn-icons-png.flaticon.com/128/1693/1693056.png' },
                { question: 'Recipe', solution: 'Recipe', img: 'https://cdn-icons-png.flaticon.com/512/2388/2388956.png' },
            ]
        }
    },
    template: `
<v-card class="mx-auto" prepend-icon="mdi-home">

    <template v-slot:title>
      Story Building System
    </template>
    
    <br/>
    <table>
        <tbody>
            <Line v-for="(d, idx) in arr" 
                :question="d.question" 
                :solution="d.solution" 
                :image="d.img" />          
        </tbody>
    </table>
</v-card>
`
}