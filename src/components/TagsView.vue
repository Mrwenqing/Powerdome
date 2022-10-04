<template>
  <div>
    <!-- tagsView -->
    <!-- <el-tag
      :key="tag"
      v-for="tag in dynamicTags"
      closable
      :disable-transitions="false"
      @close="handleClose(tag)"
      @click="add(index)"
    >
      {{ tag }}
    </el-tag> -->
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
export default {
  name: "TagsView",
  data() {
    return {
      activeName: 'first'
      // dynamicTags: [
      //   "首页",
      //   "机构管理",
      //   "用户管理",
      //   "角色管理",
      //   "权限管理",
      //   "分类管理",
      //   "品牌管理",
      //   "代码生成",
      //   "接口文档",
      // ],
      // inputVisible: false,
      // inputValue: "",
    };
  },
  methods: {
     handleClick(tab, event) {
        console.log(tab, event);
      }
  //   add(index,value){
  //     console.log(index);
  //   },
  //   handleClose(tag) {
  //     this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
  //   },

  //   showInput() {
  //     this.inputVisible = true;
  //     this.$nextTick((_) => {
  //       this.$refs.saveTagInput.$refs.input.focus();
  //     });
  //   },
  }
};
</script>

<style scoped></style>
