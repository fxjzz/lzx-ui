<template>
  <div>
    <h1>input 组件示例</h1>
    <Demo :component="Input1Demo"/>
    <Demo :component="Input2Demo"/>
    <Demo :component="Input3Demo"/>
  </div>
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import Input1Demo from "./Input1.demo.vue";
import Input2Demo from "./Input2.demo.vue";
import Input3Demo from "./Input3.demo.vue";
export default {
  components:{Demo},
  setup(){
    return{Demo,Input1Demo,Input2Demo,Input3Demo}
  },

}
</script>
