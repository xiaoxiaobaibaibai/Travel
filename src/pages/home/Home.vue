<template>
    <div>
        <home-header></home-header>
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

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeeked
  }
}
</script>
<style>

</style>
