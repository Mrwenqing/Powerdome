<template>
  <div>
    <router-link class="link" to="/">
      <span class="company">Vue、Element UI权限管理系统开发实战</span>
    </router-link>
    <el-dropdown @command="handleCommand">
     <div class="dp">
      <p class="p">你好，admin</p>
      <p class="p">{{time}}</p>
     </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-edit" command="changePass">修改密码</el-dropdown-item>
        <el-dropdown-item icon="el-icon-s-fold" command="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      time:null
    }
  },
  created(){

    this.time =new Date().toLocaleTimeString()
  },
  methods : {
    handleCommand(command){
      switch (command){
        case "changePass" :
          this.handleChangePass()
          break
        case "logout" :
          this.handleLogout()
          break
      }
    },
    handleChangePass(){
      alert("修改密码")
    },
    async handleLogout(){
      try{
        const response = await this.$store.dispatch("handleLogout")
        setTimeout(()=>{
          this.$router.push("/login")
        },100)
        this.$message.success("退出成功")
      }catch (e) {
        console.log(e.message)
      }

    }
  }
};
</script>

<style scoped>
.dp{
  font-size: 10px;
  
}
.p{
    margin-top: 10px;
  }
.link{
  text-decoration: none;
  color : #fff;
  margin-left: 30px;
  height:60px;
  line-height: 60px;
}

.logo{
  vertical-align: middle;
}
.company{
  margin-left: 5px;
  vertical-align: middle;
}

.el-dropdown{
  float : right;
  margin-right:30px;
  color : #fff;
}
</style>
