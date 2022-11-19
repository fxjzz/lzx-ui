<template>
  <div class="popover" @click.stop="xxx">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible" @click.stop>
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
    xxx() {
      this.visible = !this.visible;
      if (this.visible === true) {
        setTimeout(() => {
          document.body.appendChild(this.$refs.contentWrapper);
          const {top, left} = this.$refs.triggerWrapper.getBoundingClientRect();
          console.log(this.$refs.triggerWrapper.getBoundingClientRect());
          this.$refs.contentWrapper.style.left = left +window.scrollX+ 'px';
          this.$refs.contentWrapper.style.top = top + window.scrollY + 'px';
          let eventHandle = () => {
            this.visible = false;
            document.removeEventListener('click', eventHandle);
          };
          document.addEventListener('click', eventHandle);
        });
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
  bottom: 100%;
  left: 0;
  border: 1px solid red;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
}
</style>