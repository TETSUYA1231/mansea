<template>
  <div class="event">
    <m-header></m-header>
    <div class="d-flex flex-column">
      <div class="top">
        <div class="top-img w-100">
          <img src alt />
        </div>
        <div class="message flex-column jc-center ai-center">
          <h1 class="type d-flex flex-column">
            <span>Event</span>
            <span>资讯动态</span>
          </h1>
        </div>
      </div>
    </div>
    <div class="list-card-group">
      <m-list-card
        v-for="(articles, i) in articlesCats"
        :key="i"
        :title="articles.title"
        :cover="articles.cover"
        :desc="articles.desc"
        :url="`/articles/${articles._id}`"
      ></m-list-card>
    </div>

    <m-footer></m-footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      articlesCats: []
    }
  },
  methods: {
    async fetchAritclesCats () {
      const res = await this.$http.get('events/list')
      this.articlesCats = res.data
    }
  },
  created () {
    this.fetchAritclesCats()
  }
}
</script>

<style>
</style>