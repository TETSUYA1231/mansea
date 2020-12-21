<template>
  <div class="work" v-if="model">
    <m-header></m-header>
    <div class="d-flex flex-column">
      <div class="top">
        <div class="top-img w-100">
          <img :src="model[0].cover" alt />
        </div>
        <div class="message flex-column jc-center ai-center">
          <h1 class="type d-flex flex-column">
            <span>Work</span>
            <span>工作机会</span>
          </h1>
        </div>
      </div>
      <div class="article-container">
        <div class="title">
          <h2>{{model[0].title}}</h2>
          <span class="article-date text-middle fs-sm">{{model.updatedAt | date}}</span>
        </div>
        <div v-html="model[0].body" class="content"></div>
      </div>
    </div>
    <m-footer></m-footer>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  filters: {
    date (val) {
      return dayjs(val).format('YYYY/MM/DD')
    }
  },
  data () {
    return {
      model: null
    }
  },
  methods: {
    async fetch () {
      const res = await this.$http.get(`work/list`)
      this.model = res.data[0].content
    }
  },
  created () {
    this.fetch()
  }

}
</script>

<style>
</style>