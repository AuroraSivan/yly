<template>
  <el-container id="app">
    <!-- 顶部导航栏 -->
    <el-header>
      <AppHeader @scroll-to="scrollToSection" />
    </el-header>

    <!-- 主体内容 -->
    <el-main class="app-content">
      <section id="home" ref="home" class="page">
        <AppHome />
      </section>
      <section id="product1" ref="product1" class="page">
        <Product1 />
      </section>
      <section id="product2" ref="product2" class="page">
        <Product2 />
      </section>
      <section id="services" ref="services" class="page">
        <Services />
      </section>
      <section id="contact" ref="contact" class="page">
        <ContactUs />
      </section>
    </el-main>
  </el-container>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppHome from './views/AppHome.vue';
import Product1 from './views/Product1.vue';
import Product2 from './views/Product2.vue';
import Services from './views/Services.vue';
import ContactUs from './views/ContactUs.vue';

export default {
  components: { AppHeader, AppHome, Product1, Product2, Services, ContactUs },
  methods: {
    scrollToSection(section) {
      this.$refs[section].scrollIntoView({ behavior: 'smooth' });
    },
  },
  mounted() {
    // 刷新后滚动到首页
    this.$nextTick(() => {
      const homeSection = this.$refs.home;
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  },
  
};
</script>

<style>
@import '@/assets/css/style.css';
</style>