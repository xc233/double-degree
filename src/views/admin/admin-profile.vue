<template>
  <div class="profile">
    <div class="personal-info">
      <div class="header-logo">
        <img src="../../assets/img/header-logo.png">
      </div>
      <div class="personal-text">
        <p>你好，{{userName}} 老师</p>
        <p>学号：{{userId}}</p>
      </div>
    </div>
    <mt-cell title="信息统计" is-link to = "/admin/statistics">
       <span style="color: green">点击查看</span>
    </mt-cell>
    <mt-cell title="注销登录" is-link to="/login">
     <span style="color: green">点此注销</span>
    </mt-cell>
  </div>
</template>
<script>
export default {
  data(){
    return{
      userId:'',
      userName:''
    }
  },
  created(){
    this.userId = sessionStorage.getItem('userId');
    this.userName = sessionStorage.getItem('userName');
  }
}
</script>
<style lang="scss" scoped>
  .profile{
    .personal-info{
      // height: 200px;
      display: flex;
      padding: 50px 0;
      border-bottom: 1px solid #000;
      .header-logo{
        flex: 2;
        justify-content: center;
        display: flex;
        img{
        width: 80px;
        height: 80px;
        justify-content: center;
        }
      }
      .personal-text{
        flex: 3;
        font-size: 16px;
        line-height: 40px;
        // text-align: center;
      }
    }
    
  }
</style>
