<template>
  <div class="service">
    <h1 class="title">安全服务</h1>
    <img src="@/assets/picture/shield1.png" alt="Product Image" class="centered-image" />

    <!-- 周围文字分布 -->
    <div class="service-items">
      <!-- 左上文字 -->
      <div class="service-item service-item-left-top">
        <h3>多链区块链浏览器</h3>
        <p>通过自建节点，获得最新多链的数据</p>
      </div>

      <!-- 左下文字 -->
      <div class="service-item service-item-left-bottom">
        <h3>国产区块链数据库</h3>
        <p>可以通过sql语句快速检索<br />最新的链上信息，唯一国产开放的多链数据库</p>
      </div>

      <!-- 右上文字 -->
      <div class="service-item service-item-right-top">
        <h3>链路追踪</h3>
        <p>一键追踪洗钱、黑客等犯罪分子链上踪迹；<br />有效帮助警方追回资金</p>
      </div>

      <!-- 右下文字 -->
      <div class="service-item service-item-right-bottom">
        <h3>全球数据监控看板</h3>
        <p>实时查看全球政府虚拟货币余额，<br />全球节点分布情况，全球大额资金流动情况等</p>
      </div>

      <!-- 下方文字 -->
      <div class="service-item service-item-bottom">
        <h3>虚拟货币资产处置</h3>
        <p>配合公安等处理虚拟货币资产，闭环解决虚拟货币全链路问题</p>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'AppServices'
};
</script>

<style scoped>
@import '@/assets/css/Services.css'
</style>
