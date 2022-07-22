<template>
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
    <a-carousel-item v-for="image in images" :key="image" :style="{ width: '60%' }" @click="onImageClick(image)">
      <img
          :src="image.picUrl"
          :style="{
          width: '100%',
        }"
      />
    </a-carousel-item>
  </a-carousel>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import {Navigation} from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import BoCaiMusic from "@/api/BoCaiMusic";
import {image} from '@/types/common'
import {useRouter} from 'vue-router'
import {navigateTo, navigateToAlbum} from "@/hooks/common";

export default defineComponent({
  name: 'Carousel',
  setup() {
    const router = useRouter()
    const images = ref<image[] | []>([])
    const init = async () => {
      const localImages = localStorage.getItem('local-images')
      if (!localImages) {
        const res = await BoCaiMusic.recommend_banner_get()
        images.value = res.data.map((r: { picUrl: string }) => r.picUrl)
        localStorage.setItem('local-images', JSON.stringify(images.value))
      } else {
        images.value = JSON.parse(localImages)
        const res = await BoCaiMusic.recommend_banner_get()
        images.value = res.data
      }
    }
    init()

    const imageType = [
        '10002', // album
        '10014', // playlist
        '3001'
    ]
    const onImageClick = (item: image) => {
      if (item.type === '10002') {
        navigateToAlbum(router, {
          query: {
            id: item.id
          }
        })
      } else if (item.type === '10014') {
        navigateTo(router, {
          name: 'SongList',
          query: {
            id: item.id
          }
        })
      } else if (item.type === '3001') {
        window.open(item.id)
      }
    }

    return {
      modules: [Navigation],
      images,
      onImageClick
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
