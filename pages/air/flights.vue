<template>
  <section class="contianer">
    <el-row type="flex" justify="space-between">
      <!-- 顶部过滤列表 -->
      <div class="flights-content">
        <!-- 过滤条件 -->
        <FlightsFilters :data="cacheFlightsData" @setDataList="setDataList" />

        <!-- 航班头部布局 -->
        <FlightsListHead />

        <!-- 航班信息 -->
        <FlightsItem v-for="(item,index) in dataList" :key="index" :item="item" />
        <el-pagination
          v-if="flightsData.flights.length"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageIndex"
          :page-sizes="[5,10, 15, 20]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>

        <div
          v-if="flightsData.flights.lenght===0 && !loading"
          style="padding:50px;text-align:center;"
        >该航班暂无数据</div>
      </div>

      <!-- 侧边栏 -->
      <div class="aside">
        <FlightsAside />
        <!-- 侧边栏组件 -->
      </div>
    </el-row>
  </section>
</template>
<script>
import moment from "moment";
import FlightsListHead from "@/components/air/flightsListHead";
import FlightsItem from "@/components/air/flightsItem";
import FlightsFilters from "@/components/air/flightsFilters";
import FlightsAside from "@/components/air/flightsAside";

export default {
  // 计算页面
  computed: {
    // 从flights总列表数据中切割出来数组列表
    dataList() {
      const arr = this.flightsData.flights.slice(
        (this.pageIndex - 1) * this.pageSize,
        this.pageIndex * this.pageSize
      );
      return arr;
    }
  },

  data() {
    return {
      // 请求机票列表返回的总数据，包含flights，info，options，total
      flightsData: {
        // 初始值
        flights: [],
        info: {},
        options: {}
      },

      // 从flights总列表数据中切割出来的数组列表
      // dataList: [],

      // 声明多一分总数据，该总数据一旦赋值之后不会再被修改，也就是第一次赋值完后的值等于flightsData
      cacheFlightsData: {
        // 初始值
        flights: [],
        info: {},
        options: {}
      },

      // 当前的页数
      pageIndex: 1,
      // 当前的条数
      pageSize: 5,

      // 判断是否正在加载
      loading: true,

      // 分页条数
      total: 0
    };
  },
  components: {
    FlightsListHead,
    FlightsItem,
    FlightsFilters,
    FlightsAside
  },
  // 事件函数
  methods: {
    // 给过滤组件修改flightsData的flights
    setDataList(arr) {
      this.flightsData.flights = arr;
      // 修改分页的初始值
      this.total = arr.length;
      this.pageIndex = 1;
    },

    // 分页条数切换时候触发，val是当前的条数
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      // 切换条数
      this.pageSize = val;

      // 重新回到第一页
      // this.dataList = this.flightsData.flights.slice(0, this.pageSize);
    },

    // 页数切换时候触发，val是当前的页数
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.pageIndex = val;
      // 修改机票列表
      // this.dataList = this.flightsData.flights.slice(
      //   (this.pageIndex - 1) * this.pageSize,
      //   this.pageIndex * this.pageSize
      // );
    },
    // 获取机票的列表
    getList() {
      // 请求机票的列表数据
      this.$axios({
        url: "/airs",
        // params是axios的get的参数
        params: this.$route.query
      }).then(res => {
        // 保存机票的总数据
        this.flightsData = res.data;

        // 赋值多一分给缓存的对象，一旦赋值之后不能再被修改
        this.cacheFlightsData = { ...res.data };

        // 请求完毕
        this.loading = false;

        // 分页总数
        this.total = this.flightsData.total;
      });
    }
  },
  watch: {
    // 监听路由
    $route() {
      // 请求机票列表数据
      this.getList();
    }
  },
  mounted() {
    //   请求机票列表数据
    // this.$axios({
    //   url: "/airs",
    //   // params是axios的get参数
    //   params: this.$route.query
    // }).then(res => {
    //   console.log(res.data);
    //   // 保存到机票的总数据
    //   this.flightsData = res.data;
    //   // 赋值多一分给缓存的对象，一旦赋值之后不能再被修改
    //   this.cacheFlightsData = { ...res.data };
    //   // 第一页的数据
    //   // this.dataList = this.flightsData.flights.slice(0, this.pageSize);
    //   // 请求完毕
    //   this.loading = false;
    //   // 分页总数
    //   this.total = this.flightsData.total;
    // });
    this.getList();
  }
};
</script>
<style scoped lang="less">
.contianer {
  width: 1000px;
  margin: 20px auto;
}

.flights-content {
  width: 745px;
  font-size: 14px;
}

.aside {
  width: 240px;
}
</style>