<template>
  <div class="common-layout">
    <div class="common-layout__left-menu">
      <MenuIconTitle />
    </div>
    <div class="common-layout__right-content">
      <div class="common-layout__top-bar"></div>
      <div class="common-layout__main-area">
        <div class="common-layout__main-content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import MenuIconTitle from './component/MenuIconTitle.vue'

export default defineComponent({
  name: 'CommonLayout',
  components: { MenuIconTitle },
})
</script>

<style lang="scss">
@include b(common-layout) {
  @include e(left-menu) {
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100vh;
    width: 200px;
    background-color: #262f3e;
  }
  @include e(right-content) {
    margin-left: 200px;
  }
  @include e(top-bar) {
    height: 50px;
    border-bottom: 1px solid rgb(224, 224, 224);
  }
  @include e(main-area) {
    background-color: #f3f4f7;
    height: calc(100vh - 50px);
    padding: 14px;
  }
  @include e(main-content) {
    background-color: #fff;
    height: 100%;
    width: 100%;
    overflow-y: auto;
  }
}
</style>
