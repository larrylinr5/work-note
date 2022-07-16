<!-- eslint-disable no-tabs -->
<template>
  <!-- 導覽列 -->
  <FrontNavbar></FrontNavbar>
  <div class="container mt-4">
    <div class="row">
      <div class="col-2">
        <div class="row">
          <div class="col-12">
            <button @click="Home">首頁</button>
          </div>
        </div>
        <div class="row">
          <div class="col-12 mt-2">
            <button @click="GoDataChange">資料變更Todo</button>
          </div>
        </div>
        <div class="row">
          <div class="col-12 mt-2">
            <button>換版流程Todo</button>
          </div>
        </div>
      </div>
      <div class="col-10">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import FrontNavbar from '@/components/FrontNavbar.vue'

export default {
  data () {
    return {}
  },
  components: {
    FrontNavbar
  },
  methods: {
    GoDataChange () {
      this.$router.push('/DataView')
    },
    Home () {
      this.$router.push('/')
    }
  }
}
</script>
