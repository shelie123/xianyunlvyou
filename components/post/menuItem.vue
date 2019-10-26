<template>
  <div>
    <div class="container">
      <div class="top clearfix">
        <div class="cityList clearfix" v-for="(item,index) in list" :key="index">
          <span class="fl">{{item.type}}</span>
          <i class="el-icon-arrow-right fr"></i>
          <div class="cityright">
            <div
              class="citychild"
              v-for="(v,index) in item.children"
              :key="index"
              @click="handleCity(v.city)"
            >
              <em>{{index+1}}</em>
              <i>{{v.city}}</i>
              <span>{{v.desc}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <p>推荐城市</p>
        <div class="images">
          <img src="../../assets/pic_sea.jpeg" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list"],
  methods: {
    handleCity(city) {
      console.log(city);
      this.$emit("getCityName", city);
    }
  }
};
</script>

<style scoped lang="less">
.container {
  box-sizing: border-box;
  .top {
    width: 260px;
    position: relative;
    .cityList {
      padding: 0 20px;
      line-height: 41px;
      border: 1px #ddd solid;

      i {
        line-height: 41px;
        font-size: 18px;
      }
      .cityright {
        width: 400px;
        position: absolute;
        left: 260px;
        top: 0;
        display: none;
        background: #fff;
        z-index: 999;
        .citychild {
          height: 42px;
          line-height: 41px;
          text-align: left;
          border-left: 1px #ddd solid;
          border-right: 1px #ddd solid;

          em {
            font-style: italic;
            color: #ffa500;
            font-size: 24px;
            font-weight: 400;
            padding-left: 20px;
          }
          i {
            color: #ffa500;
            padding-left: 20px;
            font-size: 16px;
            cursor: pointer;
          }
          span {
            padding-left: 20px;
            color: 666;
            cursor: pointer;
          }
        }
        .citychild:nth-child(1) {
          border-top: 1px #ddd solid;
        }
        .citychild:last-child {
          border-bottom: 1px #ddd solid;
        }
        .citychild:nth-child(-n + 4) {
          border-left: none;
        }
      }
    }
    .cityList:not(:first-child) {
      border-top: none;
    }
    .cityList:hover {
      border-right: none;
      .cityright {
        display: block;
      }
    }
  }
  .bottom {
    width: 260px;
    margin-top: 30px;
    p {
      padding-bottom: 5px;
      border-bottom: 1px #ddd solid;
    }
    .images {
      margin-top: 10px;

      img {
        width: 100%;
      }
    }
  }
}
</style>