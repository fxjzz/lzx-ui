<template>
  <div>
    <input type="text" :placeholder="placeholder"
           v-model="value" :disabled="disabled">
    <svg>
      <use xlink:href="#icon-clear"></use>
    </svg>
  </div>
</template>

<script lang="ts">
export default {
   props:{
     value:{
       type:String,
     },
     disabled:{
       type:Boolean,
       default:false
     },
     placeholder:{
       type:String,
       default:'请输入内容'
     },
     clearable:{
       type:Boolean,
       default:false
     }
   }
}
</script>

<style lang="scss" scoped>

div{
  >input{
    font-size: 16px;
    padding: 12px 16px;
    border:1px solid #dcdfe6;
    border-radius: 6px;
    &:hover{
      border-color:#c0c4cc;
    }
    &:focus{
      border-color:#409eff;
      outline: none;
    }
    &[disabled]{
      border-color: #a8abb2;
      color:#bbb;
      cursor: not-allowed;
    }
  }
}

</style>