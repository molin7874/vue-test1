<template>
<div class="recommend">
  <swiper :options="swiperOption" ref="mySwiper" class="bannerlist">
    <swiper-slide v-for="item in banner" :key="item.id">
      <img :src="item.picUrl" class="swiper-img">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  <div class="recommend-list">
    <h1 class="title">推荐歌单</h1>
    <ul class="listul">
      <li class="item" v-for="item in playlist" :key="item.id">
        <img :src="item.picUrl" class="swiper-img">
        <p class="playcount">
          <i class="iconfont icon-music_headphones"></i>
          {{Math.floor(item.playCount/10000)}}万
        </p>
        <div class="text">
          <p class="name">{{item.name}}</p>
        </div>
      </li>
    </ul>
  </div>
  <div class="recommend-song">
    <h1 class="title">推荐歌曲</h1>
    <ul class="listul">
      <li class="item" v-for="item in newsongs" :key="item.id">
        <div class="icon">
        <img :src="item.image" class="swiper-img">
        </div>
        <p class="text">{{item.name}}</p>
        <p class="singer">{{item.singer}}</p>
      </li>
    </ul>
  </div>
  </div>
</template>
<script>
import axios from 'axios'
import Swiper from 'swiper'
import {createRecommendSong} from '@/common/js/song'
export default {
  data () {
    return {
      banner: [],
      playlist: [],
      newsongs: [],
      swiperOption: {
        autoplay: 3000,
        pagination: '.swiper-pagination'
      }
    }
  },
  methods: {
    getBanner () {
      axios.get('/api/banner').then((response) => {
        // console.log(response)
        let list = response.data.banners
        this.banner = list.splice(0)
        // console.log(this.banner)
      }).catch((error) => {
        console.log(error)
      })
    },
    getList () {
      axios.get('/api/personalized').then((response) => {
        this.playlist = response.data.result
      }).catch((error) => {
        console.log(error)
      })
    },
    getnewSongs () {
      axios.get('/api/personalized/newsong').then((response) => {
        let list = response.data.result.map((item) => {
          return createRecommendSong(item)
        })
        list.splice(9)
        this.newsongs = list
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  mounted () {
    this.getBanner()
    this.scroll = new Swiper(this.$refs.swiper)
    this.getList()
    this.getnewSongs()
  }
}
</script>
<style scoped>
.swiper-img{
  width: 100%;
  height: 100%;
}
.listul{
  display: flex;
  flex-wrap: wrap;
  flex-basis: 33.3%;
}
.item{
  position: relative;
  height: 31.3%;
  width: 31.3%;
  padding: 0 1%;
}
.title{
    height: 65px;
    line-height: 65px;
    padding-left: 1.5%;
    text-align: left;
    font-size: 14px;
    font-weight: bold;
    color: #2E3030;
}
.bannerlist{
 border-radius: 6px;
}
.text{
  line-height: 16px;
  text-align: left;
  height: 40px;
  line-height: 16px;
  overflow: hidden;
  margin-bottom: 10px;
  font-size:11px;
}
.playcount {
  position: absolute;
  top: 5px;
  right: 8px;
  font-size: 10px;
  color: rgb(241, 241, 241);
}
</style>
