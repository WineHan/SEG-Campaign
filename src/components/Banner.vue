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
        :autoplay="{ delay: 20000 }"
      >
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
        <swiper-slide>
          <div>
            <img
              class="img-fluid banner-image"
              src="https://storage.googleapis.com/seg-storage/SEG-Campaign/S__4333619.jpg"
              alt=""
              srcset=""
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div>
            <img
              class="img-fluid banner-image"
              src="https://storage.googleapis.com/seg-storage/SEG-Campaign/S__4333618.jpg"
              alt=""
              srcset=""
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div>
            <img
              class="img-fluid banner-image"
              src="https://storage.googleapis.com/seg-storage/SEG-Campaign/2473C78C-0B8F-4A3A-B3B6-973E0EE0DBF3.jpg"
              alt=""
              srcset=""
            />
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <img
      class="d-none d-xl-block img-fluid banner-image"
      src="https://storage.googleapis.com/seg-storage/SEG-Campaign/2473C78C-0B8F-4A3A-B3B6-973E0EE0DBF3.jpg"
      alt=""
      srcset=""
    />
  </div>
</template>

<style lang="scss"></style>
