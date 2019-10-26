<template>
  <div>
    <div class="content-right-top">
      <input
        type="text"
        placeholder="请输入想去的地方，比如：广州"
        v-model="cityInfo"
        @keyup.enter="handleSearch(cityInfo)"
      />
      <i class="el-icon-search" @click="handleSearch(cityInfo)"></i>
    </div>
    <div class="recommend">
      <i>推荐:</i>
      <span
        v-for="(item,index) in cityList"
        :key="index"
        @click="handleSearch(item.name)"
      >{{item.name}}</span>
    </div>
    <div class="content-head clearfix">
      <div class="content-head-left fl">推荐攻略</div>
      <div class="content-head-right fr" @click="handleEditor">
        <i class="el-icon-edit"></i>
        <span>写游记</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    city() {
      this.cityInfo = this.city;
    }
  },
  props: ["city"],

  data() {
    return {
      cityInfo: "",
      cityList: [
        { name: "北京" },
        { name: "上海" },
        { name: "广州" },
        { name: "深圳" }
      ]
    };
  },
  methods: {
    handleSearch(cityInfo) {
      this.$emit("setCityName", cityInfo);
    },
    handleEditor() {
      this.$router.push("/post/postEditor");
    }
  }
};
</script>

<style scoped lang="less">
.content-right-top {
  box-sizing: border-box;
  position: relative;
  input {
    box-sizing: border-box;
    width: 100%;
    padding: 10px 0;
    border: 3px #ffa500 solid;
    text-indent: 2em;
    outline: none;
  }
  .el-icon-search {
    position: absolute;
    font-size: 20px;
    font-weight: 900;
    color: #ffa500;
    right: 15px;
    top: 10px;
    cursor: pointer;
  }
}
.recommend {
  font-size: 14px;
  margin-top: 10px;
  color: #666;
  span {
    padding-left: 10px;
    cursor: pointer;
  }
}
.content-head {
  margin-top: 10px;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px #ddd solid;
  .content-head-left {
    font-size: 18px;
    color: #ffc652;
    border-bottom: 2px #ffc652 solid;
  }
  .content-head-right {
    width: 106px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    background: #409eff;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    span {
      font-size: 16px;
    }
  }
}
</style>