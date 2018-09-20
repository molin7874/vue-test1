<template>
<div>
  <div class="m-header">
    <router-link to="/user" class="mine" tag="div">
    <i class="iconfont icon-category"></i>
    </router-link>
    <h1 class="text">VUEMUSIC</h1>
    <router-link to="/search" class="search" tag="div">
    <i class="iconfont icon-search"></i>
    </router-link>
  </div>
  <tab></tab>
  <rank></rank>
</div>
</template>
<script>
import tab from '@/tab/tab'
import rank from '@/rank/rank'
export default {
  data () {
    return {

    }
  },
  components: {
    tab,
    rank
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/color.scss";
.m-header{
  display: flex;
  height: 44px;
  width: 100%;
  text-align: center;
  background: $color-theme;
}
.text{
  margin: 0;
  padding: 0;
  line-height: 44px;
  font-weight: bold;
  letter-spacing: 3px;
  order: 0;
  flex-basis: 80%;
  color: white;
}
.mine{
  flex-basis: 10%;
  order: -1;
  line-height: 44px;
}
.search{
  flex-basis: 10%;
  order: 0;
  line-height: 44px;
}
.iconfont {
  display: block;
  font-size: 22px;
  color: white;
}
</style>
