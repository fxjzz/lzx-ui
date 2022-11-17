<template>
  <div>
    <h1>Message 消息框</h1>
    <button @click="clickMessage">click me</button>
  </div>
</template>

<script lang="ts">
export default {
  methods:{
    clickMessage(){
      this.$message({type:'error',text:'登陆失败'})
    }
  },
};
</script>

<style lang="scss" scoped>

</style>