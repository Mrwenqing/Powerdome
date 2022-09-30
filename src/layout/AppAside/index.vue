<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>系统管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">
            <i class="el-icon-document"></i>机构管理</el-menu-item
          >
          <el-menu-item index="1-2"
            ><i class="el-icon-s-custom"></i>用户管理</el-menu-item
          >
          <el-menu-item index="1-2"
            ><i class="el-icon-s-tools"></i>角色管理</el-menu-item
          >
          <el-menu-item index="1-2"
            ><i class="el-icon-document"></i>权限管理</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>商品管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">
            <i class="el-icon-document"></i>分类管理</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>系统工具</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">
            <i class="el-icon-document"></i>日志管理</el-menu-item
          >
        </el-menu-item-group>
          <el-menu-item index="1-1">
            <i class="el-icon-document"></i>接口文档</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "AppAside",
  computed: {
    activePath() {
      return this.$route.path;
    },
  },
};
</script>

<style scoped></style>
