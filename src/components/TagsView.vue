<template>
  <div>
    <!-- tagsView -->
    <el-tag
      :key="tag"
      v-for="tag in dynamicTags"
      closable
      :disable-transitions="false"
      @close="handleClose(tag)"
      @click="add(index)"
    >
      {{ tag }}
    </el-tag>
  </div>
</template>

<script>
export default {
  name: "TagsView",
  data() {
    return {
      dynamicTags: [
        "首页",
        "机构管理",
        "用户管理",
        "角色管理",
        "权限管理",
        "分类管理",
        "品牌管理",
        "代码生成",
        "接口文档",
      ],
      inputVisible: false,
      inputValue: "",
    };
  },
  methods: {
    add(index,value){
      console.log(index);
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick((_) => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    },
  },
};
</script>

<style scoped></style>
