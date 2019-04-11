<template>
  <div class="usera">
    <h2>报名界面</h2>
    <div class="verify-control">
        <div class="verify" @click="complete">
          <img src="../../assets/img/head-pic.png">
          <div class="verify-msg">
            <p class="verify-title">信息完善</p>
            <p class="verify-content">信息完善才可报名</p>
          </div>
        </div>
        <div class="verify" @click="apply">
          <img src="../../assets/img/apply.png">
          <div class="verify-msg">
            <p class="verify-title">开始报名</p>
            <p class="verify-content">请确认无误后报名</p>
          </div>
        </div>
    </div> 
  </div>
</template>
<script>
export default {
  methods:{
    complete(){
      this.$router.push('/user/applyMsg')
    },
    apply(){
      this.$router.push('/user/applyPush')
    }
  }
}
</script>
<style lang="scss" scoped>
.usera{
  background: #f0f0f0;
  height: 100vh;
   h2{
      padding-left: 20px;
      padding-top: 20px;
    }
}
.verify-control{
  margin-top: 100px;
  .verify {
  margin: 25px 10px;
  border-radius: 10px;
    background-color: #fff;
    img {
      width: 80px;
      margin: 20px;
    }
    .verify-msg {
      display: inline-block;
      padding-left: 20px;
      .verify-title {
        margin-top: 10px;
        font-size: 30px;
      }
      .verify-content {
        padding-top: 6px;
        font-size: 20px;
      }
    }
  }
}

</style>
<style lang="scss">

</style>

