<template>
  <div class="list-card">
    <div class="list-cover hover-overlay">
      <router-link :to="`${url}`">
        <img :src="`${cover}`" />
      </router-link>
    </div>
    <div class="list-texts">
      <h3>
        <router-link :to="`${url}`">{{title}}</router-link>
      </h3>
      <div class="list-texts-part">
        <router-link :to="`${url}`">
          <span>{{desc}}</span>
          <div class="button">
            <span>
              More
              <i class="iconfont icon-arrow"></i>
            </span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cover: { type: String, required: true },
    title: { type: String, required: true },
    desc: { type: String, required: true },
    url: { type: String, required: true }
  }

}
</script>

<style lang="scss">
@import '../assets/scss/variables';
.list-card {
  .list-cover {
    width: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
      font-family: 'object-fit: cover; object-position: top;';
    }
  }
  .list-texts {
    width: 50%;
    display: flex;
    flex-direction: column;
    a {
      text-decoration: none;
      color: inherit;
    }
    a:hover {
      color: map-get($colors, 'primary');
      text-decoration: underline;
    }
    .list-texts-part {
      margin-top: 0.4rem;
      text-align: justify;
      position: relative;
      flex-grow: 2;
      height: 100%;
      overflow: hidden;
      .button {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 5;
        height: calc(3.665rem * 0.745);
        background: map-get($colors, 'primary');
        color: map-get($colors, 'white');
        border-radius: 2rem;
        padding: 0 1.6rem 0 1.6rem;
        transition: 0.5s;
        span {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
        }
      }
      .button:hover {
        background: map-get($colors, 'secondary');
        transition: 0.5s;
      }
      a {
        display: block;
        height: 100%;
      }
    }
    .list-texts-part::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      bottom: 0;
      left: 0;
      background: linear-gradient(
        0deg,
        #fff 0,
        #fff 40%,
        rgba(255, 255, 255, 0) 100%
      );
      pointer-events: none;
    }
  }
}
</style>