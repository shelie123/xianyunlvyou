<template>
  <div>
    <div class="ditu">高德地图</div>
    <!-- 地图容器 -->
    <div id="container"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    // 整个页面加载完毕之后执行
    window.onLoad = function() {
      var map = new AMap.Map("container");
    };
    // 地图的连接
    var url =
      "https://webapi.amap.com/maps?v=1.4.15&key=0b7793248aebee8c82d2ebc2fd4777d6&callback=onLoad";
    var jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);
  }
};
</script>

<style scoped>
.ditu {
  padding: 20px 20px 0 30px;
  font-size: 24px;
  color: #333;
}
#container {
  margin: 20px 30px;
  width: 500px;
  height: 350px;
}
</style>