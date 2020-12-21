<template>
  <el-container style="height: 100vh">
    <el-aside width="200px" style="background-color: rgb(244, 244, 244)">
      <el-menu unique-opened :default-active="$route.path" router>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-tickets"></i>内容管理
          </template>
          <el-menu-item-group>
            <template slot="title">卡片</template>
            <el-menu-item index="/cards/create">新建卡片</el-menu-item>
            <el-menu-item index="/cards/list">卡片列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">文章</template>
            <el-menu-item index="/articles/create">新建文章</el-menu-item>
            <el-menu-item index="/articles/list">文章列表</el-menu-item>
          </el-menu-item-group>
          <!-- <el-menu-item-group>
            <template slot="title">目录</template>
            <el-menu-item index="/categories/create">新建目录</el-menu-item>
            <el-menu-item index="/categories/list">目录列表</el-menu-item>
          </el-menu-item-group>-->
          <el-menu-item-group>
            <template slot="title">分类</template>
            <el-menu-item index="/subcates/create">新建分类</el-menu-item>
            <el-menu-item index="/subcates/list">分类列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-box"></i>运营管理
          </template>
          <el-menu-item-group>
            <template slot="title">Banner</template>
            <el-menu-item index="/ads/create">新建Banner</el-menu-item>
            <el-menu-item index="/ads/list">Banner列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-setting"></i>系统设置
          </template>
          <el-menu-item-group>
            <template slot="title">管理员</template>
            <el-menu-item index="/admin_users/create">新建管理员</el-menu-item>
            <el-menu-item index="/admin_users/list">管理员列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="display: flex; justify-content: space-between">
        <div>
          <strong>满蹊后台管理系统</strong>
        </div>
        <div class="exit-button" @click="loginOut()">退出登录</div>
      </el-header>
      <el-main>
        <router-view :key="$router.path"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.exit-button {
  font-size: 13px;
  cursor: pointer;
  color: #409eff;
}

.el-aside {
  color: #333;
}
</style>

<script>
export default {
  data () {
    return {
      item: {},
      value: new Date()
    }
  },
  methods: {
    loginOut () {
      // const res = await this.$http.post('login', this.model)
      // localStorage.token = res.data.token
      localStorage.clear()
      this.$router.push('/login')
      this.$message({
        type: 'success',
        message: '退出成功'
      })
    }
  },
  created () {

  }
}
</script>