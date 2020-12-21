<template>
  <div class="main">
    <header>
      <m-header></m-header>
    </header>
    <div class="banner-cont d-flex flex-column jc-center ai-center">
      <div class="message">
        <span>满蹊设计 面向未来</span>
      </div>
      <div class="text">
        <span>
          满蹊是一个创业型文化创意企业
          <br />致力于提供全面的设计解决方案。
          <br />精于城市更新设计、体育生活化研究、户外儿童游乐和儿童共享空间设计。
        </span>
      </div>
      <div class="line-button">
        <router-link to="/contact">
          联系我们
          <i class="iconfont icon-arrow"></i>
        </router-link>
      </div>
    </div>
    <swiper :options="swiperOption" ref="mySwiper" class="in-image" v-if="swiperSlides">
      <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <img :src="slide.items[0].image" />
      </swiper-slide>
      <div class="swiper-pagination pagination-home" slot="pagination"></div>
    </swiper>
    <div class="informations">
      <div class="info">
        <div
          class="info-text-cont d-flex ai-center mt-4 mb-4"
          data-type="News"
          v-for="(news, i) in newsCats"
          :key="i"
        >
          <div class="info-text">
            <span class="mr-4">{{news.updatedAt | date}}</span>
            <router-link :to="`/articles/${news._id}`">{{news.title}}</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="business">
      <div class="container">
        <h2>
          <span class="heading">Business</span>
          <span>专业服务</span>
        </h2>
        <div class="content">
          <div>
            <div class="cover">
              <img src="../assets/images/yuanjing.svg" alt />
            </div>
            <div class="texts">
              <h3>企业愿景</h3>
              <p>
                改造提升建成区
                <br />为城市再生和市民出行提供全方位解决方案
              </p>
            </div>
          </div>
          <div>
            <div class="cover">
              <img src="../assets/images/linian.svg" alt />
            </div>
            <div class="texts">
              <h3>设计理念</h3>
              <p>让生命享受绿色</p>
            </div>
          </div>
          <div>
            <div class="cover">
              <img src="../assets/images/fuwuzongzhi.svg" alt />
            </div>
            <div class="texts">
              <h3>服务宗旨</h3>
              <p>
                以城市需求为导向
                <br />精品需要设计师实地挖掘城市和市民价值
              </p>
            </div>
          </div>
          <div>
            <div class="cover">
              <img src="../assets/images/fuwulinian.svg" alt />
            </div>
            <div class="texts">
              <h3>服务理念</h3>
              <p>挖掘城市价值，尊重规律，以人为本</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-group d-flex flex-wrap">
      <m-card
        v-for="(cards, i) in cardsCats"
        :key="i"
        :name="cards.name"
        :subName="cards.subName"
        :url="cards.url"
        :icon="cards.icon"
      ></m-card>
    </div>
    <div class="list-card-title">
      <h2>
        <span class="heading">Events</span>
        <span>最新动态</span>
      </h2>
    </div>
    <div class="list-card-group">
      <m-list-card
        v-for="(articles, i) in articlesCats.slice(0 ,4)"
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
import * as swiperAni from '@/assets/js/swiper.animate.min.js'
import dayjs from 'dayjs'

export default {
  filters: {
    date (val) {
      return dayjs(val).format('YYYY/MM/DD')
    }
  },
  data () {
    return {
      swiperSlides: '',
      banners: [],
      newsCats: [],
      cardsCats: [],
      articlesCats: [],
      swiperOption: {
        pagination: {
          el: '.pagination-home',
          swiperSlides: []
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        speed: 1000,
        spcaeBetween: 30,
        effect: 'fade',
        loop: true,
        on: {
          init: function () {
            // console.log(this)
            swiperAni.swiperAnimateCache(this)
            swiperAni.swiperAnimate(this)
          },
          slideChange: function () {
            swiperAni.swiperAnimate(this)
          }
        }
      }
    }
  },
  methods: {
    async fetchAdsCats () {
      const res = await this.$http.get('ads/list')
      this.swiperSlides = res.data
    },
    async fetchNewsCats () {
      const res = await this.$http.get('news/list')
      this.newsCats = res.data
    },
    async fetchCardsCats () {
      const res = await this.$http.get('cards/list')
      this.cardsCats = res.data
    },
    async fetchAritclesCats () {
      const res = await this.$http.get('articles/list')
      this.articlesCats = res.data
    }
  },
  created () {
    this.fetchAdsCats() && this.fetchNewsCats() && this.fetchCardsCats() && this.fetchAritclesCats()
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  // mounted () {
  //   setInterval(() => {
  //     if (this.swiperSlides.length < 10) {
  //       this.swiperSlides.push(this.swiperSlides.length + 1)
  //     }
  //   }, 3000)
  // }
}
</script>

<style>
</style>