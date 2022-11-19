<template>
  <div>
    <h1>Popover 气泡卡片</h1>
    <Popover>
      <template v-slot:content>
        <div>this is a popover</div>
      </template>
      <template v-slot:x>
        <Button @click="x">click me</Button>
      </template>
    </Popover>
    <Popover>
      <template v-slot:content>
        <div>this is a popover</div>
      </template>
      <template v-slot:x>
        <Button>click me</Button>
      </template>
    </Popover>
  </div>
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import Popover from "../../lib/Popover.vue";
import {Button} from "../../lib";

export default {
  components: {Popover, Demo,Button},
  setup() {
    const x = ()=>{

    }
    return {x};
  }
};
</script>
<style>

</style>
