<template>
    <div class= "icons">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(page,index) of pages" :key="index">
        <div
          class="icon"
          v-for="item of page"
          :key="item.id">
            <div class="icon-img">
            <img class="icon-img-content" :src='item.imgUrl'/>
          </div>
           <p class="icon-desc">{{item.desc}}</p>
         </div>
         </swiper-slide>
      </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        autoplay: false
      },
      iconList: [{
        id: '0001',
        imgUrl: require('./img/XEM.png'),
        desc: '热门景点'
      }, {
        id: '0002',
        imgUrl: require('./img/XMR.png'),
        desc: '名迹古胜'
      }, {
        id: '0003',
        imgUrl: require('./img/ZRX.png'),
        desc: '天南海北'
      }, {
        id: '0004',
        imgUrl: require('./img/RDN.png'),
        desc: '青山绿水'
      }, {
        id: '0005',
        imgUrl: require('./img/MONA.png'),
        desc: '往来古今'
      }, {
        id: '0006',
        imgUrl: require('./img/KMD.png'),
        desc: '迁客骚人'
      }, {
        id: '0007',
        imgUrl: require('./img/DOGE.png'),
        desc: '诗人佳季'
      }, {
        id: '0008',
        imgUrl: require('./img/BCC.png'),
        desc: '瘦塔高楼'
      }, {
        id: '0009',
        imgUrl: require('./img/RDN.png'),
        desc: '轶事野史'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }

  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons
    margin-top: .1rem
    .icon
        position relative
        overflow hidden
        float: left
        width: 25%
        height: 0
        padding-bottom: 25%
        .icon-img
          position: absolute
          top: 0
          left: 0
          right: 0
          bottom: .44rem
          box-sizing: border-box
          padding: .3rem
          .icon-img-content
            display: block
            margin: 0 auto
            height: 100%
        .icon-desc
          position absolute
          left: 0
          right: 0
          bottom: 0
          height: .44rem
          line-height: .44rem
          text-align: center
          color: $darkTextColor
          ellipsis()
</style>
