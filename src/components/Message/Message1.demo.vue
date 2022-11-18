<demo>
从顶部出现，3 秒后自动消失。
</demo>

<template>
  <Button @click="show">show message</Button>
</template>

<script lang="ts">
import Button from "../../lib/Button.vue";
export default{
  components: {Button},
  methods:{
    show(){
      this.$message({text:'message',type:'success'})
    }
  }
}
</script>
