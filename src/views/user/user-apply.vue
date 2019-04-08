<template>
  <div class="apply">
    <h2>双学位 报名页</h2>
    <p>学号</p>
    <mt-field   v-model="account"></mt-field>
    <p>现修专业</p>
    <mt-field  v-model="presentMajor"></mt-field>
    <p>申请修读双学位专业</p>
    <mt-field  v-model="applyMajor"></mt-field>
    <mt-button type="primary" size="large" @click.native="confirm" class="confirm-btn">确认填报</mt-button>
  </div>
</template>
<script>
import Axios from 'axios';
import { post } from 'http';
export default {
  data(){
    return{
      account:'',
      presentMajor:'',
      applyMajor:'',
    }
  },
  methods:{
    confirm(){
      if(!this.account){
        this.$messagebox('','学号不能为空！');
      } else if(!this.presentMajor){
        this.$messagebox('','现修专业不能为空！');
      } else if(!this.applyMajor){
          this.$messagebox('','申请修读专业不能为空！');
      } else if(this.presentMajor == this.applyMajor){
        this.$messagebox('','所报专业不能与现修专业相同！');
      } else{
        Axios.post('http://www.dyycyf.top/double-degree/user/apply',{
          account: this.account,
          presentMajor: this.presentMajor,
          applyMajor: this.applyMajor,
          })
          .then( (res) =>{
            console.log(res.data.success);
            console.log(res.data.reason);
            if(res.data.success == true){
              this.$messagebox('','报名成功');
            }else{
              this.$messagebox('',res.data.reason);
            }
          })
          .catch( (error) =>{
            console.log(error);
          });
      }
    }
  }
}
</script>
<style lang="scss" >
  .apply{
    h2{
      padding-left: 20px;
      padding-top: 20px;
    }
    p{
      padding-left: 20px;
      padding-top: 20px;
      font-size: 20px;
    }
    .mint-cell-wrapper{
      padding: 0 20px;
      .mint-cell-value{
        width: 80%;
        border-bottom: 1px solid #000;
      }
    }
    .confirm-btn{
      width: 70%;
      margin: 0 auto;
      margin-top: 40px;
      border-radius: 25px;
    }
  }
</style>
