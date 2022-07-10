<template>
  <div class="container mt-3">
  <div class="row">
    <div class="col-2" @click="test">首頁</div>
    <div class="col-6 offset-4">
      <span>帳號</span><input type="text" v-model="account">
      <span>密碼</span><input type="text" v-model="password">
      <button @click="test">登入</button>
      <button @click="logOut">登出</button>
    </div>
  </div>
</div>
</template>

<script>
import emitter from '@/libs/emitter'

export default {
  data () {
    return {
      account: '',
      password: ''
    }
  },
  components: {
  },
  methods: {
    test () {
      this.$router.push('/')
    },
    logOut () {
      this.account = ''
      this.password = ''
      alert('登出')
    }
  },
  mounted () {
    this.getCart()
    emitter.on('get-cart', () => {
      this.getCart()
    })
  }
}
</script>
