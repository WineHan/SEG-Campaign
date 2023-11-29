<script setup>
import { useStore } from '@/stores/sideBar'
const store = useStore()
</script>

<template>
  <header>
    <nav class="nav">
      <div class="container">
        <div class="title-block clearfix">
          <h1 class="title-text">嘻虎運動學院</h1>
          <svg
            v-show="!store.isActive"
            @click="store.clickMenu"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="img-fluid menu-icon"
            viewBox="0 0 16 16"
            alt="嘻虎運動學院"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped></style>
