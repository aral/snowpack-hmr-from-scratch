if (import.meta.hot) {
  import.meta.hot.accept(({module}) => {
    // Restore state on the new module.
    module.setState(import.meta.hot.data)
  })
  import.meta.hot.dispose(() => {
    // Save state before destroying the current module.
    import.meta.hot.data = { timer }
    destroy()
  })
}

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
