<template>
  <div>
    <div class="container">
      <div>
        <div class="priced clearfix">
          <span class="clearfix">
            <i class="fl">价格</i>
            <i class="fr">4000</i>
          </span>
          <el-slider v-model="price" :max="4000" @change="handlePrice(price)"></el-slider>
        </div>
        <div class="hotelInfo clearfix">
          <div class="hotelList">
            <el-select
              v-model="value1"
              collapse-tags
              multiple
              placeholder="住宿等级"
              @change="handleLevels(value1)"
            >
              <el-option
                v-for="(item,index) in HotelListed.levels"
                :key="index"
                :label="item.name"
                :value="item.name"
              ></el-option>
            </el-select>
          </div>
          <div class="hotelList">
            <el-select
              v-model="value2"
              collapse-tags
              multiple
              placeholder="住宿类型"
              @change="handleTypes(value2)"
            >
              <el-option
                v-for="(item,index) in HotelListed.types"
                :key="index"
                :label="item.name"
                :value="item.name"
              ></el-option>
            </el-select>
          </div>
          <div class="hotelList">
            <el-select
              v-model="value3"
              collapse-tags
              multiple
              placeholder="酒店设施"
              @change="handleAssets(value3)"
            >
              <el-option
                v-for="(item,index) in HotelListed.assets"
                :key="index"
                :label="item.name"
                :value="item.name"
              ></el-option>
            </el-select>
          </div>
          <div class="hotelList">
            <el-select
              v-model="value4"
              collapse-tags
              multiple
              placeholder="酒店品牌"
              @change="handleBrands(value4)"
            >
              <el-option
                v-for="(item,index) in HotelListed.brands"
                :key="index"
                :label="item.name"
                :value="item.name"
              ></el-option>
            </el-select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 0,
      value1: [],
      value2: [],
      value3: [],
      value4: [],

      HotelListed: []
    };
  },
  //   watch: {
  //     filters: {
  //       deep: true,
  //       handler() {
  //         //   假设全部都是符合条件，从选中的条件里面找出不符合条件设置valid为false
  //         var arr = this.HotelListed.filter(v => {
  //           let valid = true;

  //           //   住宿等级有选中值的时候才判断

  //           if (this.filters.value1 && this.filters.value1 !== v.levels.name) {
  //             valid = false;
  //           }

  //           // 住宿类型有选中值的时候才判断
  //           if (this.filters.value2 && this.filters.value2 !== v.types.name) {
  //             valid = false;
  //           }

  //           // 酒店设施有选中值的时候才判断
  //           if (this.filters.value3 && this.filters.values3 !== v.assets.name) {
  //             valid = false;
  //           }

  //           // 酒店品牌有选中值的时候才判断
  //           if (this.filters.value4 && this.filters.value4 !== v.brands.name) {
  //             valid = false;
  //           }

  //           return valid;
  //         });

  //         this.$emit("setDataList", arr);
  //         console.log(arr);
  //       }
  //     }
  //   },

  computed: {
    str() {
      if (!this.city) return;

      var str = `?city=${this.city.id}&price_it=${this.price}`;

      // 酒店星级
      if (this.value1) {
        this.value1.forEach(v => {
          str += `&hotellevel_in=${v}`;
        });
      }

      // 酒店类型
      if (this.value2) {
        this.value2.forEach(v => {
          str += `&hotelbrand_in=${v}`;
        });
      }

      // 酒店设施
      if (this.value3) {
        this.value3.forEach(v => {
          str += `&hoteltype_in=${v}`;
        });
      }

      // 酒店品牌
      if (this.value4) {
        this.value4.forEach(v => {
          str += `&hotelassets_in=${v}`;
        });
      }

      this.$emit("setDataList", str);
      console.log(str);
      return str;
    }
  },

  methods: {
    handlePrice(price) {
      console.log(price);
      this.price = price;
    },
    handleLevels(value1) {
      console.log(this.value1);
      this.value1 = value1;
    },
    handleTypes(value2) {
      console.log(value2);
      this.value2 = value2;
    },
    handleAssets(value3) {
      console.log(value3);
      this.value3 = value3;
    },
    handleBrands(value4) {
      console.log(value4);
      this.value4 = value4;
    }
  },
  mounted() {
    this.$axios({
      url: "/hotels/options"
    }).then(res => {
      console.log(res.data);
      const { data } = res.data;
      this.HotelListed = data;
      //   console.log(this.HotelListed);
    });
  }
};
</script>

<style scoped lang="less">
.container {
  width: 1000px;
  .priced {
    width: 140px;
    float: left;
    padding: 0 20px;
  }
  .hotelInfo {
    .hotelList {
      width: 200px;
      float: left;
    }
  }
}
</style>