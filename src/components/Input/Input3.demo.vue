<demo>
通过 v-model 属性动态显示输入
</demo>

<template>
  <Input placeholder="please input" v-model="value"/>
  {{ value }}
</template>

<script lang="ts">
import {Input} from "../../lib";
import {ref} from "vue";

export default {
  components: {Input},
  setup() {
    const value = ref('');
    return {value};
  }
};
</script>
