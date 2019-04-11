<template>
  <div class="profile">
    <div class="personal-info">
      <div class="header-logo">
        <img src="../../assets/img/header-logo.png">
      </div>
      <div class="personal-text">
        <p>你好，xxx同学</p>
        <p>学号：A19150001</p>
      </div>
    </div>
    <mt-cell title="报名进度" is-link to="/user/process">
      <span style="color: green">点击查看</span>
    </mt-cell>
    <mt-cell title="信息修改" is-link to="/user/applyMsg">
      <span style="color: green">点此修改</span>
    </mt-cell>
    <mt-cell title="注销登录" is-link>
      <span style="color: green">点此注销</span>
    </mt-cell>
  </div>
</template>
<script>
export default {
  
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
