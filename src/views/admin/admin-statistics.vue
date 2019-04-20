<template>
  <div id="myChart" :style="{width: '370px', height: '500px'}"></div>
</template>
<script>
export default {
  data() {
    return {
      num: "",
      amount: [0,0,0,0,0,0],
    };
  },
  mounted() {
    this.getValue();
  },
  methods: {
    drawLine() {
      console.log(this.amount);
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: { text: "各专业报名人数" },
        tooltip: {},
        xAxis: {
          data: ["法学", "金融学", "英语", "心理学", "统计", "法语"]
        },
        yAxis: {},
        series: [
          {
            name: "人数",
            type: "bar",
            // data: [10, 1, 12, 123, 12, 12]
            data:this.amount,
          }
        ]
      });
    },
   async getValue() {
      const res = await this.$axios.get(
        "http://www.dyycyf.top/double-degree/apply/info"
      );
      let apply = res.data.applies;
      for (var num = 0; num < apply.length; num++) {
        // console.log(apply[num].applyMajor);
        switch (apply[num].applyMajor) {
          case "法学":
            this.amount[0] += 1;
            console.log(1);
            break;
          case "金融学":
            this.amount[1] += 1;
            console.log(2);
            break;
          case "英语":
            this.amount[2] += 1;
            console.log(3);
            break;
          case "心理学":
            this.amount[3] += 1;
            console.log(4);
            break;
          case "统计":
            this.amount[4] += 1;
            console.log(5);
            break;
          case "法语":
            this.amount[5] += 1;
            console.log(6);
            break;
        }
      }
      this.drawLine();
    }
  }
};
</script>
<style lang="scss" scoped>
</style>




