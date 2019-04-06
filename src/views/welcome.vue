<template>
<div class="wel">
  <img src="@/assets/img/1.png" >
  <h3>双学位报名管理APP</h3>
</div>
</template>
<script>
import { setTimeout } from 'timers';
export default {
  created(){
    setTimeout(()=>{
      this.$router.push('/login');
    },1000)
  }
}
</script>
<style lang="scss" scoped>
  .wel{
    img{
      width: 250px;
      display: block;
      margin: 0 auto;
      padding-top: 180px;
    }
    h3{
      text-align: center;
      font-size: 20px;
    }
  }
</style>
