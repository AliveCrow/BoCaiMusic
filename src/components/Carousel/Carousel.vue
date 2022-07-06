<template>
  <swiper
      class="swiper"
      :style="{
        '--swiper-navigation-color': '#fff',
      }"
      :modules="modules"
      direction="horizontal"
      :slides-per-view="3"
      :space-between="30"
      :navigation="true"
      @swiper="setSwiperRef"
      @resize="handleResize"
  >
    <swiper-slide class="slide" v-for="image in images" :key="image">
      <img :src="image" alt="">
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import SwiperClass, {Navigation, Thumbs} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'

export default defineComponent({
  name: 'Carousel',
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const images: string[] = [
      'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
      'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
      'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
      'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp',
    ];
    let swiperRef: SwiperClass | null = null
    const setSwiperRef = (swiper: SwiperClass) => {
      swiperRef = swiper
    }

    const handleResize = () => {
      swiperRef?.changeDirection(window.innerWidth <= 960 ? 'vertical' : 'horizontal')
    }

    return {
      modules: [Navigation],
      setSwiperRef,
      handleResize,
      images
    }
  }
})
</script>

<style lang="scss" scoped>

.swiper {

  &.swiper-vertical {
    ::v-deep(.swiper-button-next) {
      right: 20px;
      transform: rotate(90deg);
    }

    ::v-deep(.swiper-button-prev) {
      left: 20px;
      transform: rotate(90deg);
    }
  }
}

.slide {
  img {
    background: #FFFFFF;
    box-shadow: 0px 3px 7px 1px rgba(0,0,0,0.05000000074505806);
    opacity: 1;
    height: 360px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 110, 255, 0.5000) 100%);
  }
}
</style>
