<template>
  <transition name="slide">
    <div class="user">
      <div class="back" @click="back">
        <i class="iconfont icon-back"></i>
      </div>
      <div class="switches-wrapper">
      </div>
      <div class="sequence-play" @click="sequence">
        <i class="iconfont icon-iconfontplay2"></i>
        <span class="text">播放全部</span>
        <span class="count">(共{{count}}首)</span>
      </div>
      <div class="list-wrapper">
      </div>
      <div class="no-result-wrapper"></div>
    </div>
  </transition>
</template>
<script>
export default {
  data () {
    return {
      count: null
    }
  },
  methods: {
    back () {
      this.$router.back()
    },
    sequence () {
      alert('队列')
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/color.scss";
.user{
  display: flex;
  z-index: 100;
  background: $color-background;
}
.icon-back {
  font-size: 30px;
  color: #fff;
}
.iconfont {
font-size: 18px;
color: $color-text;
}
</style>
