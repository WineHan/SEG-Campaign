<script setup>
import Header from '@/components/PCHeader.vue'
import SideBar from '@/components/SideBar.vue'
</script>

<template>
  <Header />
  <SideBar />
  <RouterView />
  <a class="line-image-link" target="_blank" href="https://line.me/R/ti/p/%40860quxwz">
    <img
      class="img-fluid"
      src="./assets/images/line-icon.png"
      alt="嘻虎運動學院"
    />
  </a>

  <a class="fb-image-link" target="_blank" href="https://www.facebook.com/segkidsports">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="currentColor"
      class="bi bi-facebook"
      viewBox="0 0 16 16"
    >
      <path
        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
      />
    </svg>
  </a>
</template>

<style lang="scss">
@import '@/assets/style/main.scss';
</style>
