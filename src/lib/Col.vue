<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot/>
  </div>
</template>

<script>
let validator = (value) => {
  let keys = Object.keys(value)
  let valid = true
  keys.forEach(key => {
    if (!['span', 'offset'].includes(key)) {
      valid = false
    }
  })
  return valid
}
export default {
  name:'f-col',
  props: {
    span: [String, Number],
    offset: [String, Number],
    ipad: {type: Object, validator,},
    narrowPc: {type: Object, validator,},
    pc: {type: Object, validator,},
    widePc: {type: Object, validator,}
  },
  methods: {
    createClasses (obj, str = '') {
      if (!obj) {return []}
      let array = []
      if (obj.span) { array.push(`col-${str}${obj.span}`) }
      if (obj.offset) { array.push(`offset-${str}${obj.offset}`) }
      return array
    }
  },
  computed: {
    gutter() {
      let parent = this.$parent
      return parent.gutter
    },
    colClass() {
      let {span, offset, ipad, narrowPc, pc, widePc} = this
      let createClasses = this.createClasses
      return [
        ...createClasses({span, offset}),
        ...createClasses(ipad, 'ipad-'),
        ...createClasses(narrowPc, 'narrow-pc-'),
        ...createClasses(pc, 'pc-'),
        ...createClasses(widePc, 'wide-pc-'),
      ]
    },
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + 'px',
        paddingRight: this.gutter / 2 + 'px'
      }
    }
  }
}
</script>

<style scoped lang="scss">
@use "sass:math";
.col {
  background: #d3dce6;
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: math.div($n, 24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: math.div($n, 24) * 100%;
    }
  }
  @media (min-width: 577px) {
    $class-prefix: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: math.div($n, 24) * 100%;
      }
    }
    $class-prefix: offset-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: math.div($n, 24) * 100%;
      }
    }
  }
  @media (min-width: 769px){ // 770
    $class-prefix: col-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: math.div($n, 24) * 100%;
      }
    }
    $class-prefix: offset-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: math.div($n, 24) * 100%;
      }
    }
  }
  @media (min-width: 993px) {
    $class-prefix: col-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: math.div($n, 24) * 100%;
      }
    }
    $class-prefix: offset-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: math.div($n, 24) * 100%;
      }
    }
  }
  @media (min-width: 1201px) {
    $class-prefix: col-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: math.div($n, 24) * 100%;
      }
    }
    $class-prefix: offset-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: math.div($n, 24) * 100%;
      }
    }
  }
}
</style>