<template>
  <div class="popover" @click="onClick">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"/>
    </div>
    <span ref="triggerWrapper">
      <slot name="x"/>
    </span>
  </div>
</template>

<script lang="ts">

export default {
  data() {
    return {
      visible: false
    };
  },
  mounted() {

  },
  methods: {
    positionContent(){
      let {top, left} = this.$refs.triggerWrapper.getBoundingClientRect();
      this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
      this.$refs.contentWrapper.style.top = top + window.scrollY + 'px';
    },
    listenToDocument(){
      let eventHandle = (e) => {
        if (!(this.$refs.contentWrapper && this.$refs.contentWrapper.contains(e.target))) {
          console.log('点击了pop以外的地方 并 关闭pop');
          this.visible = false;
          document.removeEventListener('click', eventHandle);
        }
      };
      document.addEventListener('click', eventHandle);
    },
    onShow(){
      setTimeout(() => {
        document.body.appendChild(this.$refs.contentWrapper);//在body中添加 pop框 防止用户使用overflow 产生bug
        this.positionContent()
        this.listenToDocument()
      })
    },
    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        console.log('按了按钮');
        this.visible = !this.visible;
        if (this.visible === true) {
          console.log('显示了');
          this.onShow()
        }else {
          console.log('没显示');
        }
      } else {
        console.log('按了pop');
      }
    }
  }

};
</script>

<style lang="scss" scoped>
.popover {
  margin-top: 100px;
  display: inline-block;
  vertical-align: top;
  position: relative;

}

.content-wrapper {
  position: absolute;
  border: 1px solid red;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  transform: translateY(-150%);
}
</style>