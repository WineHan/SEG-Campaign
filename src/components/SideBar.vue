<script setup>
import { useStore } from '@/stores/sideBar'
const store = useStore()
</script>

<template>
  <div>
    <div class="sidebar-block" :class="{ active: store.isActive }">
      <svg v-show="store.isActive" @click="store.clickMenu" xmlns="http://www.w3.org/2000/svg" width="30" height="30"
        fill="currentColor" class="bi bi-x close-icon" viewBox="0 0 16 16">
        <path
          d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
      </svg>
      <ul class="camp-list">
        <li class="camp-list-item">
          <a @click.prevent="store.closeMenu('craftsman-summer-camp-block')" class="btn camp-btn">
            綜合型營隊
          </a>
        </li>
        <li class="camp-list-item">
          <a @click.prevent="store.closeMenu('tribe-adventure')" class="btn camp-btn">
            部落冒險2.0
          </a>
        </li>
        <li class="camp-list-item">
          <a @click.prevent="store.closeMenu('wild-fun')" class="btn camp-btn">
            野 FUN 趣
          </a>
        </li>
        <li class="camp-list-item">
          <a @click.prevent="store.closeMenu('swim-camp')" class="btn camp-btn">
            游泳營
          </a>
        </li>
        <li class="camp-list-item">
          <a @click.prevent="store.closeMenu('table-tennis-camp')" class="btn camp-btn">
            桌球營
          </a>
        </li>
        <li class="camp-list-item">
          <a @click.prevent="store.closeMenu('badminton-camp')" class="btn camp-btn">
            羽球營
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-block {
  position: fixed;
  width: 100%;
  top: 0;
  right: -100%;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 999;
  border-radius: 10px;
  border: 1px solid #de8286;
  transition: right 0.25s ease-in-out;

  &.active {
    right: 0%;
  }

  .close-icon {
    cursor: pointer;
    position: absolute;
    top: 5%;
    right: 10%;
  }

  .camp-list {
    position: absolute;
    top: 15%;
    left: 15%;

    list-style: none;
    padding: 0;
    margin: 0;

    .camp-list-item {
      margin-bottom: 1rem;

      a {
        font-size: 20px;
        letter-spacing: 1.5px;
        color: #de8286;
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

@media (min-width: 768px) {
  .sidebar-block {
    &.active {
      right: -50%;
    }
  }
}
</style>
