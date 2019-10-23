<template>
  <div>
    <div class="content w clearfix">
      <div class="content-left fl">
        <MenuItem :list="list" />
      </div>

      <div class="content-right fr">
        <Search />

        <PostList />
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
      list: {}
    };
  },
  components: {
    MenuItem,
    Search,
    PostList
  },
  methods: {},
  mounted() {
    this.$axios({
      url: "/posts/cities"
    }).then(res => {
      console.log(res.data);
      const { data } = res.data;
      this.list = data;
    });
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