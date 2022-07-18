<template>
  <div class="row">
    <div class="col-12">
      <h1>資料變更Todo</h1>
      <button class="mb-3" @click="addTodo">新增Todo</button>
    </div>
    <div class="mb-3">
      <!--    請用  v-model(綁定對象為 personalInfo.loveDessert)  + v-bind + v-for (記得搭配 key) -->
      <div class="form-check mb-3" v-for="(DataChangeTodo,index) in DataChangeTodos" :key="DataChangeTodo._id+index" style="border-style:outset;padding:10px">
        <button @click="deleteTodo(DataChangeTodo._id)">刪除Todo</button>
        <div class="col-12" style="margin-top:20px">
          <span>資料變更單號</span><input style="margin-left:10px" type="text" v-model="DataChangeTodo.data1" :disabled="DataChangeTodo.data1Disabled">
          <button style="margin-left:10px" @click="data1Save(DataChangeTodo._id)">儲存</button>
          <button style="margin-left:5px" @click="DataChangeTodo.data1Disabled=false">更新</button>
        </div>
        <div class="col-12">
          <span>業務聯絡單號</span><input style="margin-left:10px" type="text" v-model="DataChangeTodo.data2" :disabled="DataChangeTodo.data2Disabled">
          <button style="margin-left:10px" @click="data2Save(DataChangeTodo._id)">儲存</button>
          <button style="margin-left:5px" @click="DataChangeTodo.data2Disabled=false">更新</button>
        </div>

        <!-- 欄位1 -->
        <div style="margin-left:20px">
          <input class="form-check-input" type="checkbox" value="a01" :id="DataChangeTodo._id+1" v-model="DataChangeTodo.Todo" @click="editTodo(DataChangeTodo._id)">
          <label class="form-check-label" :for="DataChangeTodo._id+1" disabled=true>
              {{ ListData.a01 }}
          </label>
        </div>

        <!-- 欄位2 -->
        <div style="margin-left:20px">
          <input class="form-check-input" type="checkbox" value="a02" :id="DataChangeTodo._id+2" v-model="DataChangeTodo.Todo" @click="editTodo(DataChangeTodo._id)">
          <label class="form-check-label" :for="DataChangeTodo._id+2" disabled=true>
              {{ ListData.a02 }}
          </label>
        </div>

        <!-- 欄位3 -->
        <div style="margin-left:20px">
          <input class="form-check-input" type="checkbox" value="a03" :id="DataChangeTodo._id+3" v-model="DataChangeTodo.Todo" @click="editTodo(DataChangeTodo._id)">
          <label class="form-check-label" :for="DataChangeTodo._id+3" disabled=true>
              {{ ListData.a03 }}
          </label>
        </div>

        <!-- 欄位4 -->
        <div style="margin-left:20px">
          <input class="form-check-input" type="checkbox" value="a04" :id="DataChangeTodo._id+4" v-model="DataChangeTodo.Todo" @click="editTodo(DataChangeTodo._id)">
          <label class="form-check-label" :for="DataChangeTodo._id+4" disabled=true>
              {{ ListData.a04 }}
          </label>
        </div>

        <!-- 欄位5 -->
        <div style="margin-left:20px">
          <input class="form-check-input" type="checkbox" value="a05" :id="DataChangeTodo._id+5" v-model="DataChangeTodo.Todo" @click="editTodo(DataChangeTodo._id)">
          <label class="form-check-label" :for="DataChangeTodo._id+5" disabled=true>
              {{ ListData.a05 }}
          </label>
        </div>

        <!-- 欄位6 -->
        <div style="margin-left:20px">
          <input class="form-check-input" type="checkbox" value="a06" :id="DataChangeTodo._id+6" v-model="DataChangeTodo.Todo" @click="editTodo(DataChangeTodo._id)">
          <label class="form-check-label" :for="DataChangeTodo._id+6" disabled=true>
              {{ ListData.a06 }}
          </label>
        </div>

        <!-- 欄位7 -->
        <div style="margin-left:20px">
          <input class="form-check-input" type="checkbox" value="a07" :id="DataChangeTodo._id+7" v-model="DataChangeTodo.Todo" @click="editTodo(DataChangeTodo._id)">
          <label class="form-check-label" :for="DataChangeTodo._id+7" disabled=true>
              {{ ListData.a07 }}
          </label>
        </div>

        <!-- 欄位8 -->
        <div style="margin-left:20px">
          <input class="form-check-input" type="checkbox" value="a08" :id="DataChangeTodo._id+8" v-model="DataChangeTodo.Todo" @click="editTodo(DataChangeTodo._id)">
          <label class="form-check-label" :for="DataChangeTodo._id+8" disabled=true>
              {{ ListData.a08 }}
          </label>
        </div>

        <!-- 欄位9 -->
        <div style="margin-left:40px">
          <span> {{ ListData.a09 }}</span>
        </div>

        <!-- 欄位10 -->
        <div style="margin-left:40px">
          <span> {{ ListData.a10 }}</span>
        </div>

        <!-- 欄位11 -->
        <div style="margin-left:20px">
          <input class="form-check-input" type="checkbox" value="a11" :id="DataChangeTodo._id+11" v-model="DataChangeTodo.Todo" @click="editTodo(DataChangeTodo._id)">
          <label class="form-check-label" :for="DataChangeTodo._id+11" disabled=true>
              {{ ListData.a11 }}
          </label>
        </div>

        <!-- 欄位12 -->
        <div style="margin-left:20px">
          <input class="form-check-input" type="checkbox" value="a12" :id="DataChangeTodo._id+12" v-model="DataChangeTodo.Todo" @click="editTodo(DataChangeTodo._id)">
          <label class="form-check-label" :for="DataChangeTodo._id+12" disabled=true>
              {{ ListData.a12 }}
          </label>
        </div>

        <!-- 欄位13 -->
        <div style="margin-left:20px">
          <input class="form-check-input" type="checkbox" value="a13" :id="DataChangeTodo._id+13" v-model="DataChangeTodo.Todo" @click="editTodo(DataChangeTodo._id)">
          <label class="form-check-label" :for="DataChangeTodo._id+13" disabled=true>
              {{ ListData.a13 }}
          </label>
        </div>

        <!-- 欄位14 -->
        <div style="margin-left:20px">
          <input class="form-check-input" type="checkbox" value="a14" :id="DataChangeTodo._id+14" v-model="DataChangeTodo.Todo" @click="editTodo(DataChangeTodo._id)">
          <label class="form-check-label" :for="DataChangeTodo._id+14" disabled=true>
              {{ ListData.a14 }}
          </label>
        </div>

        <!-- 欄位15 -->
        <div style="margin-left:20px">
          <input class="form-check-input" type="checkbox" value="a15" :id="DataChangeTodo._id+15" v-model="DataChangeTodo.Todo" @click="editTodo(DataChangeTodo._id)">
          <label class="form-check-label" :for="DataChangeTodo._id+15" disabled=true>
              {{ ListData.a15 }}
          </label>
        </div>

        <!-- 欄位16 -->
        <div style="margin-left:20px">
          <input class="form-check-input" type="checkbox" value="a16" :id="DataChangeTodo._id+16" v-model="DataChangeTodo.Todo" @click="editTodo(DataChangeTodo._id)">
          <label class="form-check-label" :for="DataChangeTodo._id+16" disabled=true>
              {{ ListData.a16 }}
          </label>
        </div>

        <!-- 欄位17 -->
        <div style="margin-left:20px">
          <input class="form-check-input" type="checkbox" value="a17" :id="DataChangeTodo._id+17" v-model="DataChangeTodo.Todo" @click="editTodo(DataChangeTodo._id)">
          <label class="form-check-label" :for="DataChangeTodo._id+17" disabled=true>
              {{ ListData.a17 }}
          </label>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      disabledFlg: false,
      DataChangeTodos: [],
      ListData: {},
      account: ''
    }
  },
  components: {},
  methods: {
    getTodo () {
      this.$http
        .get('https://peaceful-springs-31295.herokuapp.com/dataviewtodo/' + this.account)
        // 成功
        .then((response) => {
          this.DataChangeTodos = response.data.result.reverse()
        })
        // 失敗
        .catch(() => {
          alert('getTodo失敗')
        })
    },
    editTodo (item) {
      const index = this.DataChangeTodos.findIndex(x => x._id === item)
      this.DataChangeTodos[index].data1Disabled = true
      this.DataChangeTodos[index].data2Disabled = true
      setTimeout(() => {
        this.$http
          .patch('https://peaceful-springs-31295.herokuapp.com/dataviewtodo/' + item, this.DataChangeTodos[index])
          // 成功
          .then((response) => {
          })
          // 失敗
          .catch(() => {
            alert('err')
          })
      })
    },
    addTodo () {
      this.$http
        .post('https://peaceful-springs-31295.herokuapp.com/dataviewtodo/', { account: this.account })
        // 成功
        .then((response) => {
          this.getTodo()
        })
        // 失敗
        .catch(() => {
          alert('addTodo失敗')
        })
    },
    deleteTodo (id) {
      this.$http
        .delete('https://peaceful-springs-31295.herokuapp.com/dataviewtodo/' + id)
        // 成功
        .then((response) => {
          this.getTodo()
        })
        // 失敗
        .catch(() => {
          alert('addTodo失敗')
        })
    },
    data1Save (id) {
      const index = this.DataChangeTodos.findIndex(x => x._id === id)
      this.DataChangeTodos[index].data1Disabled = true
      this.editTodo(id)
    },
    data2Save (id) {
      const index = this.DataChangeTodos.findIndex(x => x._id === id)
      this.DataChangeTodos[index].data2Disabled = true
      this.editTodo(id)
    }
  },
  mounted () {
    if (document.getElementById('account').disabled === false) this.$router.push('/')
    else {
      this.account = document.getElementById('account').value
      this.$http
        .get('https://peaceful-springs-31295.herokuapp.com/dataview')
        // 成功
        .then((response) => {
          this.ListData = response.data.result[0]
          this.getTodo(this.account)
        })
        // 失敗
        .catch(() => {
          alert('登入失敗')
        })
    }
  }
}
</script>
