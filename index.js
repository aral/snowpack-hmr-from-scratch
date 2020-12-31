import.meta.hot.accept()

import './index.css'
import confetti from 'canvas-confetti'

let timer = 0
let intervalId = null

export function setState(state) {
  timer = state.timer
}

function create() {
  confetti()

  intervalId = setInterval(() => {
    timer++
    document.getElementById('timer').innerText = timer
  }, 1000)

  message.innerText = 'Change this message and save the source file to see state-maintaining hot module replacement in action.'
}

function destroy () {
  clearInterval(intervalId)
}

create()
