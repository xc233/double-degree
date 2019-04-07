<template>
  <div class="user">
    <router-view></router-view>
    <mt-tabbar v-model="selected" class="nav-bottom">
      <mt-tab-item id="userhome" @click.native.prevent="run">
        <img slot="icon" src="../../assets/img/home.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="userapply" @click.native.prevent="run">
        <img slot="icon" src="../../assets/img/apply.png">
        报名
      </mt-tab-item>
      <mt-tab-item id="userprofile" @click.native.prevent="run">
        <img slot="icon" src="../../assets/img/profile.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data(){
    return{
      selected:'home',
    }
  },
  methods:{
    run(){
      this.$router.push({name:this.selected});
    }
  },
}
</script>
<style lang="scss" scoped>
  .user{
    .nav-bottom{
      position: fixed;
      border-top:#000 1px solid;
    }
  }
</style>


