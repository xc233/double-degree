<template>
  <div class="process">
    <h2>进度查询</h2>
    <p>你的申请 待审核/ 已通过 / 被拒绝</p>
    <!-- {{reason}} -->
  </div>
</template>
<script>
import Axios from 'axios';
import { get } from 'http';
export default {
  created(){
    Axios.get('http://www.dyycyf.top/double-degree/user/audit/list',{
      params:{
        account:'A19150000',
        }
    }).then((res)=>{
      console.log(res.data);
    })
  }
}
</script>
<style lang="scss" scoped>

</style>


