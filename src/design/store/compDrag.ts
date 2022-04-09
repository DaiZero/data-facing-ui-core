import { defineStore } from 'pinia'

export const useDragCompStore = defineStore('dragCompStore', {
  state: () => ({
      dragComp: {
        x: 0,
        y: 0,
        info: {}
      }
  }),
  actions: {
    increment() {
    },
  },
})