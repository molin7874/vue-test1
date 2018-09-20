<template>
  <div class="toplist">
    <ul class="topUl">
      <li class="item" v-for="item in toplist" :key="item.id">
        <div class="icon">
          <img :src="item.coverImgUrl" width="100" height="100"/>
        </div>
        <ul class="songlist">
          <li class="song" v-for="(song, index) in item.top" :key="index">
            <span>{{index + 1}}</span>
            <span>{{song.name}} - {{song.ar[0].name}}</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
const yunmusic = [0, 1, 2, 3, 4, 5, 6]
export default {
  data () {
    return {
      toplist: []
    }
  },
  methods: {
    gettopList () {
      for (let i = 0; i < yunmusic.length; i++) {
        this.gettop(yunmusic[i]).then((response) => {
          let list = response.data.playlist
          list.top = response.data.playlist.tracks.slice(0, 3)
          this.toplist.push(list)
        }).catch((error) => {
          console.log(error)
        })
      }
    },
    gettop (id) {
      const url = `/api/top/list?idx=${id}`
      return axios.get(url)
    }
  },
  mounted () {
    this.gettop()
    this.gettopList()
  }
}
</script>
<style lang="scss" scoped>
.topUl{
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
}
.item{
  flex-basis: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin: 0 10px;
  padding: 3px 0;
  height: 100px;
  border-bottom: 1px solid #e4e4e4;
  font-size: 100%;
  font-weight: normal;
  vertical-align: baseline;
}
.song{
  text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    line-height: 30px;
    color: #2E3030;
}
.songlist{
  padding: 0 20px;
  font-size: 10px;
}
</style>
