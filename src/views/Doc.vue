<template>
  <div>
    <Topnav toggleMenuButtonVisible class="nav"/>
    <div class="layout">
      <div class="content">
        <aside v-if="menuVisible">
          <div>
            <h2>文档</h2>
            <ol>
              <li>
                <router-link to="/doc/intro">介绍</router-link>
              </li>
              <li>
                <router-link to="/doc/install">安装</router-link>
              </li>
              <li>
                <router-link to="/doc/get-started">开始使用</router-link>
              </li>
            </ol>
            <h2>组件列表</h2>
            <ol>
              <li>
                <router-link to="/doc/switch">Switch</router-link>
              </li>
              <li>
                <router-link to="/doc/button">Button</router-link>
              </li>
              <li>
                <router-link to="/doc/dialog">Dialog</router-link>
              </li>
              <li>
                <router-link to="/doc/tabs">Tabs</router-link>
              </li>
              <li>
                <router-link to="/doc/input">Input</router-link>
              </li>
            </ol>
          </div>
        </aside>
        <main>
          <router-view/>
        </main>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
import {
  inject,
  Ref
} from "vue";

export default {
  components: {
    Topnav
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
    return {
      menuVisible
    };
  },
};
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  z-index: 999;
}

.layout {
  display: flex;
  height: 100vh;

  > .content {
    flex-grow: 1;
    display: flex;

  }

  aside {
    > div {
      margin-left:300px;
      height: 100%;
      width: 150px;
      padding: 70px 0 16px;
      overflow: auto;
      > h2 {
        margin-bottom: 4px;
        padding: 0 16px;
      }
      > ol {
        > li {
          color:#767676;
          > a {
            display: block;
            padding: 4px 16px;
            text-decoration: none;
          }
          &:hover,.router-link-active{
            color:#213547;
            transition: all 0.5s;
            font-size: 18px;
          }
        }
      }
    }
  }

  main {
    padding: 128px;
    flex-grow: 1;
    border: 1px solid red;
    overflow: auto;
  }
}
//    @media (max-width: 500px) {
//      padding-left: 0;
//    }

</style>
