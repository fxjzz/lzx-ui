<template>
  <Transition name="down">
    <div class="xtx-message" :style="style[type]" v-show='isShow'>
      <Icon :name="type"/>
      <span class="text">{{text}}</span>
      <div class="close" v-if="showClose" @click="onClose"><Icon name="clear"/></div>
      <div v-else></div>
    </div>
  </Transition>
</template>
<script>
import { onMounted, ref } from 'vue'
import Icon from "../Icon.vue";

export default {
  components: {Icon},
  data(){
    return {
      closeWindow:true
    }
  },
  props: {
    text: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'warn'
    },
    showClose:{
      type:Boolean,
      default:false
    },
    duration:{
      type:Number,
      default:1000
    }
  },
  methods:{
    onClose(){
      this.$el.remove()
    }
  },
  setup () {
    // 定义一个对象，包含三种情况的样式，对象key就是类型字符串
    const style = {
      warn: {
        icon: 'icon-warning',
        color: '#E6A23C',
        backgroundColor: 'rgb(253, 246, 236)',
        borderColor: 'rgb(250, 236, 216)'
      },
      error: {
        icon: 'icon-shanchu',
        color: '#F56C6C',
        backgroundColor: 'rgb(254, 240, 240)',
        borderColor: 'rgb(253, 226, 226)'
      },
      success: {
        icon: 'icon-queren2',
        color: '#67C23A',
        backgroundColor: 'rgb(240, 249, 235)',
        borderColor: 'rgb(225, 243, 216)'
      }
    }
    // 控制动画
    const isShow = ref(false)
    // 组件模板渲染成功后触发
    onMounted(() => {
      isShow.value = true
    })
    return { style, isShow }
  }
}
</script>
<style scoped lang="scss">
.down {
  &.enter {
    &.from {
      transform: translate3d(0, -75px, 0);
      opacity: 0;
    }
    &.active {
      transition: all 0.5s;
    }
    &.to {
      transform: none;
      opacity: 1;
    }
  }
}
.xtx-message {
  display: flex;
  width: 300px;
  height: 50px;
  position: fixed;
  z-index: 9999;
  left: 50%;
  margin-left: -150px;
  top: 25px;
  line-height: 50px;
  padding: 0 0 0 25px;
  border: 1px solid #e4e4e4;
  background: #f5f5f5;
  color: #999;
  border-radius: 4px;
  align-items: center;
  justify-content: space-between;
  .text {
    vertical-align: middle;
  }
  .close{
    width: 70px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left:1px solid #dcdfe6
  }
}
</style>