<template>
  <div>
    <input type="text" :placeholder="placeholder"
           :disabled="disabled" :value="modelValue"
           @input="$emit('update:modelValue',$event.target.value)">
    <Icon name="clear" v-if="clearable" @click="modelValue=''"/>
  </div>
</template>

<script lang="ts">
import Icon from "./Icon.vue";

export default {
  components: {Icon},
  props: {
    modelValue: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '请输入内容'
    },
    clearable: {
      type: Boolean,
      default: false
    },
  }
};
</script>

<style lang="scss" scoped>

div {
  display: flex;
  position: relative;

  > input {
    width: 100%;
    font-size: 16px;
    padding: 12px 16px;
    border: 1px solid #dcdfe6;
    border-radius: 6px;

    &:hover {
      border-color: #c0c4cc;
    }

    &:focus {
      border-color: #409eff;
      outline: none;
    }

    &[disabled] {
      border-color: #a8abb2;
      color: #bbb;
      cursor: not-allowed;
    }
  }

  > svg {
    position: absolute;
    right: 1%;
    top: 25%;
    cursor: pointer;
  }
}



</style>