<template>
  <div class="userhome">
    <div class="process">
      <h3>报名流程</h3>
      <ul>
        <li>
          <img src="../assets/img/notebook.png">
          <span>1.信息确认</span>
        </li>
        <li class="pic2">
          <img src="../assets/img/phone.png">
          <span>2.开始报名</span>
        </li>
        <li>
          <img src="../assets/img/audit.png">
          <span>3.等待审核</span>
        </li>
      </ul>
    </div>
    <!-- <div class="verify">
      <img src="../assets/img/head-pic.png">
      <div class="verify-msg">
        <p class="verify-title">信息确认</p>
        <p class="verify-content">信息确认后才可报名</p>
      </div>
    </div> -->
    <div class="info">
      <h2>报名须知</h2>
      <h3>一 、 报名条件</h3>
      <p>
        凡我校2018级在籍在校普通全日制本科学生，符合以下条件均可报名参加我校辅修双学位学习：
        （1）在校学习期间未受过任何纪律处分；
        （2）主修专业成绩不及格记录不能超过两门；
        （3）所报辅修专业与自己所学的主修专业不属于同一学科门类；
        （4）学有余力。
      </p>
      <h3>二、学习要求</h3>
      <p>
        辅修双学位的最低总学分为50学分（含实践性教学环节）。修完其中规定的辅修核心课程且获得25个学分，
        可获得辅修专业证书；修满双学位规定的全部学分，取得主修专业学士学位证书且达到接收学校双学位要求者，可获辅修双学位专业的学士学位证书。
      </p>
      <h3>三 、 收费标准</h3>
      <p>
        根据学校统一要求，注册修读双学士学位需修满50个学分（分四个学期开设相应课程），
        按照100元/学分的标准收费，请于2019年10月15日之前将学费存至学费卡，并保证学费扣款之后余额不少于10元，否则将导致扣款失败。
      </p>
      <h3>四、开设专业</h3>
      <p>法学、金融学、商务英语、应用心理学、计算机科学与技术</p>
      <h3>五、其他注意事项</h3>
      <p>1、请严格按照辅修学校报名资格条件进行网报,逾期将不再办理辅修报名事宜。</p>
      <p>2、未在网上报名或身份信息有误者不能交费注册。</p>
      <p>
        3、因各专业招生人数有限，在完成报名后，
        请各报名学生在规定时间内缴费，如报名人数超过拟开班人数，
        将按照缴费顺序录取。若所报专业未达开班最低人数，
        则取消该专业本次开班，届时由各开办专业院系的辅修双学位办公室负责通知。
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      index: ""
    };
  }
};
</script>
<style lang="scss" scoped>
.userhome {
  margin-bottom: 56px;
  .process {
    border-radius: 10px;
    background-color:rgb(66,206,252) ;
    color: white;
    height: 200px;
    h3 {
      text-align: center;
      padding: 10px 0px 10px 0px;
    }
    img {
      width: 80px;
    }
    ul {
      display: flex;
      justify-content: center;
      .pic2 {
        margin-left: 30px;
        margin-right: 30px;
      }
      li {
        display: inline-block;
        position: relative;
        span {
          position: absolute;
          bottom: -40px;
          left: 5px;
          font-size: 14px;
        }
      }
    }
  }
  .verify {
    background-color: #ccc;
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
  .info {
    background-color: #eee;
    h2 {
      text-align: center;
      padding-top: 10px;
    }
    h3 {
      padding-left: 10px;
    }
    p {
      font-size: 16px;
      text-indent: 40px;
      padding: 10px 10px;
    }
  }
}
</style>
