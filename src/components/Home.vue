<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../assets/heima.png" alt="" />
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="logOut">退出</el-button>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollpase ? '64px' : '200px' ">
        <div class="toggle-button" @click="toggleCollpse">|||</div>
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409EFF"
          unique-opened
          :collapse = "isCollpase"
          :collapse-transition = "false"
          :router="true"
          default-active="/users"
        >
        <!-- 一级菜单 -->
          <el-submenu :index="item.id + '' " v-for="item in menulist" :key="item.id">
            <!-- 一级菜单模板区域 -->
            <template slot="title">
              <!-- 图标 -->
              <i :class="iconsObj[item.id]"></i>
              <!-- 文本 -->
              <span>{{item.authName}}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item :index=" '/' + subItem.path" 
                          v-for="subItem in item.children" 
                          :key="subItem.id"
                          @click="saveNavState('/' + subItem.path)"
            >
              <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-menu"></i>
              <!-- 文本 -->
              <span>{{subItem.authName}}</span>
            </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧内容 -->
      <el-main>
        <!-- <welcome></welcome> -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import {getHomeLeft} from '../network/home'
// import Welcome from '../components/Welcome'
export default {
  name: "Home",
  components: {
    // Welcome
  },
  data() {
    return {
      menulist: [],
      iconsObj: {
        '125': 'iconfont icon-user',
        '103': 'iconfont icon-tijikongjian',
        '101': 'iconfont icon-shangpin',
        '102': 'iconfont icon-danju',
        '145': 'iconfont icon-baobiao',
      },
      isCollpase: false,
      activePath: '',
    }
  }, 
  methods: {
    logOut() {
      window.sessionStorage.clear(), this.$router.push("/login");
    },
    getHomeLeft() {
      getHomeLeft().then((res) => {
        // console.log(res);
        if(res.meta.status !== 200) return this.$message.error(res.meta.status)
        this.menulist = res.data
      })
    },
    //点击按钮，菜单折叠与展开
    toggleCollpse() {
      this.isCollpase = !this.isCollpase
    },
    saveNavState(activePath) {
      window.sessionStorage.setItem('activepath',activePath)
      this.activePath = activePath
    }

  },
  created() {
    this.getHomeLeft(),
    
    this.activePath = window.sessionStorage.getItem('activepath')
  }
};
</script>
<style scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
}
.el-header div {
  display: flex;
  align-items: center;
}

.el-header div span {
  margin-left: 15px;
}
.el-aside{
  background-color: #333744;
  
}
.el-aside .el-menu {
    border-right: none;
  }
.el-main {
  background-color: #eaedf1;
}
.iconfont {
  margin-right: 10px;
}
.toggle-button {
  background-color: #4A5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  /* 三条竖线间距 */
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>