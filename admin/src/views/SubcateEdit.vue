<template>
  <div>
    <h1>{{ id ? '编辑' : '新建' }}子目录目录</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <!-- <el-form-item label="主目录">
        <el-select v-model="model.categoryId">
          <el-option v-for="(item ,i) in categories" :key="i" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>-->
      <el-form-item label="分类名称">
        <el-input v-model="model.subname" style="width: 240px;"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data () {
    return {
      model: {},
      // categories: [],
    }
  },
  methods: {
    async save () {
      let res // eslint-disable-line no-unused-vars
      if (this.id) {
        res = await this.$http.put(`rest/subcates/${this.id}`, this.model)
      } else {
        res = await this.$http.post('rest/subcates', this.model)
      }
      this.$router.push('/subcates/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch () {
      const res = await this.$http.get(`rest/subcates/${this.id}`)
      this.model = res.data
    },
    // async fetchCategories () {
    //   const res = await this.$http.get(`rest/categories`)
    //   this.categories = res.data
    // },
  },
  created () {
    // this.fetchCategories()
    this.id && this.fetch()
  }
}
</script>