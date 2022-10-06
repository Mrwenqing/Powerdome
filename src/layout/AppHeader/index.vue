<template>
  <div class="header-container">
    <div class="logo">Vue、Element UI权限管理系统开发实战</div>
    <div class="dropdown">
      <el-dropdown placement="top-start" @command="handleCommand">
        <span class="el-dropdown-link">
          <img
            alt="avatar"
            class="avatar"
            src="https://s1.ax1x.com/2022/10/05/xlXtSO.jpg"
          />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">个人中心</el-dropdown-item>
          <el-dropdown-item command="b">还原数据</el-dropdown-item>
          <el-dropdown-item command="c">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <div class="userinfo">
        <span>欢迎您,<i>Mr.zhang</i></span>
        <span>{{ date }} {{ week }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  name: "AppHeader",
  data() {
    return {
      date: null,
      week: null,
    };
  },
  created() {
    this.initTime();
  },
  methods: {
    initTime() {
      this.getTimeAndWeek();
      setInterval(() => {
        this.getTimeAndWeek();
      }, 1000);
    },
    getTimeAndWeek() {
      const week = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ];
      this.date = dayjs().format("YYYY.MM.DD HH:mm:ss");
      this.week = week[dayjs().day()];
    },
    handleCommand(command) {
      alert(command);
    },
  },
};
</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  .logo {
    color: #fff;
    font-size: 20px;
  }

  .dropdown {
    display: flex;
    align-items: center;
    justify-content: center;

    .avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }

    .userinfo {
      display: flex;
      flex-direction: column;
      margin: 0 10px;

      span {
        color: #fff;

        i {
          font-weight: 700;
          font-style: normal;
        }
      }
    }
  }
}
</style>
