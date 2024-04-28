<script setup>
import { onMounted } from "vue";

import Splide from '@splidejs/splide';

onMounted(() => {
  new Splide('.splide', {
    type: 'fade',
    arrows: false,
    autoplay: true,
    pagination: false,
    interval: 2500,
  }).mount();
});

</script>

<template>
  <div class="summer-banner">
    <section class="splide">
      <div class="splide__track">
        <ul class="splide__list">
          <li class="splide__slide">
            <img class="img-fluid banner-image" src="../assets/images/0427/042701.jpg" alt="嘻虎運動學院" />
          </li>
          <li class="splide__slide">
            <img class="img-fluid banner-image" src="../assets/images/0427/042702.jpg" alt="嘻虎運動學院" />
          </li>
          <li class="splide__slide">
            <img class="img-fluid banner-image" src="../assets/images/0427/042703.jpg" alt="嘻虎運動學院" />
          </li>
          <li class="splide__slide">
            <img class="img-fluid banner-image" src="../assets/images/0427/042704.jpg" alt="嘻虎運動學院" />
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
