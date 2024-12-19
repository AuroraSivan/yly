<template>
    <div class="home">
        <el-carousel class="custom-carousel" height="100vh">
            <el-carousel-item v-for="(item, index) in carouselItems" :key="index">
                <div class="carousel-slide" :style="{ backgroundImage: 'url(' + item.image + ')' }">
                    <div class="carousel-content">
                        <h2 class="carousel-title">
                            让区块链生态更安全
                        </h2>
                        <p class="carousel-subtitle">
                            Securing Blockchain Ecosystem
                        </p>
                        <p class="carousel-description">
                            聚焦产业区块链安全和全球链上资金分析溯源及数据调查取证
                        </p>
                    </div>
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    name: 'AppHome',
    data() {
        return {
            carouselItems: [
                { image: require('@/assets/picture/earth.png') },
                { image: require('@/assets/picture/shine.png') },
                { image: require('@/assets/picture/11100.png') },
            ]
        };
    }
};
</script>

<style scoped>
@import '@/assets/css/AppHome.css';
</style>