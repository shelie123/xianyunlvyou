<template>
  <div class="filters">
    <el-row type="flex" class="filters-top" justify="space-between" align="middle">
      <el-col :span="8">
        单程：
        {{data.info.departCity}} - {{data.info.destCity}}
        /
        {{data.info.departDate}}
      </el-col>
      <el-col :span="4">
        <el-select size="mini" v-model="flites.airport" placeholder="起飞机场">
          <el-option
            v-for="(item,index) in data.options.airport"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select size="mini" v-model="flites.flightTimes" placeholder="起飞时间">
          <el-option
            v-for="(item,index) in data.options.flightTimes"
            :key="index"
            :label="`${item.from}:00 - ${item.to}:00`"
            :value="`${item.from}:00-${item.to}:00`"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select size="mini" v-model="flites.company" placeholder="航空公司">
          <el-option
            v-for="(item,index) in data.options.company"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select size="mini" v-model="flites.airSize" placeholder="机型">
          <el-option
            v-for="(item,index) in sizeOptions"
            :key="index"
            :label="item.name"
            :value="item.size"
          ></el-option>
        </el-select>
      </el-col>
    </el-row>
    <div class="filter-cancel">
      筛选：
      <el-button type="primary" round plain size="mini" @click="handleFiltersCancel">撤销</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flites: {
        airport: "", // 机场
        flightTimes: "", // 出发时间
        company: "", // 航空公司
        airSize: "" // 机型大小
      },

      // 机型的列表
      sizeOptions: [
        { name: "大", size: "L" },
        { name: "中", size: "M" },
        { name: "小", size: "S" }
      ]
    };
  },

  props: {
    // 组件接收总数据
    data: {
      type: Object,
      default: {} //初始值
    }
  },

  watch: {
    flites: {
      deep: true,
      handler() {
        // 统一实现四个条件的过滤
        // 先假设全部的航班都是符合条件，从选中的条件里面找出不符合条件设置valid为false
        var arr = this.data.flights.filter(v => {
          // 假设都符合条件
          let valid = true;

          // 航班公司有选中值时候才判断
          if (this.flites.company && this.flites.company != v.airline_name) {
            valid = false;
          }

          // 机场有选中值时候才判断
          if (
            this.flites.airport &&
            this.flites.airport != v.org_airport_name
          ) {
            valid = false;
          }

          // 飞机大小有选中值时候才判断
          if (this.flites.airSize && this.flites.airSize != v.plane_size) {
            valid = false;
          }

          // 时间有选中值时候才判断
          if (this.flites.flightTime) {
            // 出发时间的小时
            const start = +v.dep_time.split(":")[0];

            const arr = this.flites.flightTimes.split(",");

            // 不在选中的时间段内
            if (start < +arr[0] || start >= arr[1]) {
              valid = false;
            }
          }
          return valid;
        });
        // 修改列表数据
        this.$emit("setDataList", arr);
      }
    }
  },

  methods: {
    // // 选择机场时候触发
    // handleAirport(value) {
    //   // console.log(value);
    //   // 根据value过滤列表，只保留党庆符合条件的机票列表
    //   const arr = this.data.flights.filter(v => {
    //     return v.org_airport_name === value;
    //   });

    //   // 修改列表数据
    //   this.$emit("setDataList", arr);
    // },

    // // 选择出发时间时候触发
    // handleFlightTimes(value) {
    //   // console.log(value);
    //   // 数组中第一项是开始时间，第二项是终止时间
    //   const arr = value.split(","); //[6,20]

    //   const arr1 = this.data.flights.filter(v => {
    //     // 出发时间的小时
    //     const start = +v.dep_time.split(":")[0];

    //     // 比较航班出发时间是否在选中的时间段内
    //     return start >= +arr[0] && start < +arr[1];
    //   });

    //   // 修改列表数据
    //   this.$emit("setDataList", arr1);
    // },

    // // 选择航空公司时候触发
    // handleCompany(value) {
    //   // console.log(value);
    //   // filter过滤
    //   const arr = this.data.flights.filter(v => {
    //     return v.airline_name === value;
    //   });

    //   // 修改列表数据
    //   this.$emit("setDataList", arr);
    // },

    // // 选择机型时候触发
    // handleAirSize(value) {
    //   // console.log(value);
    //   // 根据value过滤列表，只保留当前符合条件的机票列表
    //   const arr = this.data.flights.filter(v => {
    //     return v.flight_no === value;
    //   });

    //   // 修改列表数据
    //   this.$emit("setDataList", arr);
    // },

    // 撤销条件时候触发
    handleFiltersCancel() {
      // console.log(123);

      this.airport = "";
      this.flightTime = "";
      this.company = "";
      this.airSize = "";

      // 传递没有修改的列表数据
      this.$emit("setDataList", this.data.flights);
    }
  }
};
</script>

<style scoped lang="less">
.filters {
  margin-bottom: 20px;
}

.filters-top {
  > div {
    /deep/ .el-select {
      margin-left: 10px;
    }
  }
}

.filter-cancel {
  margin-top: 10px;
}
</style>