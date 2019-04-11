<template>
  <div class="process">
    <h2>进度查询</h2>
    <div class="process-list" v-for="list in processList" :key = list.id>
      <ul>
        <li>姓名：{{list.name }}</li>
        <li>学号：{{list.account}} </li>
        <li>性别： {{gender[list.gender]}}</li>
        <li>现修专业：{{list.presentMajor}}</li>
        <li>申请修读专业：{{list.applyMajor}}</li>
        <li>你的申请状态：{{status[list.status]}}</li>
        <li>教师批复：{{list.reason}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Axios from 'axios';
import { get } from 'http';
export default {
  data() {
    return {
      processList:'',
      status : {
        '10' : '已通过',
        '-10' : '被拒绝',
        '0' : '待审核',
      },
      gender : {
        '1' : '男',
        '2' : '女',
      }
    }
  },
  created(){
    Axios.get('http://www.dyycyf.top/double-degree/user/audit/list',{
      params:{
        account:'A19150001',
        }
    }).then((res)=>{
      console.log(res.data);
      this.processList = res.data.auditList;
    })
  },
}
</script>
<style lang="scss" scoped>
.process{
  background: #f0f0f0;
  height: 100vh;
  h2 {
      padding-left: 24px;
      padding-top: 20px;
    }
  .process-list {
    ul{
      background: #fff;
      margin: 10px 10px;
      border-radius: 10px;
      padding: 20px 20px 20px 20px;
    }
  }
}
</style>


