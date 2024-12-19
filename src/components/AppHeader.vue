<template>
  <header class="rd-navbar">
    <div class="rd-navbar-main">
      <!-- Logo，点击时刷新页面 -->
      <span class="logo" @click="refreshPage">
        <img src="@/assets/picture/logo.png" alt="Logo" />
      </span>

      <!-- 导航菜单 -->
      <nav class="rd-navbar-nav">
        <div class="rd-nav-item" @click="scrollTo('home')">首页</div>
        <div 
          class="rd-nav-item rd-navbar--dropdown" 
          @mouseenter="showDropdown" 
          @mouseleave="hideDropdown"
        >
          <span>产品</span>
          <ul v-if="isDropdownVisible" class="custom-dropdown">
            <li @click="scrollTo('product1')" class="custom-item">AML</li>
            <li @click="scrollTo('product2')" class="custom-item">区块链浏览器</li>
          </ul>
        </div>
        <div class="rd-nav-item" @click="scrollTo('services')">服务</div>
        <div class="rd-nav-item" @click="scrollTo('contact')">联系我们</div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isDropdownVisible: false,
    };
  },
  methods: {
    // 点击 logo 刷新页面
    refreshPage() {
      window.location.reload();
    },

    showDropdown() {
      this.isDropdownVisible = true;
    },
    hideDropdown() {
      this.isDropdownVisible = false;
    },
    scrollTo(section) {
      this.$emit('scroll-to', section); // 通知父组件执行滚动操作
    },
  },
};
</script>

<style scoped>
@import '@/assets/css/AppHeader.css';
</style>