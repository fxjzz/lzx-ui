import Message from "./Message";

export default {
    install(Vue) {
        Vue.config.globalProperties.$message = Message
    },
}
