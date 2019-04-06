<template>
  <div class="login">
    <img src="../assets/img/2.png">
    <h3>双学位报名管理</h3>
    <div class="login-field">
      <ul>
        <li>
          <img src="../assets/img/userlogo.png" >
          <mt-field  placeholder="请输入学号" v-model="account" class="username"></mt-field>
      </li>
        <li>
          <img src="../assets/img/pswdlogo.png" >
          <mt-field  placeholder="请输入密码" type="password" v-model="pswd" class="pswd"></mt-field>
        </li>
      </ul> 
    </div>
    <mt-button type="primary" size="large" @click.native="login" class="login-btn">登录</mt-button>    
  </div>
</template>
<script>
import Axios from 'axios';
import { post } from 'http';
 import { Toast } from 'mint-ui';
export default {
  data(){
    return{
      account:'',
      pswd:''
    }
  },
  methods:{
    login(){
      Axios.post('http://www.dyycyf.top/double-degree/user/login', {
      account: this.account,
      pswd: this.pswd,
      })
    .then(function (response) {
      console.log(response.data.success);
      console.log(response.data.reason);
      if(response.data.success == true){
         Toast({
          message: '登陆成功',
          position: 'middle',
          duration: 5000
        });
      }else{
        Toast({
          message: response.data.reason,
          position: 'bottom',
          duration: 5000
        });
      }
    })
    .catch(function (error) {
      console.log(error);
      });
    },
  },
}
</script>
<style lang="scss" scoped>
  .login{
    img{
      display: block;
      width: 200px;
      margin: 0 auto;
    }
    h3{
      text-align: center;
      margin: 20px 0px;
    }
    .login-field{
      ul{
        width: 60%;
        margin: 0 auto;
        li{
        position: relative;
        }
      }
      .username,.pswd{
        border-bottom: 1px solid orange;
      }
      img{
        width: 22px;
        position: absolute;
        top: 14px;
        left: -26px;
      }
    }
    .login-btn{
      width: 70%;
      margin: 0 auto;
      margin-top: 40px;
    }
  }
</style>
