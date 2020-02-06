<template>
    <div>
        <home-header :city="city"></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-recommend></home-recommend>
        <home-weeked></home-weeked>
    </div>
</template>

<script>
import HomeHeader from './compontents/Header'
import HomeSwiper from './compontents/Swiper'
import HomeIcons from './compontents/Icons'
import HomeRecommend from './compontents/Recommend'
import HomeWeeked from './compontents/Weekend'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeeked
  },
  data () {
    return {
      city: ''
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>
<style>

</style>
