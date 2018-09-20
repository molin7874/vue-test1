<template>
  <div class="singer">
    <div class="topSingerList">
      <ul>
        <li class="item" v-for="item in singerList" :key="item.id">
          <img :src="item.picUrl" height="50" width="50"/>
          <span class="singername">{{item.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Singer from '@/common/js/singer.js'
import axios from 'axios'
var pinyin = require('pinyin')
const HOT_NAME = '热门'
const HOT_SINGERS = 10
export default {
  data () {
    return {
      singerList: []
    }
  },
  methods: {
    getSingerList () {
      axios.get('/api/top/artists?limit=100').then((response) => {
        let s = response.data.artists
        s.map((item) => {
          let py = pinyin(item.name[0], {
            style: pinyin.STYLE_FIRST_LETTER
          })
          item.initial = py[0][0].toUpperCase()
        })
        this.singerList = this._normalizeSinger(s)
        console.log(this.singerList.name)
      })
    },
    _normalizeSinger (list) {
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      }
      list.forEach((item, index) => {
        if (index < HOT_SINGERS) {
          map.hot.items.push(new Singer({
            id: item.id,
            name: item.name,
            avatar: item.img1v1Url,
            aliaName: item.alias.join(' / ')
          }))
        }

        const key = item.initial
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          }
        }
        map[key].items.push(new Singer({
          id: item.id,
          name: item.name,
          avatar: item.img1v1Url,
          aliaName: item.alias[0]
        }))
      })
      let hot = []
      let ret = []
      for (const key in map) {
        let val = map[key]
        if (val.title.match(/[A-Z]/)) {
          ret.push(val)
        } else if (val.title === HOT_NAME) {
          hot.push(val)
        }
      }
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })
      return hot.concat(ret)
    }
  },
  mounted () {
    this.getSingerList()
  }
}
</script>
<style lang="scss" scoped>
.topSingerList ul{
  display: flex;
  flex-wrap: wrap;
}
.item{
  display: flex;
  flex-basis: 100%;
  border-bottom: 1px solid #e4e4e4;
  align-items: center;
  padding: 5px 0;
  margin: 0 5px
}
.singername{
  margin-left: 20px;
    color: #2E3030;
    font-size: 14px;
}
</style>
