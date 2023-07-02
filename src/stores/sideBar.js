import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('sideBar', () => {
  const isActive = ref(false)

  function clickMenu() {
    this.isActive = !this.isActive
  }

  function closeMenu() {
    this.isActive = false
  }

  return { isActive, clickMenu, closeMenu }
})
