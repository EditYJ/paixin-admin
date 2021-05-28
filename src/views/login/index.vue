<template>
  <div class="login-page">
    <div class="login-page__back"></div>
    <el-form class="login-page__form" :model="formData">
      <h1 class="login-page__title">
        <div class="login-page__logo"><img :src="paixinIco" /></div>
        拍信后台管理系统
      </h1>
      <el-form-item class="login-page__form-item">
        <el-input size="large" v-model="formData.username" placeholder="请输入用户名">
          <template #prefix>
            <i class="el-input__icon el-icon-user"></i>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item class="login-page__form-item">
        <el-input size="large" show-password v-model="formData.password" placeholder="请输入密码">
          <template #prefix>
            <i class="el-input__icon el-icon-key"></i>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item class="login-page__form-item">
        <el-button size="large" class="login-page__login-btn" type="primary" @click="login">
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import paixinIco from '@/assets/favicon.ico'

export interface LoginFormData {
  username: string
  password: string
}

export default defineComponent({
  name: 'Login',
  setup() {
    const formData = reactive<LoginFormData>({ username: '', password: '' })

    const login = () => {
      // console.log(formData)
    }

    return { formData, paixinIco, login }
  },
})
</script>

<style lang="scss">
@include b(login-page) {
  @include box-center;
  height: 100vh;
  width: 100vw;
  background-image: url('@/assets/paixin_logo.svg');
  @include e(back) {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: rgba(255, 255, 255, 0.945);
  }
  @include e(form) {
    @include box-center;
    position: relative;
    width: 500px;
    z-index: 1;
    flex-direction: column;
    background-color: #fff;
    padding: 26px 50px;
    border-radius: 4px;
    box-shadow: 0px 0px 10px 5px #ccc;
  }
  @include e(form-item) {
    width: 100%;
  }
  @include e(title) {
    @include box-center;
    width: 100%;
    margin-bottom: 48px;
  }
  @include e(logo) {
    width: 38px;
    margin-right: 12px;
  }
  @include e(login-btn) {
    width: 100%;
  }
}
</style>
