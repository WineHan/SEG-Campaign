import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('sideBar', () => {
  const isActive = ref(false)

  function clickMenu() {
    this.isActive = !this.isActive
  }

  function closeMenu(elementId) {
    this.isActive = false

    let element = document.getElementById(elementId)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return { isActive, clickMenu, closeMenu }
})
