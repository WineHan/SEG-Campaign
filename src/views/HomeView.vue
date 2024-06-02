<script setup>
import { onMounted } from 'vue'
import Splide from '@splidejs/splide'
import HomeBanner from '@/components/HomeBanner.vue'

onMounted(() => {
  const splide = new Splide('.splide.splide-camp', {
    type: 'loop',
    // autoplay: true,
  }).mount()

  splide.on('pagination:mounted', function (data) {
    // You can add your class to the UL element
    console.log(data)
    data.list.classList.add('splide__pagination--custom')

    // `items` contains all dot items
    data.items.forEach(function (item) {
      item.button.textContent = String(item.page + 1)
    })
  })
})

function scrollToElement(elementId) {
  let element = document.getElementById(elementId)

  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <HomeBanner />
  <main>
    <div class="container">
      <div class="camp-info-block">
        <h2 class="camp-info-title">♡ 2024 嘻虎 Fun 暑假</h2>
        <p class="camp-text">報告正式開跑！不 要 錯 過 了</p>
        <p class="camp-text">5/31前報名即贈送 ▸SEG限量運動水壺◂</p>
        <p class="camp-text">詳細活動辦法，請私訊粉專或官方 LINE 唷!</p>
      </div>
      <ul class="summer-camp-list">
        <li class="summer-camp-list-info">早鳥優惠開跑</li>
        <li class="summer-camp-list-info">十種不同主題營隊玩翻整個暑假</li>
        <li class="summer-camp-list-info">解放框架 回歸成為純真的孩子</li>
        <li class="summer-camp-list-info">將繽紛夏日 寫進記憶裡的迴廊</li>
        <li class="summer-camp-list-info">【多元的學習環境 陪孩子面對各種挑戰】</li>
      </ul>
      <div class="summer-camp-btn-group">
        <a @click.prevent="scrollToElement('craftsman-summer-camp-block')" class="btn camp-btn"
          >綜合型營隊</a
        >
        <a @click.prevent="scrollToElement('tribe-adventure')" class="btn camp-btn">部落冒險2.0</a>
        <a @click.prevent="scrollToElement('wild-fun')" class="btn camp-btn">野 FUN 趣</a>
        <a @click.prevent="scrollToElement('swim-camp')" class="btn camp-btn">游泳營</a>
        <a @click.prevent="scrollToElement('table-tennis-camp')" class="btn camp-btn">桌球營</a>
        <a @click.prevent="scrollToElement('badminton-camp')" class="btn camp-btn">羽球營</a>
      </div>
    </div>
    <div class="container">
      <div id="craftsman-summer-camp-block" class="camp-block">
        <div class="craftsman-summer-camp-block">
          <p class="camp-introduction">2024 綜合型營隊 - 梯次資訊</p>
          <div class="craftsman">
            <div class="craftsman-block">
              <img
                class="img-fluid"
                src="../assets/images/0427/camp-01.jpg"
                alt="2024 綜合型營隊"
              />
            </div>
            <div class="craftsman-block">
              <img
                class="img-fluid"
                src="../assets/images/20240602/camp-02.jpg"
                alt="2024 綜合型營隊報名資訊"
              />
            </div>
            <div class="registration-phase">
              <section class="splide splide-camp">
                <div class="splide__arrows">
                  <button class="splide__arrow splide__arrow--prev">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-right-circle"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                      />
                    </svg>
                  </button>
                  <button class="splide__arrow splide__arrow--next">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-right-circle"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                      />
                    </svg>
                  </button>
                </div>

                <div class="splide__track">
                  <ul class="splide__list">
                    <li class="splide__slide">
                      <img
                        class="img-fluid"
                        src="../assets/images/20240602/camp-03.jpg"
                        alt="嘻虎運動學院"
                      />
                    </li>
                    <li class="splide__slide">
                      <img
                        class="img-fluid"
                        src="../assets/images/20240602/camp-04.jpg"
                        alt="嘻虎運動學院"
                      />
                    </li>
                    <li class="splide__slide">
                      <img
                        class="img-fluid"
                        src="../assets/images/20240602/camp-05.jpg"
                        alt="嘻虎運動學院"
                      />
                    </li>
                    <li class="splide__slide">
                      <img
                        class="img-fluid"
                        src="../assets/images/20240602/camp-06.jpg"
                        alt="嘻虎運動學院"
                      />
                    </li>
                    <li class="splide__slide">
                      <img
                        class="img-fluid"
                        src="../assets/images/20240602/camp-12.jpg"
                        alt="嘻虎運動學院"
                      />
                    </li>
                    <li class="splide__slide">
                      <img
                        class="img-fluid"
                        src="../assets/images/20240602/camp-17.jpg"
                        alt="嘻虎運動學院"
                      />
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div class="camp-group">
        <div id="tribe-adventure" class="camp-block">
          <h3 class="camp-title">部落冒險2.0</h3>
          <p class="camp-sub-title">「深入部落，探索台灣傳統文化」</p>
          <img
            class="img-fluid"
            src="../assets/images/0427/camp-13.jpg"
            alt="深入部落，探索台灣傳統文化"
          />
        </div>

        <div id="tribe-adventure" class="camp-block">
          <h3 class="camp-title">部落冒險2.0</h3>
          <p class="camp-sub-title">「詳細行程歡迎私訊」</p>
          <img
            class="img-fluid"
            src="../assets/images/20240602/camp-07.jpg"
            alt="深入部落，探索台灣傳統文化"
          />
        </div>

        <div id="wild-fun" class="camp-block">
          <h3 class="camp-title">野小孩野FUN趣</h3>
          <p class="camp-sub-title">「生態教育，大自然的森林劇場」</p>
          <img
            class="img-fluid"
            src="../assets/images/0427/camp-13.jpg"
            alt="生態教育，大自然的森林劇場"
          />
        </div>

        <div id="wild-fun" class="camp-block">
          <h3 class="camp-title">野小孩野FUN趣</h3>
          <p class="camp-sub-title">「詳細行程歡迎私訊」</p>
          <img
            class="img-fluid"
            src="../assets/images/20240602/camp-08.jpg"
            alt="生態教育，大自然的森林劇場"
          />
        </div>

        <div id="swim-camp" class="camp-block">
          <h3 class="camp-title">游泳夏令營</h3>
          <p class="camp-sub-title">「專業教練團隊，品質有保障」</p>
          <img class="img-fluid" src="../assets/images/0427/camp-09.jpg" alt="游泳夏令營" />
        </div>

        <div id="swim-camp" class="camp-block">
          <h3 class="camp-title">報名資訊</h3>
          <p class="camp-sub-title">「專業教練團隊，品質有保障」</p>
          <img class="img-fluid" src="../assets/images/0427/camp-14.jpg" alt="游泳夏令營" />
        </div>

        <div id="table-tennis-camp" class="camp-block">
          <h3 class="camp-title">桌球夏令營</h3>
          <p class="camp-sub-title">「優質場地，專業訓練配套」</p>
          <img class="img-fluid" src="../assets/images/20240602/camp-10.jpg" alt="桌球夏令營" />
        </div>

        <div id="table-tennis-camp" class="camp-block">
          <h3 class="camp-title">報名資訊</h3>
          <p class="camp-sub-title">「優質場地，專業訓練配套」</p>
          <img class="img-fluid" src="../assets/images/20240602/camp-15.jpg" alt="桌球夏令營" />
        </div>

        <div id="badminton-camp" class="camp-block">
          <h3 class="camp-title">羽球夏令營</h3>
          <p class="camp-sub-title">「跳動羽毛球，點燃暑假的熱情！」</p>
          <img class="img-fluid" src="../assets/images/20240602/camp-11.jpg" alt="羽球夏令營" />
        </div>

        <div id="badminton-camp" class="camp-block">
          <h3 class="camp-title">報名資訊</h3>
          <p class="camp-sub-title">「跳動羽毛球，點燃暑假的熱情！」</p>
          <img class="img-fluid" src="../assets/images/20240602/camp-16.jpg" alt="羽球夏令營" />
        </div>
      </div>
    </div>
  </main>
</template>
