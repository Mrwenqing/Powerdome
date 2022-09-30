<template>
  <el-container>
     <el-header>
       <app-header></app-header>
     </el-header>
    <el-container>
      <el-aside width="230px">
        <app-aside></app-aside>
      </el-aside>
      <el-main>
        <app-main></app-main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AppHeader from "./AppHeader/index.vue"
import AppAside from "./AppAside/index.vue"
import AppMain from "./AppMain/index.vue"
export default {
  name: "Layout",
  components : {
    AppHeader,
    AppAside,
    AppMain
  }
};
</script>

<style scoped>
.el-container{
  height : 100%;
}
.el-header {
  /* height : 50px; */
  /* line-height: 100px; */
  height: 60px!important;
  background-color: #167bd8;
  padding:0;
}

.el-aside {
  background-color:#ffffff;
  height : 100%;
}

.el-main {
  background-color: #fff;
  height : 100%;
}


</style>
