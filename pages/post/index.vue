<template>
  <div>
    <div class="content w clearfix">
      <div class="content-left fl">
        <MenuItem :list="list" @getCityName="getCityName" />
      </div>

      <div class="content-right fr">
        <Search :city="city" @setCityName="setCityName" />
        <div>
          <PostList v-for="(item,index) in postList" :key="index" :list="item" />

          <div
            v-if="this.postList.length===0"
            style="padding:50px;text-align:center;"
          >暂无该城市旅游风景区的文章！</div>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-sizes="[2, 4, 6, 8]"
            :page-size="limit"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuItem from "@/components/post/menuItem";
import Search from "@/components/post/Search";
import PostList from "@/components/post/PostList";
export default {
  data() {
    return {
      list: {},
      postList: [],

      start: 0, //默认一页条数
      limit: 2, //默认条数
      total: 0, // 默认总条数

      // 城市名称
      city: ""
    };
  },
  components: {
    MenuItem,
    Search,
    PostList
  },
  methods: {
    handleSizeChange(val) {
      this.limit = val;
      //请求文章列表
      this.getCityList();
    },
    handleCurrentChange(val) {
      this.start = (val - 1) * this.limit;
      //请求文章列表
      this.getCityList();
    },

    // 左侧导航的城市名称
    getCityName(city) {
      this.city = city;
      this.getCityList();
    },

    // 搜索框的城市名称
    setCityName(city) {
      this.city = city;
      this.getCityList();
    },

    //请求文章列表
    getCityList() {
      this.$axios({
        url: `/posts?_start=${this.start}&_limit=${this.limit}${
          this.city ? "&city=" + this.city : ""
        }`
      }).then(res => {
        console.log(res.data);
        const { data, total } = res.data;
        this.postList = data;
        this.total = total;
      });
    }
  },
  mounted() {
    // 请求推荐城市的列表
    this.$axios({
      url: "/posts/cities"
    }).then(res => {
      // console.log(res.data);
      const { data } = res.data;
      this.list = data;
    });

    // 请求文章列表
    this.getCityList();
  }
};
</script>

<style scoped lang="less">
.content {
  box-sizing: border-box;
  width: 1000px;
  margin: 20px auto;

  .content-left {
    width: 270px;
  }
  .content-right {
    width: 700px;
  }
}
</style>