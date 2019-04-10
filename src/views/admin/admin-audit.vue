<template>
  <div class="audit">
    <h2>审核界面</h2>
    <div class="operate" v-for="(list) in auditList" :key = list.id>
      <ul>
        <li>姓名：{{list.name}} </li>
        <li>学号：{{list.account}} </li>
        <li>性别：{{list.gender}}</li>
        <li>联系方式：{{list.phoneNumber}} </li>
        <li>现修专业：{{list.presentMajor}} </li>
        <li>申请修读双学位专业：{{list.applyMajor}} </li>
      </ul>
      <div class="ope-area">
        <!-- <mt-field label="审核意见：" placeholder="请输入意见" type="textarea" rows="2" v-modal="msg"></mt-field> -->
        <mt-field label="审核意见：" placeholder="请输入" v-model="msg"></mt-field>
        <mt-button type="primary" @click.native="pass(list)">同意</mt-button>
        <mt-button type="danger" @click.native = "refuse(list)">拒绝</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from 'axios';
import { get } from 'http';
export default {
  data(){
    return{
      auditList:'',
      total:'',
      msg: '',
    }
  },
  created(){
    Axios.get('http://www.dyycyf.top/double-degree/audit/list',{
      params:{
        account:'A19150000',
        limit:10,
        page:1,
      }
    }).then((res) => {
      console.log(res.data);
      this.auditList = res.data.auditList;
      this.total = res.data.total;
    }).catch();
  },
  methods:{
    pass(a){

      console.log(a.account);
      console.log(a._id);
      a.status = '10';
      Axios.post('http://www.dyycyf.top/double-degree/audit/action',{
        data:{
          account:a.account,
          applyEntityId:a._id,
          status:a.status,
        }
      }).then((res)=>{
        console.log(res.data);
      })
    },
    refuse(a){
      console.log(a._id);
      console.log(a.account);
      a.status = '-10';
      console.log(a.name);
    }
  }
}
</script>
<style lang="scss" scoped>
  .audit {
    margin-bottom: 56px;
    background: #f0f0f0;
    h2 {
      padding-left: 24px;
      padding-top: 20px;
    }
    .operate {
      background: #fff;
      margin: 20px 20px;
      border-radius: 10px;
      ul{
        padding: 20px 20px 0px;
      }
    }
  }
</style>
<style lang="scss">
  .ope-area{
    padding: 0px 20px 20px 20px;
    .mint-cell{
      min-height: 22px;
      .mint-cell-wrapper{
        padding: 0px;
        .mint-cell-title{
          width: 80px;
        }
        .mint-cell-value{
          border: 1px solid black;
        }
      }
    }
    .mint-button{
      margin: 10px 20px 0px 0px;
    }
  }
</style>

