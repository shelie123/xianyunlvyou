<template>
  <el-form :model="form" ref="form" :rules="rules" class="form">
    <el-form-item class="form-item" prop="username">
      <el-input placeholder="用户名/手机" v-model="form.username"></el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="password">
      <el-input placeholder="密码" type="password" v-model="form.password"></el-input>
    </el-form-item>

    <p class="form-text">
      <nuxt-link to="#">忘记密码</nuxt-link>
    </p>

    <el-button class="submit" type="primary" @click="handleLoginSubmit">登录</el-button>
  </el-form>
</template>

<script>
import { async } from "q";
export default {
  data() {
    return {
      // 表单数据
      form: {
        username: "",
        password: ""
      },
      // 表单规则
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 16, message: "长度在 3 到 16 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 16, message: "长度在 3 到 16 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    // 提交登录
    handleLoginSubmit() {
      // 验证表单
      this.$refs.form.validate(async valid => {
        //   为true表示没有错误
        if (valid) {
          // // 提交登录接口
          // var res = await this.$axios({
          //   url: "/accounts/login",
          //   method: "POST",
          //   data: this.form
          // });
          // console.log(res.data);

          // if (res.status === 200) {
          //   this.$message.success("登录成功");
          //   // this.$router.push("/");

          //   const data = res.data;
          // 把用户信息的token保存到本地，在头部组件中显示用户的数据

          // vuex不能通过直接赋值方式来修改state的值
          // this.$store.state.username = data.user.nickname;

          // this.$store.dispatch用于调用actions的方法
          const res = await this.$store.dispatch("user/login", this.form);

          // 通过调用mutations下的方法来修改state的值，commit方法调用mutations的方法
          // 非常类似于$$emit
          // this.$store.commit("user/setUserInfo", data);
          // 跳转到首页
          if (res.status === 200) {
            this.$message.success("登录成功");
            setTimeout(() => {
              this.$router.back("/");
            }, 1000);
          }
        }

        // this.$store.dispatch("user/login", this.form).then(res => {
        //   // 成功提示
        //   this.$message({
        //     message: "登录成功，正在跳转",
        //     type: "success"
        //   });
        // });
        // }
      });
    }
  }
};
</script>

<style scoped lang="less">
.form {
  padding: 25px;
}

.form-item {
  margin-bottom: 20px;
}

.form-text {
  font-size: 12px;
  color: #409eff;
  text-align: right;
  line-height: 1;
}

.submit {
  width: 100%;
  margin-top: 10px;
}
</style>