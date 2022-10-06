<template>
  <div>
    <!-- <ul>
      <li v-for="(item,index) in tags" :key="index">
        <span>{{ item.title }}</span>
        <i v-if="index > 1" class="el-icon-close close" @click="handleClose(index)"></i>
      </li>
    </ul> -->
    <!-- <h1>home</h1> -->
    <div class="d1">
      <div class="d2">
        <div class="p1">
          <h1>0</h1>
          <p>今日已支付订单</p>
        </div>
        <div class="p1">
          <h1>0</h1>
          <p>今日代发货</p>
        </div>
      </div>
      <div class="d2">
        <div class="p1">
          <h1>0</h1>
          <p>今日已发货订单</p>
        </div>
        <div class="p2">
          <h1>0</h1>
          <p>今日异常</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  // computed: {
  //   tags() {
  //     return this.$store.getters.tags
  //   }
  // },
  // methods: {
  //   handleClose(index) {
  //     this.$store.commit('Tags/removeTags', index)
  //   }
  // }
};
</script>
<style scoped lang="scss">
.d1 {
  width: 100%;
  height: 400px;
  // background-color: aqua;
  /* display: flex; */
  box-shadow: none;
}
.d2 {
  width: 100%;
  height: 200px;
  display: flex;
  padding: 20px;
  // background-color: blue;
  box-sizing: border-box;
}
.p2 {
  background-color: #dd4b39 !important;
  p {
    background-color: #c64333 !important;
  }
}
.p1,
.p2 {
  margin-left: 10px;
  width: 50%;
  height: 100%;
  background-color: #00c0ef;
  border-radius: 20px;
  p,
  h1 {
    margin-top: 30px;
    margin-left: 30px;
    color: #fff;
    font-size: 30px;
  }
  p {
    margin-top: 40px !important;
    margin-left: 0;
    height: 40px;
    margin-top: 30px;
    font-size: 22px;
    background-color: #3399ff;
  }
}
/* ul {
  list-style: none;
  display: flex;
}

ul li {
  border: 1px solid #ddd;
  font-size: 12px;
  padding: 5px 8px;
  margin-right: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close {
  transform: scale(0.8);
  margin-left: 3px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.close:hover {
  background-color: #cac6c6;
} */
</style>
