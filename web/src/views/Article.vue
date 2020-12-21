<template>
  <div class="article" v-if="model">
    <m-header></m-header>
    <div class="d-flex flex-column">
      <div class="top">
        <div class="top-img w-100">
          <img :src="model.cover" alt />
        </div>
        <div class="message flex-column jc-center ai-center">
          <h1 class="type d-flex flex-column">
            <span>Article</span>
            <span>满蹊文章</span>
          </h1>
        </div>
      </div>
      <div class="article-container">
        <div class="title">
          <h2>{{model.title}}</h2>
          <span class="article-date text-middle fs-sm">{{model.updatedAt | date}}</span>
        </div>
        <div v-html="model.body" class="content"></div>
      </div>
    </div>
    <m-footer></m-footer>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  props: {
    id: { required: true }
  },
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
      const res = await this.$http.get(`articles/${this.id}`)
      this.model = res.data
    }
  },
  created () {
    this.fetch()
  }
}
</script>

<style>
</style>