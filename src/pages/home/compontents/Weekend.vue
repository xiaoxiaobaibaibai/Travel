<template>
<div>
    <div class="recommend-title">精品推荐</div>
    <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
            <div class="item-img-wrapper">
                <img class="item-img" :src="item.imgUrl">
                </div>
          <div class="item-info">
              <p class="item-title">{{item.title}}</p>
              <p class="item-desc">{{item.desc}}</p>
          </div>
        </li>
    </ul>
</div>

</template>
<script>
export default {
  name: 'HomeWeeked',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: require('./img/山秋.jpg'),
        title: '别赋',
        desc: '黯然销魂者，唯别而已矣！况秦吴兮绝国，复燕赵兮千里。或春苔兮始生，乍秋风兮暂起。是以行子肠断，百感凄恻。风萧萧而异响，云漫漫而奇色。'
      }, {
        id: '0002',
        imgUrl: require('./img/渔火.jpg'),
        title: '前赤壁赋 ',
        desc: '况吾与子渔樵于江渚之上，侣鱼虾而友麋鹿，驾一叶之扁舟，举匏樽以相属。寄蜉蝣于天地，渺沧海之一粟。哀吾生之须臾，羡长江之无穷'
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
 .item-img-wrapper
    overflow hidden
    height: 0
    padding-bottom 33.9%
    .item-img
      width: 100%
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
</style>
