<template>
  <div class="header">
    <div class="container">
      <div class="container-inner">
        <div class="logo">
          <router-link to="/">
            <span>
              <img src="../assets/images/mansea-logo.png" alt />
            </span>
            <span class="logo-text">让生命享受绿色</span>
          </router-link>
        </div>
        <div class="nav-menu">
          <div class="button no-sp" @click="toggle">
            <span>Menu</span>
          </div>
          <div class="menu-board" v-if="opened">
            <div class="container">
              <nav class="nav-buttons">
                <ul>
                  <li>
                    <router-link to="/">
                      首页
                      <span class="iconfont icon-arrow"></span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/event">
                      资讯动态
                      <span class="iconfont icon-arrow"></span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/work">
                      工作机会
                      <span class="iconfont icon-arrow"></span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/about">
                      关于我们
                      <span class="iconfont icon-arrow"></span>
                    </router-link>
                  </li>
                </ul>
              </nav>
              <div class="close" @click="toggle">
                <span class="iconfont icon-baseline-close-px">关闭</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      opened: false
    }
  },
  methods: {
    toggle () {
      this.opened = !this.opened
    }
  }
}
</script>

<style>
</style>