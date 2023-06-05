import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useScoreStore = defineStore('scores', () => {
  const moves = ref(0)
  const timeString = ref('00:00:00')
  function incrementMoves() {
    moves.value++
  }

  const setTime = (minutes: number, seconds: number, miliseconds: number) => {
    timeString.value = `${format(minutes)}:${format(seconds)}:${format(miliseconds)}`
  }

  return { moves, incrementMoves, timeString, setTime }
})

const format = (val: number) => `0${Math.floor(val)}`.slice(-2)