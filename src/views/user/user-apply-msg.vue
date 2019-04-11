<template>
  <div class="apply-msg">
    <h2>个人信息</h2>
    <div class="msg-opera">
      <p>姓名：</p>
      <mt-field v-model="user.name" ></mt-field>

      <p>性别：</p>
      <!-- <mt-field v-model="user.gender"></mt-field> -->
        <mt-radio
          align="right"
          v-model="user.gender"
          :options="options">
        </mt-radio>
      <p>联系电话：</p>
      <mt-field v-model="user.phoneNumber"></mt-field>
    <mt-button type="primary" size="large" @click.native="msgConfirm" class="confirm-btn">确认</mt-button>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
import { get } from "http";
import { post } from "http";
export default {
  data() {
    return {
      user:'',
      gender: {
        '男': "1",
        '女': "2"
      },
      // usergender: "",
      options:[{
        label:'男',
        value:'1'
      },{
        label:'女',
        value:'2'
      }]
    };
  },
  created() {
    Axios.get("http://www.dyycyf.top/double-degree/user/info", {
      params: {
        account: "A19150001"
      }
    }).then(res => {
      console.log(res.data);
      this.user = res.data;
      // this.usergender = gender[this.user.gender];
      // this.usergender = this.user.gender;
      // console.log(this.usergender);
    });
  },
  methods:{
    msgConfirm(){
      Axios.post('http://www.dyycyf.top/double-degree/user/info/edit',{
        account:'A19150001',
        name:this.user.name,
        gender:this.user.gender,
        phoneNumber:this.user.phoneNumber,
      }).then((res)=>{
        console.log(res.data);
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.apply-msg {
  height: 100vh;
  background: #f0f0f0;
  h2 {
    padding: 25px 20px;
  }
  p {
    padding-left: 20px;
    padding-top: 20px;
    font-size: 20px;
  }
}
</style>
<style lang="scss">
.msg-opera {
  background: #fff;
  margin: 10px 20px;
  border-radius: 10px;
  overflow: hidden;
  .mint-cell-wrapper {
    padding: 0 20px;
    .mint-cell-value {
      // width: 80%;
      border-bottom: 1px solid #000;
    }
  }
  .confirm-btn{
      width: 70%;
      margin: 0 auto;
      margin-top: 40px;
      margin-bottom: 40px;
      border-radius: 25px;
    }
}
</style>


