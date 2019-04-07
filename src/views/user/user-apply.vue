<template>
  <div class="apply">
    <h2>双学位 报名页</h2>
    <mt-field label="姓名" placeholder="请输入姓名" v-model="username"></mt-field>
    <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
  </div>
</template>
<script>
export default {
  methods: {
    onValuesChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    }
  },
  data() {
    return {
      slots: [
        {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot1',
          textAlign: 'right'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot3',
          textAlign: 'left'
        }
      ]
    };
  }
}
</script>
<style lang="scss" scoped>

</style>
