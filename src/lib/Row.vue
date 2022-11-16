<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot/>
  </div>
</template>

<script lang="ts">
export default {
  props:{
    gutter:String,
    justify:{
      type:String,
      validator(value) {
        return ['start','center','end','space-between','space-evenly','space-around'].includes(value)
      }
    }
  },
  computed:{
    rowClass(){
      return this.justify && `justify-${this.justify}`
    },
    rowStyle(){
      return {
        marginLeft:-this.gutter/2+'px',
        marginRight:-this.gutter/2+'px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  margin: 0 -10px;
  &.justify-center{
    justify-content: center;
  }
  &.justify-end{
    justify-content: right;
  }
  &.justify-start{
    justify-content: left;
  }
  &.justify-space-evenly{
    justify-content: space-evenly;
  }
  &.justify-space-around{
    justify-content: space-around;
  }
}
</style>