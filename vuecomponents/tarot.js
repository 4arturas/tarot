export default {
    data() {
        return {
            count: 1
        }
    },
    template:
        `<div>
            count: {{count}}
            </div>
                <button @click="count++">Increment</button>
                <button @click="count--">Decrement</button>
            <div>            
        </div>`
}