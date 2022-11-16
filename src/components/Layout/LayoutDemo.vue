<template>
  <div>
    <h1>Layout 组件示例</h1>
    <Row gutter="20" justify="start">
      <Col span="2">1</Col>
      <Col span="2">1</Col>
      <Col span="18" offset="2">2</Col>
    </Row>
    <Row gutter="20" justify="space-evenly">
      <Col>1</Col>
      <Col>2</Col>
      <Col>3</Col>
      <Col>4</Col>
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
