<template>
  <div class="tab">
   <router-link tag="div" class="tab-item" to="/recommend">
    <span>推荐</span>
   </router-link>
   <router-link tag="div" class="tab-item" to="/toplist">
    <span>排行</span>
   </router-link>
   <router-link tag="div" class="tab-item" to="/singer">
    <span>歌手</span>
   </router-link>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/color.scss";
.tab{
display: flex;
line-height: 44px;
width: 100%;
font-size: 14px;
background: $color-theme;
}
.tab-item{
  flex: 1;
  text-align: center;
  color: $color-text-lm;
}
</style>
