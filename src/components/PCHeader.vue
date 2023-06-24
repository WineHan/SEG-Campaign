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
          <img
            v-show="!store.isActive"
            @click="store.clickMenu"
            class="img-fluid menu-icon"
            src="https://storage.googleapis.com/seg-storage/SEG-Campaign/list.svg"
            alt="嘻虎運動學院"
          />
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped></style>
