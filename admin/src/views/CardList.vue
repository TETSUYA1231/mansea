<template>
  <div>
    <h1>卡片列表</h1>
    <el-table :data="cards">
      <el-table-column prop="_id" label="ID" width="220"></el-table-column>
      <el-table-column prop="name" label="卡片标题"></el-table-column>
      <el-table-column prop="subName" label="副标题"></el-table-column>
      <el-table-column prop="url" label="链接"></el-table-column>
      <el-table-column prop="icon" label="封面">
        <template slot-scope="scope">
          <img :src="scope.row.icon" height="80px" />
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="small"
            @click="$router.push(`/cards/edit/${scope.row._id}`)"
          >编辑</el-button>
          <el-button type="danger" size="small" @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cards: []
    }
  },
  methods: {
    async fetch () {
      const res = await this.$http.get('rest/cards') // eslint-disable-line no-unused-vars
      this.cards = res.data
    },
    async remove (row) {
      this.$confirm(`是否确定要删除分类 "${row.name}"`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          const res = await this.$http.delete(`rest/cards/${row._id}`) // eslint-disable-line no-unused-vars
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          this.fetch()
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    }
  },
  created () {
    this.fetch()
  }
}
</script>