<template>
  <div class="login">
    <img src="../assets/img/2.png">
    <h3>双学位报名管理</h3>
    <div class="login-field">
      <ul>
        <li>
          <img src="../assets/img/userlogo.png">
          <mt-field placeholder="请输入学号" v-model="account" class="username"></mt-field>
        </li>
        <li>
          <img src="../assets/img/pswdlogo.png">
          <mt-field placeholder="请输入密码" type="password" v-model="pswd" class="pswd"></mt-field>
        </li>
      </ul>
    </div>
    <div class="btn-operate">
      <mt-button type="primary" size="large" @click.native="login" class="login-btn">登录</mt-button>
      <mt-button type="danger" size="large" @click.native="register" class="login-btn">注册</mt-button>
    </div>
  </div>
</template>
<script>
// import Axios from "axios";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      account: "",
      pswd: ""
    };
  },
  methods: {
    async login() {
      const response = await this.$axios.post(
        "http://www.dyycyf.top/double-degree/user/login",
        {
          account: this.account,
          pswd: this.pswd
        }
      );
      console.log(response.data.success);
      console.log(response.data.reason);
      if (response.data.success == true) {
        Toast({
          message: "登陆成功",
          position: "middle",
          duration: 3000
        });
        const res = await this.$axios.get(
          "http://www.dyycyf.top/double-degree/user/info",
          {
            params: {
              account: this.account
            }
          }
        );
        console.log(res.data);
        sessionStorage.setItem("userName", res.data.name);
        sessionStorage.setItem("userId", this.account);
        if (res.data.level == 10) {
          this.$router.replace("/admin");
        } else if (res.data.level == 0) {
          this.$router.replace("/user");
        }
      } else {
        Toast({
          message: response.data.reason,
          position: "bottom",
          duration: 3000
        });
      }
    },
    register() {
      this.$router.push("/register");
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  img {
    display: block;
    width: 200px;
    margin: 0 auto;
  }
  h3 {
    text-align: center;
    margin: 20px 0px;
  }
  .login-field {
    ul {
      width: 60%;
      margin: 0 auto;
      li {
        position: relative;
      }
    }
    .username,
    .pswd {
      border-bottom: 1px solid orange;
    }
    img {
      width: 22px;
      position: absolute;
      top: 14px;
      left: -26px;
    }
  }
  .btn-operate {
    margin-top: 40px;
    .login-btn {
      width: 70%;
      margin: 0 auto;
      margin-top: 10px;
    }
  }
}
</style>
