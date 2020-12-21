<template>
  <div class="card">
    <router-link :to="`/articles/${url}`" class="mock">
      <img class="w-100" :src="`${icon}`" />
    </router-link>
    <div class="texts w-100 h-100">
      <span>{{name}}</span>
      <span>{{subName}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, required: true },
    subName: { type: String, required: true },
    icon: { type: String, required: true },
    url: { type: String, required: true }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/variables';

.card {
  position: relative;
  font-family: 'Century-GothicI';
  .mock {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  .texts {
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: map-get($colors, 'white');
  }
}
</style>