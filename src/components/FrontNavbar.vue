<template>
  <div class="container mt-3">
  <div class="row">
    <div class="col">
      <span>帳號</span><input type="text" v-model="account" :disabled="loginFlg">
      <span>密碼</span><input type="password" v-model="password" :disabled="loginFlg">
      <button @click="login">登入</button>
      <button @click="logOut">登出</button>
    </div>
  </div>
</div>
</template>

<script>
// import emitter from '@/libs/emitter'

export default {
  data () {
    return {
      account: '',
      password: '',
      loginFlg: false
    }
  },
  components: {
  },
  methods: {
    login () {
      if (this.account === 'M30349' && this.password === 'test') {
        this.loginFlg = true
      } else {
        alert('帳號或密碼輸入錯誤')
      }
    // this.$router.push('/')
    },
    logOut () {
      this.account = ''
      this.password = ''
      this.loginFlg = false
      alert('登出')
    }
  },
  mounted () {
  }
}
</script>
