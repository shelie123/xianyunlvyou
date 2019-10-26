<template>
  <div>
    <div class="container">
      <div class="container-left">
        <div class="top">发表新攻略</div>
        <div class="head">分享你的个人游记,让更多人看到哦！</div>
        <el-form ref="form" :model="form" label-width="80px">
          <div class="post-title">
            <el-input v-model="form.title" placeholder="请输入文章标题"></el-input>
          </div>
          <div class="post-content clearfix">
            <template>
              <div id="app">
                <VueEditor :config="config" ref="vueEditor" style="height:400px;" />
              </div>
            </template>
          </div>
          <div class="post-city">
            <span>选择城市</span>
            <input type="text" placeholder="请搜索游玩城市" v-model="cityname" />
          </div>
          <div class="post-submit">
            <span @click="onSubmit">发布</span>
            <i>或者</i>
            <em>保存到草稿</em>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import VueEditor from "vue-word-editor";
import "quill/dist/quill.snow.css";
export default {
  name: "app",
  data() {
    return {
      form: {
        title: "",
        content: "",
        cityname: "",
        id: ""
      },
      // 编辑器的配置
      config: {
        // 上传图片的配置
        uploadImage: {
          url: this.$axios.defaults.baseURL + "/upload",
          name: "file",
          // res是结果，insert方法会把内容注入到编辑器中，res.data.url是资源地址
          uploadSuccess: (res, insert) => {
            insert(this.$axios.defaults.baseURL + res.data.data.url);
          }
        },

        // 上传视频的配置
        uploadVideo: {
          url: this.$axios.defaults.baseURL + "/upload",
          name: "file",
          uploadSuccess: (res, insert) => {
            insert(this.$axios.defaults.baseURL + res.data.url);
          }
        }
      }
    };
  },
  components: {
    VueEditor
  },
  methods: {
    onSubmit() {
      // 使用refs获取编辑器中内容
      this.$axios({
        url: "/posts",
        method: "POST",
        headers: {
          Authorization: localStorage.getItem("vuex" || `{}`).token
        }
      });
    }
  },
  mounted() {}
};
</script>

<style scoped lang="less">
.container {
  width: 1000px;
  margin: 20px auto;

  .container-left {
    width: 750px;
    .top {
      font-size: 22px;
    }
    .head {
      margin: 10px 0;
      font-size: 12px;
      color: #999;
    }
    .post-title {
      margin-bottom: 20px;
    }
    .post-content {
      margin-bottom: 60px;
    }
    .post-city {
      span {
        font-size: 18px;
        padding-right: 20px;
        color: #666;
      }
      input {
        padding: 10px 0;
        text-indent: 1em;
        color: #dcdfe6;
        border: 1px #dcdfe6 solid;
        border-radius: 3px;
      }
    }
    .post-submit {
      margin: 30px 0;
      font-size: 16px;
      span {
        padding: 5px 20px;
        color: #fff;
        background: #409eff;
        border-radius: 5px;
      }
      i {
        padding: 0 10px;
      }
      em {
        color: #ffa500;
      }
    }
  }
}
</style>