import { createVNode, render } from 'vue'
import Message from './Message.vue'

const div = document.createElement('div')
document.body.appendChild(div)

export default ({ text, type,showClose=false,duration=3000 }) => {
    let timer = null
    const vNode = createVNode(Message, { text, type,showClose,duration })
    render(vNode, div)
    if(duration!==0){
        clearTimeout(timer)
        timer = setTimeout(() => {
            render(null, div)
        }, duration)
    }
}