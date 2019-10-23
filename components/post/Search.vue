<template>
  <div>
    <div class="content-right-top">
      <input type="text" placeholder="请输入想去的地方，比如：广州" />
      <i class="el-icon-search" @click="handleSearch"></i>
    </div>
    <div class="recommend">
      <span>推荐:</span>
      <a href="#">
        <span>广州</span>
      </a>
      <a href="#">
        <span>上海</span>
      </a>
      <a href="#">
        <span>北京</span>
      </a>
    </div>
    <div class="content-head clearfix">
      <div class="content-head-left fl">推荐攻略</div>
      <div class="content-head-right fr">
        <i class="el-icon-edit"></i>
        <span>写游记</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.content-right-top {
  position: relative;
  input {
    width: 100%;
    padding: 10px 0;
    border: 3px #ffa500 solid;
    text-indent: 2em;
  }
  .el-icon-search {
    position: absolute;
    font-size: 20px;
    font-weight: 900;
    color: #ffa500;
    right: 10px;
    top: 10px;
  }
}
.recommend {
  font-size: 14px;
  margin-top: 10px;
  color: #666;
  a {
    padding: 0 10px;
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
    span {
      font-size: 16px;
    }
  }
}
</style>