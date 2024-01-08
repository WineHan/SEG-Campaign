<script setup>
import Banner from '@/components/Banner.vue'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

const onSwiper = () => {}
const onSlideChange = () => {}

const modules = [Navigation, Pagination]

function scrollToElement(elementId) {
  let element = document.getElementById(elementId)

  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <Banner />
  <main>
    <div class="container">
      <div class="camp-info-block">
        <p class="camp-text">嘻虎負責點燃學習的熱情，提供多元舞台，滿足孩子未知的好奇心</p>
        <p class="camp-text">發掘寶貝潛能，在每個領域裡持續探索未來</p>
        <div class="d-flex justify-content-center align-items-center">
          <h2 class="sub-title">2024 地表最強 冬令營</h2>
        </div>
      </div>
      <div class="summer-camp-all">
        <p class="summer-camp-btn-info">快點選有興趣的冬令營吧</p>
        <p class="summer-camp-btn-info">1/19 報名最後晚鳥價！！！<br />給孩子不一樣的寒假生活</p>
        <div class="summer-camp-btn-group">
          <a
            @click.prevent="scrollToElement('craftsman-summer-camp-block')"
            class="btn camp-btn btn-new"
            >2024-冬令營</a
          >
          <a @click.prevent="scrollToElement('table-tennis-summer-camp')" class="btn camp-btn"
            >桌球營</a
          >
          <a @click.prevent="scrollToElement('badminton-summer-camp')" class="btn camp-btn"
            >羽球營</a
          >
          <a @click.prevent="scrollToElement('inline-skating-summer-camp')" class="btn camp-btn"
            >兩天一夜露營</a
          >
        </div>
      </div>
    </div>
    <div class="container">
      <div id="craftsman-summer-camp-block" class="camp-block">
        <div class="craftsman-summer-camp-block">
          <p class="camp-introduction"></p>
          <div class="craftsman">
            <div class="craftsman-block">
              <img class="img-fluid" src="../assets/images/2024010801.jpg" alt="2024 冬令營" />
            </div>
            <div class="craftsman-block">
              <img class="img-fluid" src="../assets/images/2024010802.jpg" alt="2024 冬令營" />
            </div>
            <div class="craftsman-block">
              <img class="img-fluid" src="../assets/images/2023112904.jpg" alt="2024 冬令營" />
            </div>
            <div class="craftsman-block">
              <img class="img-fluid" src="../assets/images/2024010803.jpg" alt="2024 冬令營" />
            </div>
            <!-- <div class="registration-phase">
              <div class="d-flex justify-content-center align-items-center mb-3">
                <p class="registration-phase-title mb-0 me-2">2024 冬令營 - 梯次資訊</p>
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
                      src="../assets/images/2023112904.jpg"
                      alt="雙語運動x探索教育"
                    />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div>
                    <img
                      class="img-fluid"
                      src="../assets/images/2023112905.jpg"
                      alt="雙語運動x傳統文化"
                    />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div>
                    <img class="img-fluid" src="../assets/images/2023112906.jpg" alt="報名資訊" />
                  </div>
                </swiper-slide>
              </swiper>
            </div> -->
          </div>
        </div>
      </div>

      <div class="camp-group">
        <div id="table-tennis-summer-camp" class="camp-block">
          <h3 class="camp-title">桌球冬令營</h3>
          <p class="camp-sub-title">「發掘無限潛能，挑戰球技極限」</p>
          <img class="img-fluid" src="../assets/images/2024010804.jpg" alt="桌球冬令營" />
        </div>

        <div id="table-tennis-summer-camp" class="camp-block">
          <h3 class="camp-title">桌球冬令營-報名資訊</h3>
          <p class="camp-sub-title">「專業師資，豐富課程，啓蒙式教學，讓大家都能真正愛上桌球」</p>
          <img class="img-fluid" src="../assets/images/2024010805.jpg" alt="桌球冬令營" />
        </div>

        <div id="badminton-summer-camp" class="camp-block">
          <h3 class="camp-title">羽球冬令營</h3>
          <p class="camp-sub-title">「挑戰極限，成就羽球之星」</p>
          <img class="img-fluid" src="../assets/images/2024010806.jpg" alt="羽球冬令營" />
        </div>

        <div id="badminton-summer-camp" class="camp-block">
          <h3 class="camp-title">羽球冬令營-報名資訊</h3>
          <p class="camp-sub-title">「專業教練團隊，品質有保障」</p>
          <img class="img-fluid" src="../assets/images/2024010807.jpg" alt="羽球冬令營" />
        </div>

        <div id="inline-skating-summer-camp" class="camp-block">
          <h3 class="camp-title">兩天一夜露營</h3>
          <p class="camp-sub-title">「走出教室踏上嘻虎營隊之旅，看見教育的另一種可能」</p>
          <img class="img-fluid" src="../assets/images/2023112909.jpg" alt="雙語運動x傳統文化" />
        </div>

        <div id="tribal-adventure-summer-camp" class="camp-block">
          <h3 class="camp-title">露營-報名資訊</h3>
          <p class="camp-sub-title">「豐富多元課程，全方位發展」</p>
          <img class="img-fluid" src="../assets/images/2024010808.jpg" alt="雙語運動x探索教育" />
        </div>
      </div>
    </div>
  </main>
</template>
