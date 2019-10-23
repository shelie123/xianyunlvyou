<template>
  <div>
    <div class="content clearfix">
      <div class="content-details">
        <div class="details-top">
          <a href="#">塞班贵？一定是你的打开方式不对！6000块玩转塞班</a>
        </div>
        <div class="details-center">
          <a href="#">
            大家对塞班岛总存在着这样的误解，知道它是美属地盘，就理所当然地觉得这里的花费一定很高，
            花费高有高的玩法，那如果只有6000块的预算呢？要怎么玩？关于旅行这件事，
            我们要让钱花得更有道理，收下这份攻略，带你6000块花式玩转塞班。图：塞班岛
            by第5季旅游一、怎样用6000块玩转塞班？大多数出境游客人不做预算或最
          </a>
        </div>
        <div class="details-image">
          <a href="#">
            <img src="../../assets/pic_sea.jpeg" alt />
          </a>
          <a href="#">
            <img src="../../assets/pic_sea.jpeg" alt />
          </a>
          <a href="#">
            <img src="../../assets/pic_sea.jpeg" alt />
          </a>
        </div>
        <div class="details-bottom">
          <span>
            <i class="el-icon-location-outline"></i> 北京市
          </span>
          <span>by</span>
          <a href="#">
            <span>地球发动机</span>
          </a>
          <span>
            <i class="el-icon-view"></i> 8384
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.content {
  width: 700px;
  .content-details {
    margin: 20px 0;
    .details-top {
      margin: 20px 0;
      font-size: 20px;
    }
    .details-center {
      color: #666666;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }
    .details-image {
      margin: 20px 0;
      width: 100%;
      a {
        img {
          width: 32.5%;
        }
      }
    }
    .details-bottom {
      color: #b0a6b0;
      span {
        padding-right: 5px;
      }
      a {
        color: #ffa500;
      }
    }
  }
}
</style>