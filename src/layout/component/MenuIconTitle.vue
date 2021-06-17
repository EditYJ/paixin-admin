<template>
  <div class="menu-icon-title">
    <div class="menu-icon-title__logo">
      <img src="@/assets/paixin_icon.svg" />
    </div>
    <div class="menu-icon-title__title">拍信创意</div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'MenuIconTitle',
  setup(props, ctx) {
    return {}
  },
})
</script>

<style lang="scss" scoped>
@include b(menu-icon-title) {
  @include box-center;
  height: 50px;
  @include e(logo) {
    margin-top: 4px;
    width: 30px;
    margin-right: 8px;
  }
  @include e(title) {
    color: #fff;
    font-size: 24px;
    font-weight: bold;
  }
}
</style>
