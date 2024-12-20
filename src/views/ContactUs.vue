<template>
  <div class="contact">
    <!-- 顶部标题 -->
    <h1 class="contact-title">联系我们</h1>

    <!-- 中间的内容区域 -->
    <div class="contact-content">
      <div class="contact-content-inner">
        <div class="contact-info">
        <p>📞 +86</p>
        <p>📧 com</p>
        <p>📍 上海市</p>
      </div>
      
      <!-- 右侧二维码 -->
      <div class="contact-qrcodes">
        <div>
          <img src="@/assets/picture/lock.jpg" alt="微信公众号" />
          <p class="">微信公众号</p>
        </div>
        <div>
          <img src="@/assets/picture/lock.jpg" alt="客服微信" />
          <p>客服微信</p>
        </div>
      </div>
      </div>
    </div>

    <!-- 底部版权区域 -->
    <footer class="contact-footer">
      <div class="footer-content">
        <p>xx作为区块链生态中的第三方独立数据公司，专注解决区块链数据开放和虚拟货币反洗钱问题，不为任何项目背书和站台</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'ContactUs'
};
</script>

<style scoped>
@import '@/assets/css/ContactUs.css';
</style>