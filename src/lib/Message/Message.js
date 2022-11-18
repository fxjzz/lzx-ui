import { createVNode, render } from 'vue'
import Message from './Message.vue'

export default ({ text, type,showClose=false,duration=3000 }) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const vNode = createVNode(Message, { text, type,showClose,duration })
    render(vNode, div)
}