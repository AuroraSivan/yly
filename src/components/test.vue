<template>
  <el-header class="rd-navbar">
    <div class="rd-navbar-main">
      <!-- Logo -->
      <span class="logo" @click="refreshPage">
        <img src="@/assets/logo.png" alt="Logo" />
      </span>

      <!-- 导航菜单 -->
      <el-menu
        mode="horizontal"
        :default-active="activeMenu"
        class="rd-navbar-nav"
        background-color="transparent"
        text-color="#ffffff"
        active-text-color="#81c5e4"
      >
        <el-menu-item index="home" @click="scrollTo('home')">首页</el-menu-item>

        <!-- 产品 -->
        <el-menu-item index="products">
          <el-dropdown placement="bottom" @command="scrollTo">
            <span class="el-dropdown-link">
              产品 <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  command="product1"
                  @mouseenter="hoverMenu('product1')"
                  @mouseleave="hoverMenu('')"
                  :style="getHoverStyle('product1')"
                >
                  AML
                </el-dropdown-item>
                <el-dropdown-item
                  command="product2"
                  @mouseenter="hoverMenu('product2')"
                  @mouseleave="hoverMenu('')"
                  :style="getHoverStyle('product2')"
                >
                  区块链浏览器
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-menu-item>

        <el-menu-item index="services" @click="scrollTo('services')">服务</el-menu-item>
        <el-menu-item index="contact" @click="scrollTo('contact')">联系我们</el-menu-item>
      </el-menu>
    </div>
  </el-header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      activeMenu: 'home', // 默认选中的菜单项
      hoveredMenu: '', // 当前鼠标悬停的菜单项
    };
  },
  methods: {
    refreshPage() {
      this.$router.push('/');
      this.activeMenu = 'home';
    },
    scrollTo(section) {
      this.activeMenu = section;
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        this.$emit('scroll-to', section); // 向父组件发送事件
      }
    },
    hoverMenu(menu) {
      this.hoveredMenu = menu;
    },
    getHoverStyle(menu) {
      if (this.hoveredMenu === menu) {
        return { color: '#81c5e4' }; // 悬停时变色
      }
      return { color: '#ffffff' }; // 默认白色
    },
  },
};
</script>

<style scoped>
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none; /* 移除无序列表默认符号 */
}

.rd-navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: #042845;
  color: #ffffff;
  z-index: 1000;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.rd-navbar-main {
  width: 100%;
  max-width: 1770px;
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  width: 50px;
  cursor: pointer;
}

.rd-navbar-nav {
  display: flex;
  gap: 40px;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: transparent;
}

.el-menu-item {
  position: relative;
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
  text-align: center;
  cursor: pointer;
}

.el-menu-item:hover {
  background-color: transparent; /* 防止菜单背景色变化 */
}

.el-dropdown-menu {
  background-color: #042845;
  border: 2px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  min-width: 200px;
  text-align: left;
}

.el-dropdown-menu .el-dropdown-item {
  font-size: 16px;
  font-weight: normal;
  text-align: center;
  color: #ffffff;
}

.el-dropdown-menu .el-dropdown-item:hover {
  background-color: transparent;
}

.el-icon--right {
  margin-left: 5px;
}
</style>

<!--走马灯-->

<template>
  <div class="block text-center">
    <span class="demonstration">
      Switch when indicator is hovered (default)
    </span>
    <el-carousel height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="block text-center" m="t-4">
    <span class="demonstration">Switch when indicator is clicked</span>
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
