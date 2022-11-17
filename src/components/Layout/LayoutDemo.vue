<template>
  <div>
    <h1>Layout 组件示例</h1>
    <Row gutter="20" justify="space-between">
      <Col span="2">1</Col>
      <Col span="2">1</Col>
      <Col span="2">1</Col>
      <Col span="16" offset="2">1</Col>
    </Row>
    <Row gutter="20" justify="center">
      <Col span="2" :phone="{span:12,offset:2}">1</Col>
      <Col span="22" :phone="{span:12,offset:2}">1</Col>
    </Row>
    <Row justify="space-between">
      <Col span="6">1</Col>
      <Col span="6">1</Col>
      <Col span="6">1</Col>
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

<style lang="scss" scoped>
.row{
  margin-bottom: 20px;
}
.col{
  border-radius: 4px;
}
</style>
