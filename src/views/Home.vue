<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav/>
      <div class="banner">
        <h1>饱了么UI</h1>
        <h2>一个面向学习者的 UI 框架</h2>
        <p class="actions">
          <router-link to="/doc/get-started">
            快速上手
            <Icon name="arrow"/>
          </router-link>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <Icon name="Vue"/>
          <h3>基于 Vue 3</h3>
          <p>骄傲地使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <Icon name="ts"/>
          <h3>基于 TypeScript </h3>
          <p>源代码采用 TypeScript 书写</p>
        </li>
        <li>
          <Icon name="light"/>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
import Icon from "../lib/Icon.vue";

export default {
  components: {
    Icon,
    Topnav
  },
};
</script>

<style lang="scss" scoped>
$green: #42b883;
$border-radius: 4px;
$color: #007974;

.features {
  margin: 64px auto;
  padding: 0 16px;

  @media (min-width: 800px) {
    width: 800px;

    > ul {
      > li {
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
    > ul {
      > li {
        width: 33.3333%;
      }
    }
  }
  > ul {
    display: flex;
    flex-wrap: wrap;

    > li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        grid-area: title;
        font-size: 28px;
      }

      > p {
        grid-area: text
      }
    }
  }
}

.banner {
  color: $color;
  padding: 160px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > h1 {
    background: linear-gradient(90deg, rgba(66, 211, 146, 1) 0%, rgba(96, 136, 242, 1) 100%);
    -webkit-background-clip: text;
    font-size: 68px;
    color: transparent;
    font-weight: bolder;
  }

  > h2 {
    font-size: 36px;
  }

  > .actions {
    padding: 8px 0;
    a:last-of-type{background: #f1f1f1;color:#476582;&:hover{background: #e5e5e5;}}
    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-flex;
      vertical-align: middle;
      padding: 8px 16px;
      border-radius: $border-radius;
      &:hover {
        text-decoration: none;
        background: #33a06f;
        > .icon{
          transform:translateX(4px);
          transition: all 0.5s ease-out;
        }
      }
    }
  }
}
</style>
