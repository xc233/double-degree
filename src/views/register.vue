<template>
  <div class="register">
    <h2>用户注册</h2>
    <div class="operate">
      <mt-field class="cell1" label="学号：" placeholder="请输入学号" v-model="userId"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="pswd"></mt-field>
      <mt-field label="确认密码" placeholder="请再次输入密码" type="password" v-model="confirmPswd"></mt-field>
      <mt-field label="姓名" placeholder="请输入姓名" v-model="name"></mt-field>
      <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
      <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
      <p>性别</p>
      <div class="radio-operate">
        <input type="radio" value="1" v-model="gender">
        <span>男</span>
        <input type="radio" value="2" v-model="gender">
        <span>女</span>
      </div>
      <mt-button type="danger" @click.native="confirm" class="btn">确认注册</mt-button>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import Axios from "axios";
export default {
  data() {
    return {
      userId: "",
      pswd: "",
      confirmPswd: "",
      name: "",
      email: "",
      phone: "",
      gender: "",
      options: [
        {
          label: "男",
          value: "1"
        },
        {
          label: "女",
          value: "2"
        }
      ]
    };
  },
  methods: {
    confirm() {
      // console.log(this.gender);
      Axios.post("http://www.dyycyf.top/double-degree/user/register", {
        account: this.userId,
        pswd: this.pswd,
        confirmPswd: this.confirmPswd,
        name: this.name,
        gender: this.gender,
        phoneNumber: this.phone,
        mail: this.email
      })
        .then(res => {
          console.log(res.data);
          if (res.data.success == true) {
            Toast({
              message: "注册成功",
              position: "middle",
              duration: 1000
            });
            sessionStorage.setItem("userName", this.name);
            sessionStorage.setItem("userId", this.userId);
            this.$router.push("/user");
          } else {
            Toast({
              message: res.data.reason,
              position: "bottom",
              duration: 1000
            });
          }
        })
        .catch();
    }
  }
};
</script>

<style lang="scss" scoped>
.register {
  background: #f0f0f0;
  height: 100vh;
  h2 {
    padding-left: 24px;
    padding-top: 20px;
  }
  .operate {
    background: #ffffff;
    overflow: hidden;
    margin: 20px 20px;
    border-radius: 20px;
    p {
      display: inline-block;
      font-size: 16px;
      padding-left: 10px;
    }
    .radio-operate {
      display: inline-block;
      margin-left: 70px;
      margin-bottom: 20px;
      span {
        margin-right: 30px;
        font-size: 16px;
      }
    }
  }
}
</style>
<style lang="scss">
.register {
  .cell1 {
    padding-top: 10px;
  }
  .mint-button {
    display: block;
    margin: 0 auto;
    margin-bottom: 20px;
  }
  .mint-field-core {
    background: #f0f0f0;
  }
}
</style>

