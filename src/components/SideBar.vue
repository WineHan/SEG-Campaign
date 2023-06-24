<script setup>
import { useStore } from '@/stores/sideBar'
const store = useStore()
</script>

<template>
  <div>
    <div class="sidebar-block" :class="{ active: store.isActive }">
      <svg
        v-show="store.isActive"
        @click="store.clickMenu"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        class="bi bi-x close-icon"
        viewBox="0 0 16 16"
      >
        <path
          d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
      <ul class="camp-list">
        <li class="camp-list-item">
          <a @click="store.closeMenu" href="#craftsman-summer-camp-block" class="btn camp-btn">
            職人體驗
          </a>
        </li>
        <li class="camp-list-item">
          <a @click="store.closeMenu" href="#table-tennis-summer-camp" class="btn camp-btn">桌球</a>
        </li>
        <li class="camp-list-item">
          <a @click="store.closeMenu" href="#badminton-summer-camp" class="btn camp-btn">羽球</a>
        </li>
        <li class="camp-list-item">
          <a @click="store.closeMenu" href="#swimming-summer-camp" class="btn camp-btn">游泳</a>
        </li>
        <li class="camp-list-item">
          <a @click="store.closeMenu" href="#inline-skating-summer-camp" class="btn camp-btn"
            >直排輪</a
          >
        </li>
        <li class="camp-list-item">
          <a
            @click="store.closeMenu"
            href="#tribal-adventure-summer-camp"
            class="btn camp-btn btn-new"
            >部落冒險</a
          >
        </li>
      </ul>
      <img
        class="sidebar-image"
        src="https://storage.googleapis.com/seg-storage/SEG-Campaign/billiards.png"
        alt=""
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-block {
  position: fixed;
  width: 100%;
  top: 0;
  right: -120%;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 999;
  border-radius: 50%;
  transform: rotate(15deg);
  border: 1px solid #1c95d4;
  transition: right 0.25s ease-in-out;

  &.active {
    right: -50%;
  }

  .close-icon {
    cursor: pointer;
    position: absolute;
    top: 25%;
    left: 15%;
    transform: rotate(-15deg);
  }

  .camp-list {
    position: absolute;
    top: 50%;
    left: 30%;
    transform: rotate(-15deg) translateY(-50%);
    list-style: none;
    padding: 0;
    margin: 0;

    .camp-list-item {
      margin-bottom: 1rem;

      a {
        font-size: 20px;
        letter-spacing: 1.5px;
        color: #21767b;
      }
    }
  }

  .sidebar-image {
    width: 150px;
    position: absolute;
    bottom: 5%;
    left: 30%;
    transform: rotate(-15deg);
  }
}
</style>
