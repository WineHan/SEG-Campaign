<script setup>
import { Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

const modules = [Navigation, Pagination, Autoplay]
</script>

<template>
  <div class="summer-banner">
    <div class="d-xl-none">
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="50"
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        :autoplay="{ delay: 2000 }"
        :loop="true"
      >
        <swiper-slide>
          <div>
            <img
              class="img-fluid banner-image"
              src="../assets/images/2023112902.jpg"
              alt=""
              srcset=""
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div>
            <img
              class="img-fluid banner-image"
              src="../assets/images/2023112914.jpg"
              alt=""
              srcset=""
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div>
            <img
              class="img-fluid banner-image"
              src="../assets/images/2023112915.jpg"
              alt=""
              srcset=""
            />
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <img
      class="d-none d-xl-block img-fluid banner-image"
      src="../assets/images/2023112901.jpg"
      alt="嘻虎運動學院"
      srcset=""
    />
  </div>
</template>

<style lang="scss">

.summer-banner {
  margin-top: 20px;
}

.banner-image {
  margin: 0 auto;
}
</style>
