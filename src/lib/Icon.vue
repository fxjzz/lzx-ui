<template>
    <svg class="icon">
      <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>

<script lang="ts">
export default{
  props:{
    name:{
      type:String,
      default:''
    }
  }
}
</script>

<style lang="scss" scoped>
.icon{
  width: 24px;
  height: 24px;
}
</style>