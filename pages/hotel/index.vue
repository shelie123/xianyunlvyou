<template>
  <div>
    <div class="ditu">高德地图</div>

    <el-row style="margin-bottom:20px;margin-left:30px;">
      <el-col :span="5">
        <el-input placeholder="出发地点" v-model="start"></el-input>
      </el-col>
      <el-col :span="5">
        <el-input placeholder="到达地点" v-model="end"></el-input>
      </el-col>
      <el-button :span="2" @click="handleSearch">搜索</el-button>
    </el-row>

    <!-- 地图容器 -->
    <div id="container"></div>
    <div id="panel"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      start: "",
      end: ""
    };
  },
  methods: {
    handleSearch() {
      this.map();
    },
    map() {
      // 地图对象
      var map = new AMap.Map("container", {
        zoom: 15, //级别
        center: [113.3245904, 23.1066805], //中心点坐标
        viewMode: "3D" //使用3D视图
      });
      var marker = new AMap.Marker({
        position: [113.3245904, 23.1066805] //位置，点坐标
      });
      map.add(marker); //添加到地图
      // 异步加载插件
      AMap.plugin("AMap.ToolBar", function() {
        //异步加载插件
        var toolbar = new AMap.ToolBar();
        map.addControl(toolbar);
      });

      // 驾车路线的插件
      var driving = new AMap.Driving({
        map: map,
        panel: "panel",
        policy: AMap.DrivingPolicy.LEAST_TIME
      }); //驾车路线规划

      var points = [{ keyword: this.start }, { keyword: this.end }];

      driving.search(points, function(status, result) {});
    }
  },
  mounted() {
    // 整个页面加载完毕之后执行
    window.onLoad = () => {
      // // 地图对象
      // var map = new AMap.Map("container", {
      //   zoom: 15, //级别
      //   center: [113.3245904, 23.1066805], //中心点坐标
      //   viewMode: "3D" //使用3D视图
      // });
      // var marker = new AMap.Marker({
      //   position: [113.3245904, 23.1066805] //位置，点坐标
      // });
      // map.add(marker); //添加到地图
      // AMap.plugin("AMap.ToolBar", function() {
      //   //异步加载插件
      //   var toolbar = new AMap.ToolBar();
      //   map.addControl(toolbar);
      // });
      // // 驾车路线的插件
      // var driving = new AMap.Driving({
      //   map: map,
      //   panel: "panel",
      //   policy: AMap.DrivingPolicy.LEAST_TIME
      // }); //驾车路线规划
      // var points = [{ keyword: this.start }, { keyword: this.end }];
      // driving.search(points, function(status, result) {});
      this.map();
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
#panel {
  position: fixed;
  background-color: white;
  max-height: 90%;
  overflow-y: auto;
  top: 10px;
  right: 10px;
  width: 280px;
}
#panel .amap-call {
  background-color: #009cf9;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
#panel .amap-lib-driving {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow: hidden;
}
</style>