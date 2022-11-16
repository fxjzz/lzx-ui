<template>
  <div class="row" :style="{marginLeft:-gutter/2+'px',marginRight:-gutter/2+'px'}">
    <slot/>
  </div>
</template>

<script lang="ts">
export default {
  props:{
    gutter:String
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  margin: 0 -10px;
}
</style>