<template>
  <div>
    <h1>input 组件示例</h1>
    <Demo :component="Input1Demo"/>
    <Demo :component="Input2Demo"/>
<!--    <Input disabled/>-->
<!--    <Input clearable/>-->
<!--    <Input show-password/>-->
  </div>
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import Input1Demo from "./Input1.demo.vue";
import Input2Demo from "./Input2.demo.vue";
export default {
  components:{Demo},
  setup(){
    return{Demo,Input1Demo,Input2Demo}
  },

}
</script>
