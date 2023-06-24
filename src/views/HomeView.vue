<script setup>
import Banner from '@/components/Banner.vue'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

const onSwiper = (swiper) => {}
const onSlideChange = () => {}

const modules = [Navigation, Pagination]
</script>

<template>
  <Banner />
  <main>
    <div class="container">
      <div class="camp-info-block">
        <p class="camp-text">
          今年夏天最狂歡，最多元！一場超乎想像的夏令營，融合無數精彩元素，點燃無限可能。<br />
          快與嘻虎一起燃燒運動熱情，發現才華，結交新朋友。這個夏天，讓我們一起燃燒自己！
        </p>
        <div class="d-flex justify-content-center align-items-center">
          <h2 class="sub-title">2023 地表最強 夏令營</h2>
          <img
            class="img-fluid skates-image"
            src="https://storage.googleapis.com/seg-storage/SEG-Campaign/inline-skates.png"
            alt="嘻虎運動學院"
          />
        </div>
      </div>
      <div class="summer-camp-all">
        <p class="summer-camp-btn-info">快點選有興趣的夏令營吧</p>
        <p class="summer-camp-btn-info">名額有限，早鳥另有優惠喔!</p>
        <div class="summer-camp-btn-group">
          <a href="#craftsman-summer-camp-block" class="btn camp-btn" aria-current="page"
            >職人體驗</a
          >
          <a href="#table-tennis-summer-camp" class="btn camp-btn">桌球</a>
          <a href="#badminton-summer-camp" class="btn camp-btn">羽球</a>
          <a href="#swimming-summer-camp" class="btn camp-btn">游泳</a>
          <a href="#inline-skating-summer-camp" class="btn camp-btn">直排輪</a>
          <a href="#tribal-adventure-summer-camp" class="btn camp-btn btn-new">部落冒險</a>
        </div>
      </div>
    </div>
    <div class="container">
      <div id="craftsman-summer-camp-block" class="camp-block">
        <div class="craftsman-summer-camp-block">
          <h3 class="camp-title">雙語運動 & 職人夏令營</h3>
          <p class="camp-introduction">
            職人夏令營，結合<strong>雙語運動</strong>和<strong>職人體驗</strong>元素的夏令營企劃。旨在為幼兒提供一個充滿活力、跨文化體驗和職場體驗的夏令營活動，並強調這些經驗對幼兒未來的成長與幫助。
          </p>
          <div class="craftsman">
            <div class="craftsman-block">
              <img
                class="img-fluid"
                src="https://storage.googleapis.com/seg-storage/SEG-Campaign/LINE_ALBUM_202368_230622_15.jpg?v=01"
                alt="職人夏令營"
              />
            </div>

            <div class="registration-phase">
              <div class="d-flex justify-content-center align-items-center mb-3">
                <p class="registration-phase-title mb-0 me-2">職人夏令營 - 梯次資訊</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search-heart"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z"
                  />
                  <path
                    d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
                  />
                </svg>
              </div>
              <swiper
                :modules="modules"
                :slides-per-view="1"
                :space-between="50"
                navigation
                :pagination="{ clickable: true }"
                :scrollbar="{ draggable: true }"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
              >
                <swiper-slide>
                  <div>
                    <img
                      class="img-fluid"
                      src="https://storage.googleapis.com/seg-storage/SEG-Campaign/LINE_ALBUM_202368_230622_13.jpg?v=04"
                      alt=""
                      srcset=""
                    />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div>
                    <img
                      class="img-fluid"
                      src="https://storage.googleapis.com/seg-storage/SEG-Campaign/LINE_ALBUM_202368_230622_12.jpg?v=03"
                      alt=""
                      srcset=""
                    />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div>
                    <img
                      class="img-fluid"
                      src="https://storage.googleapis.com/seg-storage/SEG-Campaign/LINE_ALBUM_202368_230622_11.jpg?v=02"
                      alt=""
                      srcset=""
                    />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div>
                    <img
                      class="img-fluid"
                      src="https://storage.googleapis.com/seg-storage/SEG-Campaign/LINE_ALBUM_202368_230622_10.jpg?v=01"
                      alt=""
                      srcset=""
                    />
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>

      <div class="camp-group">
        <div id="table-tennis-summer-camp" class="camp-block">
          <h3 class="camp-title">桌球夏令營</h3>
          <p class="camp-sub-title">「發掘無限潛能，挑戰球技極限」</p>
          <img
            class="img-fluid"
            src="https://storage.googleapis.com/seg-storage/SEG-Campaign/LINE_ALBUM_202368_230622_9.jpg?v=01"
            alt=""
            srcset=""
          />
        </div>

        <div id="badminton-summer-camp" class="camp-block">
          <h3 class="camp-title">羽球夏令營</h3>
          <p class="camp-sub-title">「挑戰極限，成就羽球之星」</p>
          <img
            class="img-fluid"
            src="https://storage.googleapis.com/seg-storage/SEG-Campaign/LINE_ALBUM_202368_230622_7.jpg?v=01"
            alt=""
            srcset=""
          />
        </div>

        <div id="swimming-summer-camp" class="camp-block">
          <h3 class="camp-title">游泳夏令營</h3>
          <p class="camp-sub-title">「游出自信，追逐泳池的夢想」</p>
          <img
            class="img-fluid"
            src="https://storage.googleapis.com/seg-storage/SEG-Campaign/LINE_ALBUM_202368_230622_3.jpg?v=01"
            alt=""
            srcset=""
          />
        </div>

        <div id="inline-skating-summer-camp" class="camp-block">
          <h3 class="camp-title">直排輪夏令營</h3>
          <p class="camp-sub-title">「翱翔於輪下，探索直排輪世界」</p>
          <img
            class="img-fluid"
            src="https://storage.googleapis.com/seg-storage/SEG-Campaign/LINE_ALBUM_202368_230622_5.jpg?v=01"
            alt=""
            srcset=""
          />
        </div>

        <div id="tribal-adventure-summer-camp" class="camp-block">
          <h3 class="camp-title">部落冒險</h3>
          <p class="camp-sub-title">「勇闖部落：啟發原始勇氣與智慧」</p>
          <img
            class="img-fluid"
            src="https://storage.googleapis.com/seg-storage/SEG-Campaign/LINE_ALBUM_202368_230622_1.jpg?v=01"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  </main>
</template>
