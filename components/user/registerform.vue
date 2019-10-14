<template>
  <el-form :model="form" ref="form" :rules="rules" class="form">
    <el-form-item class="form-item" prop="username">
      <el-input placeholder="用户名手机" v-model="form.username"></el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="captcha">
      <el-input placeholder="验证码" v-model="form.captcha">
        <template slot="append">
          <el-button @click="handleSendCaptcha">发送验证码</el-button>
        </template>
      </el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="nickname">
      <el-input placeholder="你的名字" v-model="form.nickname"></el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="password">
      <el-input placeholder="密码" type="password" v-model="form.password"></el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="checkpassword">
      <el-input placeholder="确认密码" type="password" v-model="form.checkpassword"></el-input>
    </el-form-item>

    <el-button class="submit" type="primary" @click="handleRegSubmit">注册</el-button>
  </el-form>
</template>

<script>
export default {
  data() {
    // rule:当前的规则，一般是用不上这个参数
    // value：输入框的值
    // callback：回调函数，该函数必须要调用，调用时候可以传递错误的对象信息
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        // 验证通过
        callback();
      }
    };
    return {
      // 表单数据
      form: {
        username: "",
        nickname: "",
        captcha: "", //验证码
        password: "",
        checkpassword: "" //确认密码
      },

      // 表单规则
      rules: {
        username: [
          { required: true, message: "请输入用户名/手机号码", trigger: "blur" },
          { min: 3, max: 16, message: "长度在 3 到 16 个字符", trigger: "blur" }
        ],
        nickname: [
          { required: true, message: "请输入昵称", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        captcha: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 16, message: "长度在 3 到 16 个字符", trigger: "blur" }
        ],
        checkpassword: [
          {
            validator: validatePass2,
            trigger: "blur"
          },
          { min: 3, max: 16, message: "长度在 3 到 16 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    // 发送验证码
    async handleSendCaptcha() {
      if (!this.form.username) {
        this.$message.error("手机号码不能为空");
        return;
      }

      // 调用actions的方法
      const res = await this.$store.dispatch(
        "user/sendCaptcha",
        this.form.username
      );

      const { code } = res.data;

      // 打印出手机的验证码
      this.$message.success(`验证码是：${code}`);

      // this.$axios({
      //   url: "/captchas",
      //   method: "POST",
      //   data: {
      //     tel: this.form.username
      //   }
      // }).then(res => {
      //   console.log(res.data);
      //   const { code } = res.data;
      //   this.$message.success(`当前手机验证码是：${code}`);
      // });
    },

    // 注册
    handleRegSubmit() {
      // console.log(this.form);
      // 验证表单
      this.$refs.form.validate(async valid => {
        if (valid) {
          // props是form里面除了checkpassword以外的属性
          const { checkpassword, ...props } = this.form;
          // 请求注册的接口
          const res = await this.$axios({
            url: "/accounts/register",
            method: "POST",
            data: props
          });
          console.log(res.data);

          if (res.status === 200) {
            this.$message.success("注册成功");

            // 跳转到登录页
            // this.$router.replace("/user/login");
            this.$router.go(0);
          }
        }
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