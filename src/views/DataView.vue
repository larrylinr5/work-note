<template>
  <div class="row">
    <div class="col-12">
      <h1>資料變更Todo</h1>
      <button class="mb-3">新增Todo</button>
    </div>
    <div class="mb-3">
      <!--    請用  v-model(綁定對象為 personalInfo.loveDessert)  + v-bind + v-for (記得搭配 key) -->
      <div class="form-check mb-3" v-for="(DataChangeTodo,index) in DataChangeTodos" :key="DataChangeTodo.NID+index" style="border-style:outset;padding:10px">
        <button >刪除Todo</button>
        <div class="col-12" style="margin-top:20px">
          <span>資料變更單號</span><input style="margin-left:10px" type="text" v-model="account" :disabled="disabledFlg">
          <button style="margin-left:10px">儲存</button>
          <button style="margin-left:5px">更新</button>
        </div>
        <div class="form-check" v-for="(bbb,index) in aaa" :key="index">
          <input class="form-check-input" type="checkbox" :value="bbb" :id="DataChangeTodo.NID+bbb" v-model="DataChangeTodo.Todo">
          <label class="form-check-label" :for="DataChangeTodo.NID+bbb" disabled=true>
              {{ bbb }}
          </label>
        </div>
      </div>
    </div>
  </div>
  <button @click="test">test1</button>
</template>

<script>
export default {
  data () {
    return {
      disabledFlg: false,
      aaa: [
        'AA', 'BB', 'CC'
      ],
      DataChangeTodos: [
        {
          Todo: [],
          NID: 'a01'
        },
        {
          Todo: [],
          NID: 'a02'
        }
      ]
    }
  },
  components: {},
  methods: {
    test () {
      alert(JSON.stringify(this.DataChangeTodos))
    }
  },
  mounted () {
    if (document.getElementById('account').disabled === false) this.$router.push('/')
  }
}
</script>
