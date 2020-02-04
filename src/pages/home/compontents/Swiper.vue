<template>
<div class="wrapper">
<swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="item of swiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl"/>
    </swiper-slide>
    <!-- <swiper-slide>I'm Slide 3</swiper-slide>
    <swiper-slide>I'm Slide 4</swiper-slide>
    <swiper-slide>I'm Slide 5</swiper-slide>
    <swiper-slide>I'm Slide 6</swiper-slide>
    <swiper-slide>I'm Slide 7</swiper-slide> -->
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>

</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://img.dpm.org.cn/Uploads/Picture/2019/12/04/s5de712fdac48a.jpg'
      }, {
        id: '0002',
        imgUrl: 'https://images.shobserver.com/news/690_390/2018/9/24/ce7f4619-d6fc-40d6-b050-c0fcf1bd0ee9.jpg'
      }]
    }
  }}
// height: 53%vw

</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background: blue !important
.wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 53%
    background: #eee
    .swiper-img
        width: 100%
        height: 4rem
</style>
