import { createVNode, render } from 'vue'
import XtxMessage from './xtx-message.vue'

const div = document.createElement('div')
document.body.appendChild(div)

export default ({ text, type }) => {
    let timer = null
    const vnode = createVNode(XtxMessage, { text, type })
    render(vnode, div)
    clearTimeout(timer)
    timer = setTimeout(() => {
        render(null, div)
    }, 1000)
}