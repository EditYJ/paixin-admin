<template>
  <div class="welcome">
    <div class="welcome__title">
      <span class="welcome__tip">欢迎使用</span>
      <span>拍信创意后台管理系统</span>
      <span class="welcome__desc">-- 为客户提供安全高效的视觉创意解决方案</span>
    </div>
    <div class="welcome__pic">
      <img src="@/assets/welcome_pic.svg" />
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'welcome',
  setup(props, ctx) {
    return {}
  },
})
</script>

<style lang="scss" scoped>
@include b(welcome) {
  @include box-center;
  justify-content: space-around;
  height: 100%;
  @include e(pic) {
    width: 40%;
  }
  @include e(title) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 52px;
    line-height: 72px;
    color: #409eff;
  }
  @include e(tip) {
    font-size: 40px;
    line-height: 52px;
    font-weight: bold;
    color: #333;
  }
  @include e(desc) {
    text-align: right;
    font-size: 20px;
    font-style: italic;
    line-height: 52px;
    color: #999;
  }
}
</style>
