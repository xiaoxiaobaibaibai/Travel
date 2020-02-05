<template>
<div>
    <div class="recommend-title">热销推荐</div>
    <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
            <img class="item-img" :src="item.imgUrl">

          <div class="item-info">
              <p class="item-title">{{item.title}}</p>
              <p class="item-desc">{{item.desc}}</p>
              <button class="item-button">查看详情</button>
          </div>
        </li>
    </ul>
</div>

</template>
<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/4763d8ca62cfa0581603ef73d8ab87bd.jpg',
        title: '洛神赋',
        desc: '其形也，翩若惊鸿，婉若游龙,荣曜秋菊，华茂春松。'
      }, {
        id: '0002',
        imgUrl: require('./img/故宫.jpg'),
        title: '长门赋',
        desc: '夜曼曼其若岁兮，怀郁郁其不可再更。澹偃蹇而待曙兮，荒亭亭而复明'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .recommend-title
    margin-top: .2rem
    line-height: .8rem
    background #eee
    text-indent: .2rem
  .item
    overflow hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color #ccc
        ellipsis()
      .item-button
        line-height .03rem
        margin-top .30rem
        background #ff9300
        padding .2rem
        border-radius .06rem
        color #fff
</style>
