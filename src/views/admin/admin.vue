<template>
  <div class="admin">
    <router-view></router-view>
    <mt-tabbar v-model="selected" class="nav-bottom">
      <mt-tab-item id="adminHome" @click.native.prevent="run">
        <img slot="icon" src="../../assets/img/home.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="adminAudit" @click.native.prevent="run">
        <img slot="icon" src="../../assets/img/apply.png">
        审核
      </mt-tab-item>
      <mt-tab-item id="adminProfile" @click.native.prevent="run">
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
  .admin{
    .nav-bottom{
      position: fixed;
      border-top:#000 1px solid;
    }
  }
</style>


