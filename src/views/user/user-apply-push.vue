<template>
  <div class="apply">
    <h2>双学位 报名页</h2>
    <div class="apply-operate">
      <p>学号：</p>
      <mt-field v-model="account" class="apply-account"></mt-field>
      <p>现修专业：</p>
      <mt-field v-model="presentMajor"></mt-field>
      <p>申请修读双学位专业：</p>
      <!-- -- -->
      <mt-popup
        v-model="popupVisible"
        popup-transition="popup-fade"
        closeOnClickModal="true"
        position="bottom"
      >
        <mt-picker :slots="slots" @change="onValuesChange" style="width: 7.5rem;" showToolbar>
          <div class="picker-toolbar-title">
            <div class="usi-btn-cancel" @click="popupVisible = !popupVisible">取消</div>
            <div class>请选择申请修读专业</div>
            <div class="usi-btn-sure" @click="popupVisible = !popupVisible">确定</div>
          </div>
        </mt-picker>
      </mt-popup>
      <div class="my-content-list" @click="ShouPup">
        <mt-field v-model="applyMajor"></mt-field>
      </div>
      <!-- --- -->

      <mt-button type="primary" size="large" @click.native="confirm" class="confirm-btn">确认填报</mt-button>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
import { post } from "http";
export default {
  data() {
    return {
      account: "",
      presentMajor: "",
      applyMajor: "",
      showToolbar: true,
      message: "",
      slots: [
        {
          values: [
            "",
            "法学",
            "金融学",
            "商务英语",
            "应用心理学",
            "统计学",
            "法语"
          ]
        }
      ],
      popupVisible: false
    };
  },
  methods: {
    ShouPup() {
      this.popupVisible = true;
    },
    onValuesChange(picker, values) {
      this.applyMajor = values[0];
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    },

    confirm() {
      if (!this.account) {
        this.$messagebox("", "学号不能为空！");
      } else if (!this.presentMajor) {
        this.$messagebox("", "现修专业不能为空！");
      } else if (!this.applyMajor) {
        this.$messagebox("", "申请修读专业不能为空！");
      } else if (this.presentMajor == this.applyMajor) {
        this.$messagebox("", "所报专业不能与现修专业相同！");
      } else {
        Axios.post("http://www.dyycyf.top/double-degree/user/apply", {
          account: this.account,
          presentMajor: this.presentMajor,
          applyMajor: this.applyMajor
        })
          .then(res => {
            console.log(res.data.success);
            console.log(res.data.reason);
            if (res.data.success == true) {
              this.$messagebox("", "报名成功");
            } else {
              this.$messagebox("", res.data.reason);
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }
};
</script>
<style lang="scss" >
.apply {
  background: #f0f0f0;
  height: 100vh;
  h2 {
    padding-left: 20px;
    padding-top: 20px;
  }
  .apply-operate {
    background: #fff;
    border-radius: 10px;
    margin: 20px 20px;
    overflow: hidden;
    p {
      padding-left: 20px;
      padding-top: 20px;
      font-size: 20px;
    }
    .apply-account {
      .mint-field-core {
        background: #f0f0f0;
      }
    }
    .mint-cell-wrapper {
      padding: 0 20px;
      .mint-cell-value {
        width: 80%;
        border-bottom: 1px solid #000;
      }
    }
    .confirm-btn {
      width: 70%;
      margin: 0 auto;
      margin-top: 40px;
      border-radius: 25px;
      margin-bottom: 40px;
    }
    .picker-toolbar-title {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      height: 40px;
      line-height: 40px;
      font-size: 16px;
    }
          .usi-btn-cancel,
    .usi-btn-sure {
      color: #ff6600;
    }
  }
}
</style>
