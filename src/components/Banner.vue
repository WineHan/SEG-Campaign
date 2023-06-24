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
              src="https://storage.googleapis.com/seg-storage/SEG-Campaign/main-banner-01.jpg"
              alt=""
              srcset=""
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div>
            <img
              class="img-fluid banner-image"
              src="https://storage.googleapis.com/seg-storage/SEG-Campaign/camp-01.jpg"
              alt=""
              srcset=""
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div>
            <img
              class="img-fluid banner-image"
              src="https://storage.googleapis.com/seg-storage/SEG-Campaign/camp-02.jpg"
              alt=""
              srcset=""
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div>
            <img
              class="img-fluid banner-image"
              src="https://storage.googleapis.com/seg-storage/SEG-Campaign/together.jpg"
              alt=""
              srcset=""
            />
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <img
      class="d-none d-xl-block img-fluid banner-image"
      src="https://storage.googleapis.com/seg-storage/SEG-Campaign/main-banner-01.jpg"
      alt="嘻虎運動學院"
      srcset=""
    />
  </div>
</template>

<style lang="scss"></style>
