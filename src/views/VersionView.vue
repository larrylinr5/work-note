<template>
  <div class="row">
    <div class="col-12">
      <h1>換版流程Todo</h1>
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
        <div class="col-12">
          <span>換版單號</span><input style="margin-left:10px" type="text" v-model="DataChangeTodo.data3" :disabled="DataChangeTodo.data3Disabled">
          <button style="margin-left:10px" @click="data3Save(DataChangeTodo._id)">儲存</button>
          <button style="margin-left:5px" @click="DataChangeTodo.data3Disabled=false">更新</button>
        </div>

        <!-- 欄位1 -->
        <div style="margin-left:20px">
          <input class="form-check-input" type="checkbox" value="b1" :id="DataChangeTodo._id+1" v-model="DataChangeTodo.Todo" @click="editTodo(DataChangeTodo._id)">
          <label class="form-check-label" :for="DataChangeTodo._id+1" disabled=true>
              {{ ListData.b1 }}
          </label>
        </div>

        <!-- 欄位2 -->
        <div style="margin-left:20px">
          <input class="form-check-input" type="checkbox" value="b2" :id="DataChangeTodo._id+2" v-model="DataChangeTodo.Todo" @click="editTodo(DataChangeTodo._id)">
          <label class="form-check-label" :for="DataChangeTodo._id+2" disabled=true>
              {{ ListData.b2 }}
          </label>
        </div>

        <!-- 欄位3 -->
        <div style="margin-left:20px">
          <input class="form-check-input" type="checkbox" value="b3" :id="DataChangeTodo._id+3" v-model="DataChangeTodo.Todo" @click="editTodo(DataChangeTodo._id)">
          <label class="form-check-label" :for="DataChangeTodo._id+3" disabled=true>
              {{ ListData.b3}}
          </label>
        </div>

        <!-- 欄位4 -->
        <div style="margin-left:20px">
          <input class="form-check-input" type="checkbox" value="b4" :id="DataChangeTodo._id+4" v-model="DataChangeTodo.Todo" @click="editTodo(DataChangeTodo._id)">
          <label class="form-check-label" :for="DataChangeTodo._id+4" disabled=true>
              {{ ListData.b4 }}
          </label>
        </div>

        <!-- 欄位5 -->
        <div style="margin-left:20px">
          <input class="form-check-input" type="checkbox" value="b5" :id="DataChangeTodo._id+5" v-model="DataChangeTodo.Todo" @click="editTodo(DataChangeTodo._id)">
          <label class="form-check-label" :for="DataChangeTodo._id+5" disabled=true>
              {{ ListData.b5 }}
          </label>
        </div>

        <!-- 欄位6 -->
        <div style="margin-left:20px">
          <input class="form-check-input" type="checkbox" value="b6" :id="DataChangeTodo._id+6" v-model="DataChangeTodo.Todo" @click="editTodo(DataChangeTodo._id)">
          <label class="form-check-label" :for="DataChangeTodo._id+6" disabled=true>
              {{ ListData.b6 }}
          </label>
        </div>

        <!-- 欄位7 -->
        <div style="margin-left:20px">
          <input class="form-check-input" type="checkbox" value="b7" :id="DataChangeTodo._id+7" v-model="DataChangeTodo.Todo" @click="editTodo(DataChangeTodo._id)">
          <label class="form-check-label" :for="DataChangeTodo._id+7" disabled=true>
              {{ ListData.b7 }}
          </label>
        </div>

        <!-- 欄位8 -->
        <div style="margin-left:20px">
          <input class="form-check-input" type="checkbox" value="b8" :id="DataChangeTodo._id+8" v-model="DataChangeTodo.Todo" @click="editTodo(DataChangeTodo._id)">
          <label class="form-check-label" :for="DataChangeTodo._id+8" disabled=true>
              {{ ListData.b8}}
          </label>
        </div>

        <!-- 欄位9 -->
        <div style="margin-left:20px">
          <input class="form-check-input" type="checkbox" value="b9" :id="DataChangeTodo._id+9" v-model="DataChangeTodo.Todo" @click="editTodo(DataChangeTodo._id)">
          <label class="form-check-label" :for="DataChangeTodo._id+9" disabled=true>
              {{ ListData.b9 }}
          </label>
        </div>

        <!-- 欄位10 -->
        <div style="margin-left:20px">
          <input class="form-check-input" type="checkbox" value="b10" :id="DataChangeTodo._id+10" v-model="DataChangeTodo.Todo" @click="editTodo(DataChangeTodo._id)">
          <label class="form-check-label" :for="DataChangeTodo._id+10" disabled=true>
              {{ ListData.b10 }}
          </label>
        </div>

        <!-- 欄位11 -->
        <div style="margin-left:20px">
          <input class="form-check-input" type="checkbox" value="b11" :id="DataChangeTodo._id+11" v-model="DataChangeTodo.Todo" @click="editTodo(DataChangeTodo._id)">
          <label class="form-check-label" :for="DataChangeTodo._id+11" disabled=true>
              {{ ListData.b11 }}
          </label>
        </div>

        <!-- 欄位12 -->
        <div style="margin-left:20px">
          <input class="form-check-input" type="checkbox" value="b12" :id="DataChangeTodo._id+12" v-model="DataChangeTodo.Todo" @click="editTodo(DataChangeTodo._id)">
          <label class="form-check-label" :for="DataChangeTodo._id+12" disabled=true>
              {{ ListData.b12 }}
          </label>
        </div>

        <!-- 欄位13 -->
        <div style="margin-left:20px">
          <input class="form-check-input" type="checkbox" value="b13" :id="DataChangeTodo._id+13" v-model="DataChangeTodo.Todo" @click="editTodo(DataChangeTodo._id)">
          <label class="form-check-label" :for="DataChangeTodo._id+13" disabled=true>
              {{ ListData.b13}}
          </label>
        </div>

        <!-- 欄位14 -->
        <div style="margin-left:20px">
          <input class="form-check-input" type="checkbox" value="b14" :id="DataChangeTodo._id+14" v-model="DataChangeTodo.Todo" @click="editTodo(DataChangeTodo._id)">
          <label class="form-check-label" :for="DataChangeTodo._id+14" disabled=true>
              {{ ListData.b14 }}
          </label>
        </div>

        <!-- 欄位15 -->
        <div style="margin-left:20px">
          <input class="form-check-input" type="checkbox" value="b15" :id="DataChangeTodo._id+15" v-model="DataChangeTodo.Todo" @click="editTodo(DataChangeTodo._id)">
          <label class="form-check-label" :for="DataChangeTodo._id+15" disabled=true>
              {{ ListData.b15 }}
          </label>
        </div>

        <!-- 欄位16 -->
        <div style="margin-left:20px">
          <input class="form-check-input" type="checkbox" value="b16" :id="DataChangeTodo._id+16" v-model="DataChangeTodo.Todo" @click="editTodo(DataChangeTodo._id)">
          <label class="form-check-label" :for="DataChangeTodo._id+16" disabled=true>
              {{ ListData.b16 }}
          </label>
        </div>

        <!-- 欄位17 -->
        <div style="margin-left:20px">
          <input class="form-check-input" type="checkbox" value="b17" :id="DataChangeTodo._id+17" v-model="DataChangeTodo.Todo" @click="editTodo(DataChangeTodo._id)">
          <label class="form-check-label" :for="DataChangeTodo._id+17" disabled=true>
              {{ ListData.b17 }}
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
        .get('https://peaceful-springs-31295.herokuapp.com/versionviewtodo/' + this.account)
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
      this.DataChangeTodos[index].data3Disabled = true
      setTimeout(() => {
        this.$http
          .patch('https://peaceful-springs-31295.herokuapp.com/versionviewtodo/' + item, this.DataChangeTodos[index])
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
        .post('https://peaceful-springs-31295.herokuapp.com/versionviewtodo/', { account: this.account })
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
        .delete('https://peaceful-springs-31295.herokuapp.com/versionviewtodo/' + id)
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
    },
    data3Save (id) {
      const index = this.DataChangeTodos.findIndex(x => x._id === id)
      this.DataChangeTodos[index].data3Disabled = true
      this.editTodo(id)
    }
  },
  mounted () {
    if (document.getElementById('account').disabled === false) this.$router.push('/')
    else {
      this.account = document.getElementById('account').value
      this.$http
        .get('https://peaceful-springs-31295.herokuapp.com/dataview2')
        // 成功
        .then((response) => {
          console.log('>>', response.data.result[0])
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
