const keys = {
  Backquote: {
    row: 1,
    width: "30px",
  },
  Digit1: {
    row: 1,
    width: "30px",
  },
  Digit2: {
    row: 1,
    width: "30px",
  },
  Digit3: {
    row: 1,
    width: "30px",
  },
  Digit4: {
    row: 1,
    width: "30px",
  },
  Digit5: {
    row: 1,
    width: "30px",
  },
  Digit6: {
    row: 1,
    width: "30px",
  },
  Digit7: {
    row: 1,
    width: "30px",
  },
  Digit8: {
    row: 1,
    width: "30px",
  },
  Digit9: {
    row: 1,
    width: "30px",
  },
  Digit0: {
    row: 1,
    width: "30px",
  },
  Minus: {
    row: 1,
    width: "30px",
  },
  Equal: {
    row: 1,
    width: "30px",
  },
  Backspace: {
    row: 1,
    width: "50px",
  },
  Tab: {
    row: 1,
    width: "40px",
  },
  KeyQ: {
    row: 1,
    width: "30px",
  },
  KeyW: {
    row: 1,
    width: "30px",
  },
  KeyE: {
    row: 1,
    width: "30px",
  },
  KeyR: {
    row: 1,
    width: "30px",
  },
  KeyT: {
    row: 1,
    width: "30px",
  },
  KeyY: {
    row: 1,
    width: "30px",
  },
  KeyU: {
    row: 1,
    width: "30px",
  },
  KeyI: {
    row: 1,
    width: "30px",
  },
  KeyO: {
    row: 1,
    width: "30px",
  },
  KeyP: {
    row: 1,
    width: "30px",
  },
  BracketLeft: {
    row: 1,
    width: "30px",
  },
  BracketRight: {
    row: 1,
    width: "30px",
  },
  Backslash: {
    row: 1,
    width: "30px",
  },
  CapsLock: {
    row: 2,
    width: "45px",
  },
  KeyA: {
    row: 2,
    width: "30px",
  },
  KeyS: {
    row: 2,
    width: "30px",
  },
  KeyD: {
    row: 2,
    width: "30px",
  },
  KeyF: {
    row: 2,
    width: "30px",
  },
  KeyG: {
    row: 2,
    width: "30px",
  },
  KeyH: {
    row: 2,
    width: "30px",
  },
  KeyJ: {
    row: 2,
    width: "30px",
  },
  KeyK: {
    row: 2,
    width: "30px",
  },
  KeyL: {
    row: 2,
    width: "30px",
  },
  Semicolon: {
    row: 2,
    width: "30px",
  },
  Quote: {
    row: 2,
    width: "30px",
  },
  Enter: {
    row: 2,
    width: "30px",
  },
  ShiftLeft: {
    row: 3,
    width: "30px",
  },
  KeyZ: {
    row: 3,
    width: "30px",
  },
  KeyX: {
    row: 3,
    width: "30px",
  },
  KeyC: {
    row: 3,
    width: "30px",
  },
  KeyV: {
    row: 3,
    width: "30px",
  },
  KeyB: {
    row: 3,
    width: "30px",
  },
  KeyN: {
    row: 3,
    width: "30px",
  },
  KeyM: {
    row: 3,
    width: "30px",
  },
  Comma: {
    row: 3,
    width: "30px",
  },
  Period: {
    row: 3,
    width: "30px",
  },
  Slash: {
    row: 3,
    width: "30px",
  },
  ShiftRight: {
    row: 3,
    width: "50px",
  },
};

const keysElement = document.querySelector('.keys')

Object.keys(keys).map(keyCode => {
  const keyElement = document.createElement("div")
  keyElement.style.backgroundColor = 'lightgrey'
  keyElement.style.height = '10px'
  keyElement.style.width = '20px'
  keyElement.style.marginRight = '5px'

  keyElement.setAttribute('data-key', keyCode)

  keysElement.appendChild(keyElement)
})

document.addEventListener("keydown", (e) => {
  e.preventDefault();
  console.clear();
  console.log(e);

  keys[e.code] = {
    ...keys[e.code],
    level: keys[e.code].level + 1
  };

  const interval = setInterval(() => {
    keys[e.code].level -= 1
  })

  const element = document.querySelector(`[data-key=${e.code}]`)
  
  // todo - maybe render again after this
  element.style.height = keys[e.code].level * 10

  if (keys[e.code].level <= 0) {
    clearInterval(interval)
  }
});
