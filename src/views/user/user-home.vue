<template>
  <div class="userhome">
    <div class="process">
      <h3>报名流程</h3>
      <ul>
        <li class="pic1">
          <img src="../../assets/img/notebook.png" >
          <span>1.信息确认</span>
        </li>
        <li class="pic2">
          <img src="../../assets/img/phone.png" >
          <span>2.开始报名</span>
        </li>
        <li>
          <img src="../../assets/img/audit.png" >
          <span>3.等待审核</span>
        </li>
      </ul>
    </div>
    <div class="verify">
      <img src="../../assets/img/head-pic.png">
      <div class="verify-msg">
        <p class="verify-title">信息确认</p>
        <p class="verify-content">信息确认后才可报名</p>
      </div>
    </div>
    <div class="info">
      <p>最新通告</p>
      <ul>
        <li v-for="(item,index) in info" :key = item.id>{{index+1}}  {{item}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      info:[
        '2019年招生简章','2019年招生简章','2019年招生简章','2019年招生简章','2019年招生简章','2019年招生简章','2019年招生简章',
        '2019年招生简章','2019年招生简章','2019年招生简章','2019年招生简章','2019年招生简章','2019年招生简章','2019年招生简章',
        '2019年招生简章','2019年招生简章','2019年招生简章','2019年招生简章','2019年招生简章','2019年招生简章','2019年招生简章',
        '2019年招生简章','2019年招生简章','2019年招生简章','2019年招生简章','2019年招生简章','2019年招生简章','2019年招生简章',
        '2019年招生简章','2019年招生简章','2019年招生简章','2019年招生简章','2019年招生简章','2019年招生简章','2019年招生简章',

      ],
      index:''
    }
  }
}
</script>
<style lang="scss" scoped>
.userhome{
  .process{
    background-color: #f0f0f0;
    height: 200px;
    h3{
      text-align: center;
      padding: 10px 0px 10px 0px;
    }
    img{
      width: 80px;
    }
    ul{
      .pic1{
        margin-left: 34px;
      }
      .pic2{
        margin-left: 30px;
        margin-right: 30px;
      }
      li{
        display: inline-block;
        position: relative;
        span{
          position: absolute;
          bottom: -40px;
          left: 5px;
          font-size: 14px;
        }
      
      }
    }
    // .pic1{
    //   padding-left: 34px;
    // }
    
    // span{
    //   position: absolute;
    //   bottom: 10px;
    //   left: 10px;
    // }
    
  }
  .verify{
    background-color: #ccc;
    img{
      width: 80px;
      margin: 20px;
    }
    .verify-msg{
      display: inline-block;
      padding-left: 20px;
      .verify-title{
        margin-top: 10px;
        font-size: 30px;
      }
      .verify-content{
        padding-top: 6px;
        font-size: 20px
      }
    }
  }
  .info{
    background-color: #bbb;
    ul{
      li{
        padding-left: 20px;
        font-size: 18px;
        line-height: 30px;
      }
    }
  }
}
</style>
