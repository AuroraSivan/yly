<template>
  <header class="rd-navbar">
    <div class="rd-navbar-main">
      <!-- Logo，点击时刷新页面 -->
      <span class="logo" @click="refreshPage">
        <img src="@/assets/picture/logo.png" alt="Logo" />
      </span>

      <!-- 导航菜单 -->
      <nav class="rd-navbar-nav">
        <div id="len1" class="rd-nav-item hoverable" @click="scrollTo('home')">首页</div>
        <div id="len2" class="rd-nav-item hoverable rd-navbar--dropdown"
        @mouseenter="showDropdown"
        @mouseleave="hideDropdown"
        >
        <span>产品</span>
        <ul v-if="isDropdownVisible" class="custom-dropdown">
          <li @click="scrollTo('product1')" class="custom-item">AML</li>
          <li @click="scrollTo('product2')" class="custom-item">区块链浏览器</li>
        </ul>
      </div>

        <div id="len3" class="rd-nav-item hoverable" @click="scrollTo('services')">服务</div>
        <div id="len4" class="rd-nav-item hoverable" @click="scrollTo('contact')">联系我们</div>
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
      // 添加延时隐藏逻辑，避免鼠标移动到下拉菜单时误触发
      setTimeout(() => {
        const dropdown = document.querySelector('.custom-dropdown');
        if (!dropdown || !dropdown.matches(':hover')) {
          this.isDropdownVisible = false;
        }
      }, 300); // 延迟 300 毫秒检查
    },
    scrollTo(section) {
      this.$emit('scroll-to', section); // 通知父组件执行滚动操作
      this.isDropdownVisible = false; // 点击后关闭下拉菜单
    },
    applyHoverEffect() {
      let i = 1;
      const stop = 4; // 元素数量
      setInterval(() => {
        if (i > stop) i = 1; // 循环动画
        document.querySelector(`#len${i}`).classList.toggle('bounce');
        i++;
      }, 500);
    },
  },
};
</script>

<style scoped>
@import '@/assets/css/AppHeader.css';
</style>