<template>
  <div class="container mt-3">
  <div class="row">
    <div class="col">
      <span>帳號</span><input type="text" v-model="account" :disabled="loginFlg" id="account">
      <span>密碼</span><input type="password" v-model="password" :disabled="loginFlg">
      <button @click="login" :disabled="loginFlg">登入</button>
      <button @click="logOut" :disabled="!loginFlg">登出</button>
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
      const accountM = this.account.substr(0, 1)
      if (accountM === 'M' || accountM === 'm') {
        this.account = 'M' + this.account.substr(1, 5)
        this.$http
          .get('https://peaceful-springs-31295.herokuapp.com/users', {
            account: this.account,
            password: this.password
          })
          // 成功
          .then((response) => {
            if (response.data.logInflag) {
              this.$emit('change-loginFlag', response.data.logInflag)
              this.loginFlg = response.data.logInflag
              // 登入成功
              alert('登入成功')
            } else {
              this.$emit('change-loginFlag', response.data.logInflag)
              this.loginFlg = response.data.logInflag
              // 登入成功
              alert('帳號或密碼輸入錯誤')
            }
          })
          // 失敗
          .catch(() => {
            alert('登入失敗')
          })
      } else {
        alert('帳號或密碼輸入錯誤')
      }
    },
    logOut () {
      this.account = ''
      this.password = ''
      this.$emit('change-loginFlag', false)
      this.loginFlg = false
      this.$router.push('/')
      alert('登出')
    }
  },
  mounted () {
  }
}
</script>
