<template>
  <div>
    <div class="d1">
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <el-button>查询</el-button>
      <el-button type="danger">重置</el-button>
      <el-button type="primary">新增</el-button>
    </div>
    <!-- <el-button v-if="btn" type="primary">新增</el-button> -->
    <el-table
      :data="tableData"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
      default-expand-all
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="parentName" label="部门名称"> </el-table-column>
      <el-table-column prop="deptCode" label="部门编码"> </el-table-column>
      <el-table-column prop="deptPhone" label="部门电话"> </el-table-column>
      <el-table-column prop="deptAddress" label="部门地址"> </el-table-column>
      <el-table-column prop="orderNum" label="序号"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            icon="el-icon-edit-outline"
            @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            icon="el-icon-close"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "DepartmentList",
  data() {
    return {
      input: "",
      tableData: [
        {
          id: "",
          parentName: "高原西北风科技有限公司",
          deptCode: "",
          deptPhone: "",
          deptAddress: "",
          orderNum: "",
          children: [
            {
              id: "",
              parentName: "人事管理部",
              deptCode: "RSGL",
              deptPhone: "",
              deptAddress: "",
              orderNum: "",
              children: [
                {
                  id: "",
                  parentName: "实习管理部",
                  deptCode: "",
                  deptPhone: "",
                  deptAddress: "",
                  orderNum: "",
                  children: [
                    {
                      id: "",
                      parentName: "213",
                      deptCode: "123",
                      deptPhone: "213",
                      deptAddress: "231",
                      orderNum: "123",
                    },
                    {
                      id: "",
                      parentName: "0",
                      deptCode: "01",
                      deptPhone: "2",
                      deptAddress: "4",
                      orderNum: "5",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    load(tree, treeNode, resolve) {
      setTimeout(() => {
        resolve([
          {
            id: 31,
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1519 弄",
          },
          {
            id: 32,
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1519 弄",
          },
        ]);
      }, 1000);
    },
  },
};
</script>

<style scoped></style>
