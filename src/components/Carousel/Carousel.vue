<template>
<!--  <swiper-->
<!--      class="swiper"-->
<!--      :style="{-->
<!--        '&#45;&#45;swiper-navigation-color': '#fff',-->
<!--      }"-->
<!--      :modules="modules"-->
<!--      :loop="true"-->
<!--      direction="horizontal"-->
<!--      :slides-per-view="3"-->
<!--      :space-between="30"-->
<!--      :navigation="true"-->
<!--      @swiper="setSwiperRef"-->
<!--      @resize="handleResize"-->
<!--  >-->
<!--    <swiper-slide class="slide" v-for="image in images" :key="image">-->
<!--      <img :src="image" alt="">-->
<!--    </swiper-slide>-->
<!--  </swiper>-->
  <a-carousel
      :autoPlay="true"
      animation-name="card"
      indicator-position="bottom"
      auto-play
      :style="{
      width: '100%',
      height: '360px',
    }"
  >
    <a-carousel-item v-for="image in images" :key="image" :style="{ width: '60%' }">
      <img
          :src="image"
          :style="{
          width: '100%',
        }"
      />
    </a-carousel-item>
  </a-carousel>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import SwiperClass, {Navigation, Thumbs} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import BoCaiMusic from "@/api/BoCaiMusic";

export default defineComponent({
  name: 'Carousel',
  components: {
    // Swiper,
    // SwiperSlide
  },
  setup() {
    const images= ref([
      'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
    ])
    let swiperRef: SwiperClass | null = null
    const setSwiperRef = (swiper: SwiperClass) => {
      swiperRef = swiper
    }

    const handleResize = () => {
      swiperRef?.changeDirection(window.innerWidth <= 960 ? 'vertical' : 'horizontal')
    }

    const init = async () => {
      const localImages = localStorage.getItem('local-images')
      if(!localImages) {
        const res = await BoCaiMusic.recommend_banner_get()
        images.value = res.data.map((r: {picUrl: string}) => r.picUrl)
        localStorage.setItem('local-images', JSON.stringify(images.value))
      } else {
        images.value = JSON.parse(localImages)
        const res = await BoCaiMusic.recommend_banner_get()
        images.value = res.data.map((r: {picUrl: string}) => r.picUrl)
      }
    }
    init()

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
