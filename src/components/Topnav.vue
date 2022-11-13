<template>
<div class="topnav">
  <router-link to="/" class="logo">
    <svg class="icon">
      <use xlink:href="#icon-bao"></use>
    </svg>
    <div>Vue.js</div>
  </router-link>
  <ul class="menu">
    <li>
      <router-link to="/doc">文档</router-link>
    </li>
  </ul>
  <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
    <use xlink:href="#icon-choice"></use>
  </svg>
</div>
</template>

<script lang="ts">
import {inject, Ref} from "vue";
export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const menuVisible = inject < Ref < boolean >> ("menuVisible"); // get
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return {
      toggleMenu
    };
  },
};
</script>

<style lang="scss" scoped>
$color: #007974;

.topnav {
  background: white;
  border-bottom: 1px solid #e7e7e7;
  color: $color;
  display:flex;
  padding:8px 300px;
  position:fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;
  >a:hover{
    opacity: 0.5;
    transition: all 0.5s;
  }
  >.logo {
    max-width: 6em;
    margin-right: auto;
    display: flex;
    >div{
      line-height: 36px;
      font-weight: bolder;
    }
    >svg {
      width: 32px;
      height: 32px;
    }
  }

  >.menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    >li {margin: 0 1em;}
  }

  >.toggleAside {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }

  @media (max-width: 500px) {
    >.menu {display: none;}
    >.logo {margin: 0 auto;}
    >.toggleAside {display: inline-block;}
  }
}
</style>
