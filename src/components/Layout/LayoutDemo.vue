<template>
  <div>
    <h1>Layout 组件示例</h1>
    <Row gutter="20" justify="start">
      <Col span="2">1</Col>
      <Col span="2">1</Col>
      <Col span="18" offset="2">2</Col>
    </Row>
    <Row gutter="20" justify="space-evenly">
      <Col span="2" :phone="{span:12,offset:2}">1</Col>
      <Col span="22" :phone="{span:12,offset:2}">2</Col>
    </Row>
  </div>
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import {Col,Row} from "../../lib";

export default {
  components:{Demo,Col,Row},

}
</script>
